(self["webpackChunkportafolio_angular"] = self["webpackChunkportafolio_angular"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2085:
/*!*******************************************!*\
  !*** ./src/app/Common/GlobalVariables.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lenguajes": function() { return /* binding */ lenguajes; },
/* harmony export */   "frases": function() { return /* binding */ frases; }
/* harmony export */ });
var lenguajes;
(function (lenguajes) {
    lenguajes["es"] = "es";
    lenguajes["en"] = "en";
})(lenguajes || (lenguajes = {}));
var frases;
(function (frases) {
    frases["es"] = "Cambiando al mundo una l\u00EDnea de c\u00F3digo a la vez.";
    frases["en"] = "Changing the world one line of code at a time.";
})(frases || (frases = {}));


/***/ }),

/***/ 18967:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Home/components/home/home.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Common/GlobalVariables */ 2085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-typed-js */ 23192);





const _c0 = function (a0) { return [a0]; };
function HomeComponent_ngx_typed_js_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngx-typed-js", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c0, ctx_r0.fraseHome[0]))("shuffle", true)("typeSpeed", 150)("backSpeed", 50)("backDelay", 500)("startDelay", 1000)("loop", true);
} }
function HomeComponent_ngx_typed_js_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngx-typed-js", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c0, ctx_r1.fraseHome[1]))("shuffle", true)("typeSpeed", 150)("backSpeed", 50)("backDelay", 500)("startDelay", 1000)("loop", true);
} }
function HomeComponent_ngx_typed_js_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngx-typed-js", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c0, ctx_r2.fraseHome[0]))("shuffle", true)("typeSpeed", 150)("backSpeed", 50)("backDelay", 500)("startDelay", 1000)("loop", true);
} }
function HomeComponent_ngx_typed_js_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "ngx-typed-js", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](7, _c0, ctx_r3.fraseHome[1]))("shuffle", true)("typeSpeed", 150)("backSpeed", 50)("backDelay", 500)("startDelay", 1000)("loop", true);
} }
class HomeComponent {
    constructor(translate) {
        this.translate = translate;
        this.fraseHome = [_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.frases.es, _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.frases.en];
        this.idiomaPagina = "es";
        this.translate.onLangChange.subscribe((event) => {
            this.idiomaPagina = event.lang;
        });
    }
    ngOnInit() {
        this.idiomaPagina = this.translate.currentLang;
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
HomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 46, vars: 22, consts: [[1, "section", "pt-0"], [1, "container"], [1, "cajaPadre", "has-text-centered", "is-hidden-touch"], [1, "cajaFoto"], [1, "image"], ["src", "https://i.postimg.cc/XJc023vW/dollar-general-600.png", "alt", "Diego Gonzalez Calderon - Diego Gonzalez", 1, "is-rounded"], [1, "cajaSaludo"], [1, "has-text-centered", "is-size-4"], [1, "title", "is-2"], [1, "has-text-light"], [1, ""], [1, "cajaFrase", "pl-1"], [1, "box", "has-background-success-dark", "transparente"], ["class", "is-size-5 is-uppercase has-text-white-ter", 3, "strings", "shuffle", "typeSpeed", "backSpeed", "backDelay", "startDelay", "loop", 4, "ngIf"], [1, "has-text-centered", "is-hidden-desktop"], [1, "columns"], [1, "column"], [1, "image", "is-3by4"], [1, "row"], [1, "row", "mt-3"], ["class", "title is-3 is-uppercase has-text-white-ter", 3, "strings", "shuffle", "typeSpeed", "backSpeed", "backDelay", "startDelay", "loop", 4, "ngIf"], [1, "is-size-5", "is-uppercase", "has-text-white-ter", 3, "strings", "shuffle", "typeSpeed", "backSpeed", "backDelay", "startDelay", "loop"], [1, "typing"], [1, "title", "is-3", "is-uppercase", "has-text-white-ter", 3, "strings", "shuffle", "typeSpeed", "backSpeed", "backDelay", "startDelay", "loop"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](21, HomeComponent_ngx_typed_js_21_Template, 2, 9, "ngx-typed-js", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](22, HomeComponent_ngx_typed_js_22_Template, 2, 9, "ngx-typed-js", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "figure", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, HomeComponent_ngx_typed_js_44_Template, 2, 9, "ngx-typed-js", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](45, HomeComponent_ngx_typed_js_45_Template, 2, 9, "ngx-typed-js", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](10, 10, "SALUDO_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](14, 12, "NOMBRE_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](18, 14, "SUBTITULO_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.idiomaPagina == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.idiomaPagina == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](33, 16, "SALUDO_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](37, 18, "NOMBRE_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](41, 20, "SUBTITULO_HOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.idiomaPagina == "es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.idiomaPagina == "en");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_typed_js__WEBPACK_IMPORTED_MODULE_4__.NgxTypedJsComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".cajaPadre[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n}\n\n.cajaFoto[_ngcontent-%COMP%] {\n    grid-area: 1 / 2 / 4 / 4;\n}\n\n.cajaSaludo[_ngcontent-%COMP%] {\n    grid-area: 2 / 1 / 3 / 2;\n}\n\n.cajaFrase[_ngcontent-%COMP%] {\n    grid-area: 2 / 4 / 3 / 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWphUGFkcmUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uY2FqYUZvdG8ge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyA0IC8gNDtcbn1cblxuLmNhamFTYWx1ZG8ge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbn1cblxuLmNhamFGcmFzZSB7XG4gICAgZ3JpZC1hcmVhOiAyIC8gNCAvIDMgLyA1O1xufVxuIl19 */"] });


/***/ }),

/***/ 70986:
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 18967);
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.routes */ 53441);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






class HomeModule {
}
HomeModule.??fac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: HomeModule });
HomeModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__.NgxTypedJsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _home_routes__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](HomeModule, { declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__.NgxTypedJsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _home_routes__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule] }); })();


/***/ }),

/***/ 53441:
/*!*******************************************!*\
  !*** ./src/app/Pages/Home/home.routes.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 18967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const HOME_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }
];
class HomeRoutingModule {
}
HomeRoutingModule.??fac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(HOME_ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 65419:
/*!**************************************************************************!*\
  !*** ./src/app/Pages/Learning/components/learning/learning.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningComponent": function() { return /* binding */ LearningComponent; }
/* harmony export */ });
/* harmony import */ var _core_services_learning_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/learning.service */ 28472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-mzd-timeline */ 28387);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);





function LearningComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "figure", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", item_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("alt", "Diego Gonzalez - ", item_r2.titulo, "");
} }
function LearningComponent_mzd_timeline_content_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mzd-timeline-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "figure", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("border", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", item_r3.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("alt", "Diego Gonzalez - ", item_r3.titulo, "");
} }
class LearningComponent {
    constructor() {
        this.listaTitulos = [];
        let serviceLearning = new _core_services_learning_service__WEBPACK_IMPORTED_MODULE_0__.LearningService();
        this.listaTitulos = serviceLearning.listaTitulos;
    }
    ngOnInit() {
    }
}
LearningComponent.??fac = function LearningComponent_Factory(t) { return new (t || LearningComponent)(); };
LearningComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LearningComponent, selectors: [["app-learning"]], decls: 18, vars: 9, consts: [[1, "section"], [1, "has-text-centered"], [1, "textoDetras", "title", "is-2", "is-uppercase"], [1, "textoEncima", "subtitle", "is-uppercase"], [1, "container", "is-hidden-touch"], [1, "row", "columns", "is-multiline"], ["class", "column is-4", 4, "ngFor", "ngForOf"], [1, "container", "is-hidden-desktop"], [3, "border"], [1, "image", "is-1by1"], ["src", "https://i.postimg.cc/Gh4pxZXc/Cursos-Online.webp", "alt", "Diego Gonzalez - Learning"], [3, "border", 4, "ngFor", "ngForOf"], [1, "column", "is-4"], [1, "image", "zoom", "is-16by9"], [3, "src", "alt"], [1, ""], [1, "image", "is-5by3"]], template: function LearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, LearningComponent_div_11_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mzd-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mzd-timeline-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "figure", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, LearningComponent_mzd_timeline_content_17_Template, 4, 3, "mzd-timeline-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](4, 5, "TITULO_LEARNING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 7, "SUBTITULO_LEARNING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.listaTitulos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("border", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.listaTitulos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_3__.MzdTimelineComponent, ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_3__.MzdTimelineContentComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".zoom[_ngcontent-%COMP%] {\n    transition: 1.5s ease;\n    -moz-transition: 1.5s ease;\n    \n    -webkit-transition: 1.5s ease;\n    \n    -o-transition: 1.5s ease;\n    \n}\n\n.zoom[_ngcontent-%COMP%]:hover {\n    z-index: 30;\n    transform: scale(2);\n    -moz-transform: scale(2);\n    \n    -webkit-transform: scale(2);\n    \n    -o-transform: scale(2);\n    \n    -ms-transform: scale(2);\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXJuaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1oiLCJmaWxlIjoibGVhcm5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi56b29tIHtcbiAgICB0cmFuc2l0aW9uOiAxLjVzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOiAxLjVzIGVhc2U7XG4gICAgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMS41cyBlYXNlO1xuICAgIC8qIENocm9tZSAtIFNhZmFyaSAqL1xuICAgIC1vLXRyYW5zaXRpb246IDEuNXMgZWFzZTtcbiAgICAvKiBPcGVyYSAqL1xufVxuXG4uem9vbTpob3ZlciB7XG4gICAgei1pbmRleDogMzA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgLyogRmlyZWZveCAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICAvKiBDaHJvbWUgLSBTYWZhcmkgKi9cbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIC8qIE9wZXJhICovXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgLyogSUU5ICovXG59Il19 */"] });


/***/ }),

