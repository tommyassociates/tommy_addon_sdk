var addon=function(){var i=window.tommy.api,t=function getWaterTracker(t){return i.getFragments({addon:"vitals_water_tracker",kind:"VitalsWaterTrackerItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},a=function getTemperature(t){return i.getFragments({addon:"vitals_temperature",kind:"VitalsTemperatureItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},s=function getPedometer(t){return i.getFragments({addon:"vitals_pedometer",kind:"VitalsPedometerItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},r=function getHeight(t){return i.getFragments({addon:"vitals_height",kind:"VitalsHeightItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},l=function getWeight(t){return i.getFragments({addon:"vitals_weight",kind:"VitalsWeightItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},d=function getHeartRate(t){return i.getFragments({addon:"vitals_heart_rate",kind:"VitalsHeartRateItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},n=function getBloodPressure(t){return i.getFragments({addon:"vitals_blood_pressure",kind:"VitalsBloodPressureItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},c=function getBloodGlucose(t){return i.getFragments({addon:"vitals_blood_glucose",kind:"VitalsBloodGlucoseItem",with_filters:!0,with_permission_to:!0,user_id:t.id,page:1,limit:1,per:1},{cache:!1})},o=function getMedicationReminder(s){return new Promise(function(d,t){var e=i.getFragments({addon:"vitals_medication_reminder",kind:"VitalsMedicationReminderMedication",with_filters:!0,with_permission_to:!0,user_id:s.id},{cache:!1}),a=i.getFragments({addon:"vitals_medication_reminder",kind:"VitalsMedicationReminderTaken",with_filters:!0,with_permission_to:!0,user_id:s.id},{cache:!1});Promise.all([e,a]).then(function(t){var e=t[0],r=t[1],n={};e.forEach(function(e){var t,a=new Date(e.data.startDate);if(!(a.getTime()>(new Date).getTime())){var s=new Date(e.data.endDate);s.getTime()>(new Date).getTime()&&(s=new Date).setHours(0,0,0,0);for(var i=(s.getTime()-a.getTime())/864e5+1,r=0;r<i;r+=1){var l=new Date(a).getTime()+864e5*r,d=new Date(l).toJSON();n[d]||(n[d]=[]),(t=n[d]).push.apply(t,e.data.dosage.map(function(t){return{id:e.id,name:e.data.name,time:t.time}}))}}}),Object.keys(n).forEach(function(t){n[t].sort(function(t,e){return 60*parseInt(t.time.split(":")[0],10)+parseInt(t.time.split(":")[1],10)<60*parseInt(e.time.split(":")[0],10)+parseInt(e.time.split(":")[1],10)?-1:1})});var a=Object.keys(n).sort(function(t,e){return new Date(t).getTime()<new Date(e).getTime()?-1:1}),l=a[a.length-1],s=n[l],i=s.filter(function(a){var s,i=new Date(l);return i.setHours(0,0,0,0),r.forEach(function(t){if(!s){var e=new Date(t.data.date||t.start_at);e.setHours(0,0,0,0),a.id===t.data.medication_id&&a.time===t.data.time&&i.getTime()===e.getTime()&&t.data.taken&&(s=!0)}}),s});d({date:new Date(l),takenPercentage:Math.round(i.length/s.length*100)})})})},v={water_tracker:null,temperature:null,pedometer:null,height:null,weight:null,heart_rate:null,blood_pressure:null,blood_glucose:null,medication_reminder:null};return[{path:"/health_vitals/",component:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{attrs:{id:"health_vitals__index"}},[a("f7-navbar",[a("tommy-nav-menu"),t._v(" "),a("f7-nav-title",[t._v(t._s(t.t("title","Health Vitals")))])],1),t._v(" "),a("div",{staticClass:"health-vitals-cards"},[a("div",{staticClass:"health-vitals-card health-vitals-user-card"},[a("tommy-circle-avatar",{attrs:{data:t.$root.user}}),t._v(" "),a("div",{staticClass:"health-vitals-user-card-content"},[a("div",{staticClass:"name"},[t._v(t._s(t.$root.user.first_name)+" "+t._s(t.$root.user.last_name))]),t._v(" "),a("div",{staticClass:"props"},[t.userAge?a("div",{staticClass:"prop"},[a("div",{staticClass:"prop-label"},[t._v(t._s(t.t("profile_age_label")))]),t._v(" "),a("div",{staticClass:"prop-value"},[t._v(t._s(t.userAge))])]):t._e()])])],1),t._v(" "),t.blood_glucose?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.2")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.blood_glucose.date).format("DD MMM YYYY"))+" "+t._s(t.blood_glucose.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"blood-glucose-icon-"+t.blood_glucose.state+".svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.blood_glucose.value)+" "),a("sub",[t._v(t._s(t.t("blood_glucose_units")))])])])])]):t._e(),t._v(" "),t.water_tracker?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.4")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.water_tracker.date).format("DD MMM YYYY"))+" "+t._s(t.water_tracker.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[t.water_tracker.value<200?a("img",{attrs:{src:t.$addonAssetsUrl+"water-tracker-icon-cup.svg"}}):t.water_tracker.value<350?a("img",{attrs:{src:t.$addonAssetsUrl+"water-tracker-icon-glass.svg"}}):a("img",{attrs:{src:t.$addonAssetsUrl+"water-tracker-icon-bottle.svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.water_tracker.value)+" "),a("sub",[t._v(t._s(t.t("water_units.5")))])])])])]):t._e(),t._v(" "),t.medication_reminder?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.0")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.medication_reminder.date).format("DD MMM YYYY")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[100===t.medication_reminder.takenPercentage?a("img",{attrs:{src:t.$addonAssetsUrl+"icon-check.svg"}}):a("f7-gauge",{attrs:{size:46,value:t.medication_reminder.takenPercentage/100,"border-bg-color":"#FAE1C9","border-color":"#FF4500","border-width":8}})],1),t._v(" "),a("span",{staticClass:"health-vitals-card-icon-text"},[t._v(t._s(t.t("taken","Taken")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.medication_reminder.takenPercentage)+"%")])])])]):t._e(),t._v(" "),t.temperature?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.5")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.temperature.date).format("DD MMM YYYY"))+" "+t._s(t.temperature.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"temperature-icon.svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.temperature.value)+" "),a("sub",[t._v(t._s(t.t("body_temperature_units.0")))])])])])]):t._e(),t._v(" "),t.pedometer?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.6")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.pedometer.date).format("DD MMM YYYY"))+" "+t._s(t.pedometer.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"pedometer-icon.svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.pedometer.value)+" "),a("sub",[t._v(t._s(t.t("pedometer_units")))])])])])]):t._e(),t._v(" "),t.height?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.7")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.height.date).format("DD MMM YYYY"))+" "+t._s(t.height.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"height-icon.svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.height.value)+" "),a("sub",[t._v(t._s(t.t("height_units.0")))])])])])]):t._e(),t._v(" "),t.heart_rate?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.3")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.heart_rate.date).format("DD MMM YYYY"))+" "+t._s(t.heart_rate.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"heart-rate-icon-"+t.heart_rate.state+".svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.heart_rate.value)+" "),a("sub",[t._v(t._s(t.t("heart_rate_units")))])])])])]):t._e(),t._v(" "),t.blood_pressure?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.1")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.blood_pressure.date).format("DD MMM YYYY"))+" "+t._s(t.blood_pressure.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.blood_pressure.value[0])+"/"+t._s(t.blood_pressure.value[1]))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[a("sub",[t._v(t._s(t.t("blood_pressure_units")))])])])])]):t._e(),t._v(" "),t.weight?a("div",{staticClass:"health-vitals-card"},[a("div",{staticClass:"health-vitals-card-title"},[t._v(t._s(t.t("vital_types.8")))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard"},[a("div",{staticClass:"health-vitals-subcard-title"},[t._v(t._s(t.$moment(t.weight.date).format("DD MMM YYYY"))+" "+t._s(t.weight.time))]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-content"},[a("div",{staticClass:"health-vitals-card-icon"},[a("img",{attrs:{src:t.$addonAssetsUrl+"weight-icon.svg"}})]),t._v(" "),a("div",{staticClass:"health-vitals-subcard-value"},[t._v(t._s(t.weight.value)+" "),a("sub",[t._v(t._s(t.t("weight_units.0")))])])])])]):t._e()])],1)},staticRenderFns:[],data:function data(){return{water_tracker:v.water_tracker,temperature:v.temperature,pedometer:v.pedometer,height:v.height,weight:v.weight,heart_rate:v.heart_rate,blood_pressure:v.blood_pressure,blood_glucose:v.blood_glucose,medication_reminder:v.medication_reminder}},mounted:function mounted(){this.getData()},computed:{userAge:function userAge(){var t=this.$root.user.dob;if(t){var e=this.$moment(new Date(t));return this.$moment(new Date).diff(e,"years")}}},methods:{t:function t(e,a){return this.$t("health_vitals.index."+e,a)},getData:function getData(){var e=this;t(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.water_tracker=t[0].data,v.water_tracker=e.water_tracker)}),a(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.temperature=t[0].data,v.temperature=e.temperature)}),s(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.pedometer=t[0].data,v.pedometer=e.pedometer)}),r(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.height=t[0].data,v.height=e.height)}),l(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.weight=t[0].data,v.weight=e.weight)}),d(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.heart_rate=t[0].data,v.heart_rate=e.heart_rate)}),n(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.blood_pressure=t[0].data,v.blood_pressure=e.blood_pressure)}),c(e.$root.user).then(function(t){t&&t.length&&t[0].data&&(e.blood_glucose=t[0].data,v.blood_glucose=e.blood_glucose)}),o(e.$root.user).then(function(t){t&&(e.medication_reminder=t,v.medication_reminder=e.medication_reminder)})}}}}]}();