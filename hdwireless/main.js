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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"menu-padding\">\n  <router-outlet></router-outlet>\n</div>\n<app-bottombar></app-bottombar>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-padding {\n  margin-top: 53px; }\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_containers_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/containers/shared/navbar/navbar.component */ "./src/app/components/containers/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_containers_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/containers/beacon/beacon.component */ "./src/app/components/containers/beacon/beacon.component.ts");
/* harmony import */ var _components_containers_beacon_beacon_sidemenu_beacon_sidemenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component */ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.ts");
/* harmony import */ var _components_containers_beacon_beacon_coord_box_beacon_coord_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/containers/beacon/beacon-coord-box/beacon-coord-box.component */ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.ts");
/* harmony import */ var _components_build_blocks_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/build-blocks/table/table.component */ "./src/app/components/build-blocks/table/table.component.ts");
/* harmony import */ var _components_containers_shared_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/containers/shared/bottombar/bottombar.component */ "./src/app/components/containers/shared/bottombar/bottombar.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_api_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api/beacon/beacon.service */ "./src/app/services/api/beacon/beacon.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core Modules




// Other Modules

// Interceptors

// Components







// Services


// Other Imports

// Enabled Modules
var coreModules = [
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_15__["ROUTES"]),
    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
];
var otherModules = [
    ngx_scrollbar__WEBPACK_IMPORTED_MODULE_4__["ScrollbarModule"]
];
// Enabled Services
var services = [
    _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"],
    _services_api_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_14__["BeaconService"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_containers_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_containers_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_8__["BeaconComponent"],
                _components_containers_beacon_beacon_sidemenu_beacon_sidemenu_component__WEBPACK_IMPORTED_MODULE_9__["BeaconSidemenuComponent"],
                _components_containers_beacon_beacon_coord_box_beacon_coord_box_component__WEBPACK_IMPORTED_MODULE_10__["BeaconCoordBoxComponent"],
                _components_build_blocks_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"],
                _components_containers_shared_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_12__["BottombarComponent"]
            ],
            imports: coreModules.concat(otherModules),
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
                    multi: true,
                }].concat(services),
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _components_containers_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/containers/beacon/beacon.component */ "./src/app/components/containers/beacon/beacon.component.ts");

var ROUTES = [
    {
        path: '**',
        component: _components_containers_beacon_beacon_component__WEBPACK_IMPORTED_MODULE_0__["BeaconComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/build-blocks/table/table.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/build-blocks/table/table.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\n  <table>\n    <tr class=\"headers\">\n      <td *ngFor=\"let column of headers\" ngClass=\"{{column.type === 'number' ? 'short' : ''}}\">{{column.name}}</td>\n    </tr>\n    <tr *ngFor=\"let row of data\" class=\"data\">\n      <td *ngFor=\"let column of headers\" ngClass=\"{{column.type === 'number' ? 'short' : ''}}\">{{row[column.key]}}</td>\n    </tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/build-blocks/table/table.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/build-blocks/table/table.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 4px; }\n\n.headers td {\n  background-color: #d6d0c0;\n  border-bottom: 2px solid #b5b5b5;\n  border-right: 1px solid #a29a84; }\n\n.headers td:last-child {\n  border-right: none; }\n\ntd.short {\n  width: 100px;\n  text-align: center; }\n\n.data td {\n  background-color: #fff;\n  font-size: 0.9em; }\n\ntd {\n  padding: 10px 20px; }\n"

/***/ }),

/***/ "./src/app/components/build-blocks/table/table.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/build-blocks/table/table.component.ts ***!
  \******************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
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

var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "headers", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/build-blocks/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/build-blocks/table/table.component.scss")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/beacon/Coordinate.ts":
/*!************************************************************!*\
  !*** ./src/app/components/containers/beacon/Coordinate.ts ***!
  \************************************************************/
/*! exports provided: Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
var Coordinate = /** @class */ (function () {
    function Coordinate() {
    }
    return Coordinate;
}());



/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-coord-box/CoordBoxSettings.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-coord-box/CoordBoxSettings.ts ***!
  \***********************************************************************************/
/*! exports provided: CoordBoxSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordBoxSettings", function() { return CoordBoxSettings; });
var CoordBoxSettings = /** @class */ (function () {
    function CoordBoxSettings() {
    }
    return CoordBoxSettings;
}());



/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div [ngStyle]=\"{'background-color': settings.color1}\">{{settings.text}}</div>\n  <div [ngStyle]=\"{'background-color': settings.color2}\">{{coordinate}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  color: #fff;\n  width: 220px;\n  text-align: center;\n  margin: 10px 20px 10px 0;\n  display: inline-block;\n  font-weight: 400; }\n\n.box > div:first-child {\n  padding: 15px;\n  font-size: 25px; }\n\n.box > div:last-child {\n  padding: 8px; }\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BeaconCoordBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconCoordBoxComponent", function() { return BeaconCoordBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CoordBoxSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoordBoxSettings */ "./src/app/components/containers/beacon/beacon-coord-box/CoordBoxSettings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeaconCoordBoxComponent = /** @class */ (function () {
    function BeaconCoordBoxComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _CoordBoxSettings__WEBPACK_IMPORTED_MODULE_1__["CoordBoxSettings"])
    ], BeaconCoordBoxComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BeaconCoordBoxComponent.prototype, "coordinate", void 0);
    BeaconCoordBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon-coord-box',
            template: __webpack_require__(/*! ./beacon-coord-box.component.html */ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.html"),
            styles: [__webpack_require__(/*! ./beacon-coord-box.component.scss */ "./src/app/components/containers/beacon/beacon-coord-box/beacon-coord-box.component.scss")]
        })
    ], BeaconCoordBoxComponent);
    return BeaconCoordBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"side_panel\">\n  Test\n</div>\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#side_panel {\n  width: 300px;\n  position: fixed;\n  right: 0;\n  background-color: #fff;\n  height: calc(100% - 78px); }\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BeaconSidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconSidemenuComponent", function() { return BeaconSidemenuComponent; });
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