/***/ 78624:
/*!***************************************************!*\
  !*** ./src/app/Pages/Learning/learning.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningModule": function() { return /* binding */ LearningModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/learning/learning.component */ 65419);
/* harmony import */ var _learning_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./learning.routes */ 19904);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mzd-timeline */ 28387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






class LearningModule {
}
LearningModule.??fac = function LearningModule_Factory(t) { return new (t || LearningModule)(); };
LearningModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: LearningModule });
LearningModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _learning_routes__WEBPACK_IMPORTED_MODULE_1__.LearningRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__.MzdTimelineModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](LearningModule, { declarations: [_components_learning_learning_component__WEBPACK_IMPORTED_MODULE_0__.LearningComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _learning_routes__WEBPACK_IMPORTED_MODULE_1__.LearningRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_mzd_timeline__WEBPACK_IMPORTED_MODULE_5__.MzdTimelineModule] }); })();


/***/ }),

/***/ 19904:
/*!***************************************************!*\
  !*** ./src/app/Pages/Learning/learning.routes.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningRoutingModule": function() { return /* binding */ LearningRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/learning/learning.component */ 65419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const PLEARNING_ROUTES = [
    { path: 'seguirAprendiendo', component: _components_learning_learning_component__WEBPACK_IMPORTED_MODULE_0__.LearningComponent }
];
class LearningRoutingModule {
}
LearningRoutingModule.??fac = function LearningRoutingModule_Factory(t) { return new (t || LearningRoutingModule)(); };
LearningRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: LearningRoutingModule });
LearningRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(PLEARNING_ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](LearningRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 64423:
/*!***********************************************************************!*\
  !*** ./src/app/Pages/Profile/components/profile/profile.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tools-languages/tools-languages.component */ 90992);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.??fac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 94, vars: 56, consts: [["id", "profile", 1, "section"], [1, "container"], [1, "has-text-centered", "section-heading"], [1, "textoDetras", "title", "is-2", "is-uppercase"], [1, "textoEncima", "subtitle", "is-uppercase"], [1, "box", "mt-6", "transparente"], [1, "content"], [1, "table", "has-text-centered"], ["id", "services", 1, "section"], [1, "mt-6", "mb-6"], [1, "columns", "is-vcentered", "is-centered"], [1, "column"], [1, "image"], ["src", "https://i.postimg.cc/vmsHMDbB/FrontEnd.webp", "alt", "dev Gonzalez Front End"], [1, "column", "transparente", "is-vcentered", "is-centered"], [1, "box"], [1, "has-text-centered", "title", "is-5"], [1, "mt-6", "mb-6", "is-vcentered", "is-centered"], [1, "column", "transparente"], ["src", "https://i.postimg.cc/rsnKwTgH/BackEnd.webp", "alt", "dev Gonzalez Back End"], ["id", "Herramientas"], [3, "tipoListaDefault", "tipoLista"], ["id", "resume", 1, "section", "mt-6", "mb-6"], ["href", "https://drive.google.com/file/d/1bDt0MYOnaJtSAUXZ4zRRm4IxjXtvnCFQ/view?usp=sharing", "target", "_blank", 1, "is-hidden-touch", "button", "is-outlined", "is-primary", "is-large", "mt-6"], [1, "icon"], [1, "fa", "fa-download"], [1, "is-uppercase", "has-text-centered"], ["href", "https://drive.google.com/file/d/1bDt0MYOnaJtSAUXZ4zRRm4IxjXtvnCFQ/view?usp=sharing", "target", "_blank", 1, "is-hidden-desktop", "button", "is-outlined", "is-primary", "is-normal", "mt-6"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "figure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "figure", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "app-tools-languages", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](90, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 20, "TITULO1_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](8, 22, "SUBTITULO1_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](16, 24, "TITULO_NOMBRE_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](19, 26, "INFORMACION_NOMBRE_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](23, 28, "TITULO_RESIDENCIA_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](26, 30, "INFORMACION_RESIDENCIA_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](30, 32, "TITULO_CARRERA_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](33, 34, "INFORMACION_CARRERA_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](39, 36, "TITULO2_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](42, 38, "SUBTITULO_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](53, 40, "FRONTEND_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](56, 42, "DESCRIPCION_FRONTEND_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](64, 44, "BACKEND_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](67, 46, "DESCRIPCION_BACKEND_PROFILE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("tipoListaDefault", 2)("tipoLista", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](78, 48, "TITULO3_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](81, 50, "SUBTITULO3_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](87, 52, "DESCARGA_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](93, 54, "DESCARGA_PROFILE"));
    } }, directives: [_shared_components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_0__.ToolsLanguagesComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5362:
/*!*************************************************!*\
  !*** ./src/app/Pages/Profile/profile.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": function() { return /* binding */ ProfileModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 64423);
/* harmony import */ var _profile_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.routes */ 97575);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class ProfileModule {
}
ProfileModule.??fac = function ProfileModule_Factory(t) { return new (t || ProfileModule)(); };
ProfileModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ProfileModule });
ProfileModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _profile_routes__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ProfileModule, { declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _profile_routes__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 97575:
/*!*************************************************!*\
  !*** ./src/app/Pages/Profile/profile.routes.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": function() { return /* binding */ ProfileRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 64423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const PLEARNING_ROUTES = [
    { path: 'perfil', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent }
];
class ProfileRoutingModule {
}
ProfileRoutingModule.??fac = function ProfileRoutingModule_Factory(t) { return new (t || ProfileRoutingModule)(); };
ProfileRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ProfileRoutingModule });
ProfileRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(PLEARNING_ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 79618:
/*!****************************************************************!*\
  !*** ./src/app/Pages/Projects/components/git/git.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GitComponent": function() { return /* binding */ GitComponent; }
/* harmony export */ });
/* harmony import */ var _core_services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/projects.service */ 77416);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tools-languages/tools-languages.component */ 90992);






