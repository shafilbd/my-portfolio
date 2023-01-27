"use strict";
exports.id = 1264;
exports.ids = [1264];
exports.modules = {

/***/ 1264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5895);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3391);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2532);
/* harmony import */ var _components_Freelancre_intro_freelancre_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(463);
/* harmony import */ var _components_Services5_services5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7216);
/* harmony import */ var _components_Works3_works3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8419);
/* harmony import */ var _components_About_us5_about_us5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7893);
/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3825);
/* harmony import */ var _components_blogs_Blogs2_blogs2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7464);
/* harmony import */ var _components_s_contact_form_s_contact_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5781);
/* harmony import */ var _components_Price_packages_price_packages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Works3_works3__WEBPACK_IMPORTED_MODULE_7__]);
_components_Works3_works3__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





// import LightTheme from "../../layouts/Light";


// import WorksStyle4 from "../../components/Works-style4/works-style4";






const Homepage = ()=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        mobileappstyle: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Freelancre_intro_freelancre_intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Services5_services5__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works3_works3__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_us5_about_us5__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Price_packages_price_packages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                showHead: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

});

/***/ })

};
;