(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{394:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(60);var n=r(12),o=r(19),c=r(27),l=r(22),f=r(13);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var d=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"titles",get:function(){return{description:this.$i18n.t("titles.description"),langue:this.$i18n.t("titles.langue"),technologie:this.$i18n.t("titles.technologie"),image:this.$i18n.t("titles.image")}}},{key:"buttons",get:function(){return{back:"Retour",seeProject:"Voir projet"}}},{key:"project",get:function(){var t=this;return this.$store.getters["ProjectModule/projects"].filter((function(p){return p.id===t.id}))[0]}}]),r}(r(61).d)},408:function(t,e,r){var content=r(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("2e79cf54",content,!0,{sourceMap:!1})},566:function(t,e,r){"use strict";r(408)},567:function(t,e,r){(e=r(14)(!1)).push([t.i,"@media(min-width:576px){#flex_carousel[data-v-ed6d665e]{height:100%}}",""]),t.exports=e},585:function(t,e,r){"use strict";r.r(e);r(193);var n=r(12),o=r(19),c=r(27),l=r(22),f=r(13),v=r(9),d=r(61);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"id",get:function(){return"Transversal2019"}}]),r}(r(394).a),j=_=m([d.a],_),y=(r(566),r(83)),C=r(118),x=r.n(C),P=r(186),w=r(377),O=r(587),R=r(588),k=r(550),V=r(404),$=r(547),D=r(183),S=r(148),I=r(182),J=r(387),component=Object(y.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"text-center"},[t._v("\n        Projet Transversal\n      ")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"text-left",domProps:{textContent:t._s(t.titles.description)}}),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n        L'objectif du projet de transversal avait pour but de nous apprendre à maitriser la\n        stratégie Scrum. Pour ce projet en groupe de 6 étudiants nous avons déterminé une feuille\n        de route à chacun. J'ai été désigné chef d'équipe, avec pour mission, d'apporter un regard\n        technique sur l'ensemble du projet et sur les technologies utilisées.\n      ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n        Le projet consistait à la conception d'un outil de création de QCM que l'on pouvait\n        partager via un QR code et dont les réponses étaient comptabilisées en temps réel.\n      ")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n        La réalisation de chaque \"sprint\" était conclue par une réunion et faisait l'objet d'un\n        rapoort. Nous devions respecter les attentes spécifiées dans le cahier des charges\n        et réaliser une démonstration devant nos deux tuteurs.\n      ")])])],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"text-left",domProps:{textContent:t._s(t.titles.langue)}}),t._v(" "),r("v-row",t._l(t.project.languages,(function(e,i){return r("v-chip",{key:i,staticClass:"ma-2",attrs:{color:e.color,"text-color":"white"}},[e.icon?r("v-avatar",{attrs:{left:""}},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e(),t._v("\n          "+t._s(e.text)+"\n        ")],1)})),1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"text-left",domProps:{textContent:t._s(t.titles.technologie)}}),t._v(" "),r("v-row",t._l(t.project.technologies,(function(e,i){return r("v-chip",{key:i,staticClass:"ma-2",attrs:{color:e.color,"text-color":"white"}},[e.icon?r("v-avatar",{attrs:{left:""}},[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1):t._e(),t._v("\n          "+t._s(e.text)+"\n        ")],1)})),1)],1)],1),t._v(" "),t.project.hasPictures()?r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h2",{staticClass:"text-left",domProps:{textContent:t._s(t.titles.image)}}),t._v(" "),r("v-carousel",{staticClass:"ma-2 ma-md-0",attrs:{height:"auto"}},t._l(t.project.pictures,(function(picture,i){return r("v-carousel-item",{key:i},[r("v-img",{attrs:{"aspect-ratio":16/9,contain:"",src:picture.src,"lazy-src":picture.lazy,alt:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1):t._e(),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"auto"}},[r("v-btn",{staticClass:"ma-2",attrs:{tile:"",to:"/mesProjets",block:""},domProps:{textContent:t._s(t.buttons.back)}})],1),t._v(" "),r("v-col",{staticClass:"ml-auto",attrs:{cols:"12",sm:"auto"}},[r("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"orange",href:t.project.repo,target:"_blank",block:""}},[r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-gitlab\n        ")]),t._v(" "),r("span",{domProps:{textContent:t._s(t.buttons.seeProject)}})],1)],1)],1)],1)}),[],!1,null,"ed6d665e",null);e.default=component.exports;x()(component,{VAvatar:P.a,VBtn:w.a,VCarousel:O.a,VCarouselItem:R.a,VChip:k.a,VCol:V.a,VContainer:$.a,VIcon:D.a,VImg:S.a,VProgressCircular:I.a,VRow:J.a})}}]);