function GitComponent_div_11_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](proyecto_r2.titulo);
} }
function GitComponent_div_11_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", proyecto_r2.descripcion, "");
} }
function GitComponent_div_11_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](proyecto_r2.tituloEN);
} }
function GitComponent_div_11_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", proyecto_r2.descripcionEN, "");
} }
function GitComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, GitComponent_div_11_h2_5_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](6, GitComponent_div_11_p_6_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, GitComponent_div_11_h2_7_Template, 2, 1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, GitComponent_div_11_p_8_Template, 2, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("href", proyecto_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", proyecto_r2.imagen2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("alt", "Diego Gonzalez - ", proyecto_r2.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.idiomaPagina == "en");
} }
function GitComponent_div_13_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, proyecto_r11.titulo), " ");
} }
function GitComponent_div_13_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](2, 1, proyecto_r11.tituloEN), " ");
} }
function GitComponent_div_13_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", proyecto_r11.descripcion, "");
} }
function GitComponent_div_13_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", proyecto_r11.descripcionEN, "");
} }
function GitComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "figure", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "figure", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, GitComponent_div_13_p_11_Template, 3, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, GitComponent_div_13_p_12_Template, 3, 3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](15, GitComponent_div_13_p_15_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](16, GitComponent_div_13_p_16_Template, 2, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "footer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](19, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const proyecto_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", proyecto_r11.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("alt", "Diego Gonzalez - ", proyecto_r11.titulo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", proyecto_r11.lenguaje, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("href", proyecto_r11.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
} }
class GitComponent {
    constructor(
    //private servicioProyecto: ProjectsService,
    spinnerService, translate) {
        this.spinnerService = spinnerService;
        this.translate = translate;
        this.listaProyecto = [];
        this.idiomaPagina = "es";
        let serviceProyect = new _core_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService();
        this.listaProyecto = serviceProyect.listaProyecto;
        this.translate.onLangChange.subscribe((event) => {
            this.idiomaPagina = event.lang;
        });
    }
    ngOnInit() {
        //this.spinnerService.show();
        this.idiomaPagina = this.translate.currentLang;
    }
}
GitComponent.??fac = function GitComponent_Factory(t) { return new (t || GitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
GitComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: GitComponent, selectors: [["app-git"]], decls: 16, vars: 10, consts: [[1, "section"], [1, "container"], [1, "has-text-centered", "mb-6"], [1, "textoDetras", "title", "is-2", "is-uppercase"], [1, "textoEncima", "subtitle", "is-uppercase"], ["href", "#", 1, "containerLibro", "mt-6", "my-3", "is-hidden-touch"], ["class", "libro", 4, "ngFor", "ngForOf"], [1, "row", "columns", "is-multiline", "is-hidden-desktop"], ["class", "column is-6", 4, "ngFor", "ngForOf"], ["id", "Herramientas"], [3, "tipoListaDefault", "tipoLista"], [1, "libro"], ["target", "_blank", 3, "href"], [1, "imagenLibro", "image", "is-4by5"], ["width", " 300px", "height", "400px", 3, "src", "alt"], [1, "contenido"], ["class", "title is-3 has-text-centered", 4, "ngIf"], ["class", "has-text-justified ", 4, "ngIf"], [1, "title", "is-3", "has-text-centered"], [1, "has-text-justified"], [1, "column", "is-6"], [1, "card", "large", "transparente"], [1, "card-image"], [1, "image", "is-16by9"], [3, "src", "alt"], [1, "card-content"], [1, "media"], [1, "media-left"], [1, "image", "is-48x48"], ["alt", "Lenguaje de Programacion", 3, "src"], [1, "media-content"], ["class", "title is-4 no-padding", 4, "ngIf"], [1, "is-6"], ["class", "has-text-justified", 4, "ngIf"], [1, "card-footer"], ["target", "_blank", 1, "card-footer-item", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-code-fork", "fa-3x", "iconcolor"], [1, "title", "is-4", "no-padding"]], template: function GitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, GitComponent_div_11_Template, 9, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, GitComponent_div_13_Template, 20, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "app-tools-languages", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](6, 6, "TITULO_PROJECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](9, 8, "SUBTITULO_PROJECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.listaProyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.listaProyecto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("tipoListaDefault", 2)("tipoLista", 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_1__.ToolsLanguagesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.UpperCasePipe], styles: ["body[_ngcontent-%COMP%] {\n    background: #f2f2f2;\n    font-family: 'Quicksand', sans-serif;\n}\n\n.imagen[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n}\n\n\n\n.containerLibro[_ngcontent-%COMP%] {\n    max-width: 1000px;\n    margin: 100px auto;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.libro[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 20px 0;\n    width: 300px;\n    height: 500px;\n    background: #fff;\n    transform-style: preserve-3d;\n    transform: perspective(2000px);\n    transition: 1s;\n    box-shadow: inset 300px 0 50px rgba(0, 0, 0, 0.5);\n}\n\n.libro[_ngcontent-%COMP%]:hover {\n    z-index: 1000;\n    transform: perspective(2000px) rotate(-10deg);\n    box-shadow: inset 10px 0 50px rgba(0, 0, 0, 0.5);\n}\n\n.libro[_ngcontent-%COMP%]   .imagenLibro[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    border: 1px solid #000;\n    box-sizing: border-box;\n    transform-origin: left;\n    z-index: 1;\n    transition: 1s;\n}\n\n.libro[_ngcontent-%COMP%]:hover   .imagenLibro[_ngcontent-%COMP%] {\n    transform: rotateY(-135deg);\n}\n\n.libro[_ngcontent-%COMP%]   .imagenLibro[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.libro[_ngcontent-%COMP%]   .contenido[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n\n\n.iconcolor[_ngcontent-%COMP%] {\n    color: #007F6E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixpQ0FBOEI7T0FBOUIsOEJBQThCO0FBQ2xDOztBQUdBLFVBQVU7O0FBRVY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiZ2l0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbn1cblxuLmltYWdlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuXG4vKiBMaWJybyAqL1xuXG4uY29udGFpbmVyTGlicm8ge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmxpYnJvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMjAwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBib3gtc2hhZG93OiBpbnNldCAzMDBweCAwIDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubGlicm86aG92ZXIge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgyMDAwcHgpIHJvdGF0ZSgtMTBkZWcpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMCA1MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmxpYnJvIC5pbWFnZW5MaWJybyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246IDFzO1xufVxuXG4ubGlicm86aG92ZXIgLmltYWdlbkxpYnJvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTEzNWRlZyk7XG59XG5cbi5saWJybyAuaW1hZ2VuTGlicm8gLmltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmxpYnJvIC5jb250ZW5pZG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cblxuLypFc3RpbG8gQnV0dG9ucyovXG5cbi5pY29uY29sb3Ige1xuICAgIGNvbG9yOiAjMDA3RjZFO1xufSJdfQ== */"] });


/***/ }),

/***/ 73116:
/*!***************************************************!*\
  !*** ./src/app/Pages/Projects/projects.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsModule": function() { return /* binding */ ProjectsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_git_git_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/git/git.component */ 79618);
/* harmony import */ var _projects_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.routes */ 42862);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class ProjectsModule {
}
ProjectsModule.??fac = function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); };
ProjectsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ProjectsModule });
ProjectsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _projects_routes__WEBPACK_IMPORTED_MODULE_1__.ProjectsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ProjectsModule, { declarations: [_components_git_git_component__WEBPACK_IMPORTED_MODULE_0__.GitComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _projects_routes__WEBPACK_IMPORTED_MODULE_1__.ProjectsRoutingModule] }); })();


/***/ }),

/***/ 42862:
/*!***************************************************!*\
  !*** ./src/app/Pages/Projects/projects.routes.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsRoutingModule": function() { return /* binding */ ProjectsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_git_git_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/git/git.component */ 79618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const PROJECTS_ROUTES = [
    { path: 'proyectosPersonales', component: _components_git_git_component__WEBPACK_IMPORTED_MODULE_0__.GitComponent }
];
class ProjectsRoutingModule {
}
ProjectsRoutingModule.??fac = function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); };
ProjectsRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ProjectsRoutingModule });
ProjectsRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(PROJECTS_ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 75040:
/*!**************************************************************!*\
  !*** ./src/app/Pages/Work/components/work/work.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": function() { return /* binding */ WorkComponent; }
/* harmony export */ });
/* harmony import */ var _core_services_works_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/services/works.service */ 54089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);




