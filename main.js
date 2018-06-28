(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  /* Navbar & Sidebar */\r\n  nav {\r\n    background-image:url(\"/assets/toolbar.jpg\");\r\n    margin-bottom:0;\r\n  }\r\n  .nav-wrapper a{\r\n    color: #ffffff;\r\n    font-size:18px;\r\n    font-weight:300;\r\n  }\r\n  .nav-wrapper a:hover {\r\n    font-weight:400;\r\n   }\r\n  .nav-wrapper .brand-logo{\r\n    padding-left: 1.2rem;\r\n  }\r\n  .nav-wrapper li{\r\n    padding-left:0.5rem;\r\n  }\r\n  /* Header*/\r\n  .parallax-header{\r\n  height: 450px; \r\n  background-image:url(\"/assets/turquoise-glow-29643-1920x1080.jpg\");\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  text-align: right;\r\n  padding-top:4rem;\r\n  color: white;\r\n  height:100%;\r\n}\r\n  .parallax-header h1{\r\n  padding-right:5rem;\r\n  -webkit-animation: slide 3s;\r\n          animation: slide 3s;\r\n}\r\n  .parallax-header h5{\r\n  padding-right:5rem;\r\n  -webkit-animation: slide 5s;\r\n          animation: slide 5s;\r\n}\r\n  .selected {\r\n  background: linear-gradient(to bottom, transparent,  rgba(0,0,0,0.2));\r\n  border-bottom: solid 2px rgba(255, 255, 255, 0.6);\r\n}\r\n  .languages-list {\r\n  list-style-type: none;\r\n  background-color: transparent;\r\n  text-align: center;\r\n  margin-top:7rem;\r\n  margin-bottom:2rem;\r\n}\r\n  .languages-list li {\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  font-size:18px;\r\n  font-weight: 300;\r\n  display: inline-block;\r\n  *display:inline;\r\n  margin:1rem;\r\n  padding: 0 0.5rem 0 0.5rem;\r\n}\r\n  .languages-list li.selected:hover {\r\n  color: white;\r\n}\r\n  .languages-list li:hover {\r\n  color: rgb(200, 200, 200);\r\n  background: linear-gradient(to bottom, rgba(0,0,0,0.08),  rgba(0,0,0,0.5));\r\n  border-bottom: solid 2px rgba(255, 255, 255, 0.6);\r\n  left: 1.1em;\r\n}\r\n  .contact-card{\r\n    width:100%;\r\n    padding-top:1rem;\r\n    text-align:center;\r\n  }\r\n\r\n "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"navbar\" class=\"navbar-fixed\">\n    <nav>\n      <div class=\"nav-wrapper\">\n        <div class=\"brand-logo\"></div>\n        <ul class=\"right\">\n          <li>\n            <a (click)=\"scroll(presentacion)\">\n              <i class=\"fa fa-drivers-license\" style=\"margin-right:0.5rem;font-size:23px;color:white\"></i>\n              {{lang.navbar_experiencia}}\n            </a>\n          </li>\n          <li>\n            <a (click)=\"scroll(proyectos)\">\n              <i class=\"fa fa-code\" style=\"margin-right:0.5rem;font-size:23px;color:white\"></i>\n              {{lang.navbar_proyectos}}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n<main>\n  <div class=\"parallax-header\">\n    <h1>Leandro Ercoli</h1>\n    <h5>{{lang.header_subtitulo}} </h5>\n    <ul class=\"languages-list\">\n      <li *ngFor=\"let l of langs\" [class.selected]=\"l === lang\" (click)=\"onSelect(l)\">\n        <span>{{l.id}}</span>\n      </li>\n    </ul>\n  </div>\n  <div #presentacion></div>\n  <app-presentacion [lang]=\"lang\"></app-presentacion>\n  <div #proyectos></div>\n  <app-projects [lang]=\"lang\"></app-projects>\n</main>\n\n<footer class=\"page-footer black\">\n  <div class=\"container\">\n    <div class=\"row\"> \n      <div class=\"col s0 m4\"></div>\n      <div class=\"col s12 m4 center\">\n        <h5 class=\"white-text\">{{lang.contacto}}</h5>\n        <div class=\"contact-card \">\n          <a href=\"mailto:leandroercoli@gmail.com\">\n            <i class=\"fa fa-envelope-o\" style=\"margin:1rem;font-size:28px;color:white\"></i>\n          </a>\n          <a href=\"https://www.linkedin.com/in/leandroercoli/\">\n            <i class=\"fa fa-linkedin\" style=\"margin:1rem;font-size:28px;color:white\"></i>\n          </a>\n          <a href=\"https://github.com/leandroercoli\">\n            <i class=\"fa fa-github\" style=\"margin:1rem;font-size:28px;color:white\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"col s0 m4\"></div>\n    </div>\n  </div>\n  <div class=\"footer-copyright container\">\n    <span>{{lang.span_sitiocreado}}\n      <a href=\"https://github.com/leandroercoli/leandroercoli.github.io\">{{lang.span_vercodigo}}</a>\n    </span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ "./src/app/strings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.lang = _strings__WEBPACK_IMPORTED_MODULE_1__["ES"];
        this.langs = [_strings__WEBPACK_IMPORTED_MODULE_1__["ES"], _strings__WEBPACK_IMPORTED_MODULE_1__["ENG"]];
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onSelect = function (l) {
        this.lang = l;
    };
    AppComponent.prototype.scroll = function (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentacion/presentacion.component */ "./src/app/presentacion/presentacion.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _presentacion_presentacion_component__WEBPACK_IMPORTED_MODULE_5__["PresentacionComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_2__["MaterializeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/presentacion/presentacion.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal{\r\n    color:black;\r\n    font-weight:300;\r\n}\r\n#card-presentacion{\r\n  background: linear-gradient(to bottom, transparent,  rgba(255,255,255,0.25))\r\n}\r\n#card-presentacion .card-action{\r\n  min-height:65px;\r\n}\r\n#card-presentacion .card-action a{\r\n  position:absolute;\r\n  color: white;\r\n  bottom:0.3rem;\r\n  font-size:36px\r\n}\r\n/* Cards experiencia */\r\n.card-experience{\r\n    text-align:left;\r\n    background: linear-gradient(to left, transparent,  rgba(255,255,255,0.1));\r\n    border-left: solid 2px rgba(255,255,255,0.6);\r\n  }\r\n.card-experience:hover{\r\n    background: linear-gradient(to left, transparent,  rgba(255,255,255,0.3));\r\n  }\r\n.card-experience-title{\r\n    padding-top:0;\r\n    padding-left:0;\r\n    font-size: 30px;\r\n    font-weight:300;\r\n  }\r\n.card-experience-secondary-title{\r\n    padding-top:0;\r\n    padding-left:0;\r\n    font-size: 24px;\r\n    font-weight:200;\r\n    padding-bottom:0.5rem;\r\n  }\r\n.card-experience-text{\r\n    padding-top:0;\r\n    padding-left:0;\r\n    font-size: 16px;\r\n    font-weight:200;\r\n    text-align: justify;\r\n  }\r\n.card-icon-flag{\r\n    position:absolute;\r\n    right:-1rem;\r\n    top:-0.5rem;\r\n    font-size:48px;\r\n}\r\n@-webkit-keyframes blinker {  \r\n  from { opacity: 1; }\r\n  to { opacity: 0.6; }\r\n}\r\n@keyframes blinker {  \r\n  from { opacity: 1; }\r\n  to { opacity: 0.6; }\r\n}\r\n@-webkit-keyframes leaves {\r\n    0% {\r\n        -webkit-transform: scale(0.7);\r\n                transform: scale(0.7);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@keyframes leaves {\r\n    0% {\r\n        -webkit-transform: scale(0.7);\r\n                transform: scale(0.7);\r\n    }\r\n    100% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n.card-date{\r\n    margin-top:2rem;\r\n    text-align:left;\r\n    vertical-align: middle;\r\n    font-size:18px;\r\n    background-color:transparent;\r\n}\r\n.card-date-icon {\r\n    color: white;\r\n    font-size:36px;\r\n    margin-top:0.9rem;\r\n  }\r\n.icon-animation {\r\n    -webkit-animation: icon-anim 2s infinite alternate;\r\n            animation: icon-anim 2s infinite alternate;\r\n  }\r\n@-webkit-keyframes icon-anim {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg); \r\n      }\r\n      to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n      }\r\n}\r\n@keyframes icon-anim {\r\n    from {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg); \r\n      }\r\n      to {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n      }\r\n}\r\n"

/***/ }),

/***/ "./src/app/presentacion/presentacion.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Página en ESPAÑOL -->\n<div class=\"parallax-container\" id=\"presentacion\">\n  <div class=\"container parallax-content-text\">\n    <div class=\"section\">    \n      <div class=\"row \">\n        <div class=\"col s0 m2\"></div>\n        <div class=\"col s12 m8\">\n          <div class=\"card horizontal\" id=\"card-presentacion\">\n            <div class=\"card-image hide-on-med-and-down\">\n              <img src=\"assets/20180327_125635.jpg\">\n            </div>\n            <div class=\"card-stacked\">\n              <div class=\"card-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                <img src=\"assets/20180327_125635.jpg\">\n              </div>\n              <div class=\"card-content\" style=\"font-size:16px;padding-top:3rem;padding-right:3rem;line-height:1.6rem; text-align:justify;\">\n                <p>{{lang.about_me1}}\n                  <br>{{lang.about_me2}}\n                  <br>{{lang.about_me3}}\n                </p>\n              </div>\n              <div class=\"card-action\">\n                <!-- Modal Trigger -->\n                <a class=\"modal-trigger\" style=\"left:20%\" href=\"#modal-cv\">\n                  <i class=\"fa fa-file-text-o\"></i>\n                </a>\n                <a href=\"mailto:leandroercoli@gmail.com\" style=\"left:40%;\">\n                  <i class=\"fa fa-envelope-o\"></i>\n                </a>\n                <a href=\"https://github.com/leandroercoli\" style=\"left:60%;\">\n                  <i class=\"fa fa-github\"></i>\n                </a>\n                <a href=\"https://www.linkedin.com/in/leandroercoli/\" style=\"left:80%;\">\n                  <i class=\"fa fa-linkedin\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s0 m2\"></div>\n      </div>\n    </div>\n    <!-- Modal Structure -->\n    <div id=\"modal-cv\" class=\"modal modal-fixed-footer\" materialize=\"modal\" [materializeParams]=\"[{dismissible: true}]\">\n      <div class=\"modal-content\">\n        <img src=\"assets/CV Leandro Ercoli (WEB).jpg\" *ngIf=\"lang.id == 'Español'\">\n        <img src=\"assets/CV Leandro Ercoli (WEB-ENG).jpg\" *ngIf=\"lang.id == 'English'\">\n      </div>\n      <div class=\"modal-footer\">\n        <a class=\"modal-close waves-effect btn-flat black-text\">{{lang.btn_cerrar}}</a>\n        <a class=\"modal-close waves-effect btn-flat black-text\" href=\"assets/CV Leandro Ercoli (WEB).pdf\" *ngIf=\"lang.id == 'Español'\">{{lang.btn_descargar}}</a>\n        <a class=\"modal-close waves-effect btn-flat black-text\" href=\"assets/CV Leandro Ercoli (WEB-ENG).pdf\" *ngIf=\"lang.id == 'English'\">{{lang.btn_descargar}}</a>\n      </div>\n    </div>\n    <div class=section>\n      <h4 style=\"padding-bottom:1.5rem;\">{{lang.experiencia_titulo}}</h4>\n      <div class=\"row \">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-graduation-cap icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2012-2018 - Bahía Blanca, Argentina</span>\n          </div>\n        </div>\n        <div class=\"col s12 m8\">\n          <div class=\"card card-experience\">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker\"></i> Universidad Nacional del Sur</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_ing_subtitulo}}</span>\n              <p class=\"card-experience-text\">{{lang.card_ing_texto}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-graduation-cap icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2017 - París, Francia</span>\n          </div>\n        </div>\n        <div class=\"col s12 m8\">\n          <div class=\"card card-experience \">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker\"></i> École d'Ingénieur Généraliste en Informatique (EFREI)</span>\n              <span class=\"card-title card-experience-secondary-title\">Máster M1 “Software Engineering”</span>\n              <p class=\"card-experience-text\">{{lang.card_efrei_texto}} </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-briefcase icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2016 - Bahía Blanca, Argentina</span>\n          </div>\n        </div>\n        <div class=\"col s12 m8\">\n          <div class=\"card card-experience \">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker\"></i> Universidad Nacional del Sur</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_experiencia_estructuras_texto}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-briefcase icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2016 - Bahía Blanca, Argentina</span>\n          </div>\n        </div>\n        <div class=\"col s12 m8\">\n          <div class=\"card card-experience \">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker \"></i> Universidad Nacional del Sur</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_experiencia_ipoo_texto}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row \">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-wrench icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2016 - Buenos Aires, Argentina</span>\n          </div>\n        </div>\n        <div class=\"col s12 m4\">\n          <div class=\"card card-experience \" style=\"height:280px;\">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker \"></i> Universidad de Buenos Aires</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_curso_cybersecurity_titulo}} </span>\n              <p class=\"card-experience-text\">{{lang.card_curso_cybersecurity_texto}}\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s12 m4\">\n          <div class=\"card card-experience \" style=\"height:280px;\">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker\"></i> Universidad de Buenos Aires</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_curso_appsecurity_titulo}}</span>\n              <p class=\"card-experience-text\">{{lang.card_curso_appsecurity_texto}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col s0 m1\">\n          <div class=\"card-date-icon hide-on-med-and-down\">\n            <i class=\"fa fa-wrench icon-animation\"></i>\n          </div>\n        </div>\n        <div class=\"col s12 m3\">\n          <div class=\"card-date\">\n            <span>2015 - Bahía Blanca, Argentina</span>\n          </div>\n        </div>\n        <div class=\"col s12 m8\">\n          <div class=\"card card-experience \">\n            <div class=\"card-content\">\n              <span class=\"card-title card-experience-title\">\n                <i class=\"fa fa-map-marker\"></i> Hexacta S.A.</span>\n              <span class=\"card-title card-experience-secondary-title\">{{lang.card_curso_hexacta_titulo}} </span>\n              <p class=\"card-experience-text\">{{lang.card_curso_hexacta_texto}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/presentacion/presentacion.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentacion/presentacion.component.ts ***!
  \********************************************************/
/*! exports provided: PresentacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentacionComponent", function() { return PresentacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PresentacionComponent = /** @class */ (function () {
    function PresentacionComponent() {
    }
    PresentacionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PresentacionComponent.prototype, "lang", void 0);
    PresentacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-presentacion',
            template: __webpack_require__(/*! ./presentacion.component.html */ "./src/app/presentacion/presentacion.component.html"),
            styles: [__webpack_require__(/*! ./presentacion.component.css */ "./src/app/presentacion/presentacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PresentacionComponent);
    return PresentacionComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-projects:hover{\r\n    background: linear-gradient(to top, transparent,  rgba(255,255,255,0.3));\r\n    -webkit-animation: card-projects-animation 2s;\r\n            animation: card-projects-animation 2s;\r\n}\r\n.card-projects-image{\r\n    width:400px;\r\n    height: 100%;\r\n    display: flex;\r\n    padding-top:1rem;\r\n    padding-bottom:1rem;\r\n  }\r\n.card-projects-image img{\r\n    width: 100%;\r\n    height: auto;\r\n    padding:0.5rem 0.5rem;\r\n  }\r\n.card-projects-left{\r\n    text-align:left;\r\n    padding-left:1rem;\r\n    font-size: 15px;\r\n    font-weight:200;\r\n  }\r\n.card-projects-left h4{\r\n    text-align:left;\r\n    padding-top:1rem;\r\n    padding-left:1rem;\r\n  }\r\n.card-projects-right{\r\n    text-align:right;\r\n    padding-right:1rem;\r\n    font-size: 15px;\r\n    font-weight:200;\r\n  }\r\n.card-projects-right h4{\r\n    text-align:right;\r\n    padding-top:1rem;\r\n    padding-right:1rem;\r\n  }\r\n.card-projects-left .card-action,\r\n  .card-projects-right .card-action{\r\n    text-align:center;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n.card-projects-left .card-content,\r\n  .card-projects-right .card-content{\r\n    padding:0 1rem;\r\n  }\r\n@-webkit-keyframes card-projects-animation{\r\n    0%{\r\n      opacity: 1;\r\n      right: 0px;\r\n    }\r\n    30%{\r\n      opacity: 0.5;\r\n      right: 80px;\r\n    }\r\n    100%{\r\n      opacity: 1;\r\n      right: 0px;\r\n    }\r\n  }\r\n@keyframes card-projects-animation{\r\n    0%{\r\n      opacity: 1;\r\n      right: 0px;\r\n    }\r\n    30%{\r\n      opacity: 0.5;\r\n      right: 80px;\r\n    }\r\n    100%{\r\n      opacity: 1;\r\n      right: 0px;\r\n    }\r\n  }\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"proyectos\" class=\"parallax-container\">\n  <div class=\"parallax-content\">\n    <div class=\"container parallax-content-text\">\n      <div class=section>\n        <h4 style=\"padding-bottom:1.5rem;\">{{lang.proyectos_titulo}}</h4>\n        <div class=\"row \">\n            <div class=\"col s0 m1\"></div>\n            <div class=\"col s12 m10\">\n              <div class=\"card horizontal card-projects\">\n                <div class=\"card-stacked card-projects-right\">                  \n                  <h4>Web Stock Predictor</h4>\n                  <div class=\"card-content\">\n                    <p>{{lang.card_webstockpredictor_texto}}\n                      <a href=\"https://iextrading.com/\">iextrading</a>.\n                    </p>\n                  </div>\n                  <div class=\"tag-div\">\n                      <span class=\"tag\">Angular</span>\n                      <span class=\"tag\">HTML</span>\n                      <span class=\"tag\">CSS</span>\n                      <span class=\"tag\">CSS</span>                  \n                  </div>\n                  <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                      <img class=\"materialboxed\" src=\"assets/web-stockpredictor.jpg\">\n                    </div>\n                  <div class=\"card-action\">\n                      <a href=\"https://github.com/leandroercoli/Web-StockPredictor\"\n                        target=\"_blank\" class=\"button\">                    \n                        <span>{{lang.btn_vercodigo}}</span>\n                        <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                      </a>\n                      <a href=\"https://leandroercoli.github.io/Web-StockPredictor/\"\n                    target=\"_blank\" class=\"button\">\n                    <span>{{lang.btn_verpagina}}</span>\n                  </a>\n                    </div>\n                </div>\n                 <div class=\"card-projects-image hide-on-med-and-down\">\n                  <img class=\"materialboxed\" src=\"assets/web-stockpredictor.jpg\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col s0 m1\"></div>\n          </div>\n        <div class=\"row \">\n            <div class=\"col s0 m1\"></div>\n            <div class=\"col s12 m10\">\n                <div class=\"card horizontal card-projects\">\n                <div class=\"card-projects-image hide-on-med-and-down\">\n                  <img class=\"materialboxed\" src=\"assets/stock-predictor.jpg\">\n                </div>\n                <div class=\"card-stacked card-projects-left\">\n                  <h4>Stock Predictor</h4>\n                  <div class=\"card-content \">\n                    <p>{{lang.card_stockpredictor_texto}}\n                    </p>\n                  </div>\n                  <div class=\"tag-div\">\n                      <span class=\"tag\">Machine Learning</span>\n                      <span class=\"tag\">Python</span>\n                      <span class=\"tag\">Keras</span>\n                      <span class=\"tag\">Finanzas</span>                      \n                  </div>\n                  <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                      <img class=\"materialboxed\" src=\"assets/stock-predictor.jpg\">\n                    </div>\n                  <div class=\"card-action\">                   \n                    <a href=\"https://github.com/leandroercoli/stock-predictor/blob/master/stock-predictor.ipynb\"\n                      target=\"_blank\" class=\"button\">                    \n                      <span>{{lang.btn_vercodigo}}</span>\n                      <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col s0 m1\"></div>\n          </div>\n        <div class=\"row \">\n            <div class=\"col s0 m1\"></div>\n            <div class=\"col s12 m10\">\n                <div class=\"card horizontal card-projects\">\n                <div class=\"card-stacked card-projects-right\">                  \n                  <h4>Baseline Predictions</h4>\n                  <div class=\"card-content\">\n                    <p>{{lang.card_baselines}}\n                    </p>\n                  </div>\n                  <div class=\"tag-div\">\n                      <span class=\"tag\">Estadística</span>\n                      <span class=\"tag\">Python</span>\n                      <span class=\"tag\">Bitcoin</span>                  \n                  </div>\n                  <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                      <img class=\"materialboxed\" src=\"assets/baselines.jpg\">\n                    </div>\n                  <div class=\"card-action\">\n                      <a href=\"https://github.com/leandroercoli/baseline-predictions/blob/master/SimuladorBaselines.ipynb\"\n                        target=\"_blank\" class=\"button\">                    \n                        <span>{{lang.btn_vercodigo}}</span>\n                        <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                      </a>\n                    </div>\n                </div>\n                 <div class=\"card-projects-image hide-on-med-and-down\">\n                  <img class=\"materialboxed\" src=\"assets/baselines.jpg\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col s0 m1\"></div>\n          </div>\n        <div class=\"row \">\n          <div class=\"col s0 m1\"></div>\n          <div class=\"col s12 m10\">\n              <div class=\"card horizontal card-projects\">\n              <div class=\"card-projects-image hide-on-med-and-down\">\n                <img class=\"materialboxed\" src=\"assets/tutorialesuns-interface.jpg\">\n              </div>\n              <div class=\"card-stacked card-projects-left\">\n                <h4>Tutoriales UNS</h4>\n                <div class=\"card-content \">\n                  <p>{{lang.card_tutorialesUNS}}\n                  </p>\n                </div>\n                <div class=\"tag-div\">\n                    <span class=\"tag\">HTML5</span>\n                    <span class=\"tag\">CSS</span>\n                    <span class=\"tag\">Material Design</span>\n                </div>\n                <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                    <img class=\"materialboxed\" src=\"assets/tutorialesuns-interface.jpg\">\n                  </div>\n                <div class=\"card-action\">                   \n                  <a href=\"https://github.com/leandroercoli/Web-TutorialesUNS\"\n                    target=\"_blank\" class=\"button\">                    \n                    <span>{{lang.btn_vercodigo}}</span>\n                    <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                  </a>\n                  <a href=\"https://leandroercoli.github.io/Web-TutorialesUNS/index.html\"\n                    target=\"_blank\" class=\"button\">\n                    <span>{{lang.btn_verpagina}}</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col s0 m1\"></div>\n        </div>\n        <div class=\"row \">\n          <div class=\"col s0 m1\"></div>\n          <div class=\"col s12 m10\">\n              <div class=\"card horizontal card-projects\">\n              <div class=\"card-stacked card-projects-right\">                  \n                <h4>Smart Home Interface</h4>\n                <div class=\"card-content\">\n                  <p>{{lang.card_smarthomeinterface}}\n                  </p>\n                </div>\n                <div class=\"tag-div\">\n                    <span class=\"tag\">PHP</span>\n                    <span class=\"tag\">CSS</span>\n                    <span class=\"tag\">Material Design</span>\n                    <span class=\"tag\">jQuery</span>\n                    <span class=\"tag\">XML</span>\n                </div>\n                <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                    <img class=\"materialboxed\" src=\"assets/smarthome-interface.jpg\">\n                  </div>\n                <div class=\"card-action\">\n                    <a href=\"https://github.com/leandroercoli/SmartHome-interface\"\n                      target=\"_blank\" class=\"button\">                    \n                      <span>{{lang.btn_vercodigo}}</span>\n                      <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                    </a>\n                  </div>\n              </div>\n               <div class=\"card-projects-image hide-on-med-and-down\">\n                <img class=\"materialboxed\" src=\"assets/smarthome-interface.jpg\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col s0 m1\"></div>\n        </div>\n        <div class=\"row \">\n            <div class=\"col s0 m1\"></div>\n            <div class=\"col s12 m10\">\n                <div class=\"card horizontal card-projects\">\n                <div class=\"card-projects-image hide-on-med-and-down\">\n                  <img class=\"materialboxed\" src=\"assets/SpaceGame.jpg\">\n                </div>\n                <div class=\"card-stacked card-projects-left\">\n                  <h4>Space Game</h4>\n                  <div class=\"card-content \">\n                    <p>{{lang.card_spacehome}}\n                    </p>\n                  </div>\n                  <div class=\"tag-div\">\n                      <span class=\"tag\">Unity</span>\n                      <span class=\"tag\">C#</span>\n                      <span class=\"tag\">Arduino</span>\n                  </div>\n                  <div class=\"card-projects-image hide-on-large-only\" style=\"width:100%; max-width: 100%;\">\n                      <img class=\"materialboxed\" src=\"assets/smarthome-interface.jpg\">\n                    </div>\n                  <div class=\"card-action\">\n                    <a href=\"https://github.com/leandroercoli/Unity-SpaceGame\"\n                      target=\"_blank\" class=\"button\">                    \n                      <span>{{lang.btn_vercodigo}}</span>\n                      <i class=\"fa fa-github\"style=\"font-size:22px;\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col s0 m1\"></div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectsComponent.prototype, "lang", void 0);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/strings.ts":
/*!****************************!*\
  !*** ./src/app/strings.ts ***!
  \****************************/
/*! exports provided: ES, ENG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ES", function() { return ES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENG", function() { return ENG; });
var ES = {
    id: "Español",
    navbar_experiencia: "Experiencia",
    navbar_proyectos: "Proyectos",
    footer_contacto: "Contacto",
    btn_cerrar: "Cerrar",
    btn_descargar: "Descargar",
    span_sitiocreado: "Sitio creado en Angular6 + Materialize.",
    span_vercodigo: "Ver código fuente.",
    header_subtitulo: "Estudiante de Ingeniería en Computación",
    about_me1: "Estudiante de Ingeniería en Sistemas de Computación en la Universidad Nacional del Sur (Bahía Blanca, Argentina).",
    about_me2: "Especialmente interesado en desarrollo web y experimentación con técnicas de Machine Learning.",
    about_me3: "En mi tiempo libre disfruto de la fotografía, aprender idiomas y hacer running.",
    /* Educación y experiencia */
    experiencia_titulo: "Educación y Experiencia",
    card_ing_subtitulo: "Ingeniería en Sistemas de Computación",
    card_ing_texto: "Finalización prevista para agosto 2018.",
    card_efrei_texto: "Beca ARFITECT de movilidad a París, Francia, para realizar un semestre de estudio. Proyecto extracurricular de investigación: \“Flexible Architecture Based on Software Defined Infrastructure for IOT Applications.\"",
    card_experiencia_estructuras_texto: "Ayudante B \"Estructuras de Datos\"",
    card_experiencia_ipoo_texto: "Ayudante B \"Introducción a la Programación Orientada a Objetos\"",
    card_curso_cybersecurity_titulo: "Curso \“Principios de Cyber-Security para Entornos Corporativos\”",
    card_curso_cybersecurity_texto: "Como parte de la Escuela de Ciencias Informáticas (ECI) 2015.",
    card_curso_appsecurity_titulo: "Curso \"Introduction to Application Security\”",
    card_curso_appsecurity_texto: "Como parte de la Escuela de Ciencias Informáticas (ECI) 2015.",
    card_curso_hexacta_titulo: "Curso \“.NET y Frameworks Web\”",
    card_curso_hexacta_texto: "Curso teórico-práctico en las oficinas de Hexacta S.A.",
    /* Proyectos */
    proyectos_titulo: "Proyectos",
    btn_vercodigo: "Ver Código ",
    btn_verpagina: "Ver Página ",
    card_webstockpredictor_texto: "Página web construida en Angular 6 para mostrar los datos obtenidos del programa predictor de índices bursátiles que utiliza redes neuronales. Además, muestra datos en tiempo real, obtenidos a través de la API de la página ",
    card_stockpredictor_texto: "Proyecto de aplicación de técnicas de Machine Learning para predecir valores de índices bursátiles. El modelo de predicción está basado en redes neuronales LSTM, utilizando la librería Keras en Python. Se realizaron simulaciones sobre los índices Nasdaq, SP500, Dow Jones y Russell 2000.",
    card_baselines: "Estudio de métodos estadísticos tradicionales para predicción de precios de Bitcoin. El propósito es usar el estudio como base de comparación con soluciones que utilicen redes neuronales.",
    card_tutorialesUNS: "Modelo de una página web para mostrar tutoriales sobre el sistema Guaraní utilizado en la UNS, como proyecto final de la materia \"Interface Humano-Computadora\". Incorpora los conceptos aprendidos sobre interfaces claras e intuitivas para el usuario, haciendo uso de librerías y guías de Google Material Design Lite.",
    card_smarthomeinterface: "Interfaz gráfica para un sistema de Smart Home utilizando librerías de Google Material Design. El sistema back-end utiliza reconocimiento facial de la persona que actualmente está en el cuarto para disparar la adaptación de los dispositivos según las preferencias, guardadas en un archivo XML. El proyecto forma parte de una investigación teórico/práctica realizada sobre IoT y Smart Homes para la universidad Efrei de París, Francia.",
    card_spacehome: "Juego creado en Unity como parte del proyecto final para la materia de Sistemas Embebidos. El proyecto completo consiste en una implementación de un guante con flexores en cada dedo, que a través de una placa Arduino envía comandos al juego para mover la nave del jugador."
};
var ENG = {
    id: "English",
    navbar_experiencia: "Experience",
    navbar_proyectos: "Projects",
    footer_contacto: "Contact",
    btn_cerrar: "Close",
    btn_descargar: "Download",
    span_sitiocreado: "Site built on Angular6 + Materialize.",
    span_vercodigo: "View code.",
    header_subtitulo: "Computer Engineering student",
    about_me1: "Computer Engineering student at Universidad Nacional del Sur (Bahía Blanca, Argentina).",
    about_me2: "Specially interested in web development and experimenting with Machine Learning.",
    about_me3: "On my free time I enjoy photography, learning languages and running.",
    /* Educación y experiencia */
    experiencia_titulo: "Education",
    card_ing_subtitulo: "Computer Engineering",
    card_ing_texto: "Expected to finish by mid-2018.",
    card_efrei_texto: "ARFITEC scholarship received to complete a semester in Paris, France. Extracurricular research project: \“Flexible Architecture Based on Software Defined Infrastructure for IOT Applications.\"",
    card_experiencia_estructuras_texto: "Teaching Assistant B \"Data Structures\"",
    card_experiencia_ipoo_texto: "Teaching Assistant \"Object Oriented Programming\"",
    card_curso_cybersecurity_titulo: "Course \“Cyber-Security Principles for Corporative Environments\”",
    card_curso_cybersecurity_texto: "As part of Computer Sciences School (ECI) 2015.",
    card_curso_appsecurity_titulo: "Course \"Introduction to Application Security\”",
    card_curso_appsecurity_texto: "As part of Computer Sciences School (ECI) 2015.",
    card_curso_hexacta_titulo: "Course \“.NET and Web Frameworks\”",
    card_curso_hexacta_texto: "Theory-practice course at Hexacta S.A. offices.",
    /* Proyectos */
    proyectos_titulo: "Projects",
    btn_vercodigo: "View code ",
    btn_verpagina: "Go to page ",
    card_webstockpredictor_texto: "Angular 6 web app built to show data from the stock value predictor program. Also, integration with real-time data from API by ",
    card_stockpredictor_texto: "Personal project on Machine Learning techniques to predict stock market values. The prediction model is based on neural nets with LSTM layers, provided by Keras library in Python. Simulations on historic values of Nasdaq, SP500, Dow Jones and Russell 2000.",
    card_baselines: "Study on traditional statistic methods to forecast Bitcoin price. The purpose of this study is to serve as a baseline for a neural net solution of the problem.",
    card_tutorialesUNS: "Web page model to display tutorials of my university's student system (Guaraní), as part of the final proyect for the course \"Human Computer Interface\". Use of Google Material Design guidelines and libraries to create a clear and intuitive user interface.",
    card_smarthomeinterface: "GUI for a Smart Home system project. Use of Google Material Design guidelines and libraries. The back-end system uses facial recognition on the person currently in the room to reconfigurate all appliances automatically, adapting to the user preferences. The user preferences are saved in an XML file. This project is a part of a research on IoT and Smart Homes for Efrei University in Paris, France.",
    card_spacehome: "Unity Game created as part of final project for the course \"Embedded Systems\". The complete project is a physical implementation of a glove with flex sensors on each finger, communicating through an Arduino board to drive the game's spaceship."
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Leandro\Angular\leandroercoli\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map