var BeaconSidemenuComponent = /** @class */ (function () {
    function BeaconSidemenuComponent() {
    }
    BeaconSidemenuComponent.prototype.ngOnInit = function () {
    };
    BeaconSidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon-sidemenu',
            template: __webpack_require__(/*! ./beacon-sidemenu.component.html */ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./beacon-sidemenu.component.scss */ "./src/app/components/containers/beacon/beacon-sidemenu/beacon-sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BeaconSidemenuComponent);
    return BeaconSidemenuComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/beacon/beacon.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"content-wrapper\">\n    <ng-scrollbar>\n      <div class=\"content\">\n        <div class=\"pos-icon\">\n          <img src=\"/assets/icons/globe.png\">\n          <span></span>\n          <div>Position</div>\n        </div>\n        <div class=\"padding-box\">\n          <div class=\"coord-box\">\n            <app-beacon-coord-box\n              [settings]=\"{text: 'Latitude', color1: '#56ab80', color2: '#4d926f'}\"\n              [coordinate]=\"coordinate.latitude\"></app-beacon-coord-box>\n            <app-beacon-coord-box\n              [settings]=\"{text: 'Longitude', color1: '#7aa0d0', color2: '#4d5d91'}\"\n              [coordinate]=\"coordinate.longitude\"></app-beacon-coord-box>\n          </div>\n          <h1>Beacon Framed with Unique Boxes</h1>\n          <app-table [headers]=\"headers\" [data]=\"uniqueTableData\"></app-table>\n          <h1>All Beacon Frames</h1>\n          <app-table [headers]=\"headers\" [data]=\"allTableData\"></app-table>\n        </div>\n      </div>\n    </ng-scrollbar>\n  </div>\n  <app-beacon-sidemenu></app-beacon-sidemenu>\n</div>\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 10px;\n  font-size: 1.1em; }\n\n#container {\n  display: flex; }\n\n#content-wrapper {\n  width: calc(100% - 300px - 2px);\n  height: calc(100% - 78px);\n  position: fixed; }\n\n.content {\n  padding: 25px; }\n\n.padding-box {\n  padding: 0 35px; }\n\n.pos-icon {\n  height: 25px;\n  display: flex;\n  align-items: center; }\n\n.pos-icon img {\n  height: 100%; }\n\n.pos-icon span {\n  height: 100%;\n  width: 1px;\n  margin: 0 10px;\n  background-color: #999; }\n\n.coord-box {\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/components/containers/beacon/beacon.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/containers/beacon/beacon.component.ts ***!
  \******************************************************************/
/*! exports provided: BeaconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconComponent", function() { return BeaconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coordinate */ "./src/app/components/containers/beacon/Coordinate.ts");
/* harmony import */ var _services_api_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/beacon/beacon.service */ "./src/app/services/api/beacon/beacon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeaconComponent = /** @class */ (function () {
    function BeaconComponent(beaconApi) {
        this.beaconApi = beaconApi;
        this.beaconID = '12000000000256d9';
        this.coordinate = new _Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"]();
        this.headers = [
            {
                name: 'Beacon ID',
                key: 'Beacon',
                type: 'string'
            },
            {
                name: 'Box',
                key: 'Box',
                type: 'string'
            },
            {
                name: 'Tx Power',
                key: 'TxPower',
                type: 'number'
            },
            {
                name: 'Count',
                key: 'Count',
                type: 'number'
            },
            {
                name: 'RSSI',
                key: 'Rssi',
                type: 'number'
            }
        ];
        this.uniqueTableData = [];
        this.allTableData = [];
    }
    BeaconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beaconApi.getBeaconPosition(this.beaconID).subscribe(function (data) {
            _this.coordinate.longitude = data.Longitude;
            _this.coordinate.latitude = data.Latitude;
        });
        this.beaconApi.getBeaconFrames(this.beaconID).subscribe(function (data) {
            _this.allTableData = data;
            _this.uniqueTableData = _this.filterUniqueBoxes(data);
        });
    };
    /**
     * Filters out unique boxes (chooses the highest RSSI from each box).
     * @param data {BeaconFrameElement[]} The BeaconFrame data.
     * @returns {BeaconFrameElement[]} A filtered BeaconFrame list.
     */
    BeaconComponent.prototype.filterUniqueBoxes = function (data) {
        var hashArray = [];
        data.forEach(function (item) {
            if (!hashArray[item.Box] || hashArray[item.Box].Rssi < item.Rssi) {
                hashArray[item.Box] = item;
            }
        });
        var filteredArray = [];
        for (var key in hashArray) {
            filteredArray.push(hashArray[key]);
        }
        return filteredArray;
    };
    /**
     * Updates the table.
     * @param data The new data.
     * @param array The array used for the table.
     * @param dataSubject The BehaviorSubject used for the table.
     */
    BeaconComponent.prototype.updateTable = function (data, array, dataSubject) {
        array = data;
        dataSubject.next(array);
    };
    BeaconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beacon',
            template: __webpack_require__(/*! ./beacon.component.html */ "./src/app/components/containers/beacon/beacon.component.html"),
            styles: [__webpack_require__(/*! ./beacon.component.scss */ "./src/app/components/containers/beacon/beacon.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_api_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_2__["BeaconService"]])
    ], BeaconComponent);
    return BeaconComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/shared/bottombar/bottombar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/containers/shared/bottombar/bottombar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bottombar\">Copyright © 2018 Company Inc. All rights reserved.</div>\n"

/***/ }),

/***/ "./src/app/components/containers/shared/bottombar/bottombar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/containers/shared/bottombar/bottombar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bottombar {\n  background-color: #b61261;\n  width: 100%;\n  position: fixed;\n  height: 25px;\n  color: #fff;\n  align-items: center;\n  display: flex;\n  font-size: 11px;\n  font-weight: 500;\n  bottom: 0;\n  padding: 0 15px; }\n"

/***/ }),

/***/ "./src/app/components/containers/shared/bottombar/bottombar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/containers/shared/bottombar/bottombar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BottombarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
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

var BottombarComponent = /** @class */ (function () {
    function BottombarComponent() {
    }
    BottombarComponent.prototype.ngOnInit = function () {
    };
    BottombarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottombar',
            template: __webpack_require__(/*! ./bottombar.component.html */ "./src/app/components/containers/shared/bottombar/bottombar.component.html"),
            styles: [__webpack_require__(/*! ./bottombar.component.scss */ "./src/app/components/containers/shared/bottombar/bottombar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BottombarComponent);
    return BottombarComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/shared/navbar/navbar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/containers/shared/navbar/navbar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-box\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navbarCollapsed = true\">\n      <img src=\"{{menu.logo1}}\" height=\"30\" alt=\"Logo\">\n    </a>\n    <div class=\"navbar-items\" *ngIf=\"navbarCollapsed\">\n      <div class=\"nav-item\" [routerLinkActive]=\"['active']\" *ngFor=\"let item of menu.items\">\n        <a class=\"nav-link\" [routerLink]=\"[item.route]\" (click)=\"navbarCollapsed = true\">{{item.text}}</a>\n      </div>\n    </div>\n    <div class=\"navbar-right\">\n      <a [routerLink]=\"['/']\">\n        <img src=\"{{menu.logo2}}\" height=\"30\" alt=\"Logo2\">\n      </a>\n      <div class=\"nav-item user-button\">\n        <div>{{username ? username : 'Login'}}</div>\n        <div class=\"user-pic\"></div>\n      </div>\n    </div>\n    <div class=\"navbar-toggler-icon\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/containers/shared/navbar/navbar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/containers/shared/navbar/navbar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  background-color: #fbfbfb;\n  border-bottom: 3px solid #b61261;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  height: 50px;\n  display: flex;\n  align-items: center; }\n\n.nav-box {\n  padding: 0 15px;\n  display: flex;\n  align-items: center;\n  width: 100%; }\n\n.navbar-toggler-icon {\n  width: 30px;\n  margin-left: 20px; }\n\n.navbar-toggler-icon div {\n  width: 100%;\n  height: 4px;\n  margin: 5px 0;\n  background-color: #333;\n  border-radius: 10px; }\n\n.navbar-brand {\n  margin-right: 25px; }\n\n.nav-item .nav-link {\n  text-transform: uppercase;\n  padding: 10px 15px; }\n\n.nav-item.active .nav-link {\n  border-bottom: 2px solid #b61261;\n  color: #b61261; }\n\n.navbar-items, .navbar-right {\n  display: flex;\n  line-height: normal; }\n\n.navbar-right {\n  margin-left: auto; }\n\n.user-button {\n  display: flex;\n  margin-left: 50px;\n  align-items: center; }\n\n.user-pic {\n  padding: 15px;\n  border-radius: 100%;\n  background-color: #515151;\n  display: inline-block;\n  margin-left: 15px; }\n\na, a:hover, a:visited, a:active {\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/containers/shared/navbar/navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/containers/shared/navbar/navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.navbarCollapsed = true;
        this.menu = {
            logo1: '/assets/images/logo.png',
            logo2: '/assets/images/logo2.png',
            items: [
                {
                    text: 'Menu Item',
                    route: '/item1'
                },
                {
                    text: 'Menu Item 2',
                    route: '/item2'
                },
                {
                    text: 'Menu Item 3',
                    route: '/item3'
                }
            ]
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cookie = JSON.parse(localStorage.getItem('currentUser'));
        if (!cookie) {
            this.auth.login('assess@hd-wireless.com', 'assess1234').subscribe(function (data) {
                _this.username = data.Id;
            });
        }
        else {
            this.username = cookie.Id;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/containers/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/containers/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/helpers/ErrorHandler.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/ErrorHandler.ts ***!
  \*****************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function handleError(error) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    }
    else {
        // The backend returned an unsuccessful response code.
        console.error("Backend returned code " + error.status + ", " +
            ("body was: " + error.error));
    }
    // return an observable with a user-facing error message
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('Something bad happened; please try again later.');
}


/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.AuthenticateToken) {
            request = request.clone({
                setHeaders: {
                    'X-Authenticate-Token': currentUser.AuthenticateToken
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    'X-Authenticate-Token': 'none'
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/services/api/beacon/beacon.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/api/beacon/beacon.service.ts ***!
  \*******************************************************/
/*! exports provided: BeaconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeaconService", function() { return BeaconService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../settings/api */ "./src/app/settings/api.ts");
/* harmony import */ var _helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/ErrorHandler */ "./src/app/helpers/ErrorHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'X-Api-Version': '3' })
};
var BeaconService = /** @class */ (function () {
    function BeaconService(http) {
        this.http = http;
    }
    BeaconService.prototype.getBeaconPosition = function (beaconID) {
        return this.http.get(_settings_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/beacons/" + beaconID + "/pos", httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__["handleError"]));
    };
    /**
     * Gets all beacon frames for the specified ID within a certain time. Limited by a maximum amount of frames.
     * @param {string} beaconID The beacon ID.
     * @param {number} maxTime Only get frames received within the specified time (Type: seconds, Default: 3600).
     * @param {number} maxFrames Max amount of frames. (Default: 32)
     * @returns {Observable<any>} TODO
     */
    BeaconService.prototype.getBeaconFrames = function (beaconID, maxTime, maxFrames) {
        if (maxTime === void 0) { maxTime = 3600; }
        if (maxFrames === void 0) { maxFrames = 32; }
        var params = {
            params: {
                max_age: maxTime,
                count: maxFrames
            }
        };
        return this.http.get(_settings_api__WEBPACK_IMPORTED_MODULE_3__["API"] + "/beacons/" + beaconID + "/frames", Object.assign(params, httpOptions))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__["handleError"]));
    };
    BeaconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeaconService);
    return BeaconService;
}());



/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../settings/api */ "./src/app/settings/api.ts");
/* harmony import */ var _helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/ErrorHandler */ "./src/app/helpers/ErrorHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post(_settings_api__WEBPACK_IMPORTED_MODULE_3__["API"] + '/login', { Id: username, Password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            console.log(user);
            if (user && user.AuthenticateToken) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_helpers_ErrorHandler__WEBPACK_IMPORTED_MODULE_4__["handleError"]));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/settings/api.ts":
/*!*********************************!*\
  !*** ./src/app/settings/api.ts ***!
  \*********************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = 'https://development.hd-wireless.com:9001';


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

module.exports = __webpack_require__(/*! D:\Projects\Github\hdwireless\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map