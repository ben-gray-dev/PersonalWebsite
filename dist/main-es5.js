function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'personalSite';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: ["app-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmF5L3BlcnNvbmFsU2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuIiwiYXBwLWhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-typed-js */
    "./node_modules/ngx-typed-js/__ivy_ngcc__/fesm2015/ngx-typed-js.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__["NgxTypedJsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__["NgxTypedJsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_5__["NgxTypedJsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["IconsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_typed_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-typed-js */
    "./node_modules/ngx-typed-js/__ivy_ngcc__/fesm2015/ngx-typed-js.js");

    var _c0 = function _c0(a0) {
      return {
        "left": a0
      };
    };

    var _c1 = function _c1() {
      return ["\u041F\u0440\u0438\u0432\u0435\u0442! \u041C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442\u044C \u0411\u0435\u043D", "Hello! My name is Ben", "Salve! Mi chiamo Ben", "Hola! Me llamo Ben", "\u4F60\u597D! \u6211\u53EB Ben"];
    };

    var textOffsets = [15, 12, 12, 12, 6];
    var currentOffset = 350;

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.isUp = true;
        this.currentOffset = 350;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
          this.subscription = source.subscribe(function () {
            return _this.isUp = !_this.isUp;
          });
        }
      }, {
        key: "centerText",
        value: function centerText(indexOfStr) {
          this.currentOffset = textOffsets[indexOfStr];
        }
      }, {
        key: "onAnimationEvent",
        value: function onAnimationEvent(event) {
          console.log(event);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 22,
      vars: 11,
      consts: [["id", "earthContainer"], [1, "earth"], [1, "dusk"], [1, "night"], [1, "greeting", 3, "ngStyle"], [3, "strings", "shuffle", "typeSpeed", "loop", "cursorChar", "backDelay", "preStringTyped"], [1, "typing"], [1, "iconContainer"], [1, "personalIcon"], ["href", "https://github.com/benniferlopez", 1, "personalIconLink"], [1, "fa", "fa-github", "fa-4x"], ["href", "https://www.instagram.com/benito_musscoleni/", 1, "personalIconLink"], [1, "fa", "fa-instagram", "fa-4x"], ["href", "https://www.linkedin.com/in/ben-gray-78299b151/", 1, "personalIconLink"], [1, "fa", "fa-linkedin", "fa-4x"], ["id", "arrowContainer", 1, "iconContainer"], [1, "downArrow"], [1, "fa", "fa-chevron-down", "fa-4x"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ngx-typed-js", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("preStringTyped", function HeaderComponent_Template_ngx_typed_js_preStringTyped_6_listener($event) {
            return ctx.centerText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@arrowDown.done", function HeaderComponent_Template_div_animation_arrowDown_done_18_listener($event) {
            return ctx.onAnimationEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, "calc(50% - " + ctx.currentOffset + "vw)"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1))("shuffle", false)("typeSpeed", 60)("loop", true)("cursorChar", "_")("backDelay", 1000);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@arrowDown", ctx.isUp ? "topOfPath" : "bottomOfPath");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], ngx_typed_js__WEBPACK_IMPORTED_MODULE_4__["NgxTypedJsComponent"]],
      styles: ["html[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #585f6b;\n}\n\n#earthContainer[_ngcontent-%COMP%] {\n  height: 35vw;\n}\n\n.earth[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 40vw;\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n  overflow: hidden;\n  border-radius: 50%;\n  box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000;\n}\n\n.earth[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  box-shadow: -20px -20px 50px 2px #000 inset;\n  border-radius: 50%;\n}\n\n.earth[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200%;\n  height: 100%;\n}\n\ndiv.night[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: spin 30s linear alternate infinite;\n          animation: spin 30s linear alternate infinite;\n  background: url('nightGlobe.jpg');\n  \n  background-size: cover;\n  opacity: 90%;\n}\n\ndiv.day[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: spin 30s linear alternate infinite;\n          animation: spin 30s linear alternate infinite;\n  background: url(https://earthnow.usgs.gov/observer/images/earth2.jpg);\n  \n  background-size: cover;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: translateX(-40vw);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: translateX(-40vw);\n  }\n}\n\ndiv.greeting[_ngcontent-%COMP%] {\n  position: relative;\n  left: calc(50% - 10vw);\n  right: calc(50%);\n  margin: auto;\n  margin-top: -20vw;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: 2vw;\n  height: 50%;\n  color: white;\n}\n\ndiv.iconContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 40%;\n  margin: auto;\n  margin-top: 10vh;\n}\n\n#arrowContainer[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n}\n\ndiv.personalIcon[_ngcontent-%COMP%] {\n  margin: auto;\n  padding: 15px;\n}\n\ndiv.downArrow[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.personalIconLink[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ncmF5L3BlcnNvbmFsU2l0ZS9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7QUNBSjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FES0U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsMElBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNGSjs7QURJRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0VBQ0EscUVBQUE7RUFDQSwwSUFBQTtFQUNBLHNCQUFBO0FDREo7O0FES0U7RUFDRTtJQUNFLDRCQUFBO0VDRko7QUFDRjs7QURERTtFQUNFO0lBQ0UsNEJBQUE7RUNGSjtBQUNGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKSjs7QURRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7QUNMSjs7QURRRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODVmNmI7XG59XG5cbiNlYXJ0aENvbnRhaW5lciB7XG4gIGhlaWdodDogMzV2dztcbn1cblxuLmVhcnRoIHtcbiAgICB3aWR0aDogNDB2dztcbiAgICBoZWlnaHQ6IDQwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMnZoO1xuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4ICMwMDAgaW5zZXQsIDAgMCAyMHB4IDJweCAjMDAwO1xuICB9XG4gIFxuXG4gIC5lYXJ0aDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJveC1zaGFkb3c6IC0yMHB4IC0yMHB4IDUwcHggMnB4ICMwMDAgaW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC5lYXJ0aCA+IGRpdiB7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxuICB9XG4gIFxuICBcbiAgZGl2Lm5pZ2h0IHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDMwcyBsaW5lYXIgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL25pZ2h0R2xvYmUuanBnJyk7XG4gICAgLypvcmdpbmFsIGltYWdlIGF0IGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jNC9FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZy82NDBweC1FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogOTAlO1xuICB9XG4gIGRpdi5kYXkge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMzBzIGxpbmVhciBhbHRlcm5hdGUgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZWFydGhub3cudXNncy5nb3Yvb2JzZXJ2ZXIvaW1hZ2VzL2VhcnRoMi5qcGcpO1xuICAgIC8qb3JnaW5hbCBpbWFnZSBhdCBodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2MvYzQvRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcvNjQwcHgtRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxuICBcbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwdncpO1xuICAgIH1cbiAgfVxuXG5cbiAgZGl2LmdyZWV0aW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHZ3KTtcbiAgICByaWdodDogY2FsYyg1MCUpO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAtMjB2dztcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiAydnc7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgZGl2Lmljb25Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICB9XG5cbiAgI2Fycm93Q29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gIH1cblxuICBkaXYucGVyc29uYWxJY29uIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIGRpdi5kb3duQXJyb3cge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5wZXJzb25hbEljb25MaW5rIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH0iLCJodG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4NWY2Yjtcbn1cblxuI2VhcnRoQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzNXZ3O1xufVxuXG4uZWFydGgge1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiA0MHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4ICMwMDAgaW5zZXQsIDAgMCAyMHB4IDJweCAjMDAwO1xufVxuXG4uZWFydGg6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm94LXNoYWRvdzogLTIwcHggLTIwcHggNTBweCAycHggIzAwMCBpbnNldDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZWFydGggPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5uaWdodCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDMwcyBsaW5lYXIgYWx0ZXJuYXRlIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvbmlnaHRHbG9iZS5qcGdcIik7XG4gIC8qb3JnaW5hbCBpbWFnZSBhdCBodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2MvYzQvRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcvNjQwcHgtRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogOTAlO1xufVxuXG5kaXYuZGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbmltYXRpb246IHNwaW4gMzBzIGxpbmVhciBhbHRlcm5hdGUgaW5maW5pdGU7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2VhcnRobm93LnVzZ3MuZ292L29ic2VydmVyL2ltYWdlcy9lYXJ0aDIuanBnKTtcbiAgLypvcmdpbmFsIGltYWdlIGF0IGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jNC9FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZy82NDBweC1FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZyAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHZ3KTtcbiAgfVxufVxuZGl2LmdyZWV0aW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEwdncpO1xuICByaWdodDogY2FsYyg1MCUpO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IC0yMHZ3O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBoZWlnaHQ6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5kaXYuaWNvbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuI2Fycm93Q29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG5kaXYucGVyc29uYWxJY29uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5kaXYuZG93bkFycm93IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGVyc29uYWxJY29uTGluayB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('arrowDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('topOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          marginTop: '0',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bottomOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          marginTop: '4vh',
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>bottomOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('arrowDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('topOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            marginTop: '0',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bottomOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            marginTop: '4vh',
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>bottomOfPath', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out'))])]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/bengray/personalSite/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map