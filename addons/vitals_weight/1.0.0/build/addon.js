var addon=function(){var v=window.tommy.api,n=function getRecords(t,e,a,n){void 0===n&&(n={});var i,s=n.page,l=n.limit,r=n.dateFrom,d=n.dateTo;return e=e.split("-").map(function(t){return t[0].toUpperCase()+t.substr(1)}).join(""),r&&d&&(i=[new Date(r).toJSON(),new Date(d).toJSON()]),v.getFragments({addon:t,kind:"Vitals"+e+"Item",with_filters:!0,with_permission_to:!0,user_id:a.id,page:s||1,limit:l||50,date_range:i},{cache:!1})},i=function addRecord(t,e,a){var n=a.value,i=a.date,s=a.time,l=a.user,r=a.unit;e=e.split("-").map(function(t){return t[0].toUpperCase()+t.substr(1)}).join("");var d=new Date(i);d.setHours(parseInt(s.split(":")[0],10),parseInt(s.split(":")[1],10));var o={addon:t,kind:"Vitals"+e+"Item",with_filters:!0,start_at:d.toJSON(),tags:[{context:"members",name:l.first_name+" "+l.last_name,user_id:l.id}],filters:[{context:"members",name:l.first_name+" "+l.last_name,user_id:l.id}],data:JSON.stringify({value:n,date:i,time:s,unit:r})};return v.createFragment(o)},t=function getSettings(t){return v.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"GET",cache:!1}).then(function(t){return t?t.data?t.data:null:t})},e=function saveSettings(t,e){return void 0===e&&(e={}),v.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"PUT",data:{data:JSON.stringify(e)}})},a={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("f7-page",{class:"vitals-elment-index-page vitals-"+a.vitalsElement+"-index-page",attrs:{id:"vitals_element__index"},on:{"page:beforein":a.onPageBeforeIn,"page:beforeout":a.onPageBeforeOut},nativeOn:{"!scroll":function(t){return a.onPageScroll(t)}}},[n("f7-navbar",[n("tommy-nav-menu"),a._v(" "),n("f7-nav-title",[a._v(a._s(a.t("title")))]),a._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{href:"/"+a.addon+"/settings/","icon-only":""}},[n("i",{staticClass:"icon vitals-element-icon-settings"})]),a._v(" "),n("f7-link",{attrs:{href:"/"+a.addon+"/history/","icon-only":""}},[n("i",{staticClass:"icon vitals-element-icon-chart"})])],1)],1),a._v(" "),n("f7-fab",{class:"vitals-element-fab vitals-"+a.vitalsElement+"-fab",attrs:{href:"/"+a.addon+"/add/"}},[n("f7-icon",{attrs:{f7:"add"}})],1),a._v(" "),n("div",{class:"vitals-element-index-header vitals-"+a.vitalsElement+"-index-header"},[n("div",{class:"vitals-element-index-header-icon vitals-"+a.vitalsElement+"-index-header-icon"}),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.data[0].data.value)),n("span",[a._v(a._s(a.t("vital_unit."+(a.data[0].data.unit||0))))])]),a._v(" "),n("div",{class:"vitals-element-index-header-date vitals-"+a.vitalsElement+"-index-header-date"},[a._v(a._s(a.$moment(a.data[0].data.date).format("DD MMM YYYY"))+" "+a._s(a.data[0].data.time))])]):a._e(),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.t("vital_label")))])]):a._e()]),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-no-data vitals-"+a.vitalsElement+"-index-no-data"},[n("i",{class:"vitals-element-index-no-data-img vitals-"+a.vitalsElement+"-index-no-data-img"}),a._v(" "),n("span",[a._v(a._s(a.t("not_available")))])]):a._e(),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-cards vitals-"+a.vitalsElement+"-index-cards"},a._l(a.data,function(t,e){return n("div",{key:e,class:"vitals-element-card vitals-"+a.vitalsElement+"-card"},[n("div",{class:"vitals-element-card-title vitals-"+a.vitalsElement+"-card-title"},[a._v(a._s(a.$moment(t.data.date).format("DD MMM YYYY"))+" "+a._s(t.data.time))]),a._v(" "),n("div",{class:"vitals-element-card-content vitals-"+a.vitalsElement+"-card-content"},[n("div",{class:"vitals-element-card-icon vitals-"+a.vitalsElement+"-card-icon"},[n("img",{attrs:{src:a.$addonAssetsUrl+"card-icon.svg"}})]),a._v(" "),n("div",{class:"vitals-element-card-value vitals-"+a.vitalsElement+"-card-value"},[a._v(a._s(t.data.value)+" "),n("sub",[a._v(a._s(a.t("vital_unit."+(t.data.unit||0))))])])])])})):a._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null}},mounted:function mounted(){var t=this;t.getData(),t.$events.$on(t.addon+":updateRecords",t.getData)},beforeDestroy:function beforeDestroy(){var t=this;t.$events.$off(t.addon+":updateRecords",t.getData)},methods:{t:function t(e,a){return this.$t(this.addon+".index."+e,a)},getData:function getData(){var e=this;n(e.addon,e.vitalsElement,e.$root.user).then(function(t){e.data=t.filter(function(t){return t.data&&t.data.value}).sort(function(t,e){var a=new Date(t.data.date),n=t.data.time.split(":"),i=n[0],s=n[1];a.setHours(parseInt(i,10),parseInt(s,10));var l=new Date(e.data.date),r=e.data.time.split(":"),d=r[0],o=r[1];return l.setHours(parseInt(d,10),parseInt(o,10)),l-a})})},onPageScroll:function onPageScroll(t){var e=this,a=e.$$(t.target).closest(".page-content");a.length&&(100<a[0].scrollTop?e.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"):e.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"))},onPageBeforeIn:function onPageBeforeIn(){this.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")},onPageBeforeOut:function onPageBeforeOut(){this.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{class:"vitals-element-manual-add-page vitals-"+e.vitalsElement+"-manual-add-page",attrs:{id:"vitals_element__add"}},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.t("title")))]),e._v(" "),a("f7-nav-right",[e.allowSave?a("f7-link",{attrs:{href:"#","icon-only":""},on:{click:e.save}},[a("i",{staticClass:"icon f7-icons"},[e._v("check")])]):e._e()],1)],1),e._v(" "),a("f7-list",[a("f7-list-input",{attrs:{type:"number","inline-label":"",value:e.value,min:"1",label:e.t("vital_label")},on:{input:function(t){e.value=t.target.value}}},[a("span",{staticClass:"vitals-element-input-unit",attrs:{slot:"inner"},slot:"inner"},[e._v(e._s(e.t("vital_unit.0")))])]),e._v(" "),a("f7-list-input",{attrs:{type:"text","inline-label":"","input-id":"date-input",label:e.t("date_label")}}),e._v(" "),a("f7-list-input",{attrs:{type:"text","inline-label":"","input-id":"time-input",label:e.t("time_label")}})],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{value:"",date:"",time:""}},computed:{allowSave:function allowSave(){return this.value&&0<this.value}},mounted:function mounted(){var a=this;a.$f7.calendar.create({inputEl:a.$el.querySelector("#date-input"),value:[new Date],on:{change:function change(t,e){a.date=new Date(e[0]),a.date.setHours(0,0,0,0)}}});var t=(new Date).getHours();t<10&&(t="0"+t);var e=(new Date).getMinutes();e<10&&(e="0"+e),a.$f7.picker.create({inputEl:a.$el.querySelector("#time-input"),value:[t.toString(),e.toString()],formatValue:function formatValue(t){return t[0]+":"+t[1]},cols:[{values:function(){for(var t=[],e=0;e<24;e+=1)e<10?t.push("0"+e):t.push(e.toString());return t}()},{values:function(){for(var t=[],e=0;e<60;e+=1)e<10?t.push("0"+e):t.push(e.toString());return t}()}],on:{change:function change(t,e){a.time=e.join(":")}}})},methods:{t:function t(e,a){return this.$t(this.addon+".manual_enter."+e,a)},save:function save(){var t=this,e=t.value,a=t.date,n=t.time;i(t.addon,t.vitalsElement,{value:e,date:new Date(a).toJSON(),time:n,user:t.$root.user,unit:0}).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})}}},l={receiveMessage:!1},r=[{path:"/vitals_weight/",component:a},{path:"/vitals_weight/add/",component:s},{path:"/vitals_weight/settings/",component:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{class:"vitals-element-settings-page vitals-"+t.vitalsElement+"-settings-page",attrs:{id:"vitals_element__settings"}},[a("f7-navbar",[a("tommy-nav-back"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.t("title")))])],1),t._v(" "),a("div",{class:"vitals-element-settings-header vitals-"+t.vitalsElement+"-settings-header"},[a("div",{class:"vitals-element-settings-icon vitals-"+t.vitalsElement+"-settings-icon"}),t._v(" "),a("div",{class:"vitals-element-settings-center-icon vitals-"+t.vitalsElement+"-settings-center-icon"})]),t._v(" "),a("div",{class:"vitals-element-settings-text vitals-"+t.vitalsElement+"-settings-text"},[a("p",[t._v(t._s(t.t("vital_text")))])]),t._v(" "),a("f7-list",{staticClass:"no-hairlines"},[a("f7-list-item",{attrs:{title:t.t("chat_label")}},[a("f7-toggle",{attrs:{slot:"after",checked:t.settings.receiveMessage},on:{"toggle:change":t.onMessagesChanges},slot:"after"})],1)],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{settings:l}},mounted:function mounted(){var e=this;t(e.addon).then(function(t){t&&(e.settings=t,l=e.settings)})},methods:{t:function t(e,a){return this.$t(this.addon+".settings."+e,a)},onMessagesChanges:function onMessagesChanges(t){this.settings.receiveMessage=t,l=this.settings,e(this.addon,this.settings)}}}},{path:"/vitals_weight/history/",component:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{class:"vitals-element-history-page vitals-"+e.vitalsElement+"-history-page",attrs:{id:"vitals_element__history"}},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.t("title")))])],1),e._v(" "),a("f7-block",[a("f7-segmented",[a("f7-button",{attrs:{active:"day"===e.range},on:{click:function(t){e.range="day"}}},[e._v(e._s(e.t("date_options.0")))]),e._v(" "),a("f7-button",{attrs:{active:"week"===e.range},on:{click:function(t){e.range="week"}}},[e._v(e._s(e.t("date_options.1")))]),e._v(" "),a("f7-button",{attrs:{active:"month"===e.range},on:{click:function(t){e.range="month"}}},[e._v(e._s(e.t("date_options.2")))])],1)],1),e._v(" "),a("div",{class:"vitals-element-chart-clicked vitals-"+e.vitalsElement+"-chart-clicked"},[a("span",[e._v(e._s(e.clickedDate))]),e._v(" "),a("span",[e._v(e._s(e.clickedValue))])]),e._v(" "),e.data&&e.data.length?["day"===e.range?a("div",{key:"chart-day",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartDay"})]):e._e(),e._v(" "),"week"===e.range?a("div",{key:"chart-week",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartWeek"})]):e._e(),e._v(" "),"month"===e.range?a("div",{key:"chart-month",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartMonth"})]):e._e()]:e._e()],2)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null,clicked:null,range:"day"}},mounted:function mounted(){var e=this,t=(new Date).setMonth((new Date).getMonth()-1),a=new Date;n(e.addon,e.vitalsElement,e.$root.user,{dateFrom:t,dateTo:a}).then(function(t){e.data=(t||[]).sort(function(t,e){var a=new Date(t.data.date),n=t.data.time.split(":"),i=n[0],s=n[1];a.setHours(parseInt(i,10),parseInt(s,10));var l=new Date(e.data.date),r=e.data.time.split(":"),d=r[0],o=r[1];return l.setHours(parseInt(d,10),parseInt(o,10)),l-a}),e.$nextTick(function(){e.initChart()})})},watch:{range:function range(){var t=this;t.clicked=null,t.$nextTick(function(){t.initChart()})}},computed:{clickedDate:function clickedDate(){return this.clicked?this.$moment(this.clicked.x).format("DD MMM YYYY HH:mm"):""},clickedValue:function clickedValue(){var t=this;if(!t.clicked)return"";var e=t.data[t.clicked.id];return t.clicked.y+" "+t.t("vital_unit."+e.data.unit)},todayValues:function todayValues(){if(!this.data)return null;var i=new Date;return i.setHours(0,0,0,0),this.data.filter(function(t){var e=parseInt(t.data.time.split(":")[0],10),a=parseInt(t.data.time.split(":")[1],10),n=new Date(t.data.date);return n.setHours(e,a),n.getTime()>i.getTime()})},weekValues:function weekValues(){if(!this.data)return null;var i=new Date;return i.setHours(0,0,0,0),i.setMonth(i.getMonth(),i.getDate()-7),this.data.filter(function(t){var e=parseInt(t.data.time.split(":")[0],10),a=parseInt(t.data.time.split(":")[1],10),n=new Date(t.data.date);return n.setHours(e,a),n.getTime()>i.getTime()})},monthValues:function monthValues(){if(!this.data)return null;var i=new Date;return i.setHours(0,0,0,0),i.setMonth(i.getMonth()-1,i.getDate()),this.data.filter(function(t){var e=parseInt(t.data.time.split(":")[0],10),a=parseInt(t.data.time.split(":")[1],10),n=new Date(t.data.date);return n.setHours(e,a),n.getTime()>i.getTime()})}},methods:{t:function t(e,a){return this.$t(this.addon+".history."+e,a)},initChart:function initChart(){var a=this,t=a.range;if(a.data&&a.data.length){var e={credits:{enabled:!1},legend:{enabled:!1},title:null,tooltip:{enabled:!1},xAxis:{type:"datetime"},yAxis:{title:null}},n={color:"#5FA81A",cursor:"pointer",point:{events:{click:function click(){a.clicked=this},select:function select(){a.clicked=this}}}};"day"===t&&a.$highcharts.chart(a.$refs.chartDay,Object.assign({},e,{series:[Object.assign({},n,{data:a.todayValues.map(function(t){var e=new Date(t.data.date);return e.setHours(parseInt(t.data.time.split(":")[0],10),parseInt(t.data.time.split(":")[1],10)),{y:parseInt(t.data.value,10),x:e,id:a.data.indexOf(t)}})})]})),"week"===t&&a.$highcharts.chart(a.$refs.chartWeek,Object.assign({},e,{series:[Object.assign({},n,{data:a.weekValues.map(function(t){var e=new Date(t.data.date);return e.setHours(parseInt(t.data.time.split(":")[0],10),parseInt(t.data.time.split(":")[1],10)),{y:parseInt(t.data.value,10),x:e,id:a.data.indexOf(t)}})})]})),"month"===t&&a.$highcharts.chart(a.$refs.chartMonth,Object.assign({},e,{series:[Object.assign({},n,{data:a.monthValues.map(function(t){var e=new Date(t.data.date);return e.setHours(parseInt(t.data.time.split(":")[0],10),parseInt(t.data.time.split(":")[1],10)),{y:parseInt(t.data.value,10),x:e,id:a.data.indexOf(t)}})})]}))}}}}}];return r.forEach(function(t){t.options={props:{addon:"vitals_weight",vitalsElement:"weight"}}}),r}();