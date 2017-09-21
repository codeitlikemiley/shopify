webpackJsonp([3],{

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(642),
  /* template */
  __webpack_require__(643),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\pages\\Register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Register.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a06b849", Component.options)
  } else {
    hotAPI.reload("data-v-2a06b849", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Export the Any Component
 */
module.exports = {
    data: function data() {
        return {
            darkClass: App.theme.dark,
            primaryClass: App.theme.primary,
            accentClass: App.theme.accent,
            secondaryClass: App.theme.secondary,
            infoClass: App.theme.info,
            warningClass: App.theme.warning,
            errorClass: App.theme.error,
            successClass: App.theme.success,
            toggleBarStyle: App.site.toggleBarStyle,
            titleStyle: App.site.titleStyle,
            navbarStyle: App.site.navbarStyle,
            footerStyle: App.site.footerStyle,
            sidebarStyle: App.site.sidebarStyle,
            domain: App.site.domain,
            year: new Date().getFullYear(),
            trademark: App.site.trademark,
            logo: App.site.logo.url,
            logoStyle: {
                width: App.site.logo.width,
                height: App.site.logo.height
            },
            showLogo: App.site.logo.show,
            showIcon: App.site.icon.show,
            icon: App.site.icon.name ? App.site.icon.name : null,
            iconColor: App.site.icon.color,
            title: App.site.trademark
        };
    },
    computed: {
        isDark: function isDark() {
            return this.darkClass === true;
        }
    }

};

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(564),
  /* template */
  __webpack_require__(596),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\layouts\\Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d84fed0c", Component.options)
  } else {
    hotAPI.reload("data-v-d84fed0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppFooter = __webpack_require__(565);

var _AppFooter2 = _interopRequireDefault(_AppFooter);

var _AppNavBar = __webpack_require__(570);

var _AppNavBar2 = _interopRequireDefault(_AppNavBar);

var _LeftSideBar = __webpack_require__(575);

var _LeftSideBar2 = _interopRequireDefault(_LeftSideBar);

var _FabButton = __webpack_require__(589);

var _FabButton2 = _interopRequireDefault(_FabButton);

var _CookieLaw = __webpack_require__(592);

var _CookieLaw2 = _interopRequireDefault(_CookieLaw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mounted: function mounted() {
        console.log('Layout Loaded!');
    },

    components: {
        AppFooter: _AppFooter2.default,
        AppNavBar: _AppNavBar2.default,
        LeftSideBar: _LeftSideBar2.default,
        FabButton: _FabButton2.default,
        CookieLaw: _CookieLaw2.default
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

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(566)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(568),
  /* template */
  __webpack_require__(569),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\partials\\AppFooter.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppFooter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35b3a9da", Component.options)
  } else {
    hotAPI.reload("data-v-35b3a9da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(567);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(258)("ba6c7ac0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b3a9da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-35b3a9da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(257)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _theme = __webpack_require__(562);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_theme2.default],
    data: function data() {
        return {
            products: [{ header: 'Featured Products' }, { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }],
            foodcarts: [{ header: 'Featured Food Carts' }, { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }],
            contacts: [{ header: 'Contact Details' }, { avatar: '/img/organic.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/foodcart.jpg', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }, { divider: true, inset: true }, { avatar: '/img/reseller.png', title: 'Brunch this weekend?', subtitle: '<span class=\'info--text text--lighten-2\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?' }]
        };
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

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-container', {
    staticClass: "pa-0 ma-0 pt-5",
    attrs: {
      "fluid": ""
    }
  }, [_c('v-layout', {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": "",
      "sm12": "",
      "md4": "",
      "lg4": "",
      "xl4": ""
    }
  }, [_c('v-card-text', {
    staticClass: "pa-0"
  }, [_c('v-list', {
    staticClass: "text-xs-center",
    attrs: {
      "three-line": ""
    }
  }, [_vm._l((_vm.products), function(item, i) {
    return [(item.header) ? _c('v-subheader', {
      key: i,
      staticClass: "primary--text headline",
      domProps: {
        "textContent": _vm._s(item.header)
      }
    }) : (item.divider) ? _c('v-divider', {
      key: i,
      attrs: {
        "inset": item.inset
      }
    }) : _c('v-list-tile', {
      key: i,
      attrs: {
        "avatar": "",
        "download": ""
      }
    }, [_c('v-list-tile-avatar', [_c('img', {
      attrs: {
        "src": item.avatar
      }
    })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
      staticClass: "primary--text",
      domProps: {
        "innerHTML": _vm._s(item.title)
      }
    }), _vm._v(" "), _c('v-list-tile-sub-title', {
      domProps: {
        "innerHTML": _vm._s(item.subtitle)
      }
    })], 1)], 1)]
  })], 2)], 1)], 1), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs12": "",
      "sm12": "",
      "md4": "",
      "lg4": "",
      "xl4": ""
    }
  }, [_c('v-card-text', {
    staticClass: "pa-0"
  }, [_c('v-list', {
    staticClass: "text-xs-center",
    attrs: {
      "three-line": ""
    }
  }, [_vm._l((_vm.foodcarts), function(item, i) {
    return [(item.header) ? _c('v-subheader', {
      key: i,
      staticClass: "primary--text headline",
      domProps: {
        "textContent": _vm._s(item.header)
      }
    }) : (item.divider) ? _c('v-divider', {
      key: i,
      attrs: {
        "inset": item.inset
      }
    }) : _c('v-list-tile', {
      key: i,
      attrs: {
        "avatar": "",
        "download": ""
      }
    }, [_c('v-list-tile-avatar', [_c('img', {
      attrs: {
        "src": item.avatar
      }
    })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
      staticClass: "primary--text",
      domProps: {
        "innerHTML": _vm._s(item.title)
      }
    }), _vm._v(" "), _c('v-list-tile-sub-title', {
      domProps: {
        "innerHTML": _vm._s(item.subtitle)
      }
    })], 1)], 1)]
  })], 2)], 1)], 1), _vm._v(" "), _c('v-flex', {
    attrs: {
      "xs12": "",
      "sm12": "",
      "md4": "",
      "lg4": "",
      "xl4": ""
    }
  }, [_c('v-card-text', {
    staticClass: "pa-0"
  }, [_c('v-list', {
    staticClass: "text-xs-center",
    attrs: {
      "three-line": ""
    }
  }, [_vm._l((_vm.contacts), function(item, i) {
    return [(item.header) ? _c('v-subheader', {
      key: i,
      staticClass: "primary--text headline",
      domProps: {
        "textContent": _vm._s(item.header)
      }
    }) : (item.divider) ? _c('v-divider', {
      key: i,
      attrs: {
        "inset": item.inset
      }
    }) : _c('v-list-tile', {
      key: i,
      attrs: {
        "avatar": "",
        "download": ""
      }
    }, [_c('v-list-tile-avatar', [_c('img', {
      attrs: {
        "src": item.avatar
      }
    })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
      staticClass: "primary--text",
      domProps: {
        "innerHTML": _vm._s(item.title)
      }
    }), _vm._v(" "), _c('v-list-tile-sub-title', {
      domProps: {
        "innerHTML": _vm._s(item.subtitle)
      }
    })], 1)], 1)]
  })], 2)], 1)], 1)], 1), _vm._v(" "), _c('v-layout', {
    attrs: {
      "row": "",
      "wrap": ""
    }
  }, [_c('v-flex', {
    attrs: {
      "xs12": ""
    }
  }, [_c('v-footer', {
    style: (_vm.footerStyle)
  }, [_c('span', {
    staticClass: "text-xs-center"
  }, [_vm._v("© " + _vm._s(_vm.year) + " " + _vm._s(_vm.domain) + " ® | " + _vm._s(_vm.trademark) + "™")])])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-35b3a9da", module.exports)
  }
}

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(571)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(573),
  /* template */
  __webpack_require__(574),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\partials\\AppNavBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppNavBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-379e65af", Component.options)
  } else {
    hotAPI.reload("data-v-379e65af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(572);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(258)("6a05bd52", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-379e65af\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-379e65af\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AppNavBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(257)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _theme = __webpack_require__(562);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_theme2.default],
    methods: {
        toggleDrawer: function toggleDrawer() {
            Bus.$emit('toggleDrawer');
        },
        openCart: function openCart() {
            var self = this;
            self.$router.push({ name: 'cart' });
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

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-toolbar', {
    style: (_vm.navbarStyle),
    attrs: {
      "dark": !_vm.isDark,
      "fixed": ""
    }
  }, [_c('v-toolbar-side-icon', {
    style: (_vm.toggleBarStyle),
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleDrawer()
      }
    }
  }), _vm._v(" "), _c('v-toolbar-title', {
    staticClass: "text-xs-center"
  }, [(_vm.showIcon) ? _c('v-icon', {
    staticClass: "ml-3 hidden-md-and-down",
    style: ({
      color: _vm.iconColor
    })
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "hidden-md-and-down",
    style: (_vm.titleStyle)
  }, [_vm._v(_vm._s(_vm.title))])], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), (_vm.showLogo) ? _c('img', {
    style: ([_vm.logoStyle]),
    attrs: {
      "src": _vm.logo,
      "alt": "vuejs"
    }
  }) : _vm._e(), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-icon', {
    staticClass: "primary--text",
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": function($event) {
        _vm.openCart()
      }
    }
  }, [_vm._v("shopping_cart")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-379e65af", module.exports)
  }
}

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(576),
  /* template */
  __webpack_require__(588),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\partials\\LeftSideBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LeftSideBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16b6ec1a", Component.options)
  } else {
    hotAPI.reload("data-v-16b6ec1a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _VLink = __webpack_require__(577);

var _VLink2 = _interopRequireDefault(_VLink);

var _GroupLink = __webpack_require__(580);

var _GroupLink2 = _interopRequireDefault(_GroupLink);

var _MemberLink = __webpack_require__(585);

var _MemberLink2 = _interopRequireDefault(_MemberLink);

var _theme = __webpack_require__(562);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    mixins: [_theme2.default],
    data: function data() {
        return {
            drawer: false,
            links: [], // site navigation links
            members: [], // change with featured Products
            grouplinks: [] // product categories
        };
    },
    components: {
        VLink: _VLink2.default,
        GroupLink: _GroupLink2.default,
        MemberLink: _MemberLink2.default
    },
    mounted: function mounted() {
        var self = this;
        Bus.$on('toggleDrawer', function () {
            self.drawer = !self.drawer;
        });
        self.fetchProducts();
        self.fetchCategories();
        self.fetchNavLinks();
    },

    methods: {
        fetchProducts: function fetchProducts() {
            // On Click Will Show The Product Page
            this.members = [{ picture: 28, name: 'Asus' }, { picture: 38, name: 'Apple' }, { picture: 48, name: 'Xbox' }];
        },
        fetchCategories: function fetchCategories() {
            this.grouplinks = App.grouplinks;
        },
        fetchNavLinks: function fetchNavLinks() {
            this.links = App.menu;
        },
        isMenuActive: function isMenuActive(href) {
            var itemsegment = '';
            var segment = '';
            if (href !== undefined) {
                itemsegment = href.split('/')[1];
                segment = window.location.pathname.split('/')[1];
                return itemsegment === segment;
            }
        },
        loadview: function loadview(href, view) {
            if (!this.isMenuActive(href)) {
                this.$router.push({ path: '' + href });
                Bus.$emit('load-view', view);
            } else {
                Bus.$emit('load-view', view);
            }
        }
    }

};

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(578),
  /* template */
  __webpack_require__(579),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\VLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ba6ff92", Component.options)
  } else {
    hotAPI.reload("data-v-6ba6ff92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: {
        dark: {
            type: Boolean,
            default: function _default() {
                return App.theme.dark;
            }
        },
        href: {
            type: String
        },
        title: {
            type: String
        },
        icon: {
            type: String
        },
        iconColor: {
            type: String,
            default: function _default() {
                return this.dark ? '#fafafa' : '#78909C'; // white or blue-grey lighten-1
            }
        },
        linkColor: {
            type: String,
            default: function _default() {
                return this.dark ? '#fafafa' : '#78909C'; // white or blue-grey lighten-1
            }
        },
        activeColor: {
            type: String,
            default: function _default() {
                return '#4db6ac'; // teal lighten 2
            }
        }
    },
    computed: {
        isActive: function isActive() {
            return this.href === window.location.pathname;
        },
        isDark: function isDark() {
            return this.dark === true;
        }
    },
    methods: {
        navigate: function navigate(href) {
            this.$router.push({ path: '' + href });
        }
    }
};

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-list-tile', {
    style: ({
      cursor: _vm.href ? 'pointer' : ''
    }),
    nativeOn: {
      "click": function($event) {
        _vm.navigate(_vm.href)
      }
    }
  }, [_c('v-list-tile-action', [_c('v-icon', {
    style: ({
      color: _vm.isActive ? _vm.activeColor : _vm.iconColor
    })
  }, [_vm._v(_vm._s(_vm.icon))])], 1), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
    style: ({
      color: _vm.isActive ? _vm.activeColor : _vm.linkColor
    })
  }, [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6ba6ff92", module.exports)
  }
}

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(581)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(583),
  /* template */
  __webpack_require__(584),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-32abd0ca",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\GroupLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] GroupLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32abd0ca", Component.options)
  } else {
    hotAPI.reload("data-v-32abd0ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(582);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(258)("f5fc2cce", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32abd0ca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GroupLink.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32abd0ca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GroupLink.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(257)(undefined);
// imports


// module
exports.push([module.i, "\n.styleAvatar[data-v-32abd0ca] {\n  position: relative;\n  margin-left: -55px;\n}\n", ""]);

// exports


/***/ }),

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    props: ['items'],
    data: function data() {
        return {
            dark: App.theme.dark
        };
    },
    methods: {
        loadview: function loadview(item, component) {
            if (!this.isGroupActive(item)) {
                this.$router.push({ path: '' + item.href });
            }
            Bus.$emit('load-view', component);
        },
        hasAvatar: function hasAvatar(subItem) {
            return subItem.avatar !== undefined;
        },
        loadAvatar: function loadAvatar(avatar) {
            return avatar || 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460';
        },
        isGroupActive: function isGroupActive(item) {
            var itemsegment = '';
            var segment = '';
            if (item.href !== undefined) {
                itemsegment = item.href.split('/')[1];
                segment = window.location.pathname.split('/')[1];
                return itemsegment === segment;
            }
        },
        isActive: function isActive(subItem) {
            if (subItem.href !== undefined) {
                return subItem.href === window.location.pathname;
            }
        }
    },
    computed: {
        isDark: function isDark() {
            return this.dark === true;
        }
    }
};

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-list', _vm._l((_vm.items), function(item) {
    return _c('v-list-group', {
      key: item.title,
      attrs: {
        "value": _vm.isGroupActive(item)
      }
    }, [_c('v-list-tile', {
      attrs: {
        "slot": "item"
      },
      slot: "item"
    }, [(!item.avatar) ? _c('v-list-tile-action', [_c('v-icon', [_vm._v(_vm._s(item.action))])], 1) : _c('v-avatar', {
      attrs: {
        "size": "25px"
      }
    }, [_c('img', {
      attrs: {
        "src": item.avatar,
        "alt": ""
      }
    })]), _vm._v(" "), _c('v-list-tile-content', [_c('v-list-tile-title', {
      class: {
        'blue-grey--text': !_vm.isDark, 'text--lighten-1': !_vm.isDark
      }
    }, [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c('v-list-tile-action', [_c('v-icon', {
      class: {
        'primary--text': !_vm.isDark, 'white--text': _vm.isDark
      }
    }, [_vm._v("keyboard_arrow_down")])], 1)], 1), _vm._v(" "), _vm._l((item.items), function(subItem) {
      return _c('v-list-tile', {
        key: subItem.title,
        class: [{
          styleAvatar: _vm.hasAvatar(subItem)
        }],
        staticStyle: {
          "cursor": "pointer"
        },
        attrs: {
          "avatar": subItem.avatar ? 'avatar' : ''
        },
        nativeOn: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.loadview(item, subItem.component)
          }
        }
      }, [(subItem.avatar) ? _c('v-avatar', [_c('img', {
        attrs: {
          "src": _vm.loadAvatar(subItem.avatar),
          "alt": ""
        }
      })]) : _vm._e(), _vm._v(" "), _c('v-list-tile-content', [(!_vm.isDark) ? _c('v-list-tile-title', [_c('span', {
        class: {
          'teal--text': _vm.isActive(subItem), 'text--lighten-2': _vm.isActive(subItem), 'blue-grey--text': !_vm.isActive(subItem), 'text--lighten-1': !_vm.isActive(subItem)
        }
      }, [_vm._v(_vm._s(subItem.title))])]) : _c('v-list-tile-title', [_c('span', {
        class: {
          'teal--text': _vm.isActive(subItem), 'text--lighten-2': _vm.isActive(subItem), 'white--text': !_vm.isActive(subItem)
        }
      }, [_vm._v(_vm._s(subItem.title))])])], 1), _vm._v(" "), (subItem.avatar) ? _c('v-list-tile-action', [_c('v-icon', {
        class: {
          'teal--text': _vm.isActive(subItem), 'text--lighten-2': _vm.isActive(subItem)
        }
      }, [_vm._v(_vm._s(subItem.action))])], 1) : _c('v-list-tile-action', [_c('v-icon', {
        class: {
          'teal--text': _vm.isActive(subItem), 'text--lighten-2': _vm.isActive(subItem)
        }
      }, [_vm._v(_vm._s(subItem.action))])], 1)], 1)
    })], 2)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32abd0ca", module.exports)
  }
}

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(586),
  /* template */
  __webpack_require__(587),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\MemberLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MemberLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81befdbc", Component.options)
  } else {
    hotAPI.reload("data-v-81befdbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _theme = __webpack_require__(562);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_theme2.default],
    props: {
        dark: {
            type: Boolean,
            default: function _default() {
                return false;
            }
        },
        avatar: {
            type: String,
            required: true
        },
        name: {
            type: String
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

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-list-tile', {
    staticStyle: {
      "cursor": "pointer"
    },
    attrs: {
      "avatar": ""
    }
  }, [_c('v-list-tile-avatar', [_c('img', {
    attrs: {
      "src": _vm.avatar,
      "alt": ""
    }
  })]), _vm._v(" "), _c('v-list-tile-title', {
    class: {
      'blue-grey--text': !_vm.isDark, 'text--lighten-1': !_vm.isDark, 'white--text': _vm.isDark
    },
    domProps: {
      "textContent": _vm._s(_vm.name)
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81befdbc", module.exports)
  }
}

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-navigation-drawer', {
    staticClass: "pb-0",
    attrs: {
      "persistent": "",
      "hide-overlay": "",
      "height": "100%",
      "disable-route-watcher": "",
      "floating": ""
    },
    model: {
      value: (_vm.drawer),
      callback: function($$v) {
        _vm.drawer = $$v
      },
      expression: "drawer"
    }
  }, [_c('v-list', {
    attrs: {
      "dense": ""
    }
  }, [_vm._l((_vm.links), function(link) {
    return _c('v-link', {
      key: link.id,
      attrs: {
        "dark": _vm.darkClass,
        "title": link.title,
        "href": link.href,
        "icon": link.action
      }
    })
  }), _vm._v(" "), _c('v-link', {
    attrs: {
      "dark": _vm.darkClass,
      "title": "Tutorial",
      "href": '/courses',
      "icon": "school"
    }
  }), _vm._v(" "), _c('group-link', {
    attrs: {
      "dark": _vm.darkClass,
      "items": _vm.grouplinks
    }
  }), _vm._v(" "), _c('v-subheader', {
    class: {
      'blue-grey--text': !_vm.isDark, 'text--lighten-1': !_vm.isDark, 'white--text': _vm.isDark
    }
  }, [_vm._v("Featured Product")]), _vm._v(" "), _c('v-list', _vm._l((_vm.members), function(member) {
    return _c('member-link', {
      key: member.text,
      attrs: {
        "dark": _vm.darkClass,
        "name": member.name,
        "avatar": ("https://randomuser.me/api/portraits/men/" + (member.picture) + ".jpg")
      }
    })
  })), _vm._v(" "), _c('v-subheader', {
    class: {
      'blue-grey--text': !_vm.isDark, 'text--lighten-1': !_vm.isDark, 'white--text': _vm.isDark
    }
  }, [_vm._v("Top 3 Best Seller")]), _vm._v(" "), _c('v-list', _vm._l((_vm.members), function(member) {
    return _c('member-link', {
      key: member.text,
      attrs: {
        "name": member.name,
        "avatar": ("https://randomuser.me/api/portraits/men/" + (member.picture) + ".jpg")
      }
    })
  })), _vm._v(" "), _c('v-link', {
    attrs: {
      "dark": _vm.darkClass,
      "title": "Logout",
      "href": '/logout',
      "icon": "power_settings_new"
    }
  }), _vm._v(" "), _c('v-link', {
    attrs: {
      "dark": _vm.darkClass,
      "title": "Settings",
      "href": '/',
      "icon": "settings"
    }
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16b6ec1a", module.exports)
  }
}

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(590),
  /* template */
  __webpack_require__(591),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\FabButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FabButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9355cca", Component.options)
  } else {
    hotAPI.reload("data-v-b9355cca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    data: function data() {
        return {
            direction: 'top',
            fixed: true,
            fab: false,
            hover: false,
            top: false,
            right: true,
            bottom: true,
            left: false,
            absolute: false,
            transition: 'slide-y-reverse-transition',
            buttons: [{ name: 'home', href: '/', class: 'green', icon: 'fa-fa', requiresAuth: false }, { name: 'login', href: '/login', class: 'indigo', icon: 'fa-plug', requiresAuth: false }, { name: 'logout', href: '/logout', class: 'red', icon: 'fa-power-off', requiresAuth: true }, { name: 'scroll-up', href: null, class: 'amber', icon: 'fa-chevron-up', requiresAuth: false }],
            activeFab: {
                'class': 'teal lighten-1', icon: 'explore'
            }
        };
    },

    watch: {
        top: function top(val) {
            this.bottom = !val;
        },
        right: function right(val) {
            this.left = !val;
        },
        bottom: function bottom(val) {
            this.top = !val;
        },
        left: function left(val) {
            this.right = !val;
        }
    },
    methods: {
        navigate: function navigate(button) {
            var self = this;
            self.activeFab = { class: button.class, icon: button.icon };

            setTimeout(function () {
                self.activeFab = {
                    'class': 'teal lighten-1', icon: 'explore'
                };
                if (button.href !== null) {
                    self.$router.push({ path: '' + button.href });
                } else {
                    self.goTop();
                }
            }, 500);
        },
        goTop: function goTop() {
            window.scrollTo(0, 0);
        },
        isVisible: function isVisible(button) {
            if (button.requiresAuth === false && button.name === 'login') {
                return App.userId === null;
            } else if (button.requiresAuth === true && button.name === 'logout') {
                return App.userId !== null;
            } else if (button.requiresAuth === false) {
                return true;
            }
        }
    }
};

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-speed-dial', {
    attrs: {
      "top": _vm.top,
      "bottom": _vm.bottom,
      "right": _vm.right,
      "left": _vm.left,
      "direction": _vm.direction,
      "hover": _vm.hover,
      "transition": _vm.transition,
      "absolute": _vm.absolute,
      "fixed": _vm.fixed
    },
    model: {
      value: (_vm.fab),
      callback: function($$v) {
        _vm.fab = $$v
      },
      expression: "fab"
    }
  }, [_c('v-btn', {
    class: [_vm.activeFab.class],
    attrs: {
      "slot": "activator",
      "dark": "",
      "fab": "",
      "hover": ""
    },
    slot: "activator",
    model: {
      value: (_vm.fab),
      callback: function($$v) {
        _vm.fab = $$v
      },
      expression: "fab"
    }
  }, [_c('v-icon', [_vm._v(_vm._s(_vm.activeFab.icon))]), _vm._v(" "), _c('v-icon', [_vm._v("close")])], 1), _vm._v(" "), _vm._l((_vm.buttons), function(button) {
    return (_vm.isVisible(button)) ? _c('v-btn', {
      key: button.name,
      class: [button.class],
      attrs: {
        "fab": "",
        "dark": "",
        "small": ""
      },
      nativeOn: {
        "click": function($event) {
          _vm.navigate(button)
        }
      }
    }, [_c('v-icon', [_vm._v(_vm._s(button.icon))])], 1) : _vm._e()
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b9355cca", module.exports)
  }
}

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(593),
  /* template */
  __webpack_require__(595),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\partials\\CookieLaw.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CookieLaw.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c57a348", Component.options)
  } else {
    hotAPI.reload("data-v-1c57a348", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vueCookieLaw = __webpack_require__(594);

var _vueCookieLaw2 = _interopRequireDefault(_vueCookieLaw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { CookieLaw: _vueCookieLaw2.default }
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

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-cookie-law v1.3.0
 * (c) 2017 Jakub Juszczak <jakub@posteo.de>
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CookieLaw", [], factory);
	else if(typeof exports === 'object')
		exports["CookieLaw"] = factory();
	else
		root["CookieLaw"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1)
}
var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(8),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/jjuszczak/Projekte/Privat/vue-cookie-law/src/components/CookieLaw.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CookieLaw.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-863fd97e", Component.options)
  } else {
    hotAPI.reload("data-v-863fd97e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("91c05312", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-863fd97e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CookieLaw.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-863fd97e\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CookieLaw.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.Cookie {\n  position: fixed;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 9999;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.Cookie > * {\n    margin: 0.9375rem 0;\n    -ms-flex-item-align: center;\n        align-self: center;\n}\n@media screen and (min-width: 48rem) {\n.Cookie {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row;\n              flex-flow: row;\n}\n.Cookie > * {\n        margin: 0;\n}\n}\n.Cookie--top {\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.Cookie--bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.Cookie__buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.Cookie__buttons > * {\n    margin: 0.3125rem 0;\n}\n@media screen and (min-width: 48rem) {\n.Cookie__buttons {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n}\n.Cookie__buttons > * {\n        margin: 0 0.9375rem;\n}\n}\n.Cookie__button {\n  cursor: pointer;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.Cookie--base {\n  background: #F1F1F1;\n  color: #232323;\n  padding: 1.250em;\n}\n.Cookie--base .Cookie__button {\n    background: #97D058;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--base .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--base--rounded {\n  background: #F1F1F1;\n  color: #232323;\n  padding: 1.250em;\n}\n.Cookie--base--rounded .Cookie__button {\n    background: #97D058;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--base--rounded .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--blood-orange {\n  background: #424851;\n  color: #fff;\n  padding: 1.250em;\n}\n.Cookie--blood-orange .Cookie__button {\n    background: #E76A68;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--blood-orange .Cookie__button:hover {\n      background: #e03f3c;\n}\n.Cookie--blood-orange--rounded {\n  background: #424851;\n  color: #fff;\n  padding: 1.250em;\n}\n.Cookie--blood-orange--rounded .Cookie__button {\n    background: #E76A68;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--blood-orange--rounded .Cookie__button:hover {\n      background: #e03f3c;\n}\n.Cookie--dark-lime {\n  background: #424851;\n  color: #fff;\n  padding: 1.250em;\n}\n.Cookie--dark-lime .Cookie__button {\n    background: #97D058;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--dark-lime .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--dark-lime--rounded {\n  background: #424851;\n  color: #fff;\n  padding: 1.250em;\n}\n.Cookie--dark-lime--rounded .Cookie__button {\n    background: #97D058;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--dark-lime--rounded .Cookie__button:hover {\n      background: #7ebf36;\n}\n.Cookie--royal {\n  background: #FBC227;\n  color: #232323;\n  padding: 1.250em;\n}\n.Cookie--royal .Cookie__button {\n    background: #726CEA;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 0;\n}\n.Cookie--royal .Cookie__button:hover {\n      background: #473fe4;\n}\n.Cookie--royal--rounded {\n  background: #FBC227;\n  color: #232323;\n  padding: 1.250em;\n}\n.Cookie--royal--rounded .Cookie__button {\n    background: #726CEA;\n    padding: 0.625em 3.125em;\n    color: #fff;\n    border-radius: 20px;\n}\n.Cookie--royal--rounded .Cookie__button:hover {\n      background: #473fe4;\n}\n.slideFromTop-enter, .slideFromTop-leave-to {\n  -webkit-transform: translate(0px, -12.5em);\n          transform: translate(0px, -12.5em);\n}\n.slideFromTop-enter-to, .slideFromTop-leave {\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n}\n.slideFromBottom-enter, .slideFromBottom-leave-to {\n  -webkit-transform: translate(0px, 12.5em);\n          transform: translate(0px, 12.5em);\n}\n.slideFromBottom-enter-to, .slideFromBottom-leave {\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n}\n.slideFromBottom-enter-active,\n.slideFromBottom-leave-active,\n.slideFromTop-enter-active,\n.slideFromTop-leave-active {\n  -webkit-transition: -webkit-transform .4s ease-in;\n  transition: -webkit-transform .4s ease-in;\n  transition: transform .4s ease-in;\n  transition: transform .4s ease-in, -webkit-transform .4s ease-in;\n}\n.fade-enter-active, .fade-leave-active {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(5)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    buttonText: {
      type: String,
      default: 'Got it!'
    },
    buttonLink: {
      type: String
    },
    buttonLinkText: {
      type: String,
      default: 'More info'
    },
    message: {
      type: String,
      default: 'This website uses cookies to ensure you get the best experience on our website.'
    },
    theme: {
      type: String,
      default: 'base'
    },

    position: {
      type: String,
      default: 'bottom'
    },

    transitionName: {
      type: String,
      default: 'slideFromBottom'
    },
    buttonClass: {
      type: String,
      default: 'Cookie__button'
    }
  },
  data: function data() {
    return {
      isOpen: false
    };
  },

  computed: {
    containerPosition: function containerPosition() {
      return 'Cookie--' + this.position;
    },
    cookieTheme: function cookieTheme() {
      return 'Cookie--' + this.theme;
    }
  },
  created: function created() {
    if (!this.getVisited() === true) {
      this.isOpen = true;
    }
  },

  methods: {
    setVisited: function setVisited() {
      localStorage.setItem('cookie:accepted', true);
    },
    getVisited: function getVisited() {
      return localStorage.getItem('cookie:accepted');
    },
    accept: function accept() {
      this.setVisited();
      this.isOpen = false;
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "appear": "",
      "name": _vm.transitionName
    }
  }, [(_vm.isOpen) ? _c('div', {
    staticClass: "Cookie",
    class: [_vm.containerPosition, _vm.cookieTheme]
  }, [_c('div', {
    staticClass: "Cookie__content"
  }, [_vm._t("message", [_vm._v(_vm._s(_vm.message))])], 2), _vm._v(" "), _c('div', {
    staticClass: "Cookie__buttons"
  }, [(_vm.buttonLink) ? _c('a', {
    class: _vm.buttonClass,
    attrs: {
      "href": _vm.buttonLink
    }
  }, [_vm._v(_vm._s(_vm.buttonLinkText))]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.buttonClass,
    on: {
      "click": _vm.accept
    }
  }, [_vm._v(_vm._s(_vm.buttonText))])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-863fd97e", module.exports)
  }
}

/***/ })
/******/ ]);
});

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('cookie-law', {
    attrs: {
      "theme": "dark-lime",
      "buttonText": "Yes, I Understand This Site Uses Cookie."
    }
  }, [_c('div', {
    attrs: {
      "slot": "message"
    },
    slot: "message"
  }, [_c('p', [_vm._v("This website uses cookies to ensure you get the best experience on our website.\n                "), _c('span', [_vm._v("Read Our Cookie Terms and Usage For More Info:")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/cookie-law-agreement"
    }
  }, [_vm._v("Click here")])], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c57a348", module.exports)
  }
}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-app', {
    attrs: {
      "dark": _vm.App.theme.dark,
      "standalone": ""
    }
  }, [_c('left-side-bar'), _vm._v(" "), _c('app-nav-bar'), _vm._v(" "), _c('main', [_c('v-container', {
    staticClass: "pa-0 ma-0",
    attrs: {
      "transition": "slide-x-transition",
      "fluid": ""
    }
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c('fab-button'), _vm._v(" "), _c('cookie-law'), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d84fed0c", module.exports)
  }
}

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Main = __webpack_require__(563);

var _Main2 = _interopRequireDefault(_Main);

var _theme = __webpack_require__(562);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
    mixins: [_theme2.default],
    components: {
        MainLayout: _Main2.default
    }
};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('p', [_vm._v("Register page")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a06b849", module.exports)
  }
}

/***/ })

});