function WorkComponent_div_12_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", trabajo_r2.fechaInicio, " - ", trabajo_r2.fechaFin, "");
} }
function WorkComponent_div_12_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Cargo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WorkComponent_div_12_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, trabajo_r2.descripcion));
} }
function WorkComponent_div_12_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", trabajo_r2.fechaInicio, " - ", trabajo_r2.fechaFin, "");
} }
function WorkComponent_div_12_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Position:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function WorkComponent_div_12_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, trabajo_r2.descripcionEN));
} }
function WorkComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "figure", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, WorkComponent_div_12_p_14_Template, 2, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](15, WorkComponent_div_12_p_15_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](16, WorkComponent_div_12_p_16_Template, 3, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, WorkComponent_div_12_p_17_Template, 2, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, WorkComponent_div_12_p_18_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](19, WorkComponent_div_12_p_19_Template, 3, 3, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "footer", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](22, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", trabajo_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("alt", "Diego Gonzalez trabajo en ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 10, trabajo_r2.titulo), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](11, 12, trabajo_r2.titulo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", trabajo_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
} }
function WorkComponent_div_17_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", trabajo_r13.fechaInicio, " - ", trabajo_r13.fechaFin, "");
} }
function WorkComponent_div_17_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"]("", trabajo_r13.fechaInicio, " - ", trabajo_r13.fechaFin, "");
} }
function WorkComponent_div_17_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Cargo: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, trabajo_r13.descripcion), "");
} }
function WorkComponent_div_17_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Position: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](2, 1, trabajo_r13.descripcionEN), "");
} }
function WorkComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "figure", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, WorkComponent_div_17_p_8_Template, 2, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, WorkComponent_div_17_p_9_Template, 2, 2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](10, WorkComponent_div_17_p_10_Template, 3, 3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](11, WorkComponent_div_17_p_11_Template, 3, 3, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const trabajo_r13 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", trabajo_r13.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("alt", "Diego Gonzalez trabajo en ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](3, 8, trabajo_r13.titulo), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](7, 10, trabajo_r13.titulo));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.idiomaPagina == "es");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.idiomaPagina == "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("href", trabajo_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
} }
class WorkComponent {
    constructor(
    // private servicioTrabajo: WorksService,
    //private spinnerService: NgxSpinnerService,
    translate) {
        this.translate = translate;
        this.listaTrabajos = [];
        this.idiomaPagina = "es";
        this.translate.onLangChange.subscribe((event) => {
            this.idiomaPagina = event.lang;
        });
        let serviceWork = new _core_services_works_service__WEBPACK_IMPORTED_MODULE_0__.WorksService();
        this.listaTrabajos = serviceWork.listaTrabajos;
    }
    ngOnInit() {
        // this.spinnerService.show();
        this.idiomaPagina = this.translate.currentLang;
    }
}
WorkComponent.??fac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
WorkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 18, vars: 8, consts: [[1, "section"], [1, "container"], [1, "has-text-centered"], [1, "textoDetras", "title", "is-2", "is-uppercase"], [1, "textoEncima", "subtitle", "is-uppercase"], [1, "row", "mt-6", "columns", "is-multiline", "is-hidden-desktop"], [1, "image", "is-1by1"], ["src", "https://i.postimg.cc/K8LvdtXw/Equipo.webp", "alt", "Diego Gonzalez - Equipo"], ["class", "column is-4", 4, "ngFor", "ngForOf"], [1, "mt-6", "is-centered", "contenedorLineaTiempo", "is-hidden-touch"], ["class", "columns is-multiline momentoLineaTiempo", 4, "ngFor", "ngForOf"], [1, "column", "is-4"], [1, "card", "large", "transparente"], [1, "card-image"], [1, "image"], [3, "src", "alt"], [1, "card-content"], [1, "media"], [1, "media-content"], [1, "title", "is-4", "no-padding"], [1, "subtitle", "is-6"], [4, "ngIf"], [1, "card-footer"], ["target", "_blank", 1, "card-footer-item", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-globe", "fa-3x", "iconcolor"], [1, "columns", "is-multiline", "momentoLineaTiempo"], [1, "image", "snip0015", "mt-6", "mb-6", "mr-6", "ml-6"], [1, "imagen", 3, "src", "alt"], ["class", "has-text-centered", 4, "ngIf"], ["target", "_blank", 3, "href"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, WorkComponent_div_12_Template, 23, 14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, WorkComponent_div_17_Template, 13, 12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](5, 4, "TITULO_WORK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](8, 6, "SUBTITULO_WORK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.listaTrabajos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.listaTrabajos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700\");\n\n\n\n\n\n.imagen[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center center;\n       object-position: center center;\n}\n\nfigure.snip0015[_ngcontent-%COMP%] {\n    font-family: 'Raleway', Arial, sans-serif;\n    color: #fff;\n    position: relative;\n    overflow: hidden;\n    background: #000000;\n    text-align: center;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 1;\n    width: 100%;\n    transition: opacity 0.35s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    padding: 3em 3em;\n    width: 100%;\n    height: 100%;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]::before {\n    position: absolute;\n    top: 50%;\n    right: 30px;\n    bottom: 50%;\n    left: 30px;\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.8);\n    content: '';\n    opacity: 0;\n    background-color: #ffffff;\n    transition: all 0.4s;\n    transition-delay: 0.6s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], figure.snip0015[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0 0 5px;\n    opacity: 0;\n    transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    word-spacing: -0.15em;\n    font-weight: 300;\n    text-transform: uppercase;\n    transform: translate3d(0%, 50%, 0);\n    transition-delay: 0.3s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 800;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 200;\n    transition-delay: 0s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    color: #ffffff;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n    opacity: 0.35;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translate3d(0%, 0%, 0);\n    transition-delay: 0.3s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    opacity: 0.9;\n    transition-delay: 0.6s;\n}\n\nfigure.snip0015[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]::before {\n    background: rgba(255, 255, 255, 0);\n    top: 30px;\n    bottom: 30px;\n    opacity: 1;\n    transition-delay: 0s;\n}\n\n\n\n.contenedorLineaTiempo[_ngcontent-%COMP%] {\n    font-family: 'Open Sans', 'sans-serif';\n    min-width: 300px;\n    max-width: 500px;\n    margin: auto;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%] {\n    font-size: 1em;\n    line-height: 1.75em;\n    border-top: 3px solid;\n    -o-border-image: linear-gradient(to left, #bbd2c5, #536976, #292e49);\n       border-image: linear-gradient(to left, #bbd2c5, #536976, #292e49);\n    border-image-slice: 1;\n    border-width: 3px;\n    counter-increment: section;\n    position: relative;\n    color: 34435E;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]::before {\n    content: counter(section);\n    position: absolute;\n    border-radius: 100%;\n    height: 1.25em;\n    width: 1.25em;\n    background-color: #34435E;\n    text-align: center;\n    line-height: 1.25em;\n    color: #ffffff;\n    font-size: 2em;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 3px solid;\n    padding-left: 0;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]:nth-child(odd)::before {\n    left: 100%;\n    margin-left: -20px;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]:nth-child(even) {\n    border-left: 3px solid;\n    padding-right: 0;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]:first-child {\n    border-top: 0;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0;\n}\n\n.momentoLineaTiempo[_ngcontent-%COMP%]:last-child {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n\n\n.iconcolor[_ngcontent-%COMP%] {\n    color: #007F6E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7O0FBRTdFOzs7Q0FHQzs7QUFHRCxtQkFBbUI7O0FBRW5CO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGlDQUE4QjtPQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBRVgseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsaURBQWlEO0lBQ2pELFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBRXpCLG9CQUFvQjtJQUVwQixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFVBQVU7SUFFViwwQ0FBNkc7QUFDakg7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUV6QixrQ0FBa0M7SUFFbEMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBRWhCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBRVYsaUNBQWlDO0lBRWpDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFFWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBRVYsb0JBQW9CO0FBQ3hCOztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFFckIsb0VBQWlFO09BQWpFLGlFQUFpRTtJQUNqRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6IndvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNDAwaSw3MDBcIik7XG5cbi8qXG5DcmVkaXRzIGh0dHBzOi8vY29kZXBlbi5pby9sZXRzYmxlYWNodGhpcy9wZW4vWUpnTnB2XG5odHRwczovL2ZyZWVmcm9udGVuZC5jb20vY3NzLXRpbWVsaW5lcy9cbiovXG5cblxuLypFc3RpbG8gZGVsIEhvdmVyKi9cblxuLmltYWdlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuZmlndXJlLnNuaXAwMDE1IHtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZmlndXJlLnNuaXAwMDE1ICoge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5maWd1cmUuc25pcDAwMTUgaW1nIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xufVxuXG5maWd1cmUuc25pcDAwMTUgZmlnY2FwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDNlbSAzZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5maWd1cmUuc25pcDAwMTUgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgbGVmdDogMzBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbmZpZ3VyZS5zbmlwMDAxNSBoMixcbmZpZ3VyZS5zbmlwMDAxNSBwIHtcbiAgICBtYXJnaW46IDAgMCA1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzLCAtbW96LXRyYW5zZm9ybSAwLjM1cywgLW8tdHJhbnNmb3JtIDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5zbmlwMDAxNSBoMiB7XG4gICAgd29yZC1zcGFjaW5nOiAtMC4xNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDUwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgNTAlLCAwKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cblxuZmlndXJlLnNuaXAwMDE1IGgyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmZpZ3VyZS5zbmlwMDAxNSBwIHtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG5cbmZpZ3VyZS5zbmlwMDAxNSBhIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5maWd1cmUuc25pcDAwMTU6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjM1O1xufVxuXG5maWd1cmUuc25pcDAwMTU6aG92ZXIgZmlnY2FwdGlvbiBoMiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwJSwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbmZpZ3VyZS5zbmlwMDAxNTpob3ZlciBmaWdjYXB0aW9uIHAge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuZmlndXJlLnNuaXAwMDE1OmhvdmVyIGZpZ2NhcHRpb246OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB0b3A6IDMwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuXG4vKkxpbmVhIGRlIFRpZW1wbyovXG5cbi5jb250ZW5lZG9yTGluZWFUaWVtcG8ge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ3NhbnMtc2VyaWYnO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5tb21lbnRvTGluZWFUaWVtcG8ge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkO1xuICAgIGJvcmRlci1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2JiZDJjNSwgIzUzNjk3NiwgIzI5MmU0OSk7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2JiZDJjNSwgIzUzNjk3NiwgIzI5MmU0OSk7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBzZWN0aW9uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogMzQ0MzVFO1xufVxuXG4ubW9tZW50b0xpbmVhVGllbXBvOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGNvdW50ZXIoc2VjdGlvbik7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ0MzVFO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ubW9tZW50b0xpbmVhVGllbXBvOm50aC1jaGlsZChvZGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tb21lbnRvTGluZWFUaWVtcG86bnRoLWNoaWxkKG9kZCk6OmJlZm9yZSB7XG4gICAgbGVmdDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG59XG5cbi5tb21lbnRvTGluZWFUaWVtcG86bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5tb21lbnRvTGluZWFUaWVtcG86Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm1vbWVudG9MaW5lYVRpZW1wbzpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG5cbi8qRXN0aWxvIEJ1dHRvbnMqL1xuXG4uaWNvbmNvbG9yIHtcbiAgICBjb2xvcjogIzAwN0Y2RTtcbn0iXX0= */"] });


/***/ }),

/***/ 82744:
/*!*******************************************!*\
  !*** ./src/app/Pages/Work/work.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkModule": function() { return /* binding */ WorkModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _work_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.routes */ 37121);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/work/work.component */ 75040);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





class WorkModule {
}
WorkModule.??fac = function WorkModule_Factory(t) { return new (t || WorkModule)(); };
WorkModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: WorkModule });
WorkModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _work_routes__WEBPACK_IMPORTED_MODULE_0__.WorkRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](WorkModule, { declarations: [_components_work_work_component__WEBPACK_IMPORTED_MODULE_1__.WorkComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _work_routes__WEBPACK_IMPORTED_MODULE_0__.WorkRoutingModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 37121:
/*!*******************************************!*\
  !*** ./src/app/Pages/Work/work.routes.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkRoutingModule": function() { return /* binding */ WorkRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_work_work_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/work/work.component */ 75040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const WORK_ROUTES = [
    { path: 'trabajos', component: _components_work_work_component__WEBPACK_IMPORTED_MODULE_0__.WorkComponent }
];
class WorkRoutingModule {
}
WorkRoutingModule.??fac = function WorkRoutingModule_Factory(t) { return new (t || WorkRoutingModule)(); };
WorkRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: WorkRoutingModule });
WorkRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(WORK_ROUTES)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](WorkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules,
                relativeLinkResolution: 'legacy'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common/GlobalVariables */ 2085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ 36674);






class AppComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        let lenguajeNavegador = window.navigator.language;
        this.translate.addLangs([_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.es.toString(), _Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.en.toString()]);
        this.translate.setDefaultLang('es');
        if (lenguajeNavegador.toString().indexOf("en") !== -1) {
            this.translate.use(_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.en.toString());
        }
        else {
            this.translate.use(_Common_GlobalVariables__WEBPACK_IMPORTED_MODULE_0__.lenguajes.es.toString());
        }
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 48693);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ 50057);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 48462);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-particles */ 78439);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-typed-js */ 23192);
/* harmony import */ var _Pages_Home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Home/home.module */ 70986);
/* harmony import */ var _Pages_Work_work_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Work/work.module */ 82744);
/* harmony import */ var _Pages_Projects_projects_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pages/Projects/projects.module */ 73116);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ 36674);
/* harmony import */ var _Pages_Learning_learning_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/Learning/learning.module */ 78624);
/* harmony import */ var _Pages_Profile_profile_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Pages/Profile/profile.module */ 5362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 39895);
/*Rutas*/

//Modulos
















/*Componentes*/







