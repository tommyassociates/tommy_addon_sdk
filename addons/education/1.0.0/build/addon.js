var addon=function(){function d(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{staticClass:"education-page education-splash-page",on:{"page:beforein":e.onBeforeIn,"page:beforeout":e.onBeforeOut}},[n("f7-navbar",[n("tommy-nav-menu"),e._v(" "),n("f7-nav-title",[e._v(e._s(e.$t("education.splash.title")))])],1),e._v(" "),n("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"/education/index/"},slot:"fixed"},[e._v(e._s(e.$t("education.continue_button")))]),e._v(" "),n("div",{staticClass:"education-splash-text"},[e._v(e._s(e.$t("education.splash.text")))])],1)}function s(){var n=this,e=n.$createElement,i=n._self._c||e;return i("f7-page",{staticClass:"education-page education-home-page"},[i("f7-navbar",[i("tommy-nav-menu"),n._v(" "),i("f7-nav-title",[n._v(n._s(n.$t("education.index.title")))])],1),n._v(" "),n.fragment?[n.currentCourse.locked?n._e():i("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){return n.openCourse(n.currentCourse)}},slot:"fixed"},[n._v(n._s(n.$t("education.continue_button")))]),n._v(" "),i("f7-swiper",{staticClass:"education-swiper",attrs:{params:{slidesPerView:"auto",touchMoveStopPropagation:!1}}},n._l(n.courses,function(t,e){return i("f7-swiper-slide",{key:e,staticClass:"education-swiper-slide",class:{"education-swiper-slide-active":n.currentCourseId===t.id,"education-swiper-slide-locked":t.locked}},[i("div",{staticClass:"education-swiper-slide-icon",on:{click:function(e){n.currentCourseId=t.id}}},[i("img",{attrs:{src:n.$addonAssetsUrl+"courses-icons/"+t.icon}})]),n._v(" "),i("div",{staticClass:"education-swiper-slide-name"},[n._v(n._s(t.indexName))])])}),1),n._v(" "),i("div",{staticClass:"education-course-content"},[i("div",{staticClass:"education-course-content-name"},[n._v(n._s(n.currentCourse.indexName))]),n._v(" "),i("div",{staticClass:"education-course-content-description",domProps:{innerHTML:n._s(n.currentCourse.indexDescription)}})]),n._v(" "),i("f7-list",{staticClass:"no-margin-top no-hairline-top"},[i("f7-list-item",{attrs:{title:n.t("price_label"),after:n.currentCourse.price?"¥"+n.currentCourse.price:n.t("free_label")}}),n._v(" "),i("f7-list-item",{attrs:{title:n.t("duration_label"),after:n.currentCourse.duration+" "+n.t("hours_label")}}),n._v(" "),i("f7-list-item",{attrs:{title:n.t("outcome_label"),after:n.currentCourse.outcome}}),n._v(" "),i("f7-list-item",{attrs:{title:n.t("estimate_data_label"),after:n.currentCourse.estimate_data+" "+n.t("mb_label")}}),n._v(" "),n.requiredCourses&&n.requiredCourses.length?[i("f7-list-item",{attrs:{divider:"",title:n.t("required_label")}}),n._v(" "),n._l(n.requiredCourses,function(e,t){return i("f7-list-item",{key:t,attrs:{title:e.indexName}})})]:n._e()],2)]:n._e()],2)}function C(){var n=this,e=n.$createElement,i=n._self._c||e;return i("f7-page",{staticClass:"education-page education-course-page"},[i("f7-navbar",[i("tommy-nav-back"),n._v(" "),i("f7-nav-title",[n._v(n._s(n.course.pageName))])],1),n._v(" "),i("f7-block",{staticClass:"no-margin",attrs:{"no-hairlines":"",strong:""},domProps:{innerHTML:n._s(n.course.pageDescription)}}),n._v(" "),n.courseCompleted||n.courseStarted?n._e():i("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){return n.openFirstLesson()}},slot:"fixed"},[n._v(n._s(n.$t("education.start_button")))]),n._v(" "),!n.courseCompleted&&n.courseStarted?i("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){return n.openNextLesson()}},slot:"fixed"},[n._v(n._s(n.$t("education.resume_button")))]):n._e(),n._v(" "),i("f7-list",{staticClass:"no-margin",attrs:{"no-hairlines":"","media-list":""}},[n.courseCompleted?i("f7-list-item",{attrs:{divider:"",title:n.t("certificates_label")}}):n._e(),n._v(" "),n.courseCompleted?i("f7-list-item",{attrs:{title:n.t("certificate_of_completion")}},[i("i",{staticClass:"icon education-reward-icon",attrs:{slot:"media"},slot:"media"})]):n._e(),n._v(" "),i("f7-list-item",{attrs:{divider:"",title:n.t("courses_label")}}),n._v(" "),n._l(n.course.lessons,function(t,e){return!n.lessonCompleted(t.id)||n.lessonCompleted(t.id)&&"video"===t.type?i("li",{key:e,staticClass:"item-content",attrs:{title:t.indexName},on:{click:function(e){return n.openClickLesson(t)}}},[i("div",{staticClass:"item-inner"},[i("div",{staticClass:"item-title-row"},[i("div",{staticClass:"item-title"},[n._v(n._s(t.indexName))]),n._v(" "),i("div",{staticClass:"item-after"},[i("div",{staticClass:"education-checkbox"},[i("input",{attrs:{type:"checkbox",disabled:""},domProps:{checked:n.lessonCompleted(t.id)}}),n._v(" "),i("i",{staticClass:"icon"})])])]),n._v(" "),t.indexDescription?i("div",{staticClass:"item-text",domProps:{innerHTML:n._s(t.indexDescription)}}):n._e()])]):n._e()})],2)],1)}var e=function normalizeComponent(e,t,n,i,o,s,a,r,c,d){"boolean"!=typeof a&&(c=r,r=a,a=!1);var u,p="function"==typeof n?n.options:n;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),i&&(p._scopeId=i),s?(u=function hook(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},p._ssrRegister=u):t&&(u=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),u)if(p.functional){var m=p.render;p.render=function renderWithStyleInjection(e,t){return u.call(t),m(e,t)}}else{var l=p.beforeCreate;p.beforeCreate=l?[].concat(l,u):[u]}return n},t={methods:{onBeforeIn:function onBeforeIn(e,t){t.$navbarEl.closest(".navbar").addClass("education-splash-navbar")},onBeforeOut:function onBeforeOut(e,t){t.$navbarEl.closest(".navbar").removeClass("education-splash-navbar")}}},i=(d._withStripped=!0,e({render:d,staticRenderFns:[]},void 0,t,void 0,!(d._withStripped=!0),void 0,void 0,void 0)),o=window.tommy.api,a={actorId:void 0,fragment:null,getData:function getData(e){var t={addon:"education",kind:"EducationData",with_filters:!0,with_permission_to:!0,actor_id:a.actorId,user_id:a.actorId||e};return o.getFragments(t)},completeLesson:function completeLesson(e,t){var n=a.fragment;return n.data.completed_lessons[t]={completed_at:(new Date).toJSON()},n.id?o.updateFragment(n.id,n):(Object.assign(n,{addon:"education",kind:"EducationData",with_filters:!0,with_permission_to:!0,actor_id:a.actorId,user_id:a.actorId||e}),o.createFragment(n))}},n=[{id:"basics",icon:"basics.svg",indexName:"托me岗前培训",indexDescription:"在你接单前，必须先完成托me岗前培训培训获得上岗证。这项培训包括每项服务内容的培训，并提供了服务需要达到的标准。",pageName:"托me岗前培训",pageDescription:"在你接单前，必须先完成托me岗前培训培训获得上岗证。这项培训包括每项服务内容的培训，并提供了服务需要达到的标准。",price:0,duration:1,outcome:"托me上岗证",valid:6,estimate_data:250,required:[],locked:!1,lessons:[{id:"pre-service",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/1-pre-service.mp4",indexName:"托me护工准备工作",indexDescription:"",pageName:"托me护工准备工作",pageDescription:"\n      通过本视频的学习后，托me护工上门前，需做到工作服干净整洁；工具齐备无破损并核对自己手机的订单时间和地址。到客户家里后开始工作前，需跟老人确认服务内容及时间并打开手机订单的开始按钮。\n      ",videoLength:180,minimumStay:90},{id:"pre-service-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"托me护工准备工作测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"托me护工上门前，需检查$$$。",options:["工作服和工具包","工具车","手机"],wrongText:"错误选项,请重新观看视频。",correct:"工作服和工具包"},{question:"托me到老人家里后开始工作前，需跟老人确认$$$。",options:["身体状况","服务内容及时间","有没有吃饭"],wrongText:"错误选项,请重新观看视频。",correct:"服务内容及时间"}]},{id:"table-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/2-table-cleaning.mp4",indexName:"桌面清洁",indexDescription:"",pageName:"桌面清洁",pageDescription:"\n      通过本视频的学习后，托me护工会使用澳大利亚的精油对桌面进行杀菌和消毒，做到桌面洁净无异味。\n      ",videoLength:115,minimumStay:60},{id:"table-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"桌面清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"澳大利亚的精油对桌面有$$$和消毒作用。",options:["清洁","杀菌","去味"],wrongText:"错误选项,请重新观看视频。",correct:"杀菌"},{question:"澳大利亚的桌面精油需要在桌面喷洒$$$。",options:["2-3下","7-10下","10下以上"],wrongText:"错误选项,请重新观看视频。",correct:"2-3下"}]},{id:"floor-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/3-floor-cleaning.mp4",indexName:"地面清洁",indexDescription:"",pageName:"地面清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具和澳大利亚地面精油清洁地面。做到地面湿度适中，洁净无异味。清理垃圾后更换新垃圾袋。\n      ",videoLength:114,minimumStay:60},{id:"floor-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"地面清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清洗后的拖把用甩干桶甩干$$$次。",options:["8-10","3-5","1-2"],wrongText:"错误选项。请重新观看视频。",correct:"8-10"},{question:"澳大利亚的地面精油需要在拖把水桶内按压$$$。",options:["2-3下","7-10下","10下以上"],wrongText:"错误选项,请重新观看视频。",correct:"2-3下"}]},{id:"change-bedding",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/4-change-the-bedding.mp4",indexName:"床品更换清洗",indexDescription:"",pageName:"床品更换清洗",pageDescription:"\n      通过本视频的学习后，托me护工会按顺序更换床品，要求做到床品铺设平整。按客户要求对床品进行清洗。\n      ",videoLength:253,minimumStay:150},{id:"change-bedding-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"床品更换清洗测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"撤走使用过的床上用品时，应检查是否有明显污渍，如发现在污渍处$$$。",options:["记号笔画圈","打结示意","不用特别处理"],wrongText:"错误选项。请重新观看视频。",correct:"打结示意"},{question:"更换新的床上用品顺序铺床单、$$$、套枕头。",options:["入被套","铺褥子","盖床罩"],wrongText:"错误选项。请重新观看视频。",correct:"铺褥子"}]},{id:"window-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/5-window-cleaning.mp4",indexName:"窗户清洁",indexDescription:"",pageName:"窗户清洁",pageDescription:"\n      通过本视频的学习后，托me护工根据客户情况选择合适工具清洁玻璃，并安全使用双层玻璃擦。做到窗户清洁无残留水渍、污渍。\n      ",videoLength:240,minimumStay:120},{id:"window-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"窗户清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"将双层玻璃擦的绳索固定在手指和$$$，以防高空坠物。",options:["手臂","腰部","手腕"],wrongText:"错误选项。请重新观看视频。",correct:"手腕"},{question:"先将$$$的玻璃擦固定在玻璃上，再缓慢移动外侧玻璃擦。避免造成夹伤手指和损坏玻璃。",options:["内侧","上面","下面"],wrongText:"错误选项。请重新观看视频。",correct:"内侧"}]},{id:"basin-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/6-basin-cleaning.mp4",indexName:"台盆清洁",indexDescription:"",pageName:"台盆清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确清洁卫生间的台盆。做到镜子、台盆和柜体干净无水渍及污渍残留。\n      ",videoLength:180,minimumStay:90},{id:"basin-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"台盆清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清洁台面时，如有物品，需将物品$$$擦拭后再放回原位。",options:["随意放置","轻轻移开","不去移动"],wrongText:"错误选项。请重新观看视频。",correct:"轻轻移开"}]},{id:"toilet-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/7-toilet-cleaning.mp4",indexName:"马桶清洁",indexDescription:"",pageName:"马桶清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用专业工具清洁马桶。做到马桶干净无污物、污渍和水渍残留。\n      ",videoLength:240,minimumStay:120},{id:"toilet-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"马桶清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"马桶清洁时需穿好$$$，戴好一次性手套和长袖手套。",options:["袖套","围裙","不用穿其他"],wrongText:"错误选项。请重新观看视频。",correct:"围裙"},{question:"马桶内用马桶刷刷过后残留的水渍及污渍，用$$$清洁。",options:["抹布","餐巾纸","专用海绵块"],wrongText:"错误选项。请重新观看视频。",correct:"专用海绵块"}]},{id:"shower-room-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/8-shower-room-cleaning.mp4",indexName:"淋浴房清洁",indexDescription:"",pageName:"淋浴房清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确安全的清洁淋浴房。做到淋浴房玻璃、墙面及花洒、龙头无污渍和水渍残留。\n      ",videoLength:240,minimumStay:120},{id:"shower-room-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"淋浴房清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"淋浴房玻璃和[]，用清水冲一次，用玻璃刮刀刮一次，做到无污渍和水渍。",options:["墙面","花洒","龙头"],wrongText:"错误选项。请重新观看视频。",correct:"墙面"}]},{id:"bathtub-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/9-bathtub-cleaning.mp4",indexName:"浴缸清洁",indexDescription:"",pageName:"浴缸清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用专业工具清洁浴缸。做到浴缸干净无杂物、污渍和水渍残留。\n      ",videoLength:202,minimumStay:100},{id:"bathtub-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"浴缸清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"用专用海绵块擦浴缸的龙头和$$$。",options:["花洒","外侧","周围地面"],wrongText:"错误选项。请重新观看视频。",correct:"花洒"}]},{id:"kitchen-countertop-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/10-kitchen-countertop-cleaning.mp4",indexName:"厨房台面清洁",indexDescription:"",pageName:"厨房台面清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具及去污产品清洁厨房台面。做到厨房台面不油腻，无污渍及水渍残留。\n      ",videoLength:85,minimumStay:60},{id:"kitchen-countertop-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"厨房台面清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清洁厨房台面先移除不必要的杂物和$$$。",options:["食物","餐具","电器"],wrongText:"错误选项。请重新观看视频。",correct:"电器"}]},{id:"stove-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/11-stove-cleaning.mp4",indexName:"灶具清洁",indexDescription:"",pageName:"灶具清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具及去污产品清洁灶具。做到擦拭时不要点燃灶具，做到灶具表面不油腻，无污渍及水渍残留。\n      ",videoLength:180,minimumStay:90},{id:"stove-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"灶具清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"擦拭点火开关时要注意，不要$$$灶具。",options:["点燃","划伤","触碰"],wrongText:"错误选项。请重新观看视频。",correct:"点燃"}]},{id:"fridge-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/12-fridge-cleaning.mp4",indexName:"冰箱清洁",indexDescription:"",pageName:"冰箱清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确清洁冰箱表面。做到清洁时不随意触碰冰箱的温控按钮，冰箱表面无污渍及水渍残留。\n      ",videoLength:110,minimumStay:60},{id:"fridge-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"冰箱清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"冰箱清洁时注意，不要随意触碰冰箱的$$$。",options:["冰箱贴","温控按钮","两侧"],wrongText:"错误选项。请重新观看视频。",correct:"温控按钮"}]},{id:"cooker-hood-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/13-cooker-hood-cleaning.mp4",indexName:"油烟机清洁",indexDescription:"",pageName:"油烟机清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具及去污产品清洁油烟机。做到油烟机表面不油腻，无污渍及水渍残留。\n      ",videoLength:262,minimumStay:120},{id:"cooker-hood-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"油烟机清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清洁油烟机戴好袖套和$$$。",options:["围裙","一次性手套","长袖手套"],wrongText:"错误选项。请重新观看视频。",correct:"一次性手套"}]},{id:"tableware-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/14-tableware-cleaning.mp4",indexName:"餐具清洁",indexDescription:"",pageName:"餐具清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具及洗涤产品清洗餐具。做到餐具清洗后干净，无洗洁精及污渍残留。\n      ",videoLength:200,minimumStay:100},{id:"tableware-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"餐具清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"将餐具内残留的食物倒入$$$。",options:["厨房垃圾桶内","水槽内","窗户外"],wrongText:"错误选项。请重新观看视频。",correct:"厨房垃圾桶内"},{question:"洗洁精清洗后的餐具，用$$$冲洗，做到无洗洁精残留。",options:["水盆里的水","开水","流水"],wrongText:"错误选项。请重新观看视频。",correct:"流水"}]},{id:"dusting-training",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/15-dusting-training.mp4",indexName:"掸尘培训",indexDescription:"",pageName:"掸尘培训",pageDescription:"\n      通过本视频的学习后，托me护工会安全使用工具进行室内掸尘。做到室内无灰尘蛛网残留，并保证客户日常生活不受到影响。\n      ",videoLength:40,minimumStay:40},{id:"dusting-training-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"掸尘测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"掸尘的时候从$$$慢慢向下。",options:["最高处","最左边","最后边"],wrongText:"错误选项。请重新观看视频。",correct:"最高处"},{question:"如掸尘是客户出现呼吸不顺畅的情况，需要$$$。",options:["帮助客户到另一个房间","让客户忍一忍","不去理会"],wrongText:"错误选项。请重新观看视频。",correct:"帮助客户到另一个房间"}]},{id:"vacuuming-training",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/16-vacuuming-training.mp4",indexName:"吸尘培训",indexDescription:"",pageName:"吸尘培训",pageDescription:"\n      通过本视频的学习后，托me护工会安全使用吸尘器进行室内吸尘，做到地面无毛发、纸屑等杂物残留，并保证客户日常生活不受到影响。\n      ",videoLength:200,minimumStay:100},{id:"vacuuming-training-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"吸尘测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"天花板吸尘和地面吸尘时，动作要$$$。",options:["迅速","使劲","轻缓"],wrongText:"错误选项。请重新观看视频。",correct:"轻缓"}]},{id:"hand-hygiene",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/17-hand-hygiene.mp4",indexName:"手部清洁",indexDescription:"",pageName:"手部清洁",pageDescription:"\n      通过本视频的学习后，托me护工会按正确步骤进行手部清洁，保障自身的健康安全。\n      ",videoLength:70,minimumStay:70},{id:"hand-hygiene-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"手部清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"手部清洁先用手掌覆盖在手背上，搓擦$$$。",options:["手背和指背","手掌和指心","手指缝 "],wrongText:"错误选项。请重新观看视频。",correct:"手背和指背"}]},{id:"household-appliance-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/18-household-appliance-cleaning.mp4",indexName:"家用电器清洁",indexDescription:"",pageName:"家用电器清洁",pageDescription:"\n      通过本视频的学习后，托me护工清洁前确保关闭家用电器的电源，安全地清洁家用电器。做到家用电器无污渍残留。\n      ",videoLength:155,minimumStay:90},{id:"household-appliance-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"家用电器清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清洁家用电器前一定要先$$$。",options:["关闭电源","打开电源","放好梯子"],wrongText:"错误选项。请重新观看视频。",correct:"关闭电源"}]},{id:"furniture-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/19-furniture-cleaning.mp4",indexName:"家具清洁",indexDescription:"",pageName:"家具清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确清洁家具。做到家具清洁无残留水渍、污渍。\n      ",videoLength:180,minimumStay:90},{id:"furniture-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"家具清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"清水擦拭家具一遍，擦拭$$$㎡清洗一次抹布。",options:["2-3","5-8","10"],wrongText:"错误选项。请重新观看视频。",correct:"5-8"},{question:"擦拭家具的抹布要$$$。",options:["不能滴水","浸湿水的","干的"],wrongText:"错误选项。请重新观看视频。",correct:"不能滴水"}]},{id:"door-cleaning",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/20-door-cleaning.mp4",indexName:"门的清洁",indexDescription:"",pageName:"门的清洁",pageDescription:"\n      通过本视频的学习后，托me护工会正确使用工具清洁室内门。做到整门无污渍灰尘残留，无清洁死角（包括顶边）。\n      ",videoLength:140,minimumStay:60},{id:"door-cleaning-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"门的清洁测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:"使用绿色抹布用清水擦门，注意门的$$$一定要擦拭。",options:["顶边","底边"],wrongText:"错误选项。请重新观看视频。",correct:"顶边"}]},{id:"post-service-training",type:"video",videoUrl:"https://tommy-education.s3.cn-north-1.amazonaws.com.cn/Training/1-tuome-certificate/21-post-service-training.mp4",indexName:"服务结束培训",indexDescription:"",pageName:"服务结束培训",pageDescription:"\n      通过本视频的学习后，托me护工在完成服务后需检查工具包内工具是否完整。请客户在护工的手机上对服务进行评价后，向客户示意道别。\n      ",videoLength:100,minimumStay:60},{id:"post-service-training-quiz",type:"quiz",indexName:"测试",indexDescription:"",pageName:"服务结束测试",pageDescription:"\n      请选择最合适的选项\n      ",questions:[{question:'检查工具包完成后，与客户示意道别说："再见，$$$!"',options:["祝您好心情","下次见","白白"],wrongText:"错误选项。请重新观看视频。",correct:"祝您好心情"}]}]},{id:"level-1",icon:"level-1.svg",indexName:"Assistant Nurse 托me Level 1",indexDescription:"Working with Elders requires additional skill\n  and consideration. Assistant Nurse’s are\n  more than just housekeepers that provide\n  basic care to Elders. They are well trained in how to best serve with the interest of Elders at heart.<br>\n  This certificate is valid for 12 months.<br>\n  You may earn a credit to complete this course free of charge if you work for 托me and maintain positive feedback.",pageName:"托me Level 1",pageDescription:"Working with Elders requires additional skill\n  and consideration. Assistant Nurse’s are\n  more than just housekeepers that provide\n  basic care to Elders. They are well trained in how to best serve with the interest of Elders at heart.<br>\n  This certificate is valid for 12 months.<br>\n  You may earn a credit to complete this course free of charge if you work for 托me and maintain positive feedback.",price:199,duration:9,outcome:"Certificate of Completion",valid:12,estimate_data:500,required:["basics"],locked:!0,lessons:[]}],r={data:function data(){var e=this.$f7route.query.actor_id?parseInt(this.$f7route.query.actor_id,10):void 0;return a.actorId=e,{courses:n,currentCourseId:n[0].id,actorId:e,fragment:a.fragment}},computed:{currentCourse:function currentCourse(){var t=this;return this.courses.filter(function(e){return e.id===t.currentCourseId})[0]},requiredCourses:function requiredCourses(){var t=this;return this.courses.filter(function(e){return 0<=t.currentCourse.required.indexOf(e.id)})}},mounted:function mounted(){this.getData(),this.$events.$on("edication:updatedata",this.getData)},beforeDestroy:function beforeDestroy(){this.$events.$off("edication:updatedata",this.getData)},methods:{t:function t(e){return this.$t("education.index."+e)},openCourse:function openCourse(e){this.$f7router.navigate("/education/course/"+e.id+"/")},getData:function getData(){var t=this;a.getData(t.$root.user.id).then(function(e){e.length?t.fragment=e[0]:t.fragment={data:{completed_lessons:{}}},a.fragment=t.fragment})}}},c=(s._withStripped=!0,e({render:s,staticRenderFns:[]},void 0,r,void 0,!(s._withStripped=!0),void 0,void 0,void 0)),u={props:{courseId:String},data:function data(){var t=this;return{course:n.filter(function(e){return e.id===t.courseId})[0],courses:n,fragment:a.fragment}},computed:{courseCompleted:function courseCompleted(){var e=this.course.lessons.map(function(e){return e.id}),t=Object.keys(this.fragment.data.completed_lessons),n=!0;return e.forEach(function(e){t.indexOf(e)<0&&(n=!1)}),n},courseStarted:function courseStarted(){var e=this.course.lessons.map(function(e){return e.id}),t=Object.keys(this.fragment.data.completed_lessons),n=!1;return e.forEach(function(e){0<=t.indexOf(e)&&(n=!0)}),n}},mounted:function mounted(){this.$events.$on("edication:updatedata",this.updateData)},beforeDestroy:function beforeDestroy(){this.$events.$off("edication:updatedata",this.updateData)},methods:{updateData:function updateData(){this.fragment=a.fragment,this.$forceUpdate()},openFirstLesson:function openFirstLesson(){this.openLesson(this.course.lessons[0])},openNextLesson:function openNextLesson(){var t,n=this;n.course.lessons.forEach(function(e){t||n.lessonCompleted(e.id)||(t=e)}),t&&n.openLesson(t)},lessonCompleted:function lessonCompleted(e){return!!this.fragment.data.completed_lessons[e]},t:function t(e){return this.$t("education.course."+e)},openLesson:function openLesson(e){this.$f7router.navigate("/education/lesson-"+e.type+"/",{props:{course:this.course,lesson:e}})},openClickLesson:function openClickLesson(e){this.lessonCompleted(e.id)&&"video"===e.type&&this.openLesson(e)}}},p=(C._withStripped=!0,e({render:C,staticRenderFns:[]},void 0,u,void 0,!(C._withStripped=!0),void 0,void 0,void 0));function formatDuration(e){var t=Math.floor(e/60),n=Math.floor(e-60*t);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}function L(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"education-page education-lesson-video-page"},[n("f7-navbar",[n("f7-nav-left",[n("a",{staticClass:"link icon-only",attrs:{href:"#"},on:{click:t.exit}},[n("i",{staticClass:"material-icons md-36"},[t._v("keyboard_arrow_left")])])]),t._v(" "),n("f7-nav-title",[t._v(t._s(t.lesson.pageName))])],1),t._v(" "),t.showContinueButton&&t.nextLesson?n("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){return t.openNextLesson()}},slot:"fixed"},[t._v(t._s(t.$t("education.continue_button")))]):t._e(),t._v(" "),t.lesson.video||t.lesson.videoUrl?n("video",{staticClass:"no-fastclick",attrs:{src:t.lesson.videoUrl?t.lesson.videoUrl:t.$addonAssetsUrl+"courses-videos/"+t.lesson.video,controls:""},on:{playing:t.onVideoStart}}):t._e(),t._v(" "),n("f7-block",{staticClass:"no-margin",attrs:{strong:"","no-hairlines":""}},[n("p",[n("b",[t._v(t._s(t.lesson.pageName))])]),t._v(" "),t.lesson.pageDescription?n("div",{domProps:{innerHTML:t._s(t.lesson.pageDescription)}}):t._e()])],1)}function U(){var n=this,e=n.$createElement,i=n._self._c||e;return i("f7-page",{staticClass:"education-page education-lesson-quiz-page"},[i("f7-navbar",[i("tommy-nav-back"),n._v(" "),i("f7-nav-title",[n._v(n._s(n.lesson.pageName))])],1),n._v(" "),!n.answer||n.answer&&!n.wrong?i("a",{staticClass:"education-toolbar-button",class:{"education-toolbar-button-disabled":!n.answer},attrs:{slot:"fixed",href:"#"},on:{click:n.checkAnswer},slot:"fixed"},[n._v(n._s(n.$t("education.next_button")))]):n._e(),n._v(" "),n.answer&&n.wrong?i("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:n.openPreviousLesson},slot:"fixed"},[n._v(n._s(n.$t("education.back_button")))]):n._e(),n._v(" "),i("div",{staticClass:"education-progressbar"},[i("span",{style:"width: "+(n.current+1)/n.total*100+"%"})]),n._v(" "),i("div",{staticClass:"education-progressbar-label"},[n._v(n._s(n.current+1)+"/"+n._s(n.total))]),n._v(" "),n.lesson.pageDescription?i("div",{staticClass:"education-lesson-quiz-description",domProps:{innerHTML:n._s(n.lesson.pageDescription)}}):n._e(),n._v(" "),i("div",{staticClass:"education-lesson-quiz-question",domProps:{innerHTML:n._s(n.questionHtml)}}),n._v(" "),n.wrong?n._e():i("div",{staticClass:"education-lesson-quiz-options"},n._l(n.question.options,function(t,e){return i("span",{key:e,class:{selected:n.answer===t},on:{click:function(e){n.answer=t}}},[n._v(n._s(t))])}),0),n._v(" "),n.wrong?i("div",{staticClass:"education-lesson-quiz-wrong"},[i("i"),n._v(" "),i("div",{domProps:{innerHTML:n._s(n.question.wrongText)}})]):n._e()],1)}function ba(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{staticClass:"education-page education-certificate-page"},[n("f7-navbar",[n("tommy-nav-back")],1),e._v(" "),n("div",{staticClass:"education-certificate-title"},[e._v(e._s(e.$t("education.certificate.title")))]),e._v(" "),n("div",{staticClass:"education-certificate-text"},[e._v(e._s(e.$t("education.certificate.text",{course:e.course})))]),e._v(" "),n("div",{staticClass:"education-certificate-icon"})],1)}var m={props:{course:Object,lesson:Object},data:function data(){var t=this,e=t.course.lessons.filter(function(e){return e.id===t.lesson.id})[0],n=t.course.lessons.indexOf(e);return{startTime:null,minimumStayReached:!1,showContinueButton:!1,nextLesson:t.course.lessons[n+1]}},beforeDestroy:function beforeDestroy(){clearTimeout(this.timeout)},methods:{t:function t(e){return this.$t("education.lesson_video."+e)},exit:function exit(){var e=this;!e.startTime||e.minimumStayReached?e.$f7router.back():e.$f7.dialog.create({text:e.$t("education.lesson.exit_confirm_text",{required:formatDuration(e.lesson.videoLength),current:formatDuration(((new Date).getTime()-e.startTime)/1e3)}),buttons:[{text:e.$t("education.lesson.dismiss_button"),bold:!0}]}).open()},openNextLesson:function openNextLesson(){var e=this;e.nextLesson&&e.$f7router.navigate("/education/lesson-"+e.nextLesson.type+"/",{reloadCurrent:!0,props:{course:e.course,lesson:e.nextLesson}})},showContinueDialog:function showContinueDialog(){var e=this;e.nextLesson&&e.$f7.dialog.create({text:e.$t("education.lesson.video_complete_text"),buttons:[{text:e.$t("label.no")},{text:e.$t("label.yes"),bold:!0,onClick:function onClick(){e.openNextLesson()}}]}).open()},onVideoStart:function onVideoStart(){var t=this;t.startTime||(a.fragment.data.completed_lessons[t.lesson.id]||(t.startTime=(new Date).getTime(),t.timeout=setTimeout(function(){a.completeLesson(t.$root.user.id,t.lesson.id).then(function(e){a.fragment=e,t.$events.$emit("edication:updatedata")}),t.minimumStayReached=!0,t.showContinueButton=!0,t.showContinueDialog()},1e3*t.lesson.minimumStay)))}}},l=(L._withStripped=!0,e({render:L,staticRenderFns:[]},void 0,m,void 0,!(L._withStripped=!0),void 0,void 0,void 0)),g={props:{course:Object,lesson:Object},data:function data(){var t=this,e=t.course.lessons.filter(function(e){return e.id===t.lesson.id})[0],n=t.course.lessons.indexOf(e);return{startTime:null,minimumStayReached:!1,showContinueButton:!1,previousLesson:t.course.lessons[n-1],nextLesson:t.course.lessons[n+1],current:0,total:t.lesson.questions.length,answer:null,wrong:!1}},computed:{question:function question(){return this.lesson.questions[this.current]},questionHtml:function questionHtml(){return this.answer?this.question.question.replace("$$$",'<span class="question-answer">'+this.answer+"</span>"):this.question.question.replace("$$$",'<span class="question-placeholder"></span>')}},methods:{t:function t(e){return this.$t("education.lesson_quiz."+e)},checkAnswer:function checkAnswer(){var t=this;t.answer!==t.question.correct?t.wrong=!0:t.current<t.total-1?(t.answer=null,t.wrong=!1,t.current+=1):a.completeLesson(t.$root.user.id,t.lesson.id).then(function(e){a.fragment=e,t.$events.$emit("edication:updatedata"),t.openNextLesson()})},openNextLesson:function openNextLesson(){var e=this;if(!e.nextLesson){var t=e.course.lessons.map(function(e){return e.id}),n=Object.keys(a.fragment.data.completed_lessons),i=!0;return t.forEach(function(e){n.indexOf(e)<0&&(i=!1)}),i?void e.$f7router.navigate("/education/certificate/",{reloadCurrent:!0,props:{course:e.course}}):void e.$f7router.back()}e.$f7router.navigate("/education/lesson-"+e.nextLesson.type+"/",{reloadCurrent:!0,props:{course:e.course,lesson:e.nextLesson}})},openPreviousLesson:function openPreviousLesson(){var e=this;e.previousLesson&&e.$f7router.navigate("/education/lesson-"+e.previousLesson.type+"/",{reloadCurrent:!0,props:{course:e.course,lesson:e.previousLesson}})}}},v=(U._withStripped=!0,e({render:U,staticRenderFns:[]},void 0,g,void 0,!(U._withStripped=!0),void 0,void 0,void 0)),f={props:{course:Object}},h=(ba._withStripped=!0,e({render:ba,staticRenderFns:[]},void 0,f,void 0,!(ba._withStripped=!0),void 0,void 0,void 0));return[{path:"/education/index/",component:c},{path:"/education/",async:function async(e,t,n){localStorage.getItem("education.splash")?n({component:c}):(localStorage.setItem("education.splash",!0),n({component:i}))}},{path:"/education/course/:courseId/",component:p},{path:"/education/lesson-video/",component:l},{path:"/education/lesson-quiz/",component:v},{path:"/education/certificate/",component:h}]}();