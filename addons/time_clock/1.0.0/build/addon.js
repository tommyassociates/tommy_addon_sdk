var addon=function(){window.tommy.api;var t=function activeGet(){return generateTest(1)},a=function detailGet(){return generateTest(1)},i=function eventsGet(){return generateTest(25)},n=function teamGet(){return generateTest(3)};function generateTest(o){var n={name:"Mason Fok",image:"data:image/png;base64,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",date:"2011-10-05T14:48:00.000Z",event:"1",latitude:"51.760962",longitude:"55.108244"};return new Promise(function(t,e){for(var a=new Array,i=0;i<o;i++)n.id=Math.floor(1e3*Math.random()),a.push(n);t(a)})}function normalizeComponent(t,e,a,i,o,n,c,l,r,s){"boolean"!=typeof c&&(r=l,l=c,c=!1);var d,u="function"==typeof a?a.options:a;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),i&&(u._scopeId=i),n?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,r(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},u._ssrRegister=d):e&&(d=c?function(t){e.call(this,s(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,l(t))}),d)if(u.functional){var m=u.render;u.render=function renderWithStyleInjection(t,e){return d.call(e),m(t,e)}}else{var v=u.beforeCreate;u.beforeCreate=v?[].concat(v,d):[d]}return a}function f(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"time-clock-circle-avatar"},[a._l(a.data,function(t,e){return i("div",{key:"avatar_"+e,staticClass:"container"},[i("div",{staticClass:"image",style:{backgroundImage:"url("+t.image+")"}}),a._v(" "),i("div",{staticClass:"name"},[a._v(a._s(t.name))])])}),a._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"image more"}),a._v(" "),i("div",{staticClass:"name more"},[a._v(a._s(a.$t("time_clock.index.more_button")))])])],2)}var e={name:"CircleAvatar",props:{data:{type:Array,default:function(){return[]}}}};f._withStripped=!0;function o(){var a=this,t=a.$createElement,i=a._self._c||t;return i("f7-list",{class:[a.active?"active":"","time-clock-list"],attrs:{"media-list":""}},a._l(a.data,function(e,t){return i("f7-list-item",{key:"event_"+t,attrs:{title:e.name,link:"","no-chevron":""},on:{click:function(t){return a.goToDetails(e.id)}}},[i("div",{staticClass:"time-clock-item-image",style:{backgroundImage:"url("+e.image+")"},attrs:{slot:"media"},slot:"media"}),a._v(" "),i("div",{staticClass:"description"},[a._v(a._s(e.coordinate))]),a._v(" "),i("div",{staticClass:"time",attrs:{slot:"content-end"},slot:"content-end"},[a._v("\n      "+a._s(a.$moment(new Date(e.date)).format("HH:mm"))+"\n      "),i("br"),a._v("\n      "+a._s(a.$t("time_clock.index.clock_event_options")[e.event])+"\n    ")])])}),1)}var c=normalizeComponent({render:f,staticRenderFns:[]},void 0,e,void 0,!1,void 0,!1,void 0,void 0,void 0),l={nane:"Events",props:{data:{type:Array,default:[]},active:{type:Boolean,default:!1}},methods:{goToDetails:function goToDetails(t){this.active||this.$f7router.navigate("/time-clock/detail/"+t)}}};o._withStripped=!0;function E(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-popup",{ref:"cameraPopup",staticClass:"time-clock-camera-popup",on:{"popup:opened":t.popupCameraOpened,"popup:open":t.popupCameraOpen,"popup:close":t.popupCameraClose,"popup:closed":t.popupCameraClosed}},[a("f7-page",{attrs:{"page-content":!1}},[a("f7-navbar",[t.geolocation?a("f7-nav-left",[a("div",{staticClass:"geo-icon"}),t._v(" "),a("div",{staticClass:"coords"},[t._v(t._s(t.geoCoordinates))])]):t._e()],1),t._v(" "),a("f7-toolbar",[a("f7-button",{staticClass:"go-back",on:{click:t.goBack}}),t._v(" "),t.photo_taken?t._e():a("f7-button",{staticClass:"shoot",on:{click:t.takePhoto}}),t._v(" "),t.photo_taken?a("f7-button",{staticClass:"send",on:{click:t.sendPhoto}}):t._e(),t._v(" "),t.photo_taken?a("f7-button",{staticClass:"reshoot",on:{click:t.reShoot}}):t._e(),t._v(" "),t.photo_taken?t._e():a("div",{staticClass:"empty-button"})],1),t._v(" "),a("f7-page-content",[a("div",{staticClass:"image-camera-container",style:t.imageContainerStyle},[t.cordova||t.photo_taken?t._e():a("input",{ref:"inputFile",attrs:{type:"file",multiple:!1,accept:"image/*"},on:{change:t.onFilesChange}})])])],1)],1)}var r=normalizeComponent({render:o,staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0),s={name:"TakePhoto",mixins:[normalizeComponent({},void 0,{methods:{resizeImage:function resizeImage(l,r,s){void 0===r&&(r=1080),void 0===s&&(s=1080);var d=new Image;return d.src=l,new Promise(function(c){d.onload=function(){if(d.height<=s&&d.width<=r)c(l);else{d.height>d.width?r=Math.floor(s*(d.width/d.height)):s=Math.floor(r*(d.height/d.width));var t=document.createElement("canvas"),e=t.getContext("2d");t.width=d.width,t.height=d.height,e.drawImage(d,0,0,t.width,t.height);for(var a={width:Math.floor(d.width),height:Math.floor(d.height)},i={width:null,height:null};.5*a.width>r;)i.width=Math.floor(.5*a.width),i.height=Math.floor(.5*a.height),e.drawImage(t,0,0,a.width,a.height,0,0,i.width,i.height),a.width=i.width,a.height=i.height;var o=document.createElement("canvas"),n=o.getContext("2d");o.width=r,o.height=s,n.drawImage(t,0,0,a.width,a.height,0,0,r,s),c(o.toDataURL("image/jpeg",.85))}}})}}},void 0,void 0,void 0,!1,void 0,void 0,void 0)],props:{geolocation:{type:Boolean,default:!1}},methods:{open:function open(){this.$refs.cameraPopup.open()},takePhoto:function takePhoto(){this.cordova||this.$refs.inputFile.click()},reShoot:function reShoot(){this.photo_taken=!1,this.photo=null},goBack:function goBack(){this.$refs.cameraPopup.close()},sendPhoto:function sendPhoto(){this.$emit("camera:send",this.photo),this.$refs.cameraPopup.close()},popupCameraOpened:function popupCameraOpened(){this.$emit("popup:opened")},popupCameraOpen:function popupCameraOpen(){this.$emit("popup:open")},popupCameraClose:function popupCameraClose(){this.$emit("popup:close")},popupCameraClosed:function popupCameraClosed(){this.$emit("popup:closed"),this.clean()},clean:function clean(){this.photo_taken=!1,this.photo=null,this.geo=null},onFilesChange:function onFilesChange(t){var i=this,o=t.target.files;if(o.length){function qc(t){var e=o[t],a=new FileReader;a.onload=function(){i.photo_taken=!0,i.resizeImage(a.result).then(function(t){i.photo_taken=!0,i.photo=t})},a.readAsDataURL(e)}for(var e=0;e<o.length;e+=1)qc(e)}}},computed:{imageContainerStyle:function imageContainerStyle(){return this.photo?{backgroundImage:'url("'+this.photo+'")'}:null},geoCoordinates:function geoCoordinates(){}},data:function data(){return{photo_taken:!1,photo:null,geo:null,cordova:this.$f7.device.cordova}}};E._withStripped=!0;function N(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{staticClass:"time-clock-main-page",attrs:{"page-content":!1}},[a("f7-navbar",[a("tommy-nav-menu"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.$t("time_clock.index.title")))]),t._v(" "),a("f7-nav-right",{staticClass:"time-clock-navbar-links"},[a("f7-link",{attrs:{href:"/time-clock/search/","icon-only":""}},[a("f7-icon",{attrs:{f7:"search"}})],1),t._v(" "),a("f7-link",{attrs:{href:"/time-clock/settings/","icon-only":""}},[a("f7-icon",{attrs:{f7:"gear"}})],1)],1)],1),t._v(" "),a("f7-toolbar",{staticClass:"time-clock-main-toolbar",style:t.toolbarStyle},[t.clock_on||t.break_on?t._e():a("f7-button",{staticClass:"time-clock-toolbar-button clock-on",attrs:{raised:"",fill:""},on:{click:t.clockOnClick}},[t._v(t._s(t.$t("time_clock.index.clock_on_button")))]),t._v(" "),t.clock_on&&!t.break_on?a("f7-button",{staticClass:"time-clock-toolbar-button clock-off",attrs:{raised:"",fill:""},on:{click:t.clockOffClick}},[t._v(t._s(t.$t("time_clock.index.clock_off_button")))]):t._e(),t._v(" "),t.clock_on&&!t.break_on?a("f7-button",{staticClass:"time-clock-toolbar-button break-on",attrs:{raised:"",fill:""},on:{click:t.breakOnClick}},[t._v(t._s(t.$t("time_clock.index.break_on_button")))]):t._e(),t._v(" "),t.break_on?a("f7-button",{staticClass:"time-clock-toolbar-button break-off",attrs:{raised:"",fill:""},on:{click:t.breakOffClick}},[t._v(t._s(t.$t("time_clock.index.break_off_button")))]):t._e()],1),t._v(" "),a("f7-page-content",{style:t.pageContentStyle},[a("f7-block-title",{staticClass:"time-clock-divider"},[t._v(t._s(t.$t("time_clock.index.active_title")))]),t._v(" "),t.clock_on?a("div",{staticClass:"time-clock-active"},[a("f7-list",{staticClass:"time-clock-list",attrs:{"media-list":""}},[a("Events",{attrs:{data:t.active_data,active:!0}})],1)],1):t._e(),t._v(" "),t.clock_on?t._e():a("div",{staticClass:"time-clock-active"},[a("div",{staticClass:"time-clock-avatars-container"},[a("Active-avatar",{attrs:{data:t.team_data}})],1)]),t._v(" "),a("f7-block-title",{staticClass:"time-clock-divider"},[t._v(t._s(t.$t("time_clock.index.today_title")))]),t._v(" "),a("Events",{attrs:{data:t.events_data}})],1),t._v(" "),a("CameraPopup",{ref:"cameraPopup",attrs:{geolocation:!0},on:{"camera:send":t.getPhotoCamera,"popup:close":t.popupCameraClose}})],1)}var d=normalizeComponent({render:E,staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0),u={name:"TimeClock",components:{ActiveAvatar:c,Events:r,CameraPopup:d},data:function data(){return{clock_on:!1,break_on:!1,active_data:[],events_data:[],team_data:[]}},created:function created(){},computed:{pageContentStyle:function pageContentStyle(){return this.clock_on&&!this.break_on?{paddingBottom:"136px"}:{paddingBottom:"74px"}},toolbarStyle:function toolbarStyle(){return this.clock_on&&!this.break_on?{height:"136px"}:{height:"74px"}}},methods:{getPhotoCamera:function getPhotoCamera(){},clockOnClick:function clockOnClick(){var t=this;t.$refs.cameraPopup.open(),t.$refs.cameraPopup.$once("camera:send",function(){t.clock_on=!0})},clockOffClick:function clockOffClick(){var t=this;t.$refs.cameraPopup.open(),t.$refs.cameraPopup.$once("camera:send",function(){t.clock_on=!1})},breakOnClick:function breakOnClick(){var t=this;t.$refs.cameraPopup.open(),t.$refs.cameraPopup.$once("camera:send",function(){t.break_on=!0})},breakOffClick:function breakOffClick(){var t=this;t.$refs.cameraPopup.open(),t.$refs.cameraPopup.$once("camera:send",function(){t.break_on=!1})},popupCameraClose:function popupCameraClose(){this.$refs.cameraPopup.$off("camera:send")}},beforeDestroy:function beforeDestroy(){},mounted:function mounted(){var e=this;t().then(function(t){return e.active_data=t}),n().then(function(t){return e.team_data=t}),i().then(function(t){return e.events_data=t})}};N._withStripped=!0;function W(){var t=this.$createElement;return(this._self._c||t)("div")}var m=normalizeComponent({render:N,staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0),v={};W._withStripped=!0;function ra(){var a=this,t=a.$createElement,i=a._self._c||t;return i("f7-page",{staticClass:"time-clock-detail-page",on:{"page:beforeremove":a.onPageBeforeRemove,"page:beforeout":a.onPageBeforeOut}},[i("f7-navbar",[i("tommy-nav-back"),a._v(" "),i("f7-nav-title",[a._v(a._s(a.$t("time_clock.event_details.title")))]),a._v(" "),i("f7-nav-right",{staticClass:"whs-navbar-links"},[a.edit_acces?i("f7-link",{attrs:{"icon-only":""},on:{click:a.editActivity}},[i("f7-icon",{attrs:{f7:"check"}})],1):a._e()],1)],1),a._v(" "),a.edit_acces?i("f7-toolbar",[i("f7-button",{on:{click:function(t){return a.deleteClick()}}},[a._v(a._s(a.$t("time_clock.event_details.delete_button")))])],1):a._e(),a._v(" "),a.loaded?i("f7-list",{attrs:{"media-list":""}},[i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.time_label"),link:a.edit_acces},on:{click:function(t){return a.openTimePicker()}}},[i("div",{attrs:{slot:"after"},slot:"after"},[i("input",{attrs:{type:"text",id:"timePicker",readonly:""}})])]),a._v(" "),i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.date_label"),link:a.edit_acces,after:a.dateField},on:{click:function(t){return a.openCalendar()}}}),a._v(" "),i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.who_label"),link:a.edit_acces},on:{click:function(t){return a.openSelector()}}},[i("div",{staticClass:"after-container",attrs:{slot:"after"},slot:"after"},[i("div",{staticClass:"name"},[a._v(a._s(a.nameWho))]),a._v(" "),i("div",{staticClass:"image",style:a.imageWho})])]),a._v(" "),i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.where_label"),link:a.edit_acces,after:a.geoCoordinatesField},on:{click:a.openMapPage}}),a._v(" "),i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.photo_label"),link:a.edit_acces},on:{click:function(t){return a.openCamera()}}},[i("div",{staticClass:"after-container",attrs:{slot:"after"},slot:"after"},[i("div",{staticClass:"image",style:a.imageWho})])]),a._v(" "),i("f7-list-item",{attrs:{title:a.$t("time_clock.event_details.action_label"),link:a.edit_acces,"sheet-open":".time-clock-action-sheet",after:a.actionField},on:{click:function(t){a.sheet_action_opened=!0}}})],1):a._e(),a._v(" "),i("CameraPopup",{ref:"cameraPopup",on:{"camera:send":a.getPhotoCamera}}),a._v(" "),i("f7-sheet",{ref:"actionSheet",staticClass:"time-clock-action-sheet"},[i("f7-toolbar",[i("div",{staticClass:"left"},[i("f7-link",{staticClass:"cancel",attrs:{"sheet-close":""},on:{click:a.clearAction}},[a._v(a._s(a.$t("time_clock.event_details.cancel_button")))])],1),a._v(" "),i("div",{staticClass:"right"},[i("f7-link",{attrs:{"sheet-close":""},on:{click:a.setAction}},[a._v(a._s(a.$t("time_clock.event_details.done_button")))])],1)]),a._v(" "),i("f7-page-content",[i("f7-list",a._l(a.actionListCounter,function(e){return i("f7-list-item",{key:"action_list_"+e,ref:"actionList",refInFor:!0,attrs:{radio:"",checked:a.detail_data.event==e-1,title:a.$t("time_clock.index.clock_event_options")[e-1],name:"time-clock-detail-action",value:e-1},on:{change:function(t){return a.changeAction(e-1)}}})}),1)],1)],1)],1)}var p=normalizeComponent({render:W,staticRenderFns:[]},void 0,v,void 0,!1,void 0,!1,void 0,void 0,void 0),h={name:"DetailActivity",mixins:[normalizeComponent({},void 0,{methods:{alertDialog:function alertDialog(t,e,a,i){void 0===i&&(i=null),this.$f7.dialog.create({title:t,text:e,cssClass:i,buttons:[{text:a,cssClass:"dialog-button-bold",keyCodes:[13]}]}).open()},confirmDialog:function confirmDialog(t,e,a,i,o,n,c,l,r){void 0===c&&(c=null),void 0===l&&(l=!1),void 0===r&&(r=!0),this.$f7.dialog.create({title:t,text:e,cssClass:c,buttons:[{text:i,bold:l,keyCodes:[27],onClick:function(){"function"==typeof n&&n()}},{text:a,bold:r,keyCodes:[13],onClick:function(){"function"==typeof o&&o()}}]}).open()}}},void 0,void 0,void 0,!1,void 0,void 0,void 0),normalizeComponent({},void 0,{methods:{openTimePicker:function openTimePicker(){this.timePickerInstance.open()},createTimePicker:function createTimePicker(t){for(var a=this,e=new Date(t),i=[],o=[],n=0;n<=23;n+=1)i.push(n);for(var c=0;c<=59;c+=1)o.push(c);this.timePickerInstance=this.$f7.picker.create({inputEl:"#timePicker",toolbar:!0,rotateEffect:!1,sheetPush:!0,openIn:"popover",formatValue:function(t){return t[1]<10?t[0]+":0"+t[1]:t[0]+":"+t[1]},value:[e.getHours(),e.getMinutes()],cols:[{values:i},{divider:!0,content:":"},{values:o,displayValues:o.map(function(t){return t<10?"0"+t:t})}]}),this.timePickerInstance.on("close",function(){var t=a,e=new Date(t.detail_data.date);e.setUTCHours(t.timePickerInstance.value[0]),e.setUTCMinutes(t.timePickerInstance.value[1]),e=e.toISOString(),t.detail_data.date=e})}}},void 0,void 0,void 0,!1,void 0,void 0,void 0)],components:{CameraPopup:d},methods:{changeAction:function changeAction(t){this.new_action=t},setAction:function setAction(){null!==this.new_action&&(this.detail_data.event=String(this.new_action))},clearAction:function clearAction(){this.new_action=null},getPhotoCamera:function getPhotoCamera(){},openMapPage:function openMapPage(){var t=this;t.$f7router.navigate("/time-clock/map/",{props:{edit:t.edit_acces,latitude:t.detail_data.latitude,longitude:t.detail_data.longitude,callback:t.editCoordinates}})},editCoordinates:function editCoordinates(t,e){console.log("TCL: editCoordinates -> longitude",e),console.log("TCL: editCoordinates -> latitude",t)},openCamera:function openCamera(){this.$refs.actionSheet.close(),this.$refs.cameraPopup.open()},openSelector:function openSelector(){this.$f7router.navigate("/time-clock/select-picker/",{props:{selected:[{id:3}],pageTitle:this.$t("time_clock.event_details.who_label"),multiply:!1,getData:this.getDataUser,type:"team",onChange:function onChange(){}}})},getDataUser:function getDataUser(e){e.$api.getCurrentTeamMembers({cache:!0}).then(function(t){t.forEach(function(t,e){t.context="members"}),Object.assign(e.targets,t),e.loaded=!0,e.createSearchbar()})},editActivity:function editActivity(){edit_acces},deleteActivity:function deleteActivity(){edit_acces},deleteClick:function deleteClick(){var t=this;t.confirmDialog(!1,t.$t("time_clock.event_details.delete_text"),t.$t("time_clock.event_details.confirm_button"),t.$t("time_clock.event_details.cancel_button"),t.deleteActivity,!1,null,!0,!1)},openCalendar:function openCalendar(){this.calendarInstance.open()},createCalendar:function createCalendar(){var a=this,t=new Date(a.detail_data.date);a.calendarInstance=a.$f7.calendar.create({value:[t],openIn:"customModal",backdrop:!0,closeOnSelect:!0,on:{change:function change(t,e){a.detail_data.date=new Date(e[0]).toISOString()}}})},onPageBeforeOut:function onPageBeforeOut(){this.$refs.actionSheet.close()},onPageBeforeRemove:function onPageBeforeRemove(){this.$refs.actionSheet.$destroy()}},computed:{actionField:function actionField(){return this.detail_data?this.$t("time_clock.index.clock_event_options")[this.detail_data.event]:null},dateField:function dateField(){return this.detail_data?this.$moment(new Date(this.detail_data.date)).format("DD MMM YYYY"):null},timeField:function timeField(){return this.detail_data?this.$moment(new Date(this.detail_data.date)).format("HH:mm"):null},geoCoordinatesField:function geoCoordinatesField(){return this.detail_data?this.detail_data.latitude+" "+this.detail_data.longitude:null},nameWho:function nameWho(){return this.detail_data?this.detail_data.name:null},imageWho:function imageWho(){return this.detail_data?{backgroundImage:"url("+this.detail_data.image+")"}:null}},mounted:function mounted(){var e=this;a(e.edit_id).then(function(t){e.detail_data=t[0],e.loaded=!0,e.actionListCounter=4,e.createCalendar(),e.createTimePicker(e.detail_data.date)})},created:function created(){},data:function data(){return{actionListCounter:0,sheet_action_opened:!1,new_action:null,edit_id:this.$f7route.params.id,edit_acces:!0,detail_data:null,loaded:!1}}};ra._withStripped=!0;function Aa(){var t=this.$createElement;return(this._self._c||t)("div")}var g=normalizeComponent({render:ra,staticRenderFns:[]},void 0,h,void 0,!1,void 0,!1,void 0,void 0,void 0),k={};Aa._withStripped=!0;function Ja(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"main-list-container"},[a.loaded?[0<Object.keys(a.data).length?i("f7-list",{staticClass:"time-clock-select-list searchbar-found",attrs:{"media-list":"",id:"time-clock-select-"+a.type}},a._l(a.data,function(e,t){return i("f7-list-item",{key:a.type+"_"+t,attrs:{checkbox:a.multiply,radio:!a.multiply,name:"time-clock-select-list-item",checked:a.checkId(e),title:e.name||e.first_name+" "+e.last_name},on:{change:function(t){return a.toggleItem(e,t.target.checked)}}},[i("div",{staticClass:"time-clock-item-image",style:[e.icon_url?{"background-image":"url("+e.icon_url+")"}:""],attrs:{slot:"media"},slot:"media"})])}),1):a._e()]:a._e(),a._v(" "),a.loaded?a._e():[i("div",{staticStyle:{background:"#fff"}},[i("f7-list",{staticClass:"time-clock-list time-clock-select-list skeleton-text skeleton-effect-blink",attrs:{"media-list":""}},a._l(a.skeleton_count,function(t){return i("f7-list-item",{key:"skeleton"+a.type+"_"+t},[i("div",{staticClass:"item-title",staticStyle:{color:"#ccc !important"}},[a._v("_______________")]),a._v(" "),i("div",{staticClass:"time-clock-item-image",attrs:{slot:"media"},slot:"media"}),a._v(" "),i("div",{staticClass:"time-clock-item-row"},[a._v("_______________")])])}),1)],1)]],2)}var C=normalizeComponent({render:Aa,staticRenderFns:[]},void 0,k,void 0,!1,void 0,!1,void 0,void 0,void 0),_={name:"MainList",props:{type:String,data:Object,selected:Array,multiply:Boolean,loaded:{type:Boolean,default:!1},skeleton_count:{type:Number,default:5}},methods:{toggleItem:function toggleItem(t,e){self=this,self.$emit("change",{target:t,checked:e})},checkId:function checkId(e){return void 0!==this.selected&&0<this.selected.filter(function(t){return t.id===e.id&&t.pseudo_type===e.pseudo_type}).length}},data:function data(){return{}}};Ja._withStripped=!0;function Sa(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",[a("f7-navbar",[a("tommy-nav-back"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.pageTitle))]),t._v(" "),a("f7-subnavbar",{attrs:{inner:!1}},[a("f7-searchbar",{attrs:{init:!1}})],1)],1),t._v(" "),a("select-list",{attrs:{type:t.type,data:t.targets,loaded:t.loaded,selected:t.selected,multiply:t.multiply,image_link:t.image_link},on:{change:t.selectChanget}})],1)}var S=normalizeComponent({render:Ja,staticRenderFns:[]},void 0,_,void 0,!1,void 0,!1,void 0,void 0,void 0),y={props:{selected:Array,onChange:Function,getData:Function,pageTitle:String,type:String,multiply:Boolean,image_link:String},components:{"select-list":S},mounted:function mounted(){this.getData(this)},methods:{createSearchbar:function createSearchbar(){var t=this;t.$nextTick(function(){t.$f7.searchbar.create({el:".searchbar",searchContainer:"#time-clock-select-"+t.type,searchIn:".item-title"})})},selectChanget:function selectChanget(t){this.onChange(t.target,t.checked)}},data:function data(){return{targets:{},loaded:!1}}};Sa._withStripped=!0;function _a(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{staticClass:"time-clock-map-page"},[a("f7-navbar",[a("tommy-nav-back"),e._v(" "),a("f7-nav-title",[e._v(e._s(e.$t("time_clock.event_details.where_label")))]),e._v(" "),a("f7-nav-right",{staticClass:"whs-navbar-links"},[e.edit||e.justAdd?a("f7-link",{attrs:{"icon-only":""},on:{click:e.editGeo}},[a("f7-icon",{attrs:{f7:"check"}})],1):e._e()],1)],1),e._v(" "),a("f7-list",{attrs:{"media-list":"","inline-labels":""}},[a("f7-list-input",{attrs:{label:"Latitude",type:"number",readonly:!e.edit,value:e.new_latitude,step:"0.000001"},on:{input:function(t){e.new_latitude=t.target.value}}}),e._v(" "),a("f7-list-input",{attrs:{label:"Latitude",type:"number",readonly:!e.edit,value:e.new_longitude,step:"0.000001"},on:{input:function(t){e.new_longitude=t.target.value}}})],1),e._v(" "),a("div",{staticClass:"map-conainer"})],1)}var b=normalizeComponent({render:Sa,staticRenderFns:[]},void 0,y,void 0,!1,void 0,!1,void 0,void 0,void 0),P={name:"Map",props:{edit:Boolean,latitude:String,longitude:String,callback:Function,justAdd:{type:Boolean,default:!1}},methods:{editGeo:function editGeo(){},updateGeoMap:function updateGeoMap(){}},data:function data(){return{new_latitude:Number(this.latitude),new_longitude:Number(this.longitude)}}};_a._withStripped=!0;return[{path:"/time-clock/",component:m},{path:"/time-clock/settings/",component:p},{path:"/time-clock/detail/:id",component:g},{path:"/time-clock/search/",component:C},{path:"/time-clock/select-picker/",component:b},{path:"/time-clock/map/",component:normalizeComponent({render:_a,staticRenderFns:[]},void 0,P,void 0,!1,void 0,!1,void 0,void 0,void 0)}]}();