/**
 * Rutas de los archivos de los idiomas
 * @param http
 * @returns
 */
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            ng_particles__WEBPACK_IMPORTED_MODULE_14__.NgParticlesModule,
            _app_routes__WEBPACK_IMPORTED_MODULE_0__.APP_ROUTING,
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule,
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestoreModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_19__.NgxTypedJsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule,
            _Pages_Home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _Pages_Work_work_module__WEBPACK_IMPORTED_MODULE_3__.WorkModule,
            _Pages_Projects_projects_module__WEBPACK_IMPORTED_MODULE_4__.ProjectsModule,
            _Pages_Learning_learning_module__WEBPACK_IMPORTED_MODULE_9__.LearningModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule,
            _Pages_Profile_profile_module__WEBPACK_IMPORTED_MODULE_10__.ProfileModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ng_particles__WEBPACK_IMPORTED_MODULE_14__.NgParticlesModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule,
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.AngularFirestoreModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        ngx_typed_js__WEBPACK_IMPORTED_MODULE_19__.NgxTypedJsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerModule,
        _Pages_Home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _Pages_Work_work_module__WEBPACK_IMPORTED_MODULE_3__.WorkModule,
        _Pages_Projects_projects_module__WEBPACK_IMPORTED_MODULE_4__.ProjectsModule,
        _Pages_Learning_learning_module__WEBPACK_IMPORTED_MODULE_9__.LearningModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule,
        _Pages_Profile_profile_module__WEBPACK_IMPORTED_MODULE_10__.ProfileModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule] }); })();


/***/ }),

/***/ 48693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTING": function() { return /* binding */ APP_ROUTING; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Pages_Home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pages/Home/home.module */ 70986);
/* harmony import */ var _Pages_Projects_projects_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/Projects/projects.module */ 73116);
/* harmony import */ var _Pages_Work_work_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Work/work.module */ 82744);
/* harmony import */ var _Pages_Learning_learning_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/Learning/learning.module */ 78624);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ 36674);
/* harmony import */ var _Pages_Profile_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/Profile/profile.module */ 5362);







const APP_ROUTES = [
    {
        path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent, pathMatch: 'full', children: [
            { path: 'home', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Home/home.module */ 70986)).then(home => _Pages_Home_home_module__WEBPACK_IMPORTED_MODULE_0__.HomeModule) },
            { path: 'perfil', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Profile/profile.module */ 5362)).then(profile => _Pages_Profile_profile_module__WEBPACK_IMPORTED_MODULE_5__.ProfileModule) },
            { path: 'proyectosPersonales', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Projects/projects.module */ 73116)).then(projects => _Pages_Projects_projects_module__WEBPACK_IMPORTED_MODULE_1__.ProjectsModule) },
            { path: 'trabajos', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Work/work.module */ 82744)).then(work => _Pages_Work_work_module__WEBPACK_IMPORTED_MODULE_2__.WorkModule) },
            { path: 'seguirAprendiendo', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Pages/Learning/learning.module */ 78624)).then(learning => _Pages_Learning_learning_module__WEBPACK_IMPORTED_MODULE_3__.LearningModule) },
            { path: '**', pathMatch: 'full', redirectTo: 'home' },
            { path: '', pathMatch: 'full', redirectTo: 'home' }
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(APP_ROUTES, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules,
    relativeLinkResolution: 'legacy'
});


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_learning_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/learning.service */ 28472);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/projects.service */ 77416);
/* harmony import */ var _services_tools_languages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/tools-languages.service */ 78806);
/* harmony import */ var _services_works_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/works.service */ 54089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






class CoreModule {
}
CoreModule.??fac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: CoreModule });
CoreModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [
        _services_learning_service__WEBPACK_IMPORTED_MODULE_0__.LearningService,
        _services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService,
        _services_tools_languages_service__WEBPACK_IMPORTED_MODULE_2__.ToolsLanguagesService,
        _services_works_service__WEBPACK_IMPORTED_MODULE_3__.WorksService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] }); })();


/***/ }),

/***/ 28472:
/*!***************************************************!*\
  !*** ./src/app/core/services/learning.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LearningService": function() { return /* binding */ LearningService; }
/* harmony export */ });
/* harmony import */ var _models_Learning_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Learning.model */ 63681);
/* harmony import */ var _assets_JSON_Learning_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/JSON/Learning.json */ 11084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class LearningService {
    constructor() {
        this.listaTitulos = [];
        this.cargarAprendiendo();
    }
    /**
     * Lista de Certificados
     */
    cargarAprendiendo() {
        for (const item in _assets_JSON_Learning_json__WEBPACK_IMPORTED_MODULE_1__.aprendiendo) {
            let titulo = new _models_Learning_model__WEBPACK_IMPORTED_MODULE_0__.Learning();
            titulo.titulo = _assets_JSON_Learning_json__WEBPACK_IMPORTED_MODULE_1__.aprendiendo[item].titulo;
            titulo.imagen = _assets_JSON_Learning_json__WEBPACK_IMPORTED_MODULE_1__.aprendiendo[item].imagen;
            this.listaTitulos.push(titulo);
        }
    }
}
LearningService.??fac = function LearningService_Factory(t) { return new (t || LearningService)(); };
LearningService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: LearningService, factory: LearningService.??fac, providedIn: 'root' });


/***/ }),

/***/ 77416:
/*!***************************************************!*\
  !*** ./src/app/core/services/projects.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": function() { return /* binding */ ProjectsService; }
/* harmony export */ });
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project.model */ 32744);
/* harmony import */ var _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/JSON/Proyect.json */ 83466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class ProjectsService {
    constructor() {
        this.listaProyecto = [];
        this.cargarProyectos();
    }
    /**
     * Lista de Proyectos Personales
     * @returns
     */
    cargarProyectos() {
        //return this.fireStore.collection("proyectos").snapshotChanges();
        for (const item in _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto) {
            let titulo = new _models_project_model__WEBPACK_IMPORTED_MODULE_0__.Project();
            titulo.titulo = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].titulo;
            titulo.imagen = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].imagen;
            titulo.imagen2 = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].imagen2;
            titulo.descripcion = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].descripcion;
            titulo.descripcionEN = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].descripcionEN;
            titulo.url = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].url;
            titulo.lenguaje = _assets_JSON_Proyect_json__WEBPACK_IMPORTED_MODULE_1__.proyecto[item].lenguaje;
            this.listaProyecto.push(titulo);
        }
    }
}
ProjectsService.??fac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(); };
ProjectsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ProjectsService, factory: ProjectsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 78806:
/*!**********************************************************!*\
  !*** ./src/app/core/services/tools-languages.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsLanguagesService": function() { return /* binding */ ToolsLanguagesService; }
/* harmony export */ });
/* harmony import */ var _models_ToolsLanguages_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/ToolsLanguages.model */ 31816);
/* harmony import */ var _assets_JSON_Tools_Languages_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/JSON/Tools-Languages.json */ 8054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class ToolsLanguagesService {
    constructor() {
        this.listaHerramientas = [];
        this.cargarHerramientas();
    }
    /**
     * Lista de Herramientas de desarrollo
     */
    cargarHerramientas() {
        for (const item in _assets_JSON_Tools_Languages_json__WEBPACK_IMPORTED_MODULE_1__.herramientas) {
            let herramienta = new _models_ToolsLanguages_model__WEBPACK_IMPORTED_MODULE_0__.ToolsLanguages();
            herramienta.nombre = _assets_JSON_Tools_Languages_json__WEBPACK_IMPORTED_MODULE_1__.herramientas[item].nombre;
            herramienta.imagen = _assets_JSON_Tools_Languages_json__WEBPACK_IMPORTED_MODULE_1__.herramientas[item].imagen;
            herramienta.estado = _assets_JSON_Tools_Languages_json__WEBPACK_IMPORTED_MODULE_1__.herramientas[item].estado;
            this.listaHerramientas.push(herramienta);
        }
    }
}
ToolsLanguagesService.??fac = function ToolsLanguagesService_Factory(t) { return new (t || ToolsLanguagesService)(); };
ToolsLanguagesService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ToolsLanguagesService, factory: ToolsLanguagesService.??fac, providedIn: 'root' });


/***/ }),

/***/ 54089:
/*!************************************************!*\
  !*** ./src/app/core/services/works.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksService": function() { return /* binding */ WorksService; }
/* harmony export */ });
/* harmony import */ var _models_work_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/work.model */ 85297);
/* harmony import */ var _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/JSON/Work.json */ 9177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



class WorksService {
    constructor() {
        // constructor(private fireStore: AngularFirestore) {
        // }
        // /**
        //  * Lista de Trabajos
        //  * @returns
        //  */
        // cargarTrabajos(): Observable<any> {
        //   return this.fireStore.collection("trabajos", ref => ref.orderBy('orden', 'desc')).snapshotChanges();
        // }
        this.listaTrabajos = [];
        this.cargarwork();
    }
    /**
     * Lista de Certificados
     */
    cargarwork() {
        for (const item in _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work) {
            let titulo = new _models_work_model__WEBPACK_IMPORTED_MODULE_0__.Work();
            titulo.titulo = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].titulo;
            titulo.imagen = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].imagen;
            titulo.descripcion = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].descripcion;
            titulo.descripcionEN = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].descripcionEN;
            titulo.url = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].url;
            titulo.fechaInicio = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].fechaInicio;
            titulo.fechaFin = _assets_JSON_Work_json__WEBPACK_IMPORTED_MODULE_1__.work[item].fechaFin;
            this.listaTrabajos.push(titulo);
        }
    }
}
WorksService.??fac = function WorksService_Factory(t) { return new (t || WorksService)(); };
WorksService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: WorksService, factory: WorksService.??fac, providedIn: 'root' });


/***/ }),

