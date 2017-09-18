webpackJsonp([8],{

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(606)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(608),
  /* template */
  __webpack_require__(614),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-27d7ed0e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\Cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27d7ed0e", Component.options)
  } else {
    hotAPI.reload("data-v-27d7ed0e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(257)("2b671ec0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27d7ed0e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cart.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27d7ed0e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Cart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(256)(undefined);
// imports


// module
exports.push([module.i, "\n.shopping-cart[data-v-27d7ed0e] {\n  position: absolute;\n  right: 15px;\n  top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Basket = __webpack_require__(609);

var _Basket2 = _interopRequireDefault(_Basket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            orders: [[]]
            // item name
            // item no.
            // item price
            // item qty
            // shipping fix rate
        };
    },
    computed: {
        isDark: function isDark() {
            return this.dark === true;
        }
    },
    components: {
        Basket: _Basket2.default
    },
    // when add to cart event is triggered
    // add one item on the cart
    // toggle on the dialog to true
    // update the cart qty , price, 
    mounted: function mounted() {
        var self = this;
        self.$modal.show('cart-modal');
        Bus.$on('close-cart', function () {
            self.closeCart();
        });
    },

    methods: {
        exceedOrderLimit: function exceedOrderLimit() {
            return this.orders.length > 999;
        },
        closeCart: function closeCart() {
            var self = this;
            return self.$nextTick(function () {
                return self.$router.push({ name: 'home' });
            });
        },
        checkout: function checkout() {
            var self = this;
            return self.$nextTick(function () {
                return self.$router.push({ name: 'checkout' });
            });
            // show shipping details page , for non auth users.
            // verify in the server for express checkout the email.
            // if registered email then 
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

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(610)
}
var Component = __webpack_require__(96)(
  /* script */
  __webpack_require__(612),
  /* template */
  __webpack_require__(613),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "C:\\Users\\uriah\\sites\\www\\shopify\\resources\\assets\\js\\components\\Basket.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Basket.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2a22998", Component.options)
  } else {
    hotAPI.reload("data-v-f2a22998", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(611);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(257)("4145d312", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2a22998\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Basket.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2a22998\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Basket.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(256)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 612:
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

exports.default = {
    props: ['orders'],
    data: function data() {
        return {
            search: '',
            selected: [],
            headers: [{ text: 'Product ID', value: 'id', align: 'left', sortable: true }, { text: 'Product Image', value: 'image', align: 'left' }, { text: 'Product Name', value: 'name', align: 'left' }, { text: 'Product Price', value: 'price', align: 'left' }, { text: 'Quantity', value: 'qty', align: 'left' }, { text: 'Total', value: 'total', align: 'left' }],
            items: [{
                value: false,
                id: 1,
                image: 'https://vuetifyjs.com/static/doc-images/john.jpg',
                name: 'Frozen Yogurt',
                price: 1,
                qty: 6.0,
                total: 6
            }, {
                value: false,
                id: 2,
                image: 'https://vuetifyjs.com/static/doc-images/john.jpg',
                name: 'Yogurt',
                price: 2,
                qty: 7.0,
                total: 14
            }, {
                value: false,
                id: 3,
                image: 'https://vuetifyjs.com/static/doc-images/john.jpg',
                name: 'Beans',
                price: 8,
                qty: 6.0,
                total: 48
            }]
        };
    },

    computed: {
        avatarSize: function avatarSize() {
            return this.size + 'px';
        },
        isDark: function isDark() {
            return this.dark === true;
        }
    },
    mounted: function mounted() {
        var self = this;
        Bus.$on('add-order', function (order) {
            self.orders.push(order);
        });
        Bus.$on('remove-order', function (order) {
            var index = _.findIndex(self.orders, { id: order.id });
            self.$delete(self.orders, index);
        });
        Bus.$on('update-order', function (order) {
            var index = _.findIndex(self.orders, { id: order.id });
            self.$set(self.orders, index, order);
        });
    },

    methods: {
        closeCart: function closeCart() {
            Bus.$emit('close-cart');
        }
    }
};

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-data-table', {
    staticClass: "info--text",
    attrs: {
      "headers": _vm.headers,
      "items": _vm.items,
      "selected-key": "id",
      "select-all": "",
      "hide-actions": "",
      "no-data-text": "You Have No Orders Yet, Continue Shopping..."
    },
    scopedSlots: _vm._u([{
      key: "headerCell",
      fn: function(props) {
        return [_c('span', {
          directives: [{
            name: "tooltip",
            rawName: "v-tooltip:bottom",
            value: ({
              'html': props.header.text
            }),
            expression: "{ 'html': props.header.text }",
            arg: "bottom"
          }]
        }, [_vm._v("\n       " + _vm._s(props.header.text) + "\n     ")])]
      }
    }, {
      key: "items",
      fn: function(props) {
        return [_c('td', [_c('v-checkbox', {
          attrs: {
            "color": "primary",
            "hide-details": ""
          },
          model: {
            value: (props.selected),
            callback: function($$v) {
              props.selected = $$v
            },
            expression: "props.selected"
          }
        })], 1), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_vm._v(_vm._s(props.item.id))]), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_c('v-avatar', [_c('img', {
          attrs: {
            "src": props.item.image,
            "alt": props.item.name
          }
        })])], 1), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_vm._v(_vm._s(props.item.name))]), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_vm._v(_vm._s(props.item.price))]), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_vm._v(_vm._s(props.item.qty))]), _vm._v(" "), _c('td', {
          staticClass: "title text-xs-left info--text"
        }, [_vm._v(_vm._s(props.item.total))])]
      }
    }]),
    model: {
      value: (_vm.selected),
      callback: function($$v) {
        _vm.selected = $$v
      },
      expression: "selected"
    }
  }, [_c('template', {
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('td', {
    attrs: {
      "colspan": "100%"
    }
  }, [_c('strong', {
    staticClass: "right headline primary--text",
    staticStyle: {
      "padding-right": "200px"
    }
  }, [_vm._v("Total:")])])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f2a22998", module.exports)
  }
}

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "name": "cart-modal",
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
        _vm.closeCart()
      }
    }
  }, [_c('v-icon', {
    staticClass: "error--text"
  }, [_vm._v("close")])], 1), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-toolbar-title', {
    staticClass: "text-xs-center primary--text"
  }, [_vm._v("Shopping Cart")]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('v-toolbar-items', [(_vm.orders.length > 0) ? _c('v-btn', {
    staticClass: "success--text",
    attrs: {
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.checkout()
      }
    }
  }, [_vm._v("Checkout"), _c('v-icon', {
    attrs: {
      "right": "",
      "dark": ""
    }
  }, [_vm._v("payment")])], 1) : _c('v-btn', {
    staticClass: "warning--text",
    attrs: {
      "flat": ""
    },
    nativeOn: {
      "click": function($event) {
        _vm.closeCart()
      }
    }
  }, [_vm._v("Close")])], 1)], 1), _vm._v(" "), _c('basket', {
    attrs: {
      "orders": _vm.orders
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27d7ed0e", module.exports)
  }
}

/***/ })

});