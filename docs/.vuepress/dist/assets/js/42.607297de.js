(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{219:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._m(1),e("p",[t._v("The route object is immutable. Every successful navigation will result in a fresh route object.")]),e("p",[t._v("The route object can be found in multiple places:")]),t._m(2),t._m(3),e("ul",[t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),e("li",[t._m(10),e("p",[t._v("The name of the current route, if it has one. (See "),e("router-link",{attrs:{to:"../essentials/named-routes.html"}},[t._v("Named Routes")]),t._v(")")],1)]),e("li",[t._m(11),e("p",[t._v("The name of the route being redirected from, if there were one. (See "),e("router-link",{attrs:{to:"../essentials/redirect-and-alias.html"}},[t._v("Redirect and Alias")]),t._v(")")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"the-route-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-route-object","aria-hidden":"true"}},[this._v("#")]),this._v(" The Route Object")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A "),s("strong",[this._v("route object")]),this._v(" represents the state of the current active route. It contains parsed information of the current URL and the "),s("strong",[this._v("route records")]),this._v(" matched by the URL.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("Inside components as "),e("code",[t._v("this.$route")])])]),e("li",[e("p",[t._v("Inside "),e("code",[t._v("$route")]),t._v(" watcher callbacks")])]),e("li",[e("p",[t._v("As the return value of calling "),e("code",[t._v("router.match(location)")])])]),e("li",[e("p",[t._v("Inside navigation guards as the first two arguments:")]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token comment"}},[t._v("// `to` and `from` are both route objects")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),e("li",[e("p",[t._v("Inside the "),e("code",[t._v("scrollBehavior")]),t._v(" function as the first two arguments:")]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{attrs:{class:"token function"}},[t._v("scrollBehavior")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" savedPosition"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// `to` and `from` are both route objects")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"route-object-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-object-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Route Object Properties")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[this._v("$route.path")])]),s("ul",[s("li",[s("p",[this._v("type: "),s("code",[this._v("string")])]),s("p",[this._v("A string that equals the path of the current route, always resolved as an absolute path. e.g. "),s("code",[this._v('"/foo/bar"')]),this._v(".")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[this._v("$route.params")])]),s("ul",[s("li",[s("p",[this._v("type: "),s("code",[this._v("Object")])]),s("p",[this._v("An object that contains key/value pairs of dynamic segments and star segments. If there are no params the value will be an empty object.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[e("strong",[t._v("$route.query")])]),e("ul",[e("li",[e("p",[t._v("type: "),e("code",[t._v("Object")])]),e("p",[t._v("An object that contains key/value pairs of the query string. For example, for a path "),e("code",[t._v("/foo?user=1")]),t._v(", we get "),e("code",[t._v("$route.query.user == 1")]),t._v(". If there is no query the value will be an empty object.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[this._v("$route.hash")])]),s("ul",[s("li",[s("p",[this._v("type: "),s("code",[this._v("string")])]),s("p",[this._v("The hash of the current route (with the "),s("code",[this._v("#")]),this._v("), if it has one. If no hash is present the value will be an empty string.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("strong",[this._v("$route.fullPath")])]),s("ul",[s("li",[s("p",[this._v("type: "),s("code",[this._v("string")])]),s("p",[this._v("The full resolved URL including query and hash.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[e("strong",[t._v("$route.matched")])]),e("ul",[e("li",[t._v("type: "),e("code",[t._v("Array<RouteRecord>")])])]),e("p",[t._v("An Array containing "),e("strong",[t._v("route records")]),t._v(" for all nested path segments of the current route. Route records are the copies of the objects in the "),e("code",[t._v("routes")]),t._v(" configuration Array (and in "),e("code",[t._v("children")]),t._v(" Arrays):")]),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// the following object is a route record")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{attrs:{class:"token comment"}},[t._v("// this is also a route record")]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'bar'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Bar "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("When the URL is "),e("code",[t._v("/foo/bar")]),t._v(", "),e("code",[t._v("$route.matched")]),t._v(" will be an Array containing both objects (cloned), in parent to child order.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("$route.name")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("$route.redirectedFrom")])])}],!1,null,null,null);s.default=n.exports}}]);