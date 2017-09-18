webpackJsonp([21],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(592)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(594),
  /* template */
  __webpack_require__(595),
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

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(593);
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(256)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            loginForm: new AppForm(App.forms.loginForm),
            visible: false,
            errorMessages: [],
            formHasErrors: false
        };
    },
    computed: {},
    mounted: function mounted() {
        var self = this;
        self.$modal.show('login-modal');
    },

    methods: {
        icon: function icon() {
            return this.visible ? 'visibility' : 'visibility_off';
        },
        checkUsername: function checkUsername() {
            this.errorMessages = this.loginForm.username ? ['Hey! I\'m required'] : [];
            return true;
        },
        closeLogin: function closeLogin() {
            var self = this;
            self.$modal.hide('login-modal');
            self.$router.push({ name: 'home' });
        },
        login: function login() {
            var self = this;
            self.$router.push({ name: 'dashboard' });
        },
        resetForm: function resetForm() {
            var _this = this;

            this.errorMessages = [];
            this.formHasErrors = false;

            Object.keys(this.form).forEach(function (f) {
                _this.$refs[f].reset();
            });
        },
        submit: function submit() {
            var _this2 = this;

            this.formHasErrors = false;

            Object.values(this.form).forEach(function (f) {
                if (!f) return _this2.formHasErrors = true;
            });
        }
    },
    watch: {
        name: function name() {
            this.errorMessages = [];
        }
    }
});

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "login-modal",
      "adaptive": true,
      "width": "100%",
      "height": "100%"
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
    directives: [{
      name: "validate",
      rawName: "v-validate",
      value: ({
        rules: {
          required: true,
          email: true
        }
      }),
      expression: "{ rules: { required: true, email: true } }"
    }, {
      name: "show",
      rawName: "v-show",
      value: (_vm.loginForm.errors.has('username')),
      expression: "loginForm.errors.has('username')"
    }],
    ref: "username",
    attrs: {
      "name": "username",
      "label": "Type Your Username or Email",
      "id": "username",
      "error-messages": _vm.loginForm.errors.get('username') ? _vm.usernameError : ''
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
      "append-icon": _vm.icon(),
      "append-icon-cb": function () { return (_vm.visible = !_vm.visible); },
      "type": _vm.visible ? 'password' : 'text',
      "error-messages": _vm.errorMessages
    },
    model: {
      value: (_vm.loginForm.password),
      callback: function($$v) {
        _vm.loginForm.password = $$v
      },
      expression: "loginForm.password"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1)
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