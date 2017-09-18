webpackJsonp([9],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(595)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(597),
  /* template */
  __webpack_require__(599),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-9829409a",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\pages\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9829409a", Component.options)
  } else {
    hotAPI.reload("data-v-9829409a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(596);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(257)("2b550449", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9829409a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9829409a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(256)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _guard = __webpack_require__(598);

var _guard2 = _interopRequireDefault(_guard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_guard2.default],
    data: function data() {
        return {
            loginForm: new AppForm(App.forms.loginForm),
            password_visible: false,
            rules: {
                password: {
                    required: function required(value) {
                        return !!value || 'Password is Required.';
                    },
                    min: function min(value) {
                        return value.length > 7 || 'Password is Below 8 Characters';
                    }
                },
                username: {
                    required: function required(value) {
                        return !!value || 'Email is Required.';
                    },
                    email: function email(value) {
                        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || 'Invalid e-mail.';
                    }
                }

            }
        };
    },
    computed: {
        icon: function icon() {
            return this.password_visible ? 'visibility' : 'visibility_off';
        }
    },
    mounted: function mounted() {
        var self = this;
        self.$modal.show('login-modal');
    },

    methods: {
        closeLogin: function closeLogin() {
            var self = this;
            self.$modal.hide('login-modal');
            self.$router.push({ name: 'home' });
        },
        login: function login() {
            var self = this;
            self.endpoints.web = 'api/auth/login';
            App.sendForm('post', self.guardedLocation(), self.loginForm).then(function (_ref) {
                var user = _ref.user;

                self.$state.set('user', user);
                self.$router.push({ name: 'dashboard' });
            }).catch(function (_ref2) {
                var errors = _ref2.errors,
                    message = _ref2.message;

                self.loginForm.errors.set(errors);
                self.$popup({ message: message, backgroundColor: '#e57373', delay: 5, color: '#4db6ac' });
            });
        }
    },
    watch: {
        name: function name() {
            this.errorMessages = [];
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    props: ['guard'],
    data: function data() {
        return {
            endpoints: {
                web: null,
                team: null,
                customer: null,
                api: null
            }
        };
    },

    methods: {
        guardAllowed: function guardAllowed() {
            var guards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['web', 'team', 'customer', 'api'];
            var callback = arguments[1];

            var self = this;
            if (_.includes(guards, self.guard)) {
                callback;
                self.resetEndpoints();
            } else {
                self.$popup({ message: 'You Are Not Authorized To Do That Action!' });
            }
        },
        resetEndpoints: function resetEndpoints() {
            this.endpoints = {
                web: null,
                team: null,
                customer: null,
                api: null
            };
        },
        guardedLocation: function guardedLocation() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.endpoints,
                web = _ref.web,
                team = _ref.team,
                customer = _ref.customer,
                api = _ref.api;

            var self = this;
            if (self.guard === 'customer') {
                return customer;
            } else if (self.guard === 'team') {
                return team;
            } else if (self.guard === 'api') {
                return api;
            } else {
                return web;
            }
        }
    }
};

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "login-modal",
      "adaptive": true,
      "width": "100%",
      "height": "100%",
      "clickToClose": false
    }
  }, [_c('v-card', {
    attrs: {
      "flat": true
    }
  }, [_c('v-toolbar', {
    staticClass: "accent"
  }, [_c('v-btn', {
    attrs: {
      "icon": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.closeLogin()
      }
    }
  }, [_c('v-icon', {
    staticClass: "error--text"
  }, [_vm._v("close")])], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-toolbar-title', {
    staticClass: "text-xs-center primary--text"
  }, [_vm._v("Already Have An Account?")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-toolbar-items', [_c('v-btn', {
    staticClass: "primary--text",
    attrs: {
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_vm._v("Sign In"), _c('v-icon', {
    attrs: {
      "right": "",
      "dark": ""
    }
  }, [_vm._v("fa-sign-in")])], 1)], 1)], 1), _vm._v(" "), _c('v-card-text', [_c('v-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.login()
      }
    }
  }, [_c('v-layout', {
    attrs: {
      "row": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs4": ""
    }
  }, [_c('v-subheader', [_vm._v("Username")])], 1), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs8": ""
    }
  }, [_c('v-text-field', {
    attrs: {
      "name": "username",
      "label": "Type Your Account Email",
      "rules": [_vm.rules.username.required, _vm.rules.username.email],
      "counter": "60"
    },
    model: {
      value: (_vm.loginForm.username),
      callback: function($$v) {
        _vm.loginForm.username = $$v
      },
      expression: "loginForm.username"
    }
  })], 1)], 1), _vm._v(" "), _c('v-layout', {
    attrs: {
      "row": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs4": ""
    }
  }, [_c('v-subheader', [_vm._v("Password")])], 1), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs8": ""
    }
  }, [_c('v-text-field', {
    attrs: {
      "name": "password",
      "label": "Enter your password",
      "hint": "At least 8 characters",
      "min": "8",
      "append-icon": _vm.icon,
      "append-icon-cb": function () { return (_vm.password_visible = !_vm.password_visible); },
      "type": _vm.password_visible ? 'password' : 'text',
      "rules": [_vm.rules.password.required, _vm.rules.password.min],
      "counter": "60"
    },
    model: {
      value: (_vm.loginForm.password),
      callback: function($$v) {
        _vm.loginForm.password = $$v
      },
      expression: "loginForm.password"
    }
  })], 1)], 1), _vm._v(" "), _c('v-btn', {
    attrs: {
      "type": "submit",
      "block": "",
      "secondary": ""
    }
  }, [_vm._v("Sign In")])], 1)])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9829409a", module.exports)
  }
}

/***/ })

});