var addon=function(){var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{staticClass:"education-page education-splash-page",on:{"page:beforein":e.onBeforeIn,"page:beforeout":e.onBeforeOut}},[n("f7-navbar",[n("tommy-nav-menu"),e._v(" "),n("f7-nav-title",[e._v(e._s(e.$t("education.splash.title")))])],1),e._v(" "),n("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"/education-index/"},slot:"fixed"},[e._v(e._s(e.$t("education.continue_button")))]),e._v(" "),n("div",{staticClass:"education-splash-text"},[e._v(e._s(e.$t("education.splash.text")))])],1)},staticRenderFns:[],methods:{onBeforeIn:function onBeforeIn(e,t){t.$navbarEl.closest(".navbar").addClass("education-splash-navbar")},onBeforeOut:function onBeforeOut(e,t){t.$navbarEl.closest(".navbar").removeClass("education-splash-navbar")}}},n=window.tommy.api,o={actorId:void 0,fragment:null,getData:function getData(e){var t={addon:"education",kind:"EducationData",with_filters:!0,with_permission_to:!0,actor_id:o.actorId,user_id:o.actorId||e};return n.getFragments(t)}},i=[{id:"basics",icon:"basics.svg",indexName:"托me's Basic",indexDescription:"Before you can receive bookings you must first complete the 托me Basics Certificate. This certificate includes training on tasks you will perform during bookings and demonstrates the standard that needs to be maintained.",pageName:"托me's Basic",pageDescription:"Before you can receive bookings you must first complete the 托me Basics Certificate. This certificate includes training on tasks you will perform during bookings and demonstrates the standard that needs to be maintained.",price:0,duration:3,outcome:"Certificate of Completion",valid:12,estimate_data:300,required:[],locked:!1,lessons:[{id:"welcome",type:"video",video:"welcome.mp4",indexName:"Welcome",indexDescription:"Introduction to 托me’s Basic and Assistant Nurse training.",pageName:"Welcome",pageDescription:"\n      An introduction to Tuome Training.<br>\n      In this video you will learn:<br>\n      - How to train using Tuome.<br>\n      - The progressive steps involved<br>\n      ",videoLength:45,minimumStay:45},{id:"hand-hygiene",type:"video",video:"hand-hygiene.mp4",indexName:"Hand Hygiene",indexDescription:"",pageName:"Hand Hygiene",pageDescription:"\n      The transfer of bacteria/germs is most often not though air but though direct skin contact.\n      Ensuring you maintain good hand hygiene reduces the risk you will contract something or carry it to another.\n      Learn the correct technique to ensure your hands are clear and free from germs and the times you should pay attention to clean your hands.\n      ",videoLength:69,minimumStay:69},{id:"hand-hygiene-quiz",type:"quiz",indexName:"Quiz",indexDescription:"",pageName:"Hand Hygiene Quiz",pageDescription:"\n      Please select the best word for the sentence:\n      ",questions:[{question:"There are $$$ times you should clean your hands.",options:["Many","One","Two","Three","Five","Scheduled"],wrongText:"Incorrect. There are five times that you should clean your hands. Please watch video again.",correct:"Five"}]}]},{id:"level-1",icon:"level-1.svg",indexName:"Assistant Nurse 托me Level 1",indexDescription:"Working with Elders requires additional skill\n  and consideration. Assistant Nurse’s are\n  more than just housekeepers that provide\n  basic care to Elders. They are well trained in how to best serve with the interest of Elders at heart.<br>\n  This certificate is valid for 12 months.<br>\n  You may earn a credit to complete this course free of charge if you work for 托me and maintain positive feedback.",pageName:"托me Level 1",pageDescription:"Working with Elders requires additional skill\n  and consideration. Assistant Nurse’s are\n  more than just housekeepers that provide\n  basic care to Elders. They are well trained in how to best serve with the interest of Elders at heart.<br>\n  This certificate is valid for 12 months.<br>\n  You may earn a credit to complete this course free of charge if you work for 托me and maintain positive feedback.",price:199,duration:9,outcome:"Certificate of Completion",valid:12,estimate_data:500,required:["basics"],locked:!0,lessons:[]}],a={render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("f7-page",{staticClass:"education-page education-home-page"},[s("f7-navbar",[s("tommy-nav-menu"),n._v(" "),s("f7-nav-title",[n._v(n._s(n.$t("education.index.title")))])],1),n._v(" "),n.fragment?[n.currentCourse.locked?n._e():s("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){n.openCourse(n.currentCourse)}},slot:"fixed"},[n._v(n._s(n.$t("education.continue_button")))]),n._v(" "),s("f7-swiper",{staticClass:"education-swiper",attrs:{params:{slidesPerView:"auto",touchMoveStopPropagation:!1}}},n._l(n.courses,function(t,e){return s("f7-swiper-slide",{key:e,staticClass:"education-swiper-slide",class:{"education-swiper-slide-active":n.currentCourseId===t.id,"education-swiper-slide-locked":t.locked}},[s("div",{staticClass:"education-swiper-slide-icon",on:{click:function(e){n.currentCourseId=t.id}}},[s("img",{attrs:{src:n.$addonAssetsUrl+"courses-icons/"+t.icon}})]),n._v(" "),s("div",{staticClass:"education-swiper-slide-name"},[n._v(n._s(t.indexName))])])})),n._v(" "),s("div",{staticClass:"education-course-content"},[s("div",{staticClass:"education-course-content-name"},[n._v(n._s(n.currentCourse.indexName))]),n._v(" "),s("div",{staticClass:"education-course-content-description",domProps:{innerHTML:n._s(n.currentCourse.indexDescription)}})]),n._v(" "),s("f7-list",{staticClass:"no-margin-top no-hairline-top"},[s("f7-list-item",{attrs:{title:n.t("price_label"),after:n.currentCourse.price?"¥"+n.currentCourse.price:n.t("free_label")}}),n._v(" "),s("f7-list-item",{attrs:{title:n.t("duration_label"),after:n.currentCourse.duration+" "+n.t("hours_label")}}),n._v(" "),s("f7-list-item",{attrs:{title:n.t("outcome_label"),after:n.currentCourse.outcome}}),n._v(" "),s("f7-list-item",{attrs:{title:n.t("estimate_data_label"),after:n.currentCourse.estimate_data+" "+n.t("mb_label")}}),n._v(" "),n.requiredCourses&&n.requiredCourses.length?[s("f7-list-item",{attrs:{divider:"",title:n.t("required_label")}}),n._v(" "),n._l(n.requiredCourses,function(e,t){return s("f7-list-item",{key:t,attrs:{title:e.indexName}})})]:n._e()],2)]:n._e()],2)},staticRenderFns:[],data:function data(){var e=this.$f7route.query.actor_id?parseInt(this.$f7route.query.actor_id,10):void 0;return o.actorId=e,{courses:i,currentCourseId:i[0].id,actorId:e,fragment:o.fragment}},computed:{currentCourse:function currentCourse(){var t=this;return this.courses.filter(function(e){return e.id===t.currentCourseId})[0]},requiredCourses:function requiredCourses(){var t=this;return this.courses.filter(function(e){return 0<=t.currentCourse.required.indexOf(e.id)})}},mounted:function mounted(){this.getData(),this.$events.on("edication:updatedata",this.getData)},beforeDestroy:function beforeDestroy(){this.$events.off("edication:updatedata",this.getData)},methods:{t:function t(e){return this.$t("education.index."+e)},openCourse:function openCourse(e){this.$f7router.navigate("/education/course/"+e.id+"/")},getData:function getData(){var t=this;o.getData(t.$root.user.id).then(function(e){e.length||(t.fragment={})})}}},e={render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("f7-page",{staticClass:"education-page education-course-page"},[s("f7-navbar",[s("tommy-nav-back"),n._v(" "),s("f7-nav-title",[n._v(n._s(n.course.pageName))])],1),n._v(" "),s("f7-block",{staticClass:"no-margin",attrs:{"no-hairlines":"",strong:""},domProps:{innerHTML:n._s(n.course.pageDescription)}}),n._v(" "),s("f7-list",{staticClass:"no-margin",attrs:{"no-hairlines":"","media-list":""}},[s("f7-list-item",{attrs:{divider:"",title:n.t("courses_label")}}),n._v(" "),n._l(n.course.lessons,function(t,e){return s("f7-list-item",{key:e,attrs:{title:t.indexName},on:{click:function(e){n.openLesson(t)}}},[t.indexDescription?s("div",{attrs:{slot:"text"},domProps:{innerHTML:n._s(t.indexDescription)},slot:"text"}):n._e()])})],2)],1)},staticRenderFns:[],props:{courseId:String},data:function data(){var t=this;return{course:i.filter(function(e){return e.id===t.courseId})[0],courses:i}},computed:{},methods:{t:function t(e){return this.$t("education.course."+e)},openLesson:function openLesson(e){this.$f7router.navigate("/education/lesson-"+e.type+"/",{props:{course:this.course,lesson:e}})}}};function formatDuration(e){var t=Math.floor(e/60),n=Math.floor(e-60*t);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}var t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("f7-page",{staticClass:"education-page education-lesson-video-page"},[n("f7-navbar",[n("f7-nav-left",[n("a",{staticClass:"link icon-only",attrs:{href:"#"},on:{click:t.exit}},[n("i",{staticClass:"material-icons md-36"},[t._v("keyboard_arrow_left")])])]),t._v(" "),n("f7-nav-title",[t._v(t._s(t.lesson.pageName))])],1),t._v(" "),t.showContinueButton&&t.nextLesson?n("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:function(e){t.openNextLesson()}},slot:"fixed"},[t._v(t._s(t.$t("education.continue_button")))]):t._e(),t._v(" "),n("video",{staticClass:"no-fastclick",attrs:{src:t.$addonAssetsUrl+"courses-videos/"+t.lesson.video,controls:""},on:{playing:t.onVideoStart}}),t._v(" "),n("f7-block",{staticClass:"no-margin",attrs:{strong:"","no-hairlines":""}},[n("p",[n("b",[t._v(t._s(t.lesson.pageName))])]),t._v(" "),t.lesson.pageDescription?n("div",{domProps:{innerHTML:t._s(t.lesson.pageDescription)}}):t._e()])],1)},staticRenderFns:[],props:{course:Object,lesson:Object},data:function data(){var t=this,e=t.course.lessons.filter(function(e){return e.id===t.lesson.id})[0],n=t.course.lessons.indexOf(e);return{startTime:null,minimumStayReached:!1,showContinueButton:!1,nextLesson:t.course.lessons[n+1]}},beforeDestroy:function beforeDestroy(){clearTimeout(this.timeout)},methods:{t:function t(e){return this.$t("education.lesson_video."+e)},exit:function exit(){var e=this;!e.startTime||e.minimumStayReached?e.$f7router.back():e.$f7.dialog.create({text:e.$t("education.lesson.exit_confirm_text",{required:formatDuration(e.lesson.minimumStay),current:formatDuration(((new Date).getTime()-e.startTime)/1e3)}),buttons:[{text:e.$t("education.lesson.dismiss_button"),bold:!0}]}).open()},openNextLesson:function openNextLesson(){var e=this;e.nextLesson&&e.$f7router.navigate("/education/lesson-"+e.nextLesson.type+"/",{reloadCurrent:!0,props:{course:e.course,lesson:e.nextLesson}})},showContinueDialog:function showContinueDialog(){var e=this;e.nextLesson&&e.$f7.dialog.create({text:e.$t("education.lesson.video_complete_text"),buttons:[{text:e.$t("label.no")},{text:e.$t("label.yes"),bold:!0,onClick:function onClick(){e.openNextLesson()}}]}).open()},onVideoStart:function onVideoStart(){var e=this;e.startTime||(e.startTime=(new Date).getTime(),e.timeout=setTimeout(function(){e.minimumStayReached=!0,e.showContinueButton=!0,e.showContinueDialog()},1e3*e.lesson.minimumStay))}}},r={render:function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("f7-page",{staticClass:"education-page education-lesson-quiz-page"},[s("f7-navbar",[s("tommy-nav-back"),n._v(" "),s("f7-nav-title",[n._v(n._s(n.lesson.pageName))])],1),n._v(" "),!n.answer||n.answer&&!n.wrong?s("a",{staticClass:"education-toolbar-button",class:{"education-toolbar-button-disabled":!n.answer},attrs:{slot:"fixed",href:"#"},on:{click:n.checkAnswer},slot:"fixed"},[n._v(n._s(n.$t("education.next_button")))]):n._e(),n._v(" "),n.answer&&n.wrong?s("a",{staticClass:"education-toolbar-button",attrs:{slot:"fixed",href:"#"},on:{click:n.openPreviousLesson},slot:"fixed"},[n._v(n._s(n.$t("education.back_button")))]):n._e(),n._v(" "),s("div",{staticClass:"education-progressbar"},[s("span",{style:"width: "+(n.current+1)/n.total*100+"%"})]),n._v(" "),s("div",{staticClass:"education-progressbar-label"},[n._v(n._s(n.current+1)+"/"+n._s(n.total))]),n._v(" "),n.lesson.pageDescription?s("div",{staticClass:"education-lesson-quiz-description",domProps:{innerHTML:n._s(n.lesson.pageDescription)}}):n._e(),n._v(" "),s("div",{staticClass:"education-lesson-quiz-question",domProps:{innerHTML:n._s(n.questionHtml)}}),n._v(" "),n.wrong?n._e():s("div",{staticClass:"education-lesson-quiz-options"},n._l(n.question.options,function(t,e){return s("span",{key:e,class:{selected:n.answer===t},on:{click:function(e){n.answer=t}}},[n._v(n._s(t))])})),n._v(" "),n.wrong?s("div",{staticClass:"education-lesson-quiz-wrong"},[s("i"),n._v(" "),s("div",{domProps:{innerHTML:n._s(n.question.wrongText)}})]):n._e()],1)},staticRenderFns:[],props:{course:Object,lesson:Object},data:function data(){var t=this,e=t.course.lessons.filter(function(e){return e.id===t.lesson.id})[0],n=t.course.lessons.indexOf(e);return{startTime:null,minimumStayReached:!1,showContinueButton:!1,previousLesson:t.course.lessons[n-1],current:0,total:t.lesson.questions.length,answer:null,wrong:!1}},computed:{question:function question(){return this.lesson.questions[this.current]},questionHtml:function questionHtml(){return this.answer?this.question.question.replace("$$$",'<span class="question-answer">'+this.answer+"</span>"):this.question.question.replace("$$$",'<span class="question-placeholder"></span>')}},methods:{t:function t(e){return this.$t("education.lesson_quiz."+e)},checkAnswer:function checkAnswer(){var e=this;e.answer!==e.question.correct?e.wrong=!0:e.current<e.total-1?(e.answer=null,e.wrong=!1,e.current+=1):e.$f7router.back()},openPreviousLesson:function openPreviousLesson(){var e=this;e.previousLesson&&e.$f7router.navigate("/education/lesson-"+e.previousLesson.type+"/",{reloadCurrent:!0,props:{course:e.course,lesson:e.previousLesson}})}}};return[{path:"/education-index/",component:a},{path:"/education/",async:function async(e,t,n){localStorage.getItem("education.splash")?n({component:a}):(localStorage.setItem("education.splash",!0),n({component:s}))}},{path:"/education/course/:courseId/",component:e},{path:"/education/lesson-video/",component:t},{path:"/education/lesson-quiz/",component:r}]}();