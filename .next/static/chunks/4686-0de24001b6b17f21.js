(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4686],{1311:function(e,s){"use strict";s.Z=function(e){var s=[];if(!e.parentNode)return s;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&s.push(a),a=a.nextSibling;return s}},8063:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery");s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})}));var a=document.querySelectorAll(".gallery-mons");a.length>=1&&a.forEach((function(s){e=new Isotope(s,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var i=document.querySelector(".filtering");if(i){var r=function(e){e.addEventListener("click",(function(s){matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))}))};i.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var a=s.target.getAttribute("data-filter");a=a,e.arrange({filter:a})}}));for(var n=document.querySelectorAll(".filtering"),l=0,c=n.length;l<c;l++){r(n[l])}}}},57498:function(e,s,a){"use strict";a.d(s,{z:function(){return r},_:function(){return n}});var i=a(1311),r=function(e){(0,i.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},n=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},82517:function(e,s){"use strict";s.Z=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(e){e.innerHTML=e.innerHTML.replace(" / ","")}))}},47296:function(e,s,a){"use strict";var i=a(85893),r=(a(67294),a(41664));s.Z=function(){return(0,i.jsx)("section",{id:"about",className:"about-ar section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6 valign",children:(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("div",{className:"bg-img bg-fixed hero-bg",style:{backgroundImage:"url(/img/arch/hero.jpg)"}}),(0,i.jsx)("div",{className:"exp valign text-center",children:(0,i.jsxs)("div",{className:"full-width",children:[(0,i.jsx)("h2",{className:"bg-img bg-fixed",style:{backgroundImage:"url(/img/arch/hero.jpg)"},children:"25"}),(0,i.jsx)("p",{children:"Years Of Experience"})]})})]})}),(0,i.jsx)("div",{className:"col-lg-6 valign",children:(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h6",{className:"sub-title main-color ls10 text-u",children:"About Us"}),(0,i.jsx)("h3",{children:"Best Designers Architectures for You."}),(0,i.jsx)("p",{children:"Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum sit amet bibendum nisl."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"butn bord mt-30",children:(0,i.jsx)("span",{children:"About Us"})})})]})})]})})})}},30246:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var i=a(85893),r=a(67294),n=a(41664),l=JSON.parse('[{"id":1,"image":"/img/arch/slid/3.jpg","title":"FLOATING HOUSE MESSINIA","date":"14 Sep 2022"},{"id":2,"image":"/img/arch/slid/2.jpg","title":"IN THE PINE FOREST","date":"14 Sep 2022"},{"id":3,"image":"/img/arch/slid/1.jpg","title":"BUGANVILLA HOUSE","date":"14 Sep 2022"}]'),c=a(72873),t=a(88116),d=(a(92311),a(53481),a(30687),a(82517));function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=[],i=!0,r=!1,n=void 0;try{for(var l,c=e[Symbol.iterator]();!(i=(l=c.next()).done)&&(a.push(l.value),!s||a.length!==s);i=!0);}catch(t){r=!0,n=t}finally{try{i||null==c.return||c.return()}finally{if(r)throw n}}return a}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.ZP.use([t.W_,t.tl,t.xW]);var m=function(){var e=o(r.useState(!0),2),s=e[0],a=e[1];r.useEffect((function(){setTimeout((function(){a(!1),(0,d.Z)()}),1e3)}),[]);var t=r.useRef(null),m=r.useRef(null),h=r.useRef(null);return(0,i.jsxs)("section",{className:"case-study",children:[(0,i.jsx)("h2",{style:{display:"none"},children:"\xa0"}),(0,i.jsxs)("div",{id:"content-carousel-container-unq-1",className:"swiper-container","data-swiper":"container",children:[s?null:(0,i.jsx)(c.t,{effect:"fade",speed:1e3,navigation:{prevEl:t.current,nextEl:m.current},pagination:{clickable:!0,el:h.current},onBeforeInit:function(e){e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=m.current,e.params.pagination.el=h.current},onSwiper:function(e){setTimeout((function(){for(var s=0;s<e.slides.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=m.current,e.params.pagination.el=h.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:l.map((function(e){return(0,i.jsx)(c.o,{className:"swiper-slide bg-img",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"7",children:(0,i.jsx)("div",{className:"container d-flex align-items-end",children:(0,i.jsx)("div",{className:"cont",children:(0,i.jsx)(n.default,{href:"/showcase/showcase-dark",children:(0,i.jsxs)("a",{children:[(0,i.jsx)("span",{children:"Case Study"}),(0,i.jsx)("h6",{className:"main-color",children:e.date}),(0,i.jsx)("h4",{children:e.title})]})})})})},e.id)}))}),(0,i.jsxs)("div",{className:"controls",children:[(0,i.jsx)("div",{ref:m,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"fas fa-chevron-right"})}),(0,i.jsx)("div",{ref:t,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"fas fa-chevron-left"})})]}),(0,i.jsx)("div",{className:"swiper-pagination",ref:h})]})]})}},83956:function(e,s,a){"use strict";var i=a(35666),r=a.n(i),n=a(85893),l=a(67294),c=a(82175);function t(e,s,a,i,r,n,l){try{var c=e[n](l),t=c.value}catch(d){return void a(d)}c.done?s(t):Promise.resolve(t).then(i,r)}s.Z=function(){var e,s=function(e){var s;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(s="Invalid email address"):s="Required",s},a=l.useRef(null),i=function(e){return new Promise((function(s){return setTimeout(s,e)}))};return(0,n.jsx)("section",{id:"contact-arch",className:"contact-sec style2 section-padding position-re bg-img",style:{backgroundImage:"url(/img/patrn1.png)"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,n.jsx)("div",{className:"sec-head text-center",children:(0,n.jsx)("h2",{className:"wow fadeIn","data-wow-delay":".3s",children:"Contact Us"})})})}),(0,n.jsx)("div",{className:"row justify-content-center",children:(0,n.jsx)("div",{className:"col-lg-10",children:(0,n.jsx)("div",{className:"form wow fadeInUp","data-wow-delay":".5s",children:(0,n.jsx)(c.J9,{initialValues:{name:"",email:"",message:""},onSubmit:(e=r().mark((function e(s){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(500);case 2:alert(JSON.stringify(s,null,2)),a.current.innerText="Your Message has been successfully sent. I will contact you soon.",s.name="",s.email="",s.message="",setTimeout((function(){a.current.innerText=""}),2e3);case 8:case"end":return e.stop()}}),e)})),function(){var s=this,a=arguments;return new Promise((function(i,r){var n=e.apply(s,a);function l(e){t(n,i,r,l,c,"next",e)}function c(e){t(n,i,r,l,c,"throw",e)}l(void 0)}))}),children:function(e){var i=e.errors,r=e.touched;return(0,n.jsxs)(c.l0,{id:"contact-form",children:[(0,n.jsx)("div",{className:"messages",ref:a}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"controls",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)(c.gN,{id:"form_name",type:"text",name:"name",placeholder:"Name",required:"required"})})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)(c.gN,{validate:s,id:"form_email",type:"email",name:"email",placeholder:"Email",required:"required"}),i.email&&r.email&&(0,n.jsx)("div",{children:i.email})]})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)(c.gN,{as:"textarea",id:"form_message",name:"message",placeholder:"Message",rows:"4",required:"required"})})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("button",{type:"submit",className:"nb butn light mt-30 full-width",children:(0,n.jsx)("span",{className:"ls3 text-u",children:"Send Massege"})})})})]})})]})}})})})})]})})}},4954:function(e,s,a){"use strict";var i=a(85893),r=(a(67294),a(82806));s.Z=function(){return(0,i.jsx)("footer",{className:"sub-bg",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item md-mb50",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h5",{children:"Contact Us"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Officeal Address"}),(0,i.jsx)("p",{children:"504 White St . Dawsonville, GA 30534 , New York"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-mail"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Email Us"}),(0,i.jsx)("p",{children:"support@gmail.com"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"icon pe-7s-call"}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:"Call Us"}),(0,i.jsx)("p",{children:"+87986451666"})]})]})]})]})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item md-mb50",children:[(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h5",{children:"Recent News"})}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/blog/1.jpg",alt:""})}),(0,i.jsxs)("div",{className:"sm-post",children:[(0,i.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,i.jsx)("span",{className:"date main-color",children:"14 sep 2022"})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/blog/2.jpg",alt:""})}),(0,i.jsxs)("div",{className:"sm-post",children:[(0,i.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."}),(0,i.jsx)("span",{className:"date main-color",children:"14 sep 2022"})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"subscribe",children:[(0,i.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,i.jsx)("span",{className:"subs pe-7s-paper-plane back-color"})]})})]})]})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:r.E8,alt:""})}),(0,i.jsxs)("div",{className:"social",children:[(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#0",children:(0,i.jsx)("i",{className:"fab fa-youtube"})})]}),(0,i.jsx)("div",{className:"copy-right",children:(0,i.jsxs)("p",{children:["\xa9 2022, Vie Template. Made with passion by",(0,i.jsx)("a",{href:"#0",className:"main-color",children:"ThemesCamp"}),"."]})})]})})]})})})}},99718:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var i=a(85893),r=a(67294),n=a(41664),l=JSON.parse('[{"id":1,"title":{"first":"Private","second":"Houses Turnkey"},"content":"We developed strong relationships with contractors and specialist companies offering discounted prices.","image":"/img/arch/slid/1.jpg"},{"id":2,"title":"Dustin Villa, Spain","content":"We developed strong relationships with contractors and specialist companies offering discounted prices.","image":"/img/arch/slid/3.jpg"},{"id":3,"title":{"first":"Innovative","second":"Architectures"},"content":"We developed strong relationships with contractors and specialist companies offering discounted prices.","image":"/img/arch/slid/2.jpg"}]'),c=a(72873),t=a(88116),d=(a(53481),a(30687),a(82517));function o(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a=[],i=!0,r=!1,n=void 0;try{for(var l,c=e[Symbol.iterator]();!(i=(l=c.next()).done)&&(a.push(l.value),!s||a.length!==s);i=!0);}catch(t){r=!0,n=t}finally{try{i||null==c.return||c.return()}finally{if(r)throw n}}return a}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.ZP.use([t.W_,t.tl,t.VS]);var m=function(){var e=o(r.useState(!0),2),s=e[0],a=e[1];r.useEffect((function(){(0,d.Z)(),setTimeout((function(){a(!1)}))}),[]);var t=r.useRef(null),m=r.useRef(null),h=r.useRef(null);return(0,i.jsx)("header",{id:"arch-slider",className:"slider arch-slider",children:(0,i.jsxs)("div",{className:"swiper-container parallax-slider",children:[s?null:(0,i.jsx)(c.t,{speed:1e3,parallax:!0,navigation:{prevEl:t.current,nextEl:m.current},pagination:{clickable:!0,el:h.current},onBeforeInit:function(e){e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=m.current,e.params.pagination.el=h.current},onSwiper:function(e){setTimeout((function(){for(var s=0;s<e.slides.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.width);e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=m.current,e.params.pagination.el=h.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update(),e.pagination.destroy(),e.pagination.init(),e.pagination.update()}))},className:"swiper-wrapper",slidesPerView:1,children:l.map((function(e,s){return(0,i.jsx)(c.o,{className:"swiper-slide",children:(0,i.jsx)("div",{className:"bg-img valign",style:{backgroundImage:"url(".concat(e.image,")")},"data-overlay-dark":"6",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"caption mt-30",children:[(0,i.jsxs)("h5",{children:["0",s+1," ."]}),(0,i.jsx)("h1",{children:"object"===typeof e.title?(0,i.jsxs)(i.Fragment,{children:[e.title.first," ",(0,i.jsx)("br",{})," ",e.title.second]}):e.title}),(null===e||void 0===e?void 0:e.content)&&(0,i.jsx)("p",{children:e.content})]})}),(0,i.jsx)("div",{className:"col-lg-4 valign",children:(0,i.jsx)("div",{className:"explore",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{children:["Explore Project",(0,i.jsx)("i",{className:"ion-chevron-right"})]})})})})]})})})},e.id)}))}),(0,i.jsxs)("div",{className:"setting",children:[(0,i.jsxs)("div",{className:"controls",children:[(0,i.jsx)("div",{ref:m,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"ion-chevron-right"})}),(0,i.jsx)("div",{ref:t,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",children:(0,i.jsx)("i",{className:"ion-chevron-left"})})]}),(0,i.jsx)("div",{ref:h,className:"swiper-pagination"})]})]})})}},2825:function(e,s,a){"use strict";var i=a(85893),r=(a(67294),a(41664));s.Z=function(){return(0,i.jsx)("section",{className:"blog section-padding",id:"blog-arch",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,i.jsx)("div",{className:"sec-head text-center",children:(0,i.jsx)("h2",{className:"wow fadeIn","data-wow-delay":".3s",children:"Latest News"})})})}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"item md-mb50 wow fadeInUp","data-wow-delay":".3s",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/arch/blog/1.jpg",alt:""})}),(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)(r.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{className:"date",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{children:"06"})," August"]})})}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)(r.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{className:"tag",children:(0,i.jsx)("span",{className:"main-color",children:"Architecture"})})})]}),(0,i.jsx)("h5",{children:(0,i.jsx)(r.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:"How to use solid color combine with simple furnitures."})})}),(0,i.jsx)("div",{className:"btn-more",children:(0,i.jsx)(r.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{className:"simple-btn main-color",children:"Read More"})})})]})})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"item md-mb50 wow fadeInUp","data-wow-delay":".5s",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/arch/blog/2.jpg",alt:""})}),(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)(r.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{className:"date",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{children:"06"})," August"]})})}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)(r.default,{href:"/blog/blog-dark",children:(0,i.jsx)("a",{className:"tag",children:(0,i.jsx)("span",{className:"main-color",children:"Architecture"})})})]}),(0,i.jsx)("h5",{children:(0,i.jsx)(r.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{children:"How to use solid color combine with simple furnitures."})})}),(0,i.jsx)("div",{className:"btn-more",children:(0,i.jsx)(r.default,{href:"/blog-details/blog-details-dark",children:(0,i.jsx)("a",{className:"simple-btn main-color",children:"Read More"})})})]})})]})})]})]})})}},72367:function(e,s,a){"use strict";var i=a(85893),r=(a(67294),a(66261)),n=a(82806),l=a(57498);s.Z=function(e){var s=e.navbarRef,a=e.theme;return(0,i.jsx)("nav",{className:"navbar navbar-expand-lg",ref:s,children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("a",{className:"logo",href:"/",children:a&&"themeL"===a?(0,i.jsx)("img",{src:n.Q1,alt:"logo"}):(0,i.jsx)("img",{src:n.E8,alt:"logo"})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:l._,"data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"icon-bar",children:(0,i.jsx)("i",{className:"fas fa-bars"})})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,i.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,i.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown","data-scroll-nav":"0",children:"Home"}),(0,i.jsxs)("div",{className:"dropdown-menu",children:[(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home1-dark",children:"Main Home"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home2-dark",children:"Creative Agency"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home5-dark",children:"Digital Agency"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home4-dark",children:"Business One Page"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home3-dark",children:"Corporate Business"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home6-dark",children:"Modern Agency"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home7-dark",children:"Freelancer"}),(0,i.jsx)("a",{className:"dropdown-item",href:"/homepage/home8-dark",children:"Architecture"})]})]}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:"About"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"po-arch",spy:!0,smooth:!0,offset:50,duration:500,children:"Works"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"team-arch",spy:!0,smooth:!0,offset:50,duration:500,children:"Team"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"testimonials-arch",spy:!0,smooth:!0,offset:50,duration:500,children:"Testimonials"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"blog-arch",spy:!0,smooth:!0,offset:50,duration:500,children:"Blog"})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(r.rU,{className:"nav-link",to:"contact-arch",spy:!0,smooth:!0,offset:50,duration:500,children:"Contact"})})]})})]})})}},83093:function(e,s,a){"use strict";var i=a(85893),r=(a(67294),a(41664));s.Z=function(){return(0,i.jsx)("section",{className:"serv-arch",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"row justify-content-center",children:[(0,i.jsxs)("div",{className:"col-lg col-md-6 item bg-img",style:{backgroundImage:"url(/img/arch/s2.jpg)"},children:[(0,i.jsx)("h6",{className:"numb",children:"01"}),(0,i.jsx)("h5",{children:"Architecture"}),(0,i.jsx)("p",{children:"We provide all equipment and services, etc and ensure a safe and secure project site."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"custom-font more main-color",children:"Read More"})})]}),(0,i.jsxs)("div",{className:"col-lg col-md-6 item bg-img",style:{backgroundImage:"url(/img/arch/s1.jpg)"},children:[(0,i.jsx)("h6",{className:"numb",children:"02"}),(0,i.jsx)("h5",{children:"Interior Design"}),(0,i.jsx)("p",{children:"We provide all equipment and services, etc and ensure a safe and secure project site."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"custom-font more main-color",children:"Read More"})})]}),(0,i.jsxs)("div",{className:"col-lg col-md-6 item bg-img",style:{backgroundImage:"url(/img/arch/s3.jpg)"},children:[(0,i.jsx)("h6",{className:"numb",children:"03"}),(0,i.jsx)("h5",{children:"3D Modeling"}),(0,i.jsx)("p",{children:"We provide all equipment and services, etc and ensure a safe and secure project site."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"custom-font more main-color",children:"Read More"})})]}),(0,i.jsxs)("div",{className:"col-lg col-md-6 item bg-img",style:{backgroundImage:"url(/img/arch/s4.jpg)"},children:[(0,i.jsx)("h6",{className:"numb",children:"04"}),(0,i.jsx)("h5",{children:"Furniture Design"}),(0,i.jsx)("p",{children:"We provide all equipment and services, etc and ensure a safe and secure project site."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"custom-font more main-color",children:"Read More"})})]}),(0,i.jsxs)("div",{className:"col-lg col-md-6 item bg-img",style:{backgroundImage:"url(/img/arch/s5.jpg)"},children:[(0,i.jsx)("h6",{className:"numb",children:"05"}),(0,i.jsx)("h5",{children:"Urban Design"}),(0,i.jsx)("p",{children:"We provide all equipment and services, etc and ensure a safe and secure project site."}),(0,i.jsx)(r.default,{href:"/about/about-dark",children:(0,i.jsx)("a",{className:"custom-font more main-color",children:"Read More"})})]})]})})})}},6344:function(e,s,a){"use strict";var i=a(85893);a(67294);s.Z=function(){return(0,i.jsxs)("section",{id:"team-arch",className:"team section-padding",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,i.jsx)("div",{className:"sec-head text-center",children:(0,i.jsx)("h2",{className:"wow fadeIn","data-wow-delay":".3s",children:"Our Team"})})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsx)("div",{className:"item cir md-mb50",children:(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:"/img/team/a1.jpg",alt:""}),(0,i.jsx)("div",{id:"circle1",children:(0,i.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("path",{id:"circlePath1",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,i.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,i.jsxs)("g",{children:[(0,i.jsx)("use",{xlinkHref:"#circlePath1",fill:"none"}),(0,i.jsx)("text",{fill:"#c5a47e",className:"custom-font",children:(0,i.jsx)("textPath",{xlinkHref:"#circlePath1",children:"CEO Manager - CEO Manager - CEO Manager -"})})]})]})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h6",{className:"ls3",children:"Ryan Hicks"}),(0,i.jsx)("span",{className:"main-color fw-600",children:"Client Manager"})]})]})})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsx)("div",{className:"item cir md-mb50",children:(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:"/img/team/a2.jpg",alt:""}),(0,i.jsx)("div",{id:"circle2",children:(0,i.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("path",{id:"circlePath2",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,i.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,i.jsxs)("g",{children:[(0,i.jsx)("use",{xlinkHref:"#circlePath2",fill:"none"}),(0,i.jsx)("text",{fill:"#c5a47e",className:"custom-font",children:(0,i.jsx)("textPath",{xlinkHref:"#circlePath2",children:"Interior Designer Interior Designer Interior Designer"})})]})]})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h6",{className:"ls3",children:"Ryan Hicks"}),(0,i.jsx)("span",{className:"main-color fw-600",children:"Client Manager"})]})]})})}),(0,i.jsx)("div",{className:"col-lg-4",children:(0,i.jsx)("div",{className:"item cir sm-mb50",children:(0,i.jsxs)("div",{className:"img",children:[(0,i.jsx)("img",{src:"/img/team/a3.jpg",alt:""}),(0,i.jsx)("div",{id:"circle3",children:(0,i.jsxs)("svg",{version:"1.1",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,i.jsx)("defs",{children:(0,i.jsx)("path",{id:"circlePath3",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,i.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,i.jsxs)("g",{children:[(0,i.jsx)("use",{xlinkHref:"#circlePath3",fill:"none"}),(0,i.jsx)("text",{fill:"#c5a47e",className:"custom-font",children:(0,i.jsx)("textPath",{xlinkHref:"#circlePath3",children:"Landscape Designer Landscape Designer Landscape Designer"})})]})]})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)("h6",{className:"ls3",children:"Ryan Hicks"}),(0,i.jsx)("span",{className:"main-color fw-600",children:"Client Manager"})]})]})})})]})})]})}},39666:function(e,s,a){"use strict";var i=a(85893),r=a(67294),n=a(46066);a(5383),a(79806);function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,s){for(var a=0;a<s.length;a++){var i=s[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,s){return!s||"object"!==m(s)&&"function"!==typeof s?l(e):s}function o(e,s){return(o=Object.setPrototypeOf||function(e,s){return e.__proto__=s,e})(e,s)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=t(e);if(s){var r=t(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return d(this,a)}}var u=function(e){!function(e,s){if("function"!==typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(s&&s.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),s&&o(e,s)}(d,e);var s,a,r,t=h(d);function d(e){var s,a,r,n;return function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,d),s=t.call(this,e),a=l(s),n=function(){return(0,i.jsx)("div",{className:"arrows",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{onClick:function(){return s.slider.slickNext()},className:"next cursor-pointer",children:(0,i.jsx)("span",{className:"pe-7s-angle-right"})}),(0,i.jsx)("div",{onClick:function(){return s.slider.slickPrev()},className:"prev cursor-pointer",children:(0,i.jsx)("span",{className:"pe-7s-angle-left"})})]})})},(r="renderArrows")in a?Object.defineProperty(a,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[r]=n,s}return s=d,(a=[{key:"render",value:function(){var e=this;return(0,i.jsxs)("section",{id:"testimonials-arch",className:"testimonials section-padding position-re",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,i.jsx)("div",{className:"sec-head text-center",children:(0,i.jsx)("h2",{className:"wow fadeIn","data-wow-delay":".3s",children:"Testimonials"})})})})}),(0,i.jsxs)("div",{className:"container-fluid position-re",children:[(0,i.jsx)("div",{className:"row wow fadeInUp","data-wow-delay":".5s",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)(n.Z,{className:"slic-item",ref:function(s){return e.slider=s},dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}],children:[(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"info inf-lrg valign",children:(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{className:"author",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/clients/1.jpg",alt:""})}),(0,i.jsx)("h6",{className:"author-name color-font",children:"Alex Regelman"}),(0,i.jsx)("span",{className:"author-details",children:"Co-founder, Colabrio"})]})})}),(0,i.jsx)("div",{className:"valign",children:(0,i.jsx)("p",{className:"fz-20 fw-200",children:"I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service."})})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"info inf-lrg valign",children:(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{className:"author",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/clients/1.jpg",alt:""})}),(0,i.jsx)("h6",{className:"author-name color-font",children:"Alex Regelman"}),(0,i.jsx)("span",{className:"author-details",children:"Co-founder, Colabrio"})]})})}),(0,i.jsx)("div",{className:"valign",children:(0,i.jsx)("p",{className:"fz-20 fw-200",children:"I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service."})})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"info inf-lrg valign",children:(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{className:"author",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/clients/1.jpg",alt:""})}),(0,i.jsx)("h6",{className:"author-name color-font",children:"Alex Regelman"}),(0,i.jsx)("span",{className:"author-details",children:"Co-founder, Colabrio"})]})})}),(0,i.jsx)("div",{className:"valign",children:(0,i.jsx)("p",{className:"fz-20 fw-200",children:"I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service."})})]}),(0,i.jsxs)("div",{className:"item",children:[(0,i.jsx)("div",{className:"info inf-lrg valign",children:(0,i.jsx)("div",{className:"cont",children:(0,i.jsxs)("div",{className:"author",children:[(0,i.jsx)("div",{className:"img",children:(0,i.jsx)("img",{src:"/img/clients/1.jpg",alt:""})}),(0,i.jsx)("h6",{className:"author-name color-font",children:"Alex Regelman"}),(0,i.jsx)("span",{className:"author-details",children:"Co-founder, Colabrio"})]})})}),(0,i.jsx)("div",{className:"valign",children:(0,i.jsx)("p",{className:"fz-20 fw-200",children:"I would highly recommend Vie Digital. I worked with the team on an animation for our 'Click & Collect' service."})})]})]})})}),this.renderArrows()]}),(0,i.jsx)("div",{className:"line-v top"}),(0,i.jsx)("div",{className:"line-v bottom"})]})}}])&&c(s.prototype,a),r&&c(s,r),d}(r.Component);s.Z=u},50835:function(e,s,a){"use strict";var i=a(85893),r=a(67294),n=a(41664),l=a(8063);s.Z=function(){return r.useEffect((function(){setTimeout((function(){(0,l.Z)()}),1e3)}),[]),(0,i.jsxs)("section",{className:"portfolio po-arch section-padding pb-70",id:"po-arch",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,i.jsx)("div",{className:"sec-head text-center",children:(0,i.jsx)("h2",{className:"wow fadeIn","data-wow-delay":".3s",children:"Projects"})})})})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"filtering col-12",children:(0,i.jsxs)("div",{className:"filter custom-font wow fadeIn","data-wow-delay":".5s",children:[(0,i.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,i.jsx)("span",{"data-filter":".brand",children:"Interior"}),(0,i.jsx)("span",{"data-filter":".web",children:"Architecture"}),(0,i.jsx)("span",{"data-filter":".graphic",children:"Residential"})]})}),(0,i.jsxs)("div",{className:"gallery full-width",children:[(0,i.jsxs)("div",{className:"col-md-6 items graphic lg-mr wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/1.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"BUGANVILLA HOUSE"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]}),(0,i.jsxs)("div",{className:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/2.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"The Concept"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]}),(0,i.jsxs)("div",{className:"col-md-6 items web wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/5.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"Private House"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]}),(0,i.jsxs)("div",{className:"col-md-6 items web graphic wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/3.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"Floating House Messinia"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]}),(0,i.jsxs)("div",{className:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/4.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"IN THE PINE FOREST"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]}),(0,i.jsxs)("div",{className:"col-md-6 items brand wow fadeInUp","data-wow-delay":".4s",children:[(0,i.jsx)("div",{className:"item-img",children:(0,i.jsx)(n.default,{href:"/project-details2/project-details2-dark",children:(0,i.jsxs)("a",{className:"imago wow",children:[(0,i.jsx)("img",{src:"/img/arch/work/6.jpg",alt:"image"}),(0,i.jsx)("div",{className:"item-img-overlay"})]})})}),(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h5",{children:"VILLAS IN SOCHI"}),(0,i.jsxs)("span",{className:"tags main-color custom-font",children:[(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Arch"}),",",(0,i.jsx)(n.default,{href:"/works/works-dark",children:"Interior"})]})]})]})]})]})})]})}},92311:function(){},30687:function(){}}]);