/***/ 36674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/navbar/navbar.component */ 33502);
/* harmony import */ var _shared_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/social-network/social-network.component */ 29107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ 66526);
/* harmony import */ var ng_particles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-particles */ 78439);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 95593);







class LayoutComponent {
    constructor() {
        this.title = 'Diego Gonzalez';
        this.id = "tsparticles";
        this.particlesOptions = {
            background: {
                color: {
                    value: "transparent"
                }
            },
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: ["#dee9ed", "#4BF27D", "#348F50", "#56B4D3", "#4BF2CE"]
                },
                links: {
                    color: ["#dee9ed"],
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.2
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        };
    }
    ngOnInit() {
    }
}
LayoutComponent.??fac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 8, vars: 3, consts: [[3, "id", "options"], ["bdColor", "rgba(0, 0, 0, 0.8)", "size", "large", "color", "#fff", "type", "ball-atom", 3, "fullScreen"], [2, "color", "white"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-social-network");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "ng-particles", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("id", ctx.id)("options", ctx.particlesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("fullScreen", true);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _shared_components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_1__.SocialNetworkComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, ng_particles__WEBPACK_IMPORTED_MODULE_5__.NgParticlesComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 63681:
/*!******************************************!*\
  !*** ./src/app/models/Learning.model.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Learning": function() { return /* binding */ Learning; }
/* harmony export */ });
class Learning {
    constructor() {
        this.titulo = "";
        this.imagen = "";
    }
}


/***/ }),

/***/ 31816:
/*!************************************************!*\
  !*** ./src/app/models/ToolsLanguages.model.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsLanguages": function() { return /* binding */ ToolsLanguages; }
/* harmony export */ });
class ToolsLanguages {
    constructor() {
        this.nombre = "";
        this.imagen = "#";
        this.estado = 0;
    }
}


/***/ }),

/***/ 32744:
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": function() { return /* binding */ Project; }
/* harmony export */ });
class Project {
    constructor() {
        this.titulo = "";
        this.tituloEN = "";
        this.lenguaje = "";
        this.descripcion = "";
        this.descripcionEN = "";
        this.imagen = "";
        this.imagen2 = "";
        this.url;
    }
}


/***/ }),

/***/ 85297:
/*!**************************************!*\
  !*** ./src/app/models/work.model.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Work": function() { return /* binding */ Work; }
/* harmony export */ });
class Work {
    constructor() {
        this.titulo = "";
        this.descripcion = "";
        this.descripcionEN = "";
        this.imagen = "";
        this.url = "#";
        this.fechaFin = "Actual";
        this.fechaInicio = "";
        this.fechaFin = "Present";
    }
}


/***/ }),

/***/ 23915:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/contact-form/contact-form.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": function() { return /* binding */ ContactFormComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
    envioCorreo() {
        alert("Lo sentimos de momento no se puede enviar mensajes."); //He recibido tu correo, pronto tendr??s respuesta.
    }
}
ContactFormComponent.??fac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 2, vars: 0, consts: [["href", "https://outlook.live.com/mail/0/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane", "correo", "fa-2x"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["i[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    padding: 10px 7px;\n    border-radius: 50%;\n    color: #000000;\n    background: #ffffff;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\na[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    background: #f69e22;\n    color: #ffffff;\n}\n\n.correo[_ngcontent-%COMP%] {\n    position: relative;\n    color: #f69e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsd0VBQXdFO0FBQzVFOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJjb250YWN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbmEgaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y2OWUyMjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvcnJlbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZjY5ZTIyO1xufSJdfQ== */"] });


