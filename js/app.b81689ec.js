(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"545e":function(e,t,o){e.exports=o.p+"img/twj.e7d8581b.png"},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("TopNav"),o("v-main",[o("router-view"),o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"gred darken-2","aria-label":"To Top"},on:{click:e.toTop}},[o("v-icon",{attrs:{dark:""}},[e._v("mdi-arrow-up-bold-outline")])],1)],1),o("Footer")],1)},n=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[o("v-toolbar-title",[o("v-btn",{attrs:{text:"",href:"#intro"}},[e._v("Violet Hall")])],1),o("v-spacer"),o("v-btn",{attrs:{text:"",href:"#portfolio"}},[e._v("Portfolio")]),o("v-btn",{attrs:{text:"",href:"#resume"}},[e._v(" Resume ")])],1)},l=[],s=o("2877"),c=o("6544"),d=o.n(c),u=o("40dc"),p=o("8336"),h=o("2fa4"),v=o("2a7f"),w={},m=Object(s["a"])(w,i,l,!1,null,null,null),f=m.exports;d()(m,{VAppBar:u["a"],VBtn:p["a"],VSpacer:h["a"],VToolbarTitle:v["a"]});var b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-footer",{attrs:{color:"grey darken-3",padless:""}},[o("v-row",{attrs:{justify:"center","no-gutters":""}},[e._l(e.items,(function(t){return o("v-btn",{key:t.text,staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",dark:""},on:{click:function(o){return e.open(t)}}},[o("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(t.text)+" ")],1)})),o("v-col",{staticClass:"grey darken-2 py-4 text-center white--text",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),o("strong",[e._v("Violet Hall")])])],2)],1)},x=[],g={data:()=>({items:[{text:"Home",icon:"mdi-home",url:"/",external:!1},{text:"GitHub",icon:"mdi-github",url:"http://www.github.com/rvehall",external:!0},{text:"Linkedin",icon:"mdi-linkedin",url:"https://www.linkedin.com/in/rvehall/",external:!0}]}),methods:{open:function(e){e.external?window.open(e.url,"_blank"):this.$vuetify.goTo(0).then(()=>this.$router.push(e.url))}}},C=g,_=o("62ad"),y=o("553a"),V=o("132d"),k=o("0fd9"),P=Object(s["a"])(C,b,x,!1,null,null,null),S=P.exports;d()(P,{VBtn:p["a"],VCol:_["a"],VFooter:y["a"],VIcon:V["a"],VRow:k["a"]});var T={name:"App",components:{Footer:S,TopNav:f},data(){return{scrolled:!1,fab:!1}},methods:{handleScroll(){this.scrolled=window.scrollY>1e3},onScroll(e){if("undefined"===typeof window)return;const t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20},toTop(){this.$vuetify.goTo(0)}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}},j=T,E=o("7496"),A=o("f6c4"),I=o("269a"),O=o.n(I),B=o("f977"),N=Object(s["a"])(j,a,n,!1,null,null,null),H=N.exports;d()(N,{VApp:E["a"],VBtn:p["a"],VIcon:V["a"],VMain:A["a"]}),O()(N,{Scroll:B["b"]});var D=o("9483");Object(D["a"])("/portfolio/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var F=o("8c4f"),G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("Introduction",{attrs:{id:"intro"}}),o("h1",{attrs:{id:"portfolio"}},[e._v("Portfolio")]),o("UXPortfolio"),o("SoftwarePortfolio"),o("h2",{attrs:{id:"resume"}},[e._v("Resume")]),o("Skills"),o("Work"),o("Education"),o("Volunteer"),o("Awards")],1)},U=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-avatar",{attrs:{size:"250px"}},[r("v-img",{attrs:{src:o("b640"),alt:"Violet Hall"}})],1)],1),r("v-col",{attrs:{cols:"12"}},[e._v("Hi! I am Violet Hall and I work as UX and Front End Developer. My passion is creating a user centered user experience.")]),r("v-col",{attrs:{cols:"12"}},[e._v(" “User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products.” "),r("br"),e._v("– Don Norman, Cognitive Scientist & User Experience Architect ")])],1)},M=[],$={name:"Introduction",props:{resume:!1,portfolio:!1}},R=$,L=o("8212"),q=o("adda"),X=Object(s["a"])(R,W,M,!1,null,null,null),J=X.exports;d()(X,{VAvatar:L["a"],VCol:_["a"],VImg:q["a"],VRow:k["a"]});var z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("h2",[e._v("Awards")]),o("v-row",{attrs:{dense:""}},e._l(e.items,(function(t,r){return o("v-col",{key:r,attrs:{cols:"12"}},[o("v-card",{attrs:{color:"grey darken-3",dark:""}},[o("div",{staticClass:"d-flex flex-no-wrap justify-space-between",attrs:{align:"center",justify:"center"}},[o("div",[o("v-card-title",{staticClass:"headline",domProps:{textContent:e._s(t.title)}}),o("v-card-subtitle",{domProps:{textContent:e._s(t.text)}})],1),o("v-avatar",{staticClass:"ma-3",attrs:{size:"100",tile:""}},[o("v-icon",{attrs:{size:"100"}},[e._v("mdi-trophy")])],1)],1)])],1)})),1)],1)},Y=[],Q={data:()=>({items:[{src:"https://upload.wikimedia.org/wikipedia/en/0/0f/Time_youcover01.jpg",title:"Time Magazine Person of the Year, 2006 (shared)",text:"In 2006, at the age of 15, was honored with being named Person of the Year along with several other people."}]})},K=Q,Z=o("b0af"),ee=o("99d9"),te=o("a523"),oe=Object(s["a"])(K,z,Y,!1,null,null,null),re=oe.exports;d()(oe,{VAvatar:L["a"],VCard:Z["a"],VCardSubtitle:ee["b"],VCardTitle:ee["d"],VCol:_["a"],VContainer:te["a"],VIcon:V["a"],VRow:k["a"]});var ae=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{staticClass:"ma-2"},[o("v-col",{attrs:{cols:"12"}},[o("h2",[e._v("Skills")])]),e._l(e.items,(function(t){return o("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"4"}},[o("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[o("v-avatar",{attrs:{color:"grey darken-3",tile:""}},[o("v-icon",{attrs:{dark:""}},[e._v(e._s(t.icon))])],1),o("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.title)}}),o("v-card-subtitle",{domProps:{textContent:e._s(t.type)}}),o("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.text)}})],1)],1)}))],2)},ne=[],ie={name:"Skills",data:()=>({items:[{title:"User Experience Design",icon:"mdi-image",type:"Design",text:"I earned my B.A. in Psychology and Human-Computer Interaction, and have worked with clients to design interfaces and workflows to make their lives/jobs easier."},{title:"Software Engineering",icon:"mdi-xml",type:"Development",text:"With users in mind, I have worked as a Software Engineer since 2012  to develop web and mobile applications."},{title:"Student",icon:"mdi-book-open-variant",type:"Continuing Education",text:"As technology ever evolves, it is important to actively learn and grow as a person and as an engineer. "}]})},le=ie,se=Object(s["a"])(le,ae,ne,!1,null,null,null),ce=se.exports;d()(se,{VAvatar:L["a"],VCard:Z["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VIcon:V["a"],VRow:k["a"]});var de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"ma-2"},[r("v-col",{directives:[{name:"show",rawName:"v-show",value:e.quick,expression:"quick"}],attrs:{cols:"12"}},[r("h2",[e._v("UX Portfolio at a Glance")])]),e._l(e.items,(function(t){return r("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[r("v-img",{attrs:{src:o("9e01")("./"+t.src+".png"),height:"200px"}}),r("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.title)}}),r("v-card-subtitle",{domProps:{textContent:e._s(t.type)}}),r("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.text)}}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{"aria-label":"Visit "+t.title,text:"",color:"deep-blue",outlined:""},on:{click:function(o){return e.open(t)}}},[e._v("Visit site")])],1)],1)],1)}))],2)},ue=[],pe={name:"UX",data:()=>({items:[{title:"Protoduction",src:"blog",type:"Personal Blog",text:"This blog is a work in progress. It's the first site that I've built either in VueJS or with Firebase and has made it to production.",url:"http://blog.rvehall.io/"},{title:"iSorry",src:"isorry",type:"Mobile App - Android",text:"This was created as a joke for a friend. She wanted her significant other to apololize for something he'd done and he wouldn't.",url:"https://play.google.com/store/apps/details?id=io.cordova.isorry"},{title:"The Web Jar, LLC",src:"twj",type:"Business website",text:"The Web Jar, as a business, was built to help other small businesses grow and succeed in Upstate South Carolina.",url:"http://www.thewebjar.net/"}]}),methods:{open:function(e){window.open(e.url,"_blank")}},props:{quick:!1}},he=pe,ve=Object(s["a"])(he,de,ue,!1,null,null,null),we=ve.exports;d()(ve,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VImg:q["a"],VRow:k["a"],VSpacer:h["a"]});var me=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{staticClass:"ma-2"},e._l(e.items,(function(t){return o("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"4"}},[o("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[o("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.title)}}),o("v-card-subtitle",{domProps:{textContent:e._s(t.type)}}),o("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.text)}}),o("v-card-actions",[o("v-spacer"),e._l(t.links,(function(t){return o("v-btn",{key:t.name,attrs:{"aria-label":t.title,text:"",color:"deep-blue",outlined:"",target:"_blank"},on:{click:function(o){return e.open(t)}}},[e._v(e._s(t.title))])}))],2)],1)],1)})),1)},fe=[],be={name:"Software",data:()=>({items:[{title:"iSorry",type:"jQuery | Cordova",text:"If you or someone you know needs to say 'I'm sorry' but won't, use this.",links:[{title:"Github",url:"https://github.com/rvehall/iSorry"},{title:"Play Store",url:"https://play.google.com/store/apps/details?id=io.cordova.isorry"}]},{title:"Advice and Dad Jokes",type:"React Native",text:"A React Native app that will give you dad jokes or advice.",links:[{title:"Github",url:"https://github.com/rvehall/advice-jokes"},{title:"Expo",url:"https://expo.io/@rvehall/mediation"}]},{title:"Countdown",type:"Vue",text:"An NPM package for Vue for a Countdown timer. ",links:[{title:"Github",url:"https://github.com/rvehall/countdown-vue"},{title:"npm",url:"https://www.npmjs.com/package/countdown-vue"}]},{title:"Advice and Dad JokesMoocher - API (WIP)",type:".NET Core | Mongo",text:"This is an eCommerce API paired with the Moocher - Front End.",links:[{title:"Github",url:"https://github.com/rvehall/moocher"}]},{title:"Moocher - Front End (WIP)",type:"Vue",text:"This is an eCommerce Vue app to be paired with the Moocher - API.",links:[{title:"Github",url:"https://github.com/rvehall/moocher-vue"}]},{title:"Life At Home",type:"Vue | Firebase - Contributer",text:"This is to provide resources for being quarantined during COVID-19.",links:[{title:"Github",url:"https://github.com/Women-Who-Code-Phoenix/lahr"}]}]}),methods:{open:function(e){window.open(e.url,"_blank")}},props:{quick:!1}},xe=be,ge=Object(s["a"])(xe,me,fe,!1,null,null,null),Ce=ge.exports;d()(ge,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VRow:k["a"],VSpacer:h["a"]});var _e=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{staticClass:"ma-2"},[o("v-col",{attrs:{cols:"12"}},[o("h2",[e._v("Education")])]),e._l(e.items,(function(t){return o("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"6",flat:""}},[o("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[o("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.what)}}),o("v-card-subtitle",[e._v(" "+e._s(t.where)+"| "+e._s(t.when))]),o("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.how)}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",outlined:"","aria-label":"link for "+t.what},on:{click:function(o){return e.open(t)}}},[e._v("Go to website")])],1)],1)],1)}))],2)},ye=[],Ve={name:"UX",data:()=>({items:[{what:"General Studies",when:"09/2017 - 05/2019",where:"Glendale Communit College",how:"I graduatied with an A.A. in General Studies to supplement my HCI degree.",url:"https://www.gccaz.edu/"},{what:"Psychology | Human-Computer Interaction",when:"09/2009 - 05/2013",where:"Converse College",how:"I graduatied Cum Laude with a B.A. in Psychology and Human-Computer Interaction.",url:"https://www.converse.edu"}]}),methods:{open:function(e){window.open(e.url,"_blank")}}},ke=Ve,Pe=Object(s["a"])(ke,_e,ye,!1,null,null,null),Se=Pe.exports;d()(Pe,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VRow:k["a"],VSpacer:h["a"]});var Te=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{staticClass:"ma-2"},[o("v-col",{attrs:{cols:"12"}},[o("h2",[e._v("Volunteer")])]),e._l(e.items,(function(t){return o("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"6",flat:""}},[o("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[o("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.what)}}),o("v-card-subtitle",[e._v(" "+e._s(t.where)+"| "+e._s(t.when))]),o("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.how)}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",outlined:"","aria-label":"link for "+t.what},on:{click:function(o){return e.open(t)}}},[e._v("Go to website")])],1)],1)],1)}))],2)},je=[],Ee={name:"UX",data:()=>({items:[{what:"Volunteer",when:"01/2020 - Present",where:"Woment Who Code",how:"I work with the Women Who Code - Phoenix Director to develop and plan MeetUps for the group. This can include leading a class, setting up a project for the group to work on, and/or supporting the Director or another Software Engineer during a class.",url:"https://www.womenwhocode.com/"},{what:"Web Presence Manager",when:"08/2019 - Present",where:"Silver Wind Ocarina",how:"I maintain Silver Wind Ocarina's online presence (Facebook, Twitter, YouTube, Instagram, Reddit, and website).",url:"https://silverwindocarina.com"}]}),methods:{open:function(e){window.open(e.url,"_blank")}}},Ae=Ee,Ie=Object(s["a"])(Ae,Te,je,!1,null,null,null),Oe=Ie.exports;d()(Ie,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VRow:k["a"],VSpacer:h["a"]});var Be=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{staticClass:"ma-2"},[o("v-col",{attrs:{cols:"12"}},[o("h2",[e._v("Education")])]),e._l(e.items,(function(t){return o("v-col",{key:t.title,staticClass:"pa-3 d-flex flex-column",attrs:{cols:"12",md:"6",flat:""}},[o("v-card",{staticClass:"elevation-5 flex d-flex flex-column"},[o("v-card-title",{attrs:{"primary-title":""},domProps:{textContent:e._s(t.what)}}),o("v-card-subtitle",[e._v(" "+e._s(t.where)+"| "+e._s(t.when))]),o("v-card-text",{staticClass:"flex",domProps:{textContent:e._s(t.how)}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{text:"",outlined:"","aria-label":"link for "+t.what},on:{click:function(o){return e.open(t)}}},[e._v("Go to website")])],1)],1)],1)}))],2)},Ne=[],He={name:"UX",data:()=>({items:[{what:"UI/UX Developer",when:"07/2019 - Present",where:"Attainia",how:"I work with users, the business, and engineering to design and develop a web application intended to help those in the medical capital equipment planning industry to plan their projects. (B2B)",url:"http://attainia.com/"},{what:"Software Engineer",when:"02/2019 - 06/2019",where:"Attainia",how:"I worked with users, the business, and product to develop and maintain a web application intended to help those in the medical capital equipment planning industry to plan their projects. (B2B)",url:"http://attainia.com/"},{what:"Software Engineer",when:"08/2016-1/2019",where:"OpenTech Labs | OpenTech Alliance, Inc",how:"I worked with the business and other engineers to develop web applications for the self-storage industry. (B2B, B2C, internal)",url:"https://opentechalliance.com/"},{what:"Applications Analyst (.NET Developer)",when:"09/2015-06/2016",where:"South Carolina Department of Employment and Workforce",how:"I worked with the business and other developers to maintain applications designed to provide state and federally funded benefits. (G2C and G2B)",url:"https://dss.sc.gov/"},{what:"Applications Analyst (.NET Developer)",when:"South Carolina Department of Social Services",where:"Attainia",how:"I worked with the business and other developers to maintain applications built around providing state funded benefits. (G2C and internal)",url:"https://dew.sc.gov/"},{what:"Software Engineer | UX Engineer",when:"03/2012-08/2013",where:"The Web Jar, LLC",how:"I worked with the business to design, build, and maintain web applications for small businesses. (B2B)",url:"http://thewebjar.net/"}]}),methods:{open:function(e){window.open(e.url,"_blank")}}},De=He,Fe=Object(s["a"])(De,Be,Ne,!1,null,null,null),Ge=Fe.exports;d()(Fe,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardSubtitle:ee["b"],VCardText:ee["c"],VCardTitle:ee["d"],VCol:_["a"],VRow:k["a"],VSpacer:h["a"]});var Ue={name:"Home",components:{Introduction:J,Awards:re,Skills:ce,UXPortfolio:we,SoftwarePortfolio:Ce,Education:Se,Volunteer:Oe,Work:Ge}},We=Ue,Me=Object(s["a"])(We,G,U,!1,null,null,null),$e=Me.exports;d()(Me,{VContainer:te["a"]});var Re=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-card",{staticClass:"mx-auto"},[o("v-card-text",[o("div",[e._v("Error 404")]),o("p",{staticClass:"display-1 text--primary"},[e._v(" page•not•found ")]),o("p",[e._v("http response")]),o("div",{staticClass:"text--primary"},[e._v(' "The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found, File Not Found, or Server Not Found error message is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information." '),o("v-btn",{attrs:{text:"",outlined:""},on:{click:e.open}},[e._v("[1]")])],1),o("div",{staticClass:"text--primary"},[e._v(" Please try a different route. ")])]),o("v-card-actions",[o("v-btn",{attrs:{text:"",to:"/",outlined:""}},[o("v-icon",[e._v("mdi-home")]),e._v(" Go Home ")],1)],1)],1)],1)},Le=[],qe={name:"Error",methods:{open:function(e){window.open("https://en.wikipedia.org/wiki/HTTP_404","_blank")}}},Xe=qe,Je=Object(s["a"])(Xe,Re,Le,!1,null,null,null),ze=Je.exports;d()(Je,{VBtn:p["a"],VCard:Z["a"],VCardActions:ee["a"],VCardText:ee["c"],VContainer:te["a"],VIcon:V["a"]}),r["a"].use(F["a"]);const Ye=[{path:"/",name:"Home",component:$e},{path:"*",name:"Error",component:ze}],Qe=new F["a"]({mode:"history",base:"/portfolio/",routes:Ye});var Ke=Qe,Ze=o("f309");r["a"].use(Ze["a"]);var et=new Ze["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Ke,vuetify:et,render:function(e){return e(H)}}).$mount("#app")},"9e01":function(e,t,o){var r={"./blog.png":"ee1c","./isorry.png":"f51b","./twj.png":"545e"};function a(e){var t=n(e);return o(t)}function n(e){if(!o.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id="9e01"},b640:function(e,t,o){e.exports=o.p+"img/logo.84924d26.jpg"},ee1c:function(e,t,o){e.exports=o.p+"img/blog.73420a25.png"},f51b:function(e,t,o){e.exports=o.p+"img/isorry.c73dd23b.png"}});
//# sourceMappingURL=app.b81689ec.js.map