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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");





var routes = [
    {
        path: '',
        component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"]
    },
    {
        path: 'user/:id',
        component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'recruitment-task';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2 class=\"title\">Szczegóły użytkownika:</h2>\n    <div class=\"user-details\" *ngIf=\"userDetails\">\n        <div class=\"headline\">\n            <img src=\"{{userDetails.image}}\" alt=\"{{userDetails.firstName}}\" class=\"image\">\n            <p>{{userDetails.nameTitle}} {{userDetails.firstName}} {{userDetails.lastName}}</p>\n        </div>\n        <div class=\"details\">\n            <p>Gender: {{userDetails.gender}}</p>\n            <p>Phone: {{userDetails.phone}}</p>\n            <p>Cell: {{userDetails.cell}}</p>\n            <p>Email: {{userDetails.email}}</p>\n            <h3>Location:</h3>\n            <p>Street: {{userDetails.location.street}}</p>\n            <p>City: {{userDetails.location.city}}</p>\n            <p>State: {{userDetails.location.state}}</p>\n            <p>Postcode: {{userDetails.location.postcode}}</p>\n            <p>Timezone: {{userDetails.location.timezone}}</p>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title {\n  text-align: center; }\n\n:host .user-details {\n  margin: 20px auto;\n  padding: 20px 0;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 400px;\n  min-width: 400px;\n  box-shadow: 0px 0px 10px 0px #888888; }\n\n:host .user-details .headline {\n    padding-bottom: 20px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 1px solid #D2D2D2; }\n\n:host .user-details .headline .image {\n      margin: 10px 20px;\n      border-style: solid;\n      border-width: 4px;\n      border-color: #02ADFF;\n      border-radius: 50%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 100px;\n      height: 100px; }\n\n:host .user-details .details {\n    padding-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3JlY3J1aXRtZW50LXRhc2svc3JjL2FwcC9jb21wb25lbnRzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5uYS9Qcm9qZWN0cy96YWRhbmlhIHJla3J1dGFjeWpuZS9DT00tUEFOIC9yZWNydWl0bWVudC10YXNrL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvcmVjcnVpdG1lbnQtdGFzay9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQU1RLGlCQUFpQjtFQUNqQixlQUFlO0VDTGYsbUJETXFCO0VDTHJCLGlCREswQjtFQ0oxQixxQkNBZ0I7RURDaEIsZ0JERzhDO0VBQzlDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBR2hCLG9DQUFtRCxFQUFBOztBQWpCM0Q7SUFvQlksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0VyQlksRUFBQTs7QUZKeEI7TUE0QmdCLGlCQUFpQjtNQzFCekIsbUJEMkI2QjtNQzFCN0IsaUJEMEJrQztNQ3pCbEMscUJDSmM7TURLZCxrQkR3QnNEO01BQzlDLG9CQUFpQjtTQUFqQixpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGFBQWEsRUFBQTs7QUFoQzdCO0lBcUNZLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbjpob3N0IHtcbiAgICAudGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnVzZXItZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlcihzb2xpZCwgMXB4LCAkY29sb3JMaWdodEdyYXksIDApO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMTM2LCAxMzYsIDEzNiwgMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgxMzYsIDEzNiwgMTM2LCAxKTtcblxuICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yTGlnaHRHcmF5O1xuXG4gICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlcihzb2xpZCwgNHB4LCAkY29sb3JQcmltYXJ5LCA1MCUpO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gYm9yZGVyKCRzdHlsZSwgJHdpZHRoLCAkY29sb3IsICRyYWRpdXMpIHtcbiAgICBib3JkZXI6IHtcbiAgICAgICAgc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgcmFkaXVzOiAkcmFkaXVzO1xuICAgIH1cbn1cbiIsIi8vY29sb3JzXG5cbiRjb2xvclByaW1hcnk6ICMwMkFERkY7XG4kY29sb3JTZWNvbmRhcnk6ICMxNDgwQjM7XG4kY29sb3JCYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJGNvbG9yVGV4dFByaW1hcnk6ICMwMDAwMDA7XG4kY29sb3JMaWdodEdyYXk6ICNEMkQyRDI7Il19 */"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-details.service */ "./src/app/components/user-details/user-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(userDetailsService, route) {
        this.userDetailsService = userDetailsService;
        this.route = route;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUserDetails();
        this.userId = this.route.snapshot.params['id'];
        console.log(this.userId);
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.userDetailsService.getUserDetails(1)
            .subscribe(function (userDetails) {
            _this.userDetails = userDetails;
            console.log(_this.userDetails);
        });
    };
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.scss */ "./src/app/components/user-details/user-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-details/user-details.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(httpClient) {
        this.httpClient = httpClient;
    }
    UserDetailsService.prototype.getUserDetails = function (userId) {
        return this.httpClient.get('https://dummyapi.io/api/user/' + userId);
    };
    UserDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserDetailsService);
    return UserDetailsService;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <h2>Lista użytkowników:</h2>\n    <div class=\"user-list\" *ngFor=\"let user of userList.data\">\n        <div class=\"col\">\n            <img src=\"{{user.image}}\" alt=\"{{user.name}}\" class=\"image\">\n        </div>\n        <div class=\"col\">\n            <p class=\"name\">{{user.nameTitle}} {{user.firstName}} {{user.lastName}}</p>\n        </div>\n        <div class=\"col\">\n            <button class=\"see-more\" [routerLink]=\"'user/' + user.id\">See details</button>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .user-list {\n  margin: 10px 0;\n  width: 600px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #D2D2D2;\n  border-radius: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(210, 210, 210, 0.2); }\n  :host .user-list .col {\n    flex: 1; }\n  :host .user-list .col:first-child, :host .user-list .col:last-child {\n      display: flex;\n      justify-content: center; }\n  :host .user-list .image {\n    margin: 10px 20px;\n    border-style: solid;\n    border-width: 4px;\n    border-color: #02ADFF;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100px;\n    height: 100px; }\n  :host .user-list .name {\n    font-size: 16px; }\n  :host .user-list .see-more {\n    padding: 8px 16px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #02ADFF;\n    border-radius: 6px;\n    background-color: #02ADFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    cursor: pointer;\n    transition: all 250ms ease; }\n  :host .user-list .see-more:hover {\n      background-color: rgba(2, 173, 255, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3JlY3J1aXRtZW50LXRhc2svc3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYW5uYS9Qcm9qZWN0cy96YWRhbmlhIHJla3J1dGFjeWpuZS9DT00tUEFOIC9yZWNydWl0bWVudC10YXNrL3NyYy9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvcmVjcnVpdG1lbnQtdGFzay9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVRLGNBQWM7RUFDZCxZQUFZO0VDRFosbUJERXFCO0VDRHJCLGlCREMwQjtFQ0ExQixxQkNBZ0I7RURDaEIsZ0JERDhDO0VBQzlDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDBDRUpnQixFQUFBO0VGSnhCO0lBV1ksT0FBTyxFQUFBO0VBWG5CO01BYWdCLGFBQWE7TUFDYix1QkFBdUIsRUFBQTtFQWR2QztJQW1CWSxpQkFBaUI7SUNqQnJCLG1CRGtCeUI7SUNqQnpCLGlCRGlCOEI7SUNoQjlCLHFCQ0pjO0lES2Qsa0JEZWtEO0lBQzlDLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQXZCekI7SUEyQlksZUFBZSxFQUFBO0VBM0IzQjtJQStCWSxpQkFBaUI7SUM3QnJCLG1CRDhCeUI7SUM3QnpCLGlCRDZCOEI7SUM1QjlCLHFCQ0pjO0lES2Qsa0JEMkJrRDtJQUM5Qyx5QkVqQ1U7SUZrQ1YsY0VoQ2E7SUZpQ2IsZUFBZTtJQUNmLGVBQWU7SUFJZiwwQkFBMEIsRUFBQTtFQXhDdEM7TUFzQ2dCLHdDRXRDTSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbjpob3N0IHtcbiAgICAudXNlci1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCAxcHgsICRjb2xvckxpZ2h0R3JheSwgMCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JMaWdodEdyYXksIDAuMik7XG5cbiAgICAgICAgLmNvbCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCwgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYm9yZGVyKHNvbGlkLCA0cHgsICRjb2xvclByaW1hcnksIDUwJSk7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VlLW1vcmUge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3JkZXIoc29saWQsIDFweCwgJGNvbG9yUHJpbWFyeSwgNnB4KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclByaW1hcnk7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yQmFja2dyb3VuZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yUHJpbWFyeSwgMC44KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICB9XG59IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gYm9yZGVyKCRzdHlsZSwgJHdpZHRoLCAkY29sb3IsICRyYWRpdXMpIHtcbiAgICBib3JkZXI6IHtcbiAgICAgICAgc3R5bGU6ICRzdHlsZTtcbiAgICAgICAgd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgcmFkaXVzOiAkcmFkaXVzO1xuICAgIH1cbn1cbiIsIi8vY29sb3JzXG5cbiRjb2xvclByaW1hcnk6ICMwMkFERkY7XG4kY29sb3JTZWNvbmRhcnk6ICMxNDgwQjM7XG4kY29sb3JCYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJGNvbG9yVGV4dFByaW1hcnk6ICMwMDAwMDA7XG4kY29sb3JMaWdodEdyYXk6ICNEMkQyRDI7Il19 */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list.service */ "./src/app/components/user-list/user-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(userListService, router) {
        this.userListService = userListService;
        this.router = router;
        this.userList = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userListService.getUsers()
            .subscribe(function (users) {
            _this.userList = users;
            console.log(_this.userList);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/components/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-list/user-list.service.ts ***!
  \***********************************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserListService = /** @class */ (function () {
    function UserListService(httpClient) {
        this.httpClient = httpClient;
    }
    UserListService.prototype.getUsers = function () {
        return this.httpClient.get('https://dummyapi.io/api/user');
    };
    UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserListService);
    return UserListService;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"container\">\n        <div class=\"content\">\n            <h1>Baza użytkowników <i class=\"fas fa-user-friends icon\"></i></h1>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 70px;\n  background-color: #D2D2D2; }\n  nav .content {\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hL1Byb2plY3RzL3phZGFuaWEgcmVrcnV0YWN5am5lL0NPTS1QQU4gL3JlY3J1aXRtZW50LXRhc2svc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FubmEvUHJvamVjdHMvemFkYW5pYSByZWtydXRhY3lqbmUvQ09NLVBBTiAvcmVjcnVpdG1lbnQtdGFzay9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWix5QkNFb0IsRUFBQTtFREp4QjtJQUtRLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb3JlXCI7XG5cbm5hdiB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckxpZ2h0R3JheTtcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufSIsIi8vY29sb3JzXG5cbiRjb2xvclByaW1hcnk6ICMwMkFERkY7XG4kY29sb3JTZWNvbmRhcnk6ICMxNDgwQjM7XG4kY29sb3JCYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJGNvbG9yVGV4dFByaW1hcnk6ICMwMDAwMDA7XG4kY29sb3JMaWdodEdyYXk6ICNEMkQyRDI7Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anna/Projects/zadania rekrutacyjne/COM-PAN /recruitment-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map