/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 29790);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 6, consts: [[1, "footer"], [1, "container"], [1, "content", "has-text-centered"], ["href", "https://github.com/dgonzalez15", "target", "_blank", 1, "icon", "is-large", "has-text-white"], [1, "fa", "fa-github-alt", "github", "fa-2x"], ["href", "https://www.linkedin.com/in/diego-gonz\u00E1lez-calder\u00F3n/", "target", "_blank", 1, "icon", "is-large", "has-text-white"], [1, "fa", "fa-linkedin", "linkedin", "fa-2x"], [1, "has-text-white"], [1, "corazon", "fa", "fa-heart", "has-text-danger"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 2, "FOOTER_TEXTO1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 4, "FOOTER_TEXTO2"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".footer[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.corazon[_ngcontent-%COMP%] {\n    -webkit-animation: latidos 1.5s infinite;\n            animation: latidos 1.5s infinite;\n}\n\n@-webkit-keyframes latidos {\n    from {\n        transform: none;\n    }\n    50% {\n        transform: scale(1.4);\n    }\n    to {\n        transform: none;\n    }\n}\n\n@keyframes latidos {\n    from {\n        transform: none;\n    }\n    50% {\n        transform: scale(1.4);\n    }\n    to {\n        transform: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBVkE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb3Jhem9uIHtcbiAgICBhbmltYXRpb246IGxhdGlkb3MgMS41cyBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsYXRpZG9zIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 33502:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class NavbarComponent {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
    desplegar() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#navBarMenu');
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        if (document.getElementById("overlay").classList.contains("overlay")) {
            document.getElementById("overlay").classList.remove("overlay");
            document.getElementById("menuMovil").classList.remove("is-fixed-top");
        }
        else {
            document.getElementById("overlay").classList.add("overlay");
            document.getElementById("menuMovil").classList.add("is-fixed-top");
        }
        window.scrollTo(0, 0);
    }
    recoger() {
        var burger = document.querySelector('.burger');
        var menu = document.querySelector('#navBarMenu');
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        document.getElementById("overlay").classList.remove("overlay");
        document.getElementById("menuMovil").classList.remove("is-fixed-top");
        window.scrollTo(0, 0);
    }
    CambioIdioma(idiomaSeleccionado) {
        this.translate.use(idiomaSeleccionado.valueOf());
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
NavbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 101, vars: 30, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-hidden-touch"], [1, "navbar-brand"], ["id", "logo", 1, "navbar-item", "has-text-black"], ["src", "assets/image/logo/multiPlatform2.gif", "width", "30", "height", "100%", "alt", "DevGonzalez"], [1, "has-text-black", "no-seleccion-texto"], [1, "navbar-menu"], [1, "navbar-end"], ["routerLink", "home", 1, "navbar-item", "has-text-black", 3, "click"], [1, "icon"], ["aria-hidden", "true", 1, "fa", "fa-home"], ["routerLink", "perfil", 1, "navbar-item", "has-text-black", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["routerLink", "trabajos", "routerLinkActive", "activo", 1, "navbar-item", "has-text-black", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-briefcase"], [1, "navbar-item", "force-center", "is-hidden-touch", 3, "click"], ["routerLink", "proyectosPersonales", "routerLinkActive", "activo", 1, "navbar-item", "has-text-black", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-code-fork"], ["routerLink", "seguirAprendiendo", "routerLinkActive", "activo", 1, "navbar-item", "has-text-black", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-graduation-cap"], ["data-tooltip", "Espa\u00F1ol / Spanish", 1, "button", "is-ghost", "is-inverted", "is-medium", "has-tooltip-bottom", "has-tooltip-primary", 3, "click"], [1, "icon", "is-large", "idiomas"], ["src", "assets/image/languages/es.svg ", "alt", "Idioma Espa\u00F1ol - Spanish language "], ["data-tooltip", "Ingl\u00E9s / English", 1, "button", "is-ghost", "is-inverted", "is-medium", "has-tooltip-bottom", "has-tooltip-primary", 3, "click"], ["src", "assets/image/languages/en.svg ", "alt", "Idioma Ingles - English language "], ["id", "menuMovil", "role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-hidden-desktop"], ["role", "button", "aria-label", "menu", "aria-expanded", "false", "data-target", "navBarMenu", "id", "burger", 1, "navbar-burger", "burger", "menu-icon", 3, "click"], [1, "has-text-black"], ["id", "overlay", 1, ""], ["id", "navBarMenu", 1, "navbar-menu"], ["routerLink", "home", 1, "navbar-item", "force-center", "is-hidden-touch", 3, "click"], [1, "button", "is-ghost", "is-inverted", "is-medium", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Dev-Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_20_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_span_click_26_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Dev-Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_30_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_36_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_42_listener() { return ctx.CambioIdioma("es"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "figure", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_45_listener() { return ctx.CambioIdioma("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "figure", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "nav", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Dev-Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_div_click_54_listener() { return ctx.desplegar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_61_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_67_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_73_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_span_click_79_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Dev-Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_83_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_89_listener() { return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_95_listener() { ctx.CambioIdioma("es"); return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "figure", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_a_click_98_listener() { ctx.CambioIdioma("en"); return ctx.recoger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "figure", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 10, "HOME_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 12, "PERFIL_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 14, "TRABAJOS_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 16, "PROYECTOS_PERSONALES_NAVBAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 18, "APRENDIENDO_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](66, 20, "HOME_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](72, 22, "PERFIL_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](78, 24, "TRABAJOS_NAVBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](88, 26, "PROYECTOS_PERSONALES_NAVBAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](94, 28, "APRENDIENDO_NAVBAR"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.navbar-menu[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after, nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n    transition: all .5s;\n}\n\n#logo[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    justify-content: center;\n    text-align: center;\n}\n\n.navbar-end[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    justify-content: center;\n    text-align: center;\n}\n\n.no-seleccion-texto[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    \n    -webkit-user-select: none;\n    \n    \n    -moz-user-select: none;\n    \n    \n    user-select: none;\n    \n}\n\n\n\n.navbar-item[_ngcontent-%COMP%]:hover, .navbar-item[_ngcontent-%COMP%]:focus {\n    background-color: transparent;\n    border-radius: 50px;\n}\n\na[_ngcontent-%COMP%] {\n    text-decoration: none;\n    background-image: linear-gradient(currentColor, currentColor);\n    background-position: 0% 100%;\n    background-repeat: no-repeat;\n    background-size: 0% 0.5rem;\n    transition: background-size .3s;\n    border-bottom: 4px solid transparent;\n}\n\na[_ngcontent-%COMP%]:hover {\n    background-size: 100% 0.5rem;\n}\n\n.idiomas[_ngcontent-%COMP%] {\n    border-radius: 50px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n\n\n@media screen and (max-width: 1024px-1px) {\n    #logo[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .force-center[_ngcontent-%COMP%] {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n    .navbar-end[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n    .navbar-brand[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n\n\n\n#menu-icon[_ngcontent-%COMP%], #menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    background: #1d1f20;\n    border-radius: 0.05em;\n    height: 0.2em;\n    transition: all 0.2s ease-in-out;\n    width: 100%;\n}\n\n#menu-icon[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 0.4em 0;\n    max-width: 1em;\n    position: relative;\n}\n\nnav[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%] {\n    float: right;\n}\n\n#menu-icon[_ngcontent-%COMP%]:before, #menu-icon[_ngcontent-%COMP%]:after {\n    content: '';\n    left: 0;\n    position: absolute;\n}\n\n\n\n.overlay[_ngcontent-%COMP%] {\n    background: #348F50;\n    \n    \n    background: linear-gradient(to right, #56B4D3, #348F50);\n    \n    height: 100%;\n    width: 100%;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: -1;\n}\n\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%] {\n    box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUVYLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBRTVCLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakI7O09BRUc7QUFDUDs7QUFHQSwrQkFBK0I7O0FBRS9COztJQUVJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFFckIsNkRBQTZEO0lBQzdELDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0VBQXdFO0FBQzVFOztBQUdBLDJCQUEyQjs7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFHQSxnQ0FBZ0M7O0FBRWhDOzs7SUFHSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsT0FBTztJQUNQLGtCQUFrQjtBQUN0Qjs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUU5QiwrQkFBK0I7SUFDL0IsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5uYXYgYSxcbm5hdiBhOmFmdGVyLFxubmF2IGE6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xufVxuXG4jbG9nbyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdmJhci1lbmQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uby1zZWxlY2Npb24tdGV4dG8ge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBTYWZhcmkgKi9cbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveFxuICAgICAgKi9cbn1cblxuXG4vKkNvbG9yIGRlbCBIb3ZlciBlbiBlbCBuYXZCYXIqL1xuXG4ubmF2YmFyLWl0ZW06aG92ZXIsXG4ubmF2YmFyLWl0ZW06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChjdXJyZW50Q29sb3IsIGN1cnJlbnRDb2xvcik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KGN1cnJlbnRDb2xvciwgY3VycmVudENvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAwJSAwLjVyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1zaXplIC4zcztcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbmE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAwLjVyZW07XG59XG5cbi5pZGlvbWFzIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbn1cblxuXG4vKiBNYW5lam8gcmVzcG9uc2l2ZSBtZW51ICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweC0xcHgpIHtcbiAgICAjbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5mb3JjZS1jZW50ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cbiAgICAubmF2YmFyLWVuZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5cbi8qRWZlY3RvIEljb25vIE1lbmkgSGFtYnVyZ3Vlc2EqL1xuXG4jbWVudS1pY29uLFxuI21lbnUtaWNvbjpiZWZvcmUsXG4jbWVudS1pY29uOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWQxZjIwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMDVlbTtcbiAgICBoZWlnaHQ6IDAuMmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jbWVudS1pY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwLjRlbSAwO1xuICAgIG1heC13aWR0aDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubmF2IGxhYmVsICNtZW51LWljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuI21lbnUtaWNvbjpiZWZvcmUsXG4jbWVudS1pY29uOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4vKkVmZWN0byBkZSBPdmVybGF5Ki9cblxuLm92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6ICMzNDhGNTA7XG4gICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNTZCNEQzLCAjMzQ4RjUwKTtcbiAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU2QjREMywgIzM0OEY1MCk7XG4gICAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4ubmF2YmFyIC5uYXZiYXItbWVudSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 29107:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/social-network/social-network.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialNetworkComponent": function() { return /* binding */ SocialNetworkComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-form/contact-form.component */ 23915);


class SocialNetworkComponent {
    constructor() { }
    ngOnInit() {
    }
}
SocialNetworkComponent.??fac = function SocialNetworkComponent_Factory(t) { return new (t || SocialNetworkComponent)(); };
SocialNetworkComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SocialNetworkComponent, selectors: [["app-social-network"]], decls: 10, vars: 0, consts: [[1, "is-hidden-touch"], ["href", "https://github.com/dgonzalez15", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-github-alt", "github", "fa-2x"], ["href", "https://www.linkedin.com/in/diego-gonz%C3%A1lez-calder%C3%B3n/", "target", "_blank"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "linkedin", "fa-2x"]], template: function SocialNetworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "app-contact-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, directives: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    z-index: 100;\n}\n\nul[_ngcontent-%COMP%] {\n    right: 0;\n    bottom: 0;\n    color: #FFF;\n    transition: .3s;\n    position: fixed;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\nli[_ngcontent-%COMP%] {\n    position: relative;\n    margin: 0.8rem 0.8rem;\n    transition: 0.5s;\n    border-radius: 0 200px 200px 0;\n}\n\n\n\nli[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%]:hover {\n    background: #000000;\n    color: #ffffff;\n}\n\nli[_ngcontent-%COMP%]:nth-child(2)   i[_ngcontent-%COMP%]:hover {\n    background: #47b6f5;\n    color: #ffffff;\n}\n\nli[_ngcontent-%COMP%]:nth-child(3)   i[_ngcontent-%COMP%]:hover {\n    background: #47b6f5;\n    color: #ffffff;\n}\n\ni[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-right: 0.1rem;\n    padding: 10px 11px;\n    border-radius: 50%;\n    color: #000000;\n    background: #ffffff;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.github[_ngcontent-%COMP%] {\n    position: relative;\n    color: #000000;\n}\n\n.linkedin[_ngcontent-%COMP%] {\n    position: relative;\n    color: #47b6f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1uZXR3b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFHQSxpRUFBaUU7O0FBRWpFO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHdFQUF3RTtBQUM1RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic29jaWFsLW5ldHdvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5DcmVkaXRzIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QWxVSWxac1E3dklcbiovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbn1cblxudWwge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5saSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMC44cmVtIDAuOHJlbTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjAwcHggMjAwcHggMDtcbn1cblxuXG4vKiBDb2xvcmVzIFBhcmEgZWwgSG92ZXIgZGVwZW5kaWVuZG8gZGUgcXVlIEhpam8gZGUgbGEgbGlzdGEgc2VhKi9cblxubGk6bnRoLWNoaWxkKDEpIGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmxpOm50aC1jaGlsZCgyKSBpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDdiNmY1O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5saTpudGgtY2hpbGQoMykgaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQ3YjZmNTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMC4xcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5naXRodWIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmxpbmtlZGluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICM0N2I2ZjU7XG59Il19 */"] });


/***/ }),

/***/ 90992:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/tools-languages/tools-languages.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsLanguagesComponent": function() { return /* binding */ ToolsLanguagesComponent; }
/* harmony export */ });
/* harmony import */ var bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma-carousel/dist/js/bulma-carousel.min.js */ 8898);
/* harmony import */ var bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _core_services_tools_languages_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/tools-languages.service */ 78806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);





function ToolsLanguagesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "figure", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const herramienta_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", herramienta_r2.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("alt", "Camilo Castellanos - Ha utilizado ", herramienta_r2.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](herramienta_r2.nombre);
} }
function ToolsLanguagesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "figure", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const herramienta_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", herramienta_r3.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("alt", "Camilo Castellanos - Ha utilizado ", herramienta_r3.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](herramienta_r3.nombre);
} }
class ToolsLanguagesComponent {
    constructor(serviceTool) {
        this.serviceTool = serviceTool;
        this.listaHerramientas = [];
    }
    /// Estado = 0 (Solo Trabajo)
    /// Estado = 1 (Solo Proyectos Personales)
    /// Estado = 2 (Aplica para las 2)
    ngOnInit() {
        this.listaHerramientas = this.serviceTool.listaHerramientas.filter(h => h.estado == this.tipoListaDefault
            ||
                h.estado == this.tipoLista);
        // this.carrucel();
    }
    /**
     * visualizaci??n carusel para los logos
     */
    ngAfterViewInit() {
        bulma_carousel_dist_js_bulma_carousel_min_js__WEBPACK_IMPORTED_MODULE_0___default().attach('#carousel', {
            slidesToScroll: 1,
            slidesToShow: 1,
            autoplay: true,
            loop: true,
            pagination: false,
            infinite: true
        });
    }
}
ToolsLanguagesComponent.??fac = function ToolsLanguagesComponent_Factory(t) { return new (t || ToolsLanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core_services_tools_languages_service__WEBPACK_IMPORTED_MODULE_1__.ToolsLanguagesService)); };
ToolsLanguagesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ToolsLanguagesComponent, selectors: [["app-tools-languages"]], inputs: { tipoListaDefault: "tipoListaDefault", tipoLista: "tipoLista" }, decls: 15, vars: 8, consts: [[1, "is-medium", "mt-6"], [1, "container"], [1, "title-wrapper", "has-text-centered"], [1, "title", "is-2"], [1, "subtitle", "is-muted"], [1, "content-wrapper", "mt-6", "is-hidden-touch"], [1, "row", "columns", "is-centered", "is-multiline", "has-text-centered"], ["class", "column is-3", 4, "ngFor", "ngForOf"], [1, "mt-6", "is-hidden-desktop"], ["id", "carousel", 1, "carousel", "has-text-centered"], ["class", "item-1", 4, "ngFor", "ngForOf"], [1, "column", "is-3"], [1, "icon", "is-large"], [3, "src", "alt"], [1, "item-1"]], template: function ToolsLanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](11, ToolsLanguagesComponent_div_11_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, ToolsLanguagesComponent_div_14_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](5, 4, "TITULO_TOOLS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](8, 6, "SUBTITULO_TOOLS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.listaHerramientas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.listaHerramientas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29scy1sYW5ndWFnZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/social-network/social-network.component */ 29107);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 33502);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 66526);
/* harmony import */ var _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-form/contact-form.component */ 23915);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tools-languages/tools-languages.component */ 90992);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);









