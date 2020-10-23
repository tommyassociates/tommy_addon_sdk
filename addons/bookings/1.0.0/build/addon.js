var addon=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"bookings__wrapper",attrs:{id:"bookings__index",ptr:""},on:{"page:afterin":t.loadEvents,"ptr:refresh":t.onPtrRefresh}},[n("f7-navbar",[n("tommy-nav-menu")],1),t._v(" "),n("f7-block",{staticClass:"no-margin no-padding"},[n("div",{staticClass:"calendar-toolbar"},[t.collapsedCalendar?t._e():n("span",{staticClass:"calendar-toolbar__prev",on:{click:function(e){return t.onPrevMonth()}}}),t._v(" "),n("div",[n("span",{staticClass:"calendar-toolbar__date"},[t._v(t._s(t.toolbarDate))]),t._v(" "),n("span",{staticClass:"calendar-toolbar__collapse",class:{"-rotate":t.collapsedCalendar},on:{click:function(e){return t.onCollapse()}}})]),t._v(" "),t.collapsedCalendar?t._e():n("span",{staticClass:"calendar-toolbar__next",on:{click:function(e){return t.onNextMonth()}}})]),t._v(" "),n("div",{attrs:{id:"calendar-container"}})]),t._v(" "),t.events&&t.events.length?n("f7-list",{staticClass:"booking-events__wrapper no-margin no-padding",attrs:{"media-list":"","no-hairlines":""}},[t.openShifts.length?n("f7-list-group",{attrs:{"media-list":""}},[n("f7-list-item",{staticClass:"booking-events__title",attrs:{"group-title":""}},[t._v("Open Shifts")]),t._v(" "),t._l(t.openShifts,(function(e,a){return n("f7-list-item",{key:a,staticClass:"booking-event",attrs:{link:"#",title:t.eventTitle(e),text:t.eventText(e)},on:{click:function(n){return t.loadEventDetails(e)}}},[n("div",{staticClass:"item-media text-icon align-self-center",attrs:{slot:"content-start"},slot:"content-start"},[n("span",[t._v(t._s(t.getDifferenceOfHours(e)))])]),t._v(" "),n("span",{staticClass:"booking-event__description"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"booking-event__description"},[t._v(t._s(e.location))])])}))],2):t._e(),t._v(" "),t.currentShifts.length?n("f7-list-group",{attrs:{"media-list":""}},[n("f7-list-item",{staticClass:"booking-events__title",attrs:{"group-title":""}},[t._v("Current")]),t._v(" "),t._l(t.currentShifts,(function(e,a){return n("f7-list-item",{key:a,staticClass:"booking-event booking-label -processing",attrs:{link:"#",title:t.eventTitle(e),text:t.eventText(e)},on:{click:function(n){return t.loadEventDetails(e)}}},[n("div",{staticClass:"item-media text-icon align-self-center",attrs:{slot:"content-start"},slot:"content-start"},[n("span",[t._v(t._s(t.getDifferenceOfHours(e)))])]),t._v(" "),n("span",{staticClass:"booking-event__description"},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"booking-event__description"},[t._v(t._s(e.location))])])}))],2):t._e()],1):t._e(),t._v(" "),t.currentShifts.length?t._e():n("f7-block",{staticClass:"no-data"},[n("h2",[t._v(t._s(t.$t("No shifts found")))]),t._v(" "),n("p",[t._v(t._s(t.$t("Please check again later...")))])])],1)};a._withStripped=!0;var s=function(t,e){var n=this.$moment.utc(t).toDate();return this.$moment(n).format(e)},o=window.tommy.api,i={getWorkforceShifts:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.getEvents(Object.assign({}))},getWorkforceShift:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o.getEvents(Object.assign({}))}};function r(t,e,n,a,s,o,i,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}var l=r({data:function(){var t=this.$moment().startOf("day");return{events:[],selectedEvents:[],today:t,toolbarDate:"",collapsedCalendar:!1,selectedDate:t}},mounted:function(){this.createCalendar(),this.getToolbarDate(),this.onCollapse()},computed:{currentShifts:function(){var t=this,e=t.$moment(new Date(t.selectedDate));return t.events.filter((function(n){return t.$moment(n.start_at),t.$moment(n.end_at)>=e}))},openShifts:function(){var t=this;return t.events.filter((function(e){return t.$moment(e.start_at)>=t.today}))}},methods:{createCalendar:function(){var t=this,e=t.$app;t.calendar=e.f7.calendar.create({containerEl:"#calendar-container",events:t.selectedEvents,value:[t.today],firstDay:0,toolbar:!1,touchMove:!1,on:{dayClick:function(e,n,a,s,o){t.selectedDate=new Date(a,s,o)}}})},destroyCalendar:function(){var t=document.querySelector("#calendar-container");this.calendar.app.calendar.destroy(this.calendar.$el),t.removeChild(t.firstChild)},getSelectedEvents:function(t){var e=this;return t.map((function(t){var n=t.start_at,a=t.end_at;return a?{from:e.getFormatedDate(n),to:a,color:"#ff4500"}:{date:n,color:"#ff4500"}}))},getFormatedDate:function(t){var e=this.$moment(t).year(),n=this.$moment(t).month(),a=this.$moment(t).date();return new Date(e,n,a)},getToolbarDate:function(){var t=this.calendar,e=t.currentMonth,n=t.currentYear,a=t.params;return this.toolbarDate=a.monthNames[e]+" "+n},getDifferenceOfHours:function(t){var e=t.start_at,n=t.end_at;return n?this.$moment(n).diff(this.$moment(e),"hours",!0).toFixed(1).replace(/\.0$/,""):"-"},eventTitle:function(t){var e=this.formatDate(t.start_at,"h:mm a");return t.end_at&&(e+=" - ".concat(this.formatDate(t.end_at,"h:mm a"))),e},eventText:function(t){var e=t.title;return t.location&&(e+=" at ".concat(t.location)),e},formatDate:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s.call.apply(s,[this].concat(e))},loadEventDetails:function(t){this.$f7router.navigate("/bookings/details/",{props:{event:t}})},onCollapse:function(){var t=this,e=t.$moment().startOf("month").weekday(),n=(new Date).getDate(),a=Math.ceil((e+n)/7),s=document.getElementById("calendar-container"),o=document.getElementsByClassName("calendar-month-current")[0].childNodes;Array.prototype.forEach.call(o,(function(e,n){n!==a-1&&(t.collapsedCalendar?e.classList.remove("-hide"):e.classList.add("-hide"))})),t.collapsedCalendar?s.classList.remove("collapsed"):s.classList.add("collapsed"),t.collapsedCalendar=!t.collapsedCalendar},onNextMonth:function(){this.calendar.nextMonth(500),this.getToolbarDate()},onPrevMonth:function(){this.calendar.prevMonth(500),this.getToolbarDate()},onPtrRefresh:function(t,e){this.loadEvents().then((function(){e&&e()}))},loadEvents:function(){var t=this;return i.getWorkforceShifts().then((function(e){t.events=e,t.selectedEvents=t.getSelectedEvents(e),t.destroyCalendar(),t.createCalendar(),t.onCollapse(),t.onCollapse()}))}}},a,[],!1,null,null,null);l.options.__file="addons/bookings/1.0.0/src/pages/index.vue";var c=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"bookings__details no-margin no-padding",attrs:{id:"bookings__details"}},[n("f7-navbar",{staticClass:"bookings__details-nav"},[n("tommy-nav-back",{staticClass:"bookings__details-back"})],1),t._v(" "),n("f7-nav-title",{staticClass:"bookings__details-title"},[t._v("Shift Details")]),t._v(" "),n("f7-list",{staticClass:"bookings__details-list",attrs:{"no-hairlines":""}},[n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Location",title:t.event.location}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Start",title:t.formatDate(t.event.start_at,"D MMM YYYY hh:mm")}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"End",title:t.formatDate(t.event.end_at,"D MMM YYYY hh:mm")}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Shift type",title:""}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Role",title:""}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Department",title:""}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Suburb",title:""}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Status",title:""}}),t._v(" "),n("f7-list-item",{staticClass:"bookings__details-item",attrs:{header:"Notes",title:""}})],1),t._v(" "),n("f7-button",{staticClass:"bookings__details-button"},[t._v("Request Shift")])],1)};d._withStripped=!0;var f=r({props:{event:Object},methods:{formatDate:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return s.call.apply(s,[this].concat(e))}}},d,[],!1,null,null,null);f.options.__file="addons/bookings/1.0.0/src/pages/details.vue";var _=[{path:"/bookings/",component:c},{path:"/bookings/details/",component:f.exports}];e.default=_}]).default;