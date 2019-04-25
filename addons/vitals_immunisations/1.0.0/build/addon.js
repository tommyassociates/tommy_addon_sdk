var addon=function(){var s=window.tommy.api,c={actorId:null,actor:null,getVaccine:function getVaccine(t,e){return s.getFragment(e,{addon:"vitals_immunisations",kind:"VitalsImmunisationsVaccine",with_filters:!0,with_permission_to:!0,user_id:c.actorId||t.id,actor_id:c.actorId},{cache:!1})},getVaccines:function getVaccines(t){return s.getFragments({addon:"vitals_immunisations",kind:"VitalsImmunisationsVaccine",with_filters:!0,with_permission_to:!0,user_id:c.actorId||t.id,actor_id:c.actorId},{cache:!1})},addVaccine:function addVaccine(t,e){var a=c.actor||t,n={addon:"vitals_immunisations",kind:"VitalsImmunisationsVaccine",with_filters:!0,start_at:new Date(e.scheduledDate).toJSON(),tags:[{context:"members",name:a.first_name+" "+a.last_name,user_id:a.id}],filters:[{context:"members",name:a.first_name+" "+a.last_name,user_id:a.id}],data:JSON.stringify(e)};return c.actorId&&(n.actor_id=c.actorId,n.actor_type="User"),s.createFragment(n)},updateVaccine:function updateVaccine(t,e,a){var n=c.actor||t,i={addon:"vitals_immunisations",kind:"VitalsImmunisationsVaccine",with_filters:!0,start_at:new Date(a.scheduledDate).toJSON(),tags:[{context:"members",name:n.first_name+" "+n.last_name,user_id:n.id}],filters:[{context:"members",name:n.first_name+" "+n.last_name,user_id:n.id}],data:JSON.stringify(a)};return c.actorId&&(i.actor_id=c.actorId,i.actor_type="User"),s.updateFragment(e,i)},deleteVaccine:function deleteVaccine(t,e){return s.deleteFragment(e)},getSettings:function getSettings(t){return s.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"GET",cache:!1}).then(function(t){return t?t.data?t.data:null:t})},saveSettings:function saveSettings(t,e){return void 0===e&&(e={}),s.call({endpoint:"addons/"+t+"/install/settings/addonSettings",method:"PUT",data:{data:JSON.stringify(e)}})}},t={render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("f7-page",{class:"vitals-elment-index-page vitals-"+a.vitalsElement+"-index-page",attrs:{id:"vitals_element__index"},on:{"page:beforein":a.onPageBeforeIn,"page:beforeout":a.onPageBeforeOut},nativeOn:{"!scroll":function(t){return a.onPageScroll(t)}}},[n("f7-navbar",[n("tommy-nav-menu"),a._v(" "),n("f7-nav-title",[a._v(a._s(a.t("title")))]),a._v(" "),n("f7-nav-right",[n("f7-link",{attrs:{href:"/"+a.addon+"/settings/","icon-only":""}},[n("i",{class:"icon vitals-element-icon-settings vitals-"+a.vitalsElement+"-icon-settings"})]),a._v(" "),n("f7-link",{attrs:{href:"/"+a.addon+"/history/","icon-only":""}},[n("i",{class:"icon vitals-element-icon-chart vitals-"+a.vitalsElement+"-icon-chart"})])],1)],1),a._v(" "),n("f7-fab",{class:"vitals-element-fab vitals-"+a.vitalsElement+"-fab",attrs:{href:"/"+a.addon+"/add/"}},[n("f7-icon",{attrs:{f7:"add"}})],1),a._v(" "),n("div",{class:"vitals-element-index-header vitals-"+a.vitalsElement+"-index-header"},[n("div",{class:"vitals-element-index-header-icon vitals-"+a.vitalsElement+"-index-header-icon"}),a._v(" "),a.data&&a.closestVaccine?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-date vitals-"+a.vitalsElement+"-index-header-date"},[a._v(a._s(a.t("next_label")))]),a._v(" "),n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.daysDiff(a.closestVaccine))),n("span",[a._v(a._s(a.t("days_label")))])]),a._v(" "),n("div",{class:"vitals-element-index-header-date vitals-"+a.vitalsElement+"-index-header-date"},[a._v(a._s(a.$moment(a.closestVaccine.data.scheduledDate||a.closestVaccine.data.sheduledDate).format("DD MMM YYYY"))+", "+a._s(a.closestVaccine.data.name))])]):a._e(),a._v(" "),a.data&&!a.closestVaccine?n("div",{class:"vitals-element-index-header-content vitals-"+a.vitalsElement+"-index-header-content"},[n("div",{class:"vitals-element-index-header-data vitals-"+a.vitalsElement+"-index-header-data"},[a._v(a._s(a.t("vital_label")))])]):a._e()]),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-no-data vitals-"+a.vitalsElement+"-index-no-data"},[n("i",{class:"vitals-element-index-no-data-img vitals-"+a.vitalsElement+"-index-no-data-img"}),a._v(" "),n("span",[a._v(a._s(a.t("not_available")))])]):a._e(),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-cards vitals-"+a.vitalsElement+"-index-cards"},a._l(a.orderedData,function(e){return n("a",{key:e.id,staticClass:"immunisations-card",attrs:{href:"#"},on:{click:function(t){a.$f7router.navigate("/vitals_immunisations/details/",{props:{vaccine:e}})}}},[n("div",{staticClass:"immunisations-card-icon",class:{injected:a.isInjected(e),overdue:a.isOverDue(e)}}),a._v(" "),n("div",{staticClass:"immunisations-card-content"},[n("div",{staticClass:"immunisations-card-name"},[a._v(a._s(e.data.name))]),a._v(" "),n("div",{staticClass:"immunisations-card-date"},[a._v(a._s(a.$moment(e.data.scheduledDate||e.data.sheduledDate).format("DD MMM, YYYY")))])]),a._v(" "),n("f7-icon",{attrs:{f7:"chevron_right"}})],1)})):a._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null}},mounted:function mounted(){var t=this;t.$f7route.query.actor_id?(c.actorId=parseInt(t.actorId,10),t.$api.getContact(t.actorId).then(function(t){c.actor=t})):(c.actorId=null,c.actor=null),t.getData(),t.$events.$on(t.addon+":updateRecords",t.getData)},beforeDestroy:function beforeDestroy(){var t=this;t.$events.$off(t.addon+":updateRecords",t.getData)},computed:{closestVaccine:function closestVaccine(){if(!this.data)return null;var a,t=[].concat(this.data);t.sort(function(t,e){return new Date(t.data.scheduledDate||t.data.sheduledDate).getTime()<new Date(e.data.scheduledDate||e.data.sheduledDate).getTime()?-1:1});var n=(new Date).getTime();return t.forEach(function(t){if(!a){var e=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime();n<e&&(a=t)}}),a},orderedData:function orderedData(){return this.data?this.data.sort(function(t,e){var a=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime();return new Date(e.data.scheduledDate||e.data.sheduledDate).getTime()<a?-1:1}):null}},methods:{t:function t(e,a){return this.$t(this.addon+".index."+e,a)},daysDiff:function daysDiff(t){var e=(new Date).getTime(),a=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime();return Math.ceil((a-e)/1e3/60/60/25)},isOverDue:function isOverDue(t){if(this.isInjected(t))return!1;var e=new Date,a=new Date(t.data.scheduledDate||t.data.sheduledDate);return e.getTime()>=a.getTime()},isInjected:function isInjected(t){return t.data.injected},checkReminders:function checkReminders(){var e=this;e.data.forEach(function(t){e.isOverDue(t)&&e.$f7.dialog.create({text:'\n            <div class="text-align-center">\n              <img src="'+e.$addonAssetsUrl+'remind.svg" height="85"/>\n            </div>\n            <p class="text-align-center">'+e.$t("vitals_immunisations.due_alert.text")+"<br><b>"+t.data.name+"</b></p>\n          ",buttons:[{text:e.$t("vitals_immunisations.due_alert.confirm_button")}]}).open()})},getData:function getData(){var e=this;c.getVaccines(e.$root.user).then(function(t){e.data=t.filter(function(t){return!t.data.archived}),e.checkReminders()})},onPageScroll:function onPageScroll(t){var e=this,a=e.$$(t.target).closest(".page-content");a.length&&(100<a[0].scrollTop?e.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"):e.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+e.vitalsElement+"-index-navbar"))},onPageBeforeIn:function onPageBeforeIn(){this.$f7router.view.$navbarEl.addClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")},onPageBeforeOut:function onPageBeforeOut(){this.$f7router.view.$navbarEl.removeClass("vitals-element-index-navbar vitals-"+this.vitalsElement+"-index-navbar")}}},e={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{class:"vitals-element-manual-add-page vitals-"+e.vitalsElement+"-manual-add-page",attrs:{id:"vitals_element__add"}},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.tAdd("title")))]),e._v(" "),a("f7-nav-right",[e.allowSave?a("f7-link",{attrs:{href:"#","icon-only":""},on:{click:e.save}},[a("i",{staticClass:"icon f7-icons"},[e._v("check")])]):e._e()],1)],1),e._v(" "),a("f7-list",{staticClass:"no-margin",attrs:{"no-hairlines":""}},[a("f7-list-input",{attrs:{type:"text","inline-label":"",value:e.name,label:e.tAdd("vaccine_label")},on:{input:function(t){e.name=t.target.value}}}),e._v(" "),a("f7-list-input",{attrs:{type:"text","inline-label":"","input-id":"date-input",label:e.tAdd("date_label")}}),e._v(" "),a("f7-list-item",{attrs:{divider:"",title:e.tDetails("prevent_disease_title")}}),e._v(" "),a("f7-list-input",{attrs:{type:"text",inputStyle:"text-align: left",value:e.prevent,placeholder:e.tDetails("prevent_disease_title")},on:{input:function(t){e.prevent=t.target.value}}}),e._v(" "),a("f7-list-item",{attrs:{divider:"",title:e.tDetails("precautions_title")}}),e._v(" "),a("f7-list-input",{attrs:{type:"textarea",resizable:"",inputStyle:"text-align: left",value:e.precautions,placeholder:e.tDetails("precautions_title")},on:{input:function(t){e.precautions=t.target.value}}})],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{name:"",prevent:"",precautions:"",scheduledDate:new Date}},computed:{allowSave:function allowSave(){return this.name&&0<this.name.length}},mounted:function mounted(){var a=this;a.$f7.calendar.create({inputEl:a.$el.querySelector("#date-input"),value:[a.scheduledDate],closeOnSelect:!0,on:{change:function change(t,e){a.scheduledDate=new Date(e[0]),a.scheduledDate.setHours(0,0,0,0)}}})},methods:{tAdd:function tAdd(t,e){return this.$t(this.addon+".add_vaccine."+t,e)},tDetails:function tDetails(t,e){return this.$t(this.addon+".immunisation_details."+t,e)},save:function save(){var t=this,e=t.name,a=t.scheduledDate,n=t.prevent,i=t.precautions;c.addVaccine(t.$root.user,{name:e,scheduledDate:new Date(a).toJSON(),prevent:n,precautions:i}).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})}}},a={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{class:"vitals-element-manual-add-page vitals-"+t.vitalsElement+"-manual-add-page vitals-"+t.vitalsElement+"-details-page",attrs:{id:"vitals_element__add"}},[a("f7-navbar",[a("tommy-nav-back"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.tDetails("title")))])],1),t._v(" "),a("f7-list",{staticClass:"no-margin",attrs:{"no-hairlines":""}},[a("f7-list-item",{attrs:{title:t.tDetails("vaccine_label"),after:t.name}}),t._v(" "),a("f7-list-item",{attrs:{title:t.tDetails("date_label"),after:t.$moment(t.scheduledDate).format("DD MMM, YYYY")}}),t._v(" "),a("f7-list-item",{attrs:{title:t.tDetails("status_label"),after:t.statusText()}}),t._v(" "),t.injected&&t.injectedDate?a("f7-list-item",{attrs:{title:t.tDetails("injection_date_label"),after:t.$moment(t.injectedDate).format("DD MMM, YYYY")}}):t._e(),t._v(" "),a("f7-list-item",{attrs:{divider:"",title:t.tDetails("prevent_disease_title")}}),t._v(" "),a("f7-list-item",[t._v(t._s(t.prevent))]),t._v(" "),a("f7-list-item",{attrs:{divider:"",title:t.tDetails("precautions_title")}}),t._v(" "),a("f7-list-item",[t._v(t._s(t.precautions))])],1),t._v(" "),t.archived?t._e():a("div",{staticClass:"immunisations-details-buttons"},[!t.injected&&t.isOverDue()?a("a",{staticClass:"immunisations-details-button-red",attrs:{href:"#"},on:{click:t.injectVaccine}},[t._v(t._s(t.tDetails("confirm_injection_button")))]):t._e(),t._v(" "),a("a",{attrs:{href:"#"},on:{click:t.archiveVaccine}},[t._v(t._s(t.tDetails("archive_button")))])]),t._v(" "),t.archived?a("div",{staticClass:"immunisations-details-buttons"},[a("a",{staticClass:"immunisations-details-button-red",attrs:{href:"#"},on:{click:t.deleteVaccine}},[t._v(t._s(t.$t("vitals_immunisations.archive.delete_button")))])]):t._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String,vaccine:Object},data:function data(){var t=this.vaccine.data,e=t.name,a=t.prevent,n=t.precautions,i=t.scheduledDate,s=t.sheduledDate,d=t.injected,l=t.injectedDate,r=t.archived;return{id:this.vaccine.id,name:e,prevent:a,precautions:n,scheduledDate:i||s,injected:d,injectedDate:l,archived:r}},mounted:function mounted(){var a=this;a.$f7.calendar.create({inputEl:a.$el.querySelector("#date-input"),value:[a.scheduledDate],closeOnSelect:!0,on:{change:function change(t,e){a.scheduledDate=new Date(e[0]),a.scheduledDate.setHours(0,0,0,0)}}})},methods:{tAdd:function tAdd(t,e){return this.$t(this.addon+".add_vaccine."+t,e)},tDetails:function tDetails(t,e){return this.$t(this.addon+".immunisation_details."+t,e)},statusText:function statusText(){var t=this;return t.injected?t.tDetails("status_options.1"):t.isOverDue()?t.tDetails("status_options.0"):t.tDetails("status_options.2")},isOverDue:function isOverDue(){if(this.injected)return!1;var t=new Date,e=new Date(this.scheduledDate||this.sheduledDate);return t.getTime()>=e.getTime()},archiveVaccine:function archiveVaccine(){var t=this,e=t.name,a=t.prevent,n=t.precautions,i=t.scheduledDate,s=t.injected,d=t.injectedDate;t.$f7.dialog.confirm(t.$t("vitals_immunisations.archive_delete_confirm_prompt.text"),function(){c.updateVaccine(t.$root.user,t.id,{name:e,prevent:a,precautions:n,scheduledDate:i,injected:s,injectedDate:d,archived:!0}).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})})},deleteVaccine:function deleteVaccine(){var t=this;t.$f7.dialog.confirm(t.$t("vitals_immunisations.archive_delete_confirm_prompt.text"),function(){c.deleteVaccine(t.$root.user,t.id).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})})},injectVaccine:function injectVaccine(){var l,r=this;var t=r.$f7.dialog.create({title:r.$t("vitals_immunisations.injection_confirm.date_label"),text:'<div class="immunisations-dialog-calendar"></div>',buttons:[{text:r.$t("vitals_immunisations.injection_confirm.cancel_button")},{text:r.$t("vitals_immunisations.injection_confirm.confirm_button"),bold:!0,onClick:function onClick(){!function inject(){r.injected=!0,r.injectedDate=l.value[0];var t=r.name,e=r.prevent,a=r.precautions,n=r.scheduledDate,i=r.injected,s=r.injectedDate,d=r.archived;c.updateVaccine(r.$root.user,r.id,{name:t,prevent:e,precautions:a,scheduledDate:n,injected:i,injectedDate:s.toJSON(),archived:d}).then(function(){r.$events.$emit(r.addon+":updateRecords"),r.$f7router.back()})}()}}]});t.open(),l=r.$f7.calendar.create({containerEl:t.$el.find(".immunisations-dialog-calendar"),value:[new Date]})},save:function save(){var t=this,e=t.name,a=t.scheduledDate,n=t.prevent,i=t.precautions;c.addVaccine(t.$root.user,{name:e,scheduledDate:new Date(a).toJSON(),prevent:n,precautions:i}).then(function(){t.$events.$emit(t.addon+":updateRecords"),t.$f7router.back()})}}},n={receiveMessage:!1},i=[{path:"/vitals_immunisations/",component:t},{path:"/vitals_immunisations/add/",component:e},{path:"/vitals_immunisations/details/",component:a},{path:"/vitals_immunisations/settings/",component:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{class:"vitals-element-settings-page vitals-"+t.vitalsElement+"-settings-page",attrs:{id:"vitals_element__settings"}},[a("f7-navbar",[a("tommy-nav-back"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.t("title")))])],1),t._v(" "),a("div",{class:"vitals-element-settings-header vitals-"+t.vitalsElement+"-settings-header"},[a("div",{class:"vitals-element-settings-icon vitals-"+t.vitalsElement+"-settings-icon"}),t._v(" "),a("div",{class:"vitals-element-settings-center-icon vitals-"+t.vitalsElement+"-settings-center-icon"})]),t._v(" "),a("div",{class:"vitals-element-settings-text vitals-"+t.vitalsElement+"-settings-text"},[a("p",[t._v(t._s(t.t("vital_text")))])]),t._v(" "),a("f7-list",{staticClass:"no-hairlines"},[a("f7-list-item",{attrs:{title:t.t("chat_label")}},[a("f7-toggle",{attrs:{slot:"after",checked:t.settings.receiveMessage},on:{"toggle:change":t.onMessagesChanges},slot:"after"})],1),t._v(" "),a("f7-list-item",{attrs:{link:"/vitals_immunisations/archive/",title:t.t("archive_label")}})],1)],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{settings:n}},mounted:function mounted(){var e=this;c.getSettings(e.addon).then(function(t){t&&(e.settings=t,n=e.settings)})},methods:{t:function t(e,a){return this.$t(this.addon+".settings."+e,a)},onMessagesChanges:function onMessagesChanges(t){this.settings.receiveMessage=t,n=this.settings,c.saveSettings(this.addon,this.settings)}}}},{path:"/vitals_immunisations/history/",component:{render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("f7-page",{class:"vitals-element-history-page vitals-"+a.vitalsElement+"-history-page"},[n("f7-navbar",[n("tommy-nav-back"),a._v(" "),n("f7-nav-title",[a._v(a._s(a.t("title","History")))])],1),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-no-data vitals-"+a.vitalsElement+"-index-no-data"},[n("i",{class:"vitals-element-index-no-data-img vitals-"+a.vitalsElement+"-index-no-data-img"}),a._v(" "),n("span",[a._v(a._s(a.t("not_available","When you have previous records, they will show here.")))])]):a._e(),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-cards vitals-"+a.vitalsElement+"-index-cards"},a._l(a.orderedData,function(e){return n("a",{key:e.id,staticClass:"immunisations-card",attrs:{href:"#"},on:{click:function(t){a.$f7router.navigate("/vitals_immunisations/details/",{props:{vaccine:e}})}}},[n("div",{staticClass:"immunisations-card-icon",class:{injected:a.isInjected(e),overdue:a.isOverDue(e)}}),a._v(" "),n("div",{staticClass:"immunisations-card-content"},[n("div",{staticClass:"immunisations-card-name"},[a._v(a._s(e.data.name))]),a._v(" "),n("div",{staticClass:"immunisations-card-date"},[a._v(a._s(a.$moment(e.data.scheduledDate||e.data.sheduledDate).format("DD MMM, YYYY")))])]),a._v(" "),n("f7-icon",{attrs:{f7:"chevron_right"}})],1)})):a._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null}},mounted:function mounted(){this.getData(),this.$events.$on(this.addon+":updateRecords",this.getData)},beforeDestroy:function beforeDestroy(){this.$events.$off(this.addon+":updateRecords",this.getData)},computed:{orderedData:function orderedData(){return this.data?this.data.sort(function(t,e){var a=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime();return new Date(e.data.scheduledDate||e.data.sheduledDate).getTime()<a?-1:1}):null}},methods:{t:function t(e,a){return this.$t(this.addon+".history."+e,a)},isOverDue:function isOverDue(t){if(this.isInjected(t))return!1;var e=new Date,a=new Date(t.data.scheduledDate||t.data.sheduledDate);return e.getTime()>=a.getTime()},isInjected:function isInjected(t){return t.data.injected},getData:function getData(){var e=this;c.getVaccines(e.$root.user).then(function(t){e.data=[],e.data=t.filter(function(t){var e=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime(),a=(new Date).getTime();return!t.data.archived&&e<a})})}}}},{path:"/vitals_immunisations/archive/",component:{render:function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("f7-page",{class:"vitals-"+a.vitalsElement+"-archive-page"},[n("f7-navbar",[n("tommy-nav-back"),a._v(" "),n("f7-nav-title",[a._v(a._s(a.t("title")))])],1),a._v(" "),a.data&&!a.data.length?n("div",{class:"vitals-element-index-no-data vitals-"+a.vitalsElement+"-index-no-data"},[n("i",{class:"vitals-element-index-no-data-img vitals-"+a.vitalsElement+"-index-no-data-img"})]):a._e(),a._v(" "),a.data&&a.data.length?n("div",{class:"vitals-element-index-cards vitals-"+a.vitalsElement+"-index-cards"},a._l(a.orderedData,function(e){return n("a",{key:e.id,staticClass:"immunisations-card",attrs:{href:"#"},on:{click:function(t){a.$f7router.navigate("/vitals_immunisations/details/",{props:{vaccine:e}})}}},[n("div",{staticClass:"immunisations-card-icon",class:{injected:a.isInjected(e),overdue:a.isOverDue(e)}}),a._v(" "),n("div",{staticClass:"immunisations-card-content"},[n("div",{staticClass:"immunisations-card-name"},[a._v(a._s(e.data.name))]),a._v(" "),n("div",{staticClass:"immunisations-card-date"},[a._v(a._s(a.$moment(e.data.scheduledDate||e.data.sheduledDate).format("DD MMM, YYYY")))])]),a._v(" "),n("f7-icon",{attrs:{f7:"chevron_right"}})],1)})):a._e()],1)},staticRenderFns:[],props:{addon:String,vitalsElement:String},data:function data(){return{data:null}},mounted:function mounted(){this.getData(),this.$events.$on(this.addon+":updateRecords",this.getData)},beforeDestroy:function beforeDestroy(){this.$events.$off(this.addon+":updateRecords",this.getData)},computed:{orderedData:function orderedData(){return this.data?this.data.sort(function(t,e){var a=new Date(t.data.scheduledDate||t.data.sheduledDate).getTime();return new Date(e.data.scheduledDate||e.data.sheduledDate).getTime()<a?-1:1}):null}},methods:{t:function t(e,a){return this.$t(this.addon+".archive."+e,a)},isOverDue:function isOverDue(t){if(this.isInjected(t))return!1;var e=new Date,a=new Date(t.data.scheduledDate||t.data.sheduledDate);return e.getTime()>=a.getTime()},isInjected:function isInjected(t){return t.data.injected},getData:function getData(){var e=this;c.getVaccines(e.$root.user).then(function(t){e.data=t.filter(function(t){return t.data.archived})})}}}}];return i.forEach(function(t){t.options={props:{addon:"vitals_immunisations",vitalsElement:"immunisations"}}}),i}();