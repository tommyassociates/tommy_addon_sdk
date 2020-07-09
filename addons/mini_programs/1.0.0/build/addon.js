var addon=function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([,function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("f7-page",{attrs:{id:"example__index"}},[e("f7-navbar",[e("tommy-nav-menu"),n._v(" "),e("f7-nav-title",[n._v(n._s(n.$t("mini_programs.index.title")))]),n._v(" "),e("f7-nav-right")],1),n._v(" "),e("f7-page-content",[e("f7-row",{attrs:{"no-gap":""}},[e("f7-col",{attrs:{width:"100"}},[e("f7-block",{attrs:{strong:"",inset:""}},[e("p",[n._v(n._s(n.$t("mini_programs.index.introduction"))+" "),e("a",{attrs:{href:n.$t("mini_programs.index.visit_link.url"),target:"_blank"}},[n._v("\n            "+n._s(n.$t("mini_programs.index.visit_link.text"))+"\n          ")])])])],1)],1),n._v(" "),n.loaded?e("f7-row",{attrs:{"no-gap":""}},n._l(n.addons,(function(t,o){return e("f7-col",{key:"addon-"+o,attrs:{width:"100","tablet-width":"50"}},[e("f7-block",{attrs:{strong:"",inset:""}},[e("f7-block-header",[e("f7-row",[e("f7-col",{attrs:{width:"80"}},[n._v(n._s(t.title))]),n._v(" "),e("f7-col",{attrs:{width:"20",align:"right"}},[e("f7-toggle",{attrs:{checked:t.installed},on:{"toggle:change":function(e){return n.toggleAddon(t)}}})],1)],1)],1),n._v(" "),e("f7-row",[e("f7-col",{staticClass:"col--icon"},[e("img",{attrs:{src:t.icon_url,width:"60"}})]),n._v(" "),e("f7-col",{staticClass:"col--icon-description"},[n._v("\n              "+n._s(t.description)+"\n            ")])],1)],1)],1)})),1):n._e()],1)],1)};o._withStripped=!0;var i=window.tommy.api,r={getAddons:function(n){return i.getAddons()},uninstallAddon:function(n){return i.uninstallAddon(n)},installAddon:function(n,t){return i.installAddon(n,t)}};function l(n,t,e,o,i,r,l,a){var s,d="function"==typeof n?n.options:n;if(t&&(d.render=t,d.staticRenderFns=e,d._compiled=!0),o&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),l?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),i&&i.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(l)},d._ssrRegister=s):i&&(s=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(d.functional){d._injectStyles=s;var c=d.render;d.render=function(n,t){return s.call(t),c(n,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,s):[s]}return{exports:n,options:d}}var a=l({methods:{alertDialog:function(n,t,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.$f7.dialog.create({title:n,text:t,cssClass:o,buttons:[{text:e,cssClass:"dialog-button-bold",keyCodes:[13]}]}).open()},confirmDialog:function(n,t,e,o,i,r){var l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,a=arguments.length>7&&void 0!==arguments[7]&&arguments[7],s=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];this.$f7.dialog.create({title:n,text:t,cssClass:l,buttons:[{text:o,bold:a,keyCodes:[27],onClick:function(){"function"==typeof r&&r()}},{text:e,bold:s,keyCodes:[13],onClick:function(){"function"==typeof i&&i()}}]}).open()}}},void 0,void 0,!1,null,null,null);a.options.__file="addons/mini_programs/1.0.0/src/mixins/dialog.vue";var s=l({components:{},data:function(){return{addons:[],loaded:!1}},mixins:[a.exports],methods:{toggleAddon:function(n){console.log(n);var t=this;n.installed?t.confirmDialog(!1,t.$t("mini_programs.index.uninstall_addon_confirmation_message"),t.$t("mini_programs.index.confirm_button"),t.$t("mini_programs.index.cancel_button"),(function(){return t.uninstallAddon(n.package)}),(function(){return t.cancelUninstall(n)}),null,!0,!1):t.installAddon(n.package)},cancelUninstall:function(n){console.log("candel delete"),console.log(n),n.installed=!0},uninstallAddon:function(n){console.log("delete"),r.uninstallAddon(n).then((function(){r.getAddons().then((function(n){self.addons=n.filter((function(n){return!1===n.private}))}))}))},installAddon:function(n){var t=this,e={token:t.$root.token};r.installAddon(n,e).then((function(){r.getAddons().then((function(n){t.addons=n.filter((function(n){return!1===n.private}))}))}))}},mounted:function(){var n=this;r.getAddons().then((function(t){n.addons=t.filter((function(n){return!1===n.private})),n.loaded=!0}))}},o,[],!1,null,null,null);s.options.__file="addons/mini_programs/1.0.0/src/pages/index.vue";var d=[{path:"/mini_programs/",component:s.exports}];t.default=d}]).default;