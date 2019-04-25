var addon=function(){var d=window.tommy.api,c={actorId:null,actor:null,getRecords:function getRecords(t,e,a,n){void 0===n&&(n={});var i,s=n.page,l=n.limit,r=n.dateFrom,o=n.dateTo;return e=e.split(/[-_]/g).map(function(t){return t[0].toUpperCase()+t.substr(1)}).join(""),r&&o&&(i=[new Date(r).toJSON(),new Date(o).toJSON()]),d.getFragments({addon:t,kind:"Vitals"+e+"Item",with_filters:!0,with_permission_to:!0,user_id:c.actorId||a.id,actor_id:c.actorId,page:s||1,limit:l||50,date_range:i},{cache:!1})},addRecord:function addRecord(t,e,a,n){e=e.split(/[-_]/g).map(function(t){return t[0].toUpperCase()+t.substr(1)}).join("");var i=new Date(n.date);i.setHours(parseInt(n.time.split(":")[0],10),parseInt(n.time.split(":")[1],10));var s=c.actor||a,l={addon:t,kind:"Vitals"+e+"Item",with_filters:!0,start_at:i.toJSON(),tags:[{context:"members",name:s.first_name+" "+s.last_name,user_id:s.id}],filters:[{context:"members",name:s.first_name+" "+s.last_name,user_id:s.id}],data:JSON.stringify(n)};return c.actorId&&(l.actor_id=c.actorId,l.actor_type="User"),d.createFragment(l)},getSettings:function getSettings(t){return d.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"GET",cache:!1}).then(function(t){return t?t.data?t.data:null:t})},saveSettings:function saveSettings(t,e){return void 0===e&&(e={}),d.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"PUT",data:{data:JSON.stringify(e)}})}},t={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("f7-page",{class:"vitals-elment-index-page vitals-"+a.vitalsElement+"-index-page",attrs:{id:"vitals_element__index"},on:{"page:beforein":a.onPageBeforeIn,"page:beforeout":a.onPageBeforeOut},nativeOn:{"!scroll":function(t){return a.onPageScroll(t)}}},[n("f7-navbar",[n("tommy-nav-menu"),a._v(" "),n("f7-nav-title",[a._v(a._s(a.t("title")))]),a._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{href:"/"+a.addon+"/settings/","icon-only":""}},[n("i",{class:"icon vitals-element-icon-settings vitals-"+a.vitalsElement+"-icon-settings"})]),a._v(" "),n("f7-link",{attrs:{href:"/"+a.addon+"/history/","icon-only":""}},[n("i",{class:"icon vitals-element-icon-chart vitals-"+a.vitalsElement+"-icon-chart"})])],1)],1),a._v(" "),n("f7-fab",{class:"vitals-element-fab vitals-"+a.vitalsElement+"-fab",attrs:{href:"/"+a.addon+"/add/"}},[n("f7-icon",{attrs:{f7:"add"}})],1),a._v(" "),n("div",{class:"vitals-element-index-header vitals-"+a.vitalsElement+"-index-header"},[n("div",{class:"vitals-element-index-header-icon vitals-"+a.vitalsElement+"-index-header-icon"}),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.data[0].data.value[0])+"/"+a._s(a.data[0].data.value[1])),n("span",[a._v(a._s(a.t("vital_unit."+(a.data[0].data.unit[0]||0))))])]),a._v(" "),n("div",{class:"vitals-element-index-header-date vitals-"+a.vitalsElement+"-index-header-date"},[a._v(a._s(a.$moment(a.data[0].data.date).format("DD MMM YYYY"))+" "+a._s(a.data[0].data.time))])]):a._e(),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.t("vital_label")))])]):a._e()]),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-no-data vitals-"+a.vitalsElement+"-index-no-data"},[n("i",{class:"vitals-element-index-no-data-img vitals-"+a.vitalsElement+"-index-no-data-img"}),a._v(" "),n("span",[a._v(a._s(a.t("not_available")))])]):a._e(),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-cards vitals-"+a.vitalsElement+"-index-cards"},a._l(a.data,function(t,e){return n("div",{key:e,class:"vitals-element-card vitals-"+a.vitalsElement+"-card"},[n("div",{class:"vitals-element-card-title vitals-"+a.vitalsElement+"-card-title"},[a._v(a._s(a.$moment(t.data.date).format("DD MMM YYYY"))+" "+a._s(t.data.time))]),a._v(" "),n("div",{class:"vitals-element-card-content vitals-"+a.vitalsElement+"-card-content"},[n("div",{class:"vitals-element-card-value vitals-"+a.vitalsElement+"-card-value"},[a._v(a._s(t.data.value[0])+"/"+a._s(t.data.value[1])+" "),n("sub",[a._v(a._s(a.t("vital_unit."+(t.data.unit[0]||0))))])]),a._v(" "),n("div",{class:"vitals-element-card-value vitals-"+a.vitalsElement+"-card-value"},[a._v(a._s(t.data.value[2])+" "),n("sub",[a._v(a._s(a.t("bpm_unit."+(t.data.unit[2]||0))))])])])])})):a._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String,indexCardCustomIconName:[String,Function]},data:function data(){return{data:null}},mounted:function mounted(){var t=this;t.$f7route.query.actor_id?(c.actorId=parseInt(t.actorId,10),t.$api.getContact(t.actorId).then(function(t){c.actor=t})):(c.actorId=null,c.actor=null),t.getData(),t.$events.$on(t.addon+":updateRecords",t.getData)},beforeDestroy:function beforeDestroy(){var t=this;t.$events.$off(t.addon+":updateRecords",t.getData)},methods:{t:function t(e,a){return this.$t(this.addon+".index."+e,a)},getData:function getData(){var e=this;c.getRecords(e.addon,e.vitalsElement,e.$root.user).then(function(t){e.data=t.filter(function(t){return t.data&&t.data.value}).sort(function(t,e){var a=new Date(t.data.date),n=t.data.time.split(":"),i=n[0],s=n[1];a.setHours(parseInt(i,10),parseInt(s,10));var l=new Date(e.data.date),r=e.data.time.split(":"),o=r[0],d=r[1];return l.setHours(parseInt(o,10),parseInt(d,10)),l-a})})},onPageScroll:function onPageScroll(t){var e=this,a=e.$$(t.target).closest(".page-content");a.length&&(100<a[0].scrollTop?e.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"):e.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"))},onPageBeforeIn:function onPageBeforeIn(){this.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")},onPageBeforeOut:function onPageBeforeOut(){this.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")}}},e={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{class:"vitals-element-manual-add-page vitals-"+e.vitalsElement+"-manual-add-page",attrs:{id:"vitals_element__add"}},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.t("title")))]),e._v(" "),a("f7-nav-right",[e.allowSave?a("f7-link",{attrs:{href:"#","icon-only":""},on:{click:e.save}},[a("i",{staticClass:"icon f7-icons"},[e._v("check")])]):e._e()],1)],1),e._v(" "),a("f7-list",[a("f7-list-input",{attrs:{type:"number","inline-label":"",value:e.sys,min:"1",label:e.t("sys_label")},on:{input:function(t){e.sys=t.target.value}}},[a("span",{staticClass:"vitals-element-input-unit",attrs:{slot:"inner"},slot:"inner"},[e._v(e._s(e.t("sys_unit.0")))])]),e._v(" "),a("f7-list-input",{attrs:{type:"number","inline-label":"",value:e.dia,min:"1",label:e.t("dia_label")},on:{input:function(t){e.dia=t.target.value}}},[a("span",{staticClass:"vitals-element-input-unit",attrs:{slot:"inner"},slot:"inner"},[e._v(e._s(e.t("dia_unit.0")))])]),e._v(" "),a("f7-list-input",{attrs:{type:"number","inline-label":"",value:e.bpm,min:"1",label:e.t("bpm_label")},on:{input:function(t){e.bpm=t.target.value}}},[a("span",{staticClass:"vitals-element-input-unit",attrs:{slot:"inner"},slot:"inner"},[e._v(e._s(e.t("bpm_unit.0")))])]),e._v(" "),a("f7-list-input",{attrs:{type:"text","inline-label":"","input-id":"date-input",label:e.t("date_label")}}),e._v(" "),a("f7-list-input",{attrs:{type:"text","inline-label":"","input-id":"time-input",label:e.t("time_label")}})],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{sys:"",dia:"",bpm:"",date:"",time:""}},computed:{allowSave:function allowSave(){var t=this;return t.sys&&0<t.sys&&t.dia&&0<t.dia&&t.bpm&&0<t.bpm}},mounted:function mounted(){var a=this;a.$f7.calendar.create({inputEl:a.$el.querySelector("#date-input"),value:[new Date],on:{change:function change(t,e){a.date=new Date(e[0]),a.date.setHours(0,0,0,0)}}});var t=(new Date).getHours();t<10&&(t="0"+t);var e=(new Date).getMinutes();e<10&&(e="0"+e),a.$f7.picker.create({inputEl:a.$el.querySelector("#time-input"),value:[t.toString(),e.toString()],formatValue:function formatValue(t){return t[0]+":"+t[1]},cols:[{values:function(){for(var t=[],e=0;e<24;e+=1)e<10?t.push("0"+e):t.push(e.toString());return t}()},{divider:!0,content:":"},{values:function(){for(var t=[],e=0;e<60;e+=1)e<10?t.push("0"+e):t.push(e.toString());return t}()}],on:{change:function change(t,e){a.time=e.join(":")}}})},methods:{t:function t(e,a){return this.$t(this.addon+".manual_enter."+e,a)},save:function save(){var t=this,e=t.sys,a=t.dia,n=t.bpm,i=t.date,s=t.time;c.addRecord(t.addon,t.vitalsElement,t.$root.user,{value:[e,a,n],date:new Date(i).toJSON(),time:s,unit:[0,0,0]}).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})}}},a={receiveMessage:!1},n=[{path:"/vitals_blood_pressure/",component:t},{path:"/vitals_blood_pressure/add/",component:e},{path:"/vitals_blood_pressure/settings/",component:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{class:"vitals-element-settings-page vitals-"+t.vitalsElement+"-settings-page",attrs:{id:"vitals_element__settings"}},[a("f7-navbar",[a("tommy-nav-back"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.t("title")))])],1),t._v(" "),a("div",{class:"vitals-element-settings-header vitals-"+t.vitalsElement+"-settings-header"},[a("div",{class:"vitals-element-settings-icon vitals-"+t.vitalsElement+"-settings-icon"}),t._v(" "),a("div",{class:"vitals-element-settings-center-icon vitals-"+t.vitalsElement+"-settings-center-icon"})]),t._v(" "),a("div",{class:"vitals-element-settings-text vitals-"+t.vitalsElement+"-settings-text"},[a("p",[t._v(t._s(t.t("vital_text")))])]),t._v(" "),a("f7-list",{staticClass:"no-hairlines"},[a("f7-list-item",{attrs:{title:t.t("chat_label")}},[a("f7-toggle",{attrs:{slot:"after",checked:t.settings.receiveMessage},on:{"toggle:change":t.onMessagesChanges},slot:"after"})],1)],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{settings:a}},mounted:function mounted(){var e=this;c.getSettings(e.addon).then(function(t){t&&(e.settings=t,a=e.settings)})},methods:{t:function t(e,a){return this.$t(this.addon+".settings."+e,a)},onMessagesChanges:function onMessagesChanges(t){this.settings.receiveMessage=t,a=this.settings,c.saveSettings(this.addon,this.settings)}}}},{path:"/vitals_blood_pressure/history/",component:{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{class:"vitals-element-history-page vitals-"+e.vitalsElement+"-history-page",attrs:{id:"vitals_element__history"}},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.t("title")))])],1),e._v(" "),a("f7-block",[a("f7-segmented",[a("f7-button",{attrs:{active:"day"===e.range},on:{click:function(t){e.range="day"}}},[e._v(e._s(e.t("date_options.0")))]),e._v(" "),a("f7-button",{attrs:{active:"week"===e.range},on:{click:function(t){e.range="week"}}},[e._v(e._s(e.t("date_options.1")))]),e._v(" "),a("f7-button",{attrs:{active:"month"===e.range},on:{click:function(t){e.range="month"}}},[e._v(e._s(e.t("date_options.2")))])],1)],1),e._v(" "),a("div",{class:"vitals-element-chart-clicked vitals-"+e.vitalsElement+"-chart-clicked"},[a("span",[e._v(e._s(e.clickedDate))]),e._v(" "),a("span",[e._v(e._s(e.clickedValue))])]),e._v(" "),e.data&&e.data.length?["day"===e.range?a("div",{key:"chart-day",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartDay"})]):e._e(),e._v(" "),"week"===e.range?a("div",{key:"chart-week",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartWeek"})]):e._e(),e._v(" "),"month"===e.range?a("div",{key:"chart-month",class:"vitals-element-chart vitals-"+e.vitalsElement+"-chart"},[a("div",{ref:"chartMonth"})]):e._e()]:e._e()],2)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null,clicked:null,range:"day",chartColors:["#5FA81A","#F5A623","#FF4500"]}},mounted:function mounted(){var i=this,t=(new Date).setMonth((new Date).getMonth()-1),e=new Date;c.getRecords(i.addon,i.vitalsElement,i.$root.user,{dateFrom:t,dateTo:e}).then(function(t){i.data=(t||[]).sort(function(t,e){var a=i.itemDate(t),n=i.itemDate(e);return a.getTime()-n.getTime()}),i.$nextTick(function(){i.initChart()})})},watch:{range:function range(){var t=this;t.clicked=null,t.$nextTick(function(){t.initChart()})}},computed:{clickedDate:function clickedDate(){var t=this;return t.clicked?t.chartWeekSumsDays&&"week"===t.range?t.$moment(t.clicked.x).format("DD MMM YYYY"):t.chartMonthSumsDays&&"month"===t.range?t.$moment(t.clicked.x).format("DD MMM YYYY"):t.$moment(t.clicked.x).format("DD MMM YYYY HH:mm"):""},clickedValue:function clickedValue(){var t=this;if(!t.clicked)return"";var e=t.data[t.clicked.id].data.value;return e[0]+"/"+e[1]+" "+t.t("vital_units.0")+" "+e[2]+" "+t.t("vital_units.2")}},methods:{todayValues:function todayValues(a){var n=this;if(!n.data)return null;var e=new Date;return e.setHours(0,0,0,0),n.data.filter(function(t){return n.itemDate(t).getTime()>e.getTime()}).map(function(t){var e=n.itemDate(t);return{y:parseInt(t.data.value[a],10),x:e,id:n.data.indexOf(t)}})},weekValues:function weekValues(a){var n=this;if(!n.data)return null;var e=new Date;return e.setHours(0,0,0,0),e.setMonth(e.getMonth(),e.getDate()-7),n.data.filter(function(t){return n.itemDate(t).getTime()>e.getTime()}).map(function(t){var e=n.itemDate(t);return{y:parseInt(t.data.value[a],10),x:e,id:n.data.indexOf(t)}})},monthValues:function monthValues(a){var n=this;if(!n.data)return null;var e=new Date;return e.setHours(0,0,0,0),e.setMonth(e.getMonth()-1,e.getDate()),n.data.filter(function(t){return n.itemDate(t).getTime()>e.getTime()}).map(function(t){var e=n.itemDate(t);return{y:parseInt(t.data.value[a],10),x:e,id:n.data.indexOf(t)}})},itemDate:function itemDate(t){var e=new Date(t.data.date),a=parseInt(t.data.time.split(":")[0],10),n=parseInt(t.data.time.split(":")[1],10);return e.setHours(a,n),e},t:function t(e,a){return this.$t(this.addon+".history."+e,a)},initChart:function initChart(){var t=this,e=t.range;if(t.data&&t.data.length){var a={chart:{type:"line"},credits:{enabled:!1},legend:{enabled:!1},title:null,tooltip:{enabled:!1},xAxis:{type:"datetime"},yAxis:{title:null},time:{timezoneOffset:(new Date).getTimezoneOffset()},plotOptions:{line:{marker:{enabled:!0}}}},n={cursor:"pointer",marker:{symbol:"circle"},point:{events:{click:function click(){t.clicked=this},select:function select(){t.clicked=this}}}};"day"===e&&t.$highcharts.chart(t.$refs.chartDay,Object.assign({},a,{series:[Object.assign({},n,{color:t.chartColors[0],data:t.todayValues(0)}),Object.assign({},n,{color:t.chartColors[1],data:t.todayValues(1)}),Object.assign({},n,{color:t.chartColors[2],data:t.todayValues(2)})]})),"week"===e&&t.$highcharts.chart(t.$refs.chartWeek,Object.assign({},a,{series:[Object.assign({},n,{color:t.chartColors[0],data:t.weekValues(0)}),Object.assign({},n,{color:t.chartColors[1],data:t.weekValues(1)}),Object.assign({},n,{color:t.chartColors[2],data:t.weekValues(2)})]})),"month"===e&&t.$highcharts.chart(t.$refs.chartMonth,Object.assign({},a,{series:[Object.assign({},n,{color:t.chartColors[0],data:t.monthValues(0)}),Object.assign({},n,{color:t.chartColors[1],data:t.monthValues(1)}),Object.assign({},n,{color:t.chartColors[2],data:t.monthValues(2)})]}))}}}}}];return n.forEach(function(t){t.options={props:{addon:"vitals_blood_pressure",vitalsElement:"blood_pressure"}}}),n}();