var routerUtil = require('./util')

// install the <router-view> element directive
module.exports = function (Vue) {

  var _ = Vue.util
  var component = Vue.directive('_component')

  // v-view extends v-component
  var viewDef = _.extend({}, component)

  // with some overrides
  _.extend(viewDef, {

    _isRouterView: true,

    bind: function () {
      // react to route change
      this.currentRoute = null
      this.currentComponentId = null
      this.unwatch = this.vm.$watch(
        'route',
        _.bind(this.onRouteChange, this),
        // important as this makes the watcher execute
        // in the internal queue instead of the user queue,
        // so that the callback fires before the view is
        // affected by the route change.
        { user: false }
      )
      // force dynamic directive so v-component doesn't
      // attempt to build right now
      this._isDynamicLiteral = true
      // finally, init by delegating to v-component
      component.bind.call(this)
      // initial render
      if (this.vm.route) {
        this.onRouteChange(this.vm.route, {})
      }
    },

    /**
     * Route change handler. Check match, segment and before
     * hook to determine whether this view should be
     * rendered or switched.
     *
     * @param {Route} route
     * @param {Route} previousRoute
     */

    onRouteChange: function (route, previousRoute) {
      previousRoute._aborted = true
      var transition = {
        to: route,
        from: previousRoute,
        next: null,
        _aborted: false,
        _handler: null,
        _Component: null,
        abort: function () {
          // we need to mark the route object as aborted
          // so that other views receiving the same route
          // can skip their operations
          route._aborted = true
          route._router.replace(previousRoute.path || '/')
        }
      }
      this.canDeactivate(transition)
    },

    // A router view transition happens in the following
    // order, assuming we are transitioning from
    // component A => component B:
    // 
    // 1. check A.canDeactivate
    // 2. check B.canActivate
    // 3. call A.decactivate
    // 4. call B.activate
    // 
    // Each of these steps can be asynchronous, and any
    // step can potentially abort the transition.

    canDeactivate: function (transition) {
      if (transition.to._aborted) {
        return
      }
      var fromComponent = this.childVM
      var self = this
      var abort = transition.abort
      var next = transition.next = function () {
        self.canActivate(transition)
      }
      var hook = getRouteConfig(fromComponent, 'canDeactivate')
      if (!hook) {
        next()
      } else {
        var res = hook.call(fromComponent, transition)
        if (typeof res === 'boolean') {
          res ? next() : abort()
        } else if (routerUtil.isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort()
          }, abort)
        }
      }
    },

    canActivate: function (transition) {
      var to = transition.to
      if (to._aborted) {
        return
      }
      var self = this
      var abort = transition.abort
      var next = transition.next = function () {
        self._componentID = transition._componentID
        self.deactivate(transition)
      }

      // route not found
      if (!to._matched) {
        return next()
      }

      // determine handler
      var depth = getViewDepth(this.vm)
      var segment = to._matched[depth]
      if (!segment) {
        // check if the parent view has a default child view
        var parent = to._matched[depth - 1]
        if (parent && parent.handler.defaultChildHandler) {
          transition._componentID = parent.handler.defaultChildHandler.component
        } else {
          // no segment that matches this outlet
          return next()
        }
      } else {
        transition._componentID = segment.handler.component
      }

      // resolve async component.
      // compat <= 0.12.8
      var resolver = this.resolveCtor || this.resolveComponent
      resolver.call(
        this,
        transition._componentID,
        function onComponentResolved () {
          var Component =
            transition._Component =
            // compat <= 0.12.8
            self.Ctor || self.Component

          // if it's the same component, do nothing unless
          // the 'reload' route config is set to true.
          if (
            transition._componentID === self._componentID &&
            !getRouteConfig(Component, 'reload')
          ) {
            return
          }

          // determine if this component can be activated
          var hook = getRouteConfig(Component, 'canActivate')
          if (!hook) {
            next()
          } else {
            var res = hook.call(null, transition)
            if (typeof res === 'boolean') {
              res ? next() : abort()
            } else if (routerUtil.isPromise(res)) {
              res.then(function (ok) {
                ok ? next() : abort()
              }, abort)
            }
          }
        }
      )
    },

    deactivate: function (transition) {
      if (transition.to._aborted) {
        return
      }
      var fromComponent = this.childVM
      var self = this
      var abort = transition.abort
      var next = transition.next = function () {
        self.activate(transition)
      }
      var hook = getRouteConfig(fromComponent, 'deactivate')
      if (!hook) {
        next()
      } else {
        var res = hook.call(fromComponent, transition)
        if (routerUtil.isPromise(res)) {
          res.then(next, abort)
        }
      }
    },

    activate: function (transition) {
      if (transition.to._aborted) {
        return
      }
      var id = transition._componentID
      var Component = transition._Component
      if (!id || !Component) {
        return this.setComponent(null)
      }
      var hook = getRouteConfig(Component, 'activate')
      if (!hook) {
        this.setComponent(id)
      } else {
        this.setComponent(id, { loading: true }, function (component) {
          var next = transition.next = function (data) {
            if (transition.to._aborted) {
              return
            }
            for (var key in data) {
              component.$set(key, data[key])
            }
            component.loading = false
          }
          var res = hook.call(component, transition)
          if (routerUtil.isPromise(res)) {
            res.then(next, transition.abort)
          }
        })
      }
    },

    unbind: function () {
      this.unwatch()
      component.unbind.call(this)
    }

  })

  Vue.elementDirective('router-view', viewDef)

  //
  // Helpers
  //

  /**
   * Checked nested view depth of the current view.
   *
   * @param {Vue} vm
   * @return {Number}
   */

  function getViewDepth (vm) {
    var depth = 0
    while (vm.$parent) {
      if (vm.$options._isRouterView) {
        depth++
      }
      vm = vm.$parent
    }
    return depth
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig (component, name) {
    var options =
      component &&
      (component.$options || component.options)
    return options &&
      options.route &&
      options.route[name]
  }
}