class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](SharedModule, { declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent,
        _components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_0__.SocialNetworkComponent,
        _components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_4__.ToolsLanguagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule], exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.ContactFormComponent,
        _components_social_network_social_network_component__WEBPACK_IMPORTED_MODULE_0__.SocialNetworkComponent,
        _components_tools_languages_tools_languages_component__WEBPACK_IMPORTED_MODULE_4__.ToolsLanguagesComponent,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 11084:
/*!***************************************!*\
  !*** ./src/assets/JSON/Learning.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"aprendiendo":[{"titulo":"Certificaci??n NSE 1","imagen":"https://i.postimg.cc/BvRH2RVs/NSE-1-Certification-page-0001.jpg"},{"titulo":"Certificaci??n NSE 2","imagen":"https://i.postimg.cc/Y9f0jVcd/NSE-2-Certification-page-0001.jpg"},{"titulo":"Conceptos de Programaci??n","imagen":"https://i.postimg.cc/sgFJYCFm/74f88670-f5bd-46bf-a48b-0aadbd48d09d.png"},{"titulo":"Fundamentos de JavaScript","imagen":"https://i.postimg.cc/GmxbFDgp/UC-d402f27f-995a-4e20-bfbf-5a5e5a6f612d.jpg"},{"titulo":"Base de Datos PostgreSQL Server","imagen":"https://i.postimg.cc/MH7FC7QM/UC-b591619b-c0cc-4f2a-ab14-7338df62808d.jpg"},{"titulo":"CCNA Cybersecurity Operations","imagen":"https://i.postimg.cc/YCgdwXHX/Diego-Patricio-Gonz-lez-Caldero-CYBEROPS-UPS-P55-certificate-page-0001.jpg"}]}');

/***/ }),

/***/ 83466:
/*!**************************************!*\
  !*** ./src/assets/JSON/Proyect.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"proyecto":[{"titulo":"Angular","url":"https://practica-componentes-servicios.web.app/","descripcion":"Es una aplicacion creada en Angular que lo que realiza es consumir una API comercial y la agrega al carrito de compras.","descripcionEN":"It is an application created in Angular that what it does is consume a commercial API and add it to the shopping cart.","imagen2":"https://i.postimg.cc/Y0r79gsJ/Captura-de-pantalla-20230118-110913.png","imagen":"https://i.postimg.cc/Y0r79gsJ/Captura-de-pantalla-20230118-110913.png","lenguaje":"https://i.postimg.cc/hvVnLNh8/angular.webp"},{"titulo":"Teachable Machine","imagen2":"https://i.postimg.cc/hPMYgNg4/images.jpg","imagen":"https://i.postimg.cc/hPMYgNg4/images.jpg","descripcion":"Proyecto de reconocimiento facial, el cual permitia identificar si tenias puesta la mascarilla o no, esta realizado Teachable Machine.","descripcionEN":"Facial recognition project, which made it possible to identify whether you had a mask on or not, is carried out by Teachable Machine.","url":"https://dgonzalez15.github.io/mascarilla/","lenguaje":"https://i.postimg.cc/YqpBvHvc/teachable-machine-logo.png"},{"titulo":"Teachable Machine","imagen2":"https://i.postimg.cc/GhWn6ZjB/Painted-Flowers-Twitter-Header-2.png","imagen":"https://i.postimg.cc/GhWn6ZjB/Painted-Flowers-Twitter-Header-2.png","descripcion":"Proyecto realizado para la Detecci??n de sonrisa o de asombro ante alguna situaci??n y esta realizada en Teachable Marchine.","descripcionEN":"Project carried out for the Detection of smiles or amazement in a situation and it is carried out in Teachable Marchine.","url":"https://dgonzalez15.github.io/proyectVisionC-Deteccion_Sonrisa-Sorprendido/","lenguaje":"https://i.postimg.cc/YqpBvHvc/teachable-machine-logo.png"},{"titulo":"PaisesApp","imagen2":"https://i.postimg.cc/Dy1k1xq1/desktop1.png","imagen":"https://i.postimg.cc/Dy1k1xq1/desktop1.png","descripcion":"App de paises el cual realiza un filtrado de Pa??s por medio de los continentes, provincias, etc. Cada pa??s muestra su bandera, recalcar que esta realizado en Angular.","descripcionEN":"Country App which performs a Country filter by means of continents, provinces, etc. Each country shows its flag, emphasize that it is made in Angular.","url":"https://github.com/dgonzalez15/AngularPais.git","lenguaje":"https://i.postimg.cc/hvVnLNh8/angular.webp"},{"titulo":"Arb??l AVL","imagen2":"https://i.postimg.cc/VL9nrbkD/AVL-2.png","imagen":"https://i.postimg.cc/VL9nrbkD/AVL-2.png","descripcion":"Proyecto realizado en Java el cual realiza un arb??l equilibrado que mantiene todas las operaciones que poseen ??stos.","descripcionEN":"Project made in Java which makes a balanced tree that maintains all the operations that they have.","url":"https://github.com/dgonzalez15/arbolAvl","lenguaje":"https://i.postimg.cc/CxynfQ4j/Java-logo.png"}]}');

/***/ }),

/***/ 8054:
/*!**********************************************!*\
  !*** ./src/assets/JSON/Tools-Languages.json ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"herramientas":[{"nombre":".NET","imagen":"https://i.postimg.cc/ZYrHKM85/net.webp","estado":2},{"nombre":"C#","imagen":"https://i.postimg.cc/s27Q9tDB/CSharp.webp","estado":2},{"nombre":"Github","imagen":"https://i.postimg.cc/FszYnfHX/GitHub.webp","estado":2},{"nombre":"Angular","imagen":"https://i.postimg.cc/hvVnLNh8/angular.webp","estado":2},{"nombre":"SQL Server","imagen":"https://i.postimg.cc/tgLxPF0z/SQLServer.webp","estado":2},{"nombre":"Visual Studio","imagen":"https://i.postimg.cc/qqgHT6R9/Visual-Studio.webp","estado":2},{"nombre":"Visual Studio Code","imagen":"https://i.postimg.cc/nLcJkWxF/Visual-Studio-Code.webp","estado":2},{"nombre":"PL/SQL","imagen":"https://i.postimg.cc/GpwPdpNn/pl-sql.png","estado":0},{"nombre":"Java","imagen":"https://i.postimg.cc/CxynfQ4j/Java-logo.png","estado":0},{"nombre":"Vue JS","imagen":"https://i.postimg.cc/L8hQnhNq/vue.png","estado":2},{"nombre":"Laravel","imagen":"https://i.postimg.cc/vTNHMc0r/laravel.jpg","estado":0},{"nombre":"Postman","imagen":"https://i.postimg.cc/WbkbFxNx/Postman.webp","estado":2},{"nombre":"PostgreSQL","imagen":"https://i.postimg.cc/d046qFKs/logo-Postgre-SQL.png","estado":0}]}');

/***/ }),

/***/ 9177:
/*!***********************************!*\
  !*** ./src/assets/JSON/Work.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"work":[{"titulo":"Claro","imagen":"https://i.postimg.cc/g0d352rS/i606384.webp","descripcion":"Asistente Atenci??n al cliente","descripcionEN":"Customer Service Assistant","fechaInicio":"2022-06-20","fechaFin":"2022-08-20"},{"titulo":"OWN","imagen":"https://i.postimg.cc/wTsZV0Cq/own.jpg","descripcion":"Pr??cticas T??cnicas","descripcionEN":"Technical Practices","fechaInicio":"2022-06-20","fechaFin":"2022-08-20"},{"titulo":"Brinatel","imagen":"https://i.postimg.cc/7ZRf3QDH/1421b3116253583-Y3-Jvc-Cwz-ODM1-LDMw-MDAs-ODUs-MA.jpg","descripcion":"Analista de Fibra Optica","descripcionEN":"Fiber Optic Analyst","url":"https://brinatel.com/contenido/","fechaInicio":"2022-08-01","fechaFin":"2023-02-01"},{"titulo":"Plastigomez S.A","imagen":"https://i.postimg.cc/x8LCn0bq/maxresdefault.jpg","descripcion":"Asistente de Sistemas","descripcionEN":"System Assistant","url":"https://plastigomez.com/page/homepage","fechaInicio":"2021-12-08","fechaFin":"2022-02-05"},{"titulo":"Santa Priscila","imagen":"https://i.postimg.cc/t4QTSnwP/logo.jpg","descripcion":"Desarrollador de Software","descripcionEN":"Software developer","url":"https://www.santa-priscila-admin.com/","fechaInicio":"2022-08-01","fechaFin":"2023-02-01"}]}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map