var Vue = require('vue')
var VueRouter = require('../src')

Vue.use(VueRouter)

var router = new VueRouter({
  pushstate: true,
  root: '/hello'
})

var root = new Vue({
  el: '#app',
  components: {
    inbox: {
      template: '<div><h2>inbox!</h2><router-view></router-view>',
      replace: true,
      components: {
        message: {
          template: '<div>message! {{route.params.messageId}}</div>',
          replace: true
        },
        archive: {
          template: '<div>archive lol</div>',
          replace: true
        }
      }
    },
    user: {
      template: '<h2>User yo</h2><router-view></router-view>',
      components: {
        'user-profile': {
          template: 'user profile {{route.params.userId}} {{route.params.something}}'
        },
        'user-posts': {
          template: 'user posts'
        },
        'user-settings': {
          template: 'user settings'
        }
      }
    },
    about: {
      template: '<h1>OHHHH ABOUT</h1>',
      replace: true
    },
    'not-found': {
      template: 'FOUR OH FOUR'
    }
  }
})

router.map({
  '/inbox': {
    name: 'inbox',
    component: 'inbox',
    subRoutes: {
      '/message/:messageId': {
        name: 'message',
        component: 'message',
        alwaysRefresh: true
      },
      '/archived': {
        name: 'archive',
        component: 'archive'
      }
    }
  },
  '/user/:userId': {
    name: 'user',
    component: 'user',
    subRoutes: {
      'profile/:something': {
        component: 'user-profile'
      },
      'posts': {
        component: 'user-posts'
      },
      'settings': {
        component: 'user-settings'
      }
    }
  },
  '/about': {
    component: 'about'
  },
  '*': {
    component: 'not-found'
  }
})

router.redirect({
  '/info': '/about'
})

router.start(root)