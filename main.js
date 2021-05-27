(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dev/Documents/calculation_report/angular-10-basic-authentication-example-master/src/main.ts */"zUnb");


/***/ }),

/***/ "7q1o":
/*!*******************************************!*\
  !*** ./src/app/services/price.service.ts ***!
  \*******************************************/
/*! exports provided: PriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceService", function() { return PriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PriceService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.prices = [];
        this.getAll();
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let prices = yield this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/prices/all`).toPromise();
            return prices['prices'];
        });
    }
}
PriceService.ɵfac = function PriceService_Factory(t) { return new (t || PriceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PriceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PriceService, factory: PriceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PriceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");




class HomeComponent {
    constructor(userService) {
        this.userService = userService;
        this.loading = false;
    }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [[1, "container"], [1, "card", "mt-4"], [1, "card-header"], [1, "card-body"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You're logged in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome Back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'home.component.html' }]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "9zYQ":
/*!**********************************************!*\
  !*** ./src/app/services/material.service.ts ***!
  \**********************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MaterialService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.getAll();
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let materials = yield this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/materials/all`).toPromise();
            return materials['materials'];
        });
    }
}
MaterialService.ɵfac = function MaterialService_Factory(t) { return new (t || MaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MaterialService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MaterialService, factory: MaterialService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    // apiUrl: 'http://34.229.63.119:8080'
    // apiUrl: 'http://localhost:8080',
    // apiUrl: 'http://18.220.63.12:3000'
    // apiUrl: 'http://18.219.248.98',
    apiUrl: 'http://44.192.27.64'
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

/***/ "ByK8":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName
            });
        }
        function getUsers() {
            if (!isLoggedIn())
                return unauthorized();
            return ok(users);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === `Basic ${window.btoa('test:test')}`;
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FakeBackendInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "GD0e":
/*!**********************************************!*\
  !*** ./src/app/newuser/newuser.component.ts ***!
  \**********************************************/
/*! exports provided: NewuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewuserComponent", function() { return NewuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NewuserComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class NewuserComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            username: '',
            firstName: '',
            lastName: '',
            role: '',
            password: ''
        };
        this.error = '';
    }
    ngOnInit() {
    }
    creatNewUser() {
        if (!this.validate()) {
            return;
        }
        this.userService.add(this.user).subscribe((res) => {
            if (res.error) {
                this.error = res.error;
            }
            this.router.navigate(['users']);
        });
    }
    validate() {
        this.error = '';
        if (this.user.username == '' || this.user.firstName == '' || this.user.lastName == '' || this.user.role == '' || this.user.password == '') {
            this.error = 'Please input all user information!';
            return false;
        }
        return true;
    }
}
NewuserComponent.ɵfac = function NewuserComponent_Factory(t) { return new (t || NewuserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewuserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewuserComponent, selectors: [["app-newuser"]], decls: 29, vars: 6, consts: [[1, "container"], [1, "form-group"], ["for", "username"], ["type", "text", "placeholder", "Enter User ID", "id", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstname"], ["type", "text", "placeholder", "Enter First Name", "id", "firstname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastname"], ["type", "text", "placeholder", "Enter Last Name", "id", "lastname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "role"], ["id", "role", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Editor"], ["value", "Admin"], ["for", "pwd"], ["type", "password", "placeholder", "Enter Password", "id", "pwd", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function NewuserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_4_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_select_ngModelChange_16_listener($event) { return ctx.user.role = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewuserComponent_Template_input_ngModelChange_24_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewuserComponent_Template_button_click_26_listener() { return ctx.creatNewUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NewuserComponent_div_28_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3VzZXIvbmV3dXNlci5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewuserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newuser',
                templateUrl: './newuser.component.html',
                styleUrls: ['./newuser.component.less']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "pW6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "VITL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "NFyy":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "vtpD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_nav_0_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roport");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_nav_0_a_6_Template, 2, 0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.role == "Admin");
} }
class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.user.subscribe(x => this.user = x);
    }
    logout() {
        this.authenticationService.logout();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app"]], decls: 2, vars: 1, consts: [["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/", 1, "nav-item", "nav-link"], ["routerLink", "/report", 1, "nav-item", "nav-link"], ["class", "nav-item nav-link", "routerLink", "/users", 4, "ngIf"], [1, "nav-item", "nav-link", 3, "click"], ["routerLink", "/users", 1, "nav-item", "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 9, 1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app', templateUrl: 'app.component.html' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users`);
    }
    add(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/create`, data);
    }
    update(data) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/update`, data);
    }
    delete(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/users/delete/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XgRA":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, BasicAuthInterceptor, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "p3Fh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-auth.interceptor */ "pjXP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return _basic_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["BasicAuthInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.interceptor */ "nSnL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-backend */ "ByK8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_3__["fakeBackendProvider"]; });







/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers */ "XgRA");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report/report.component */ "jw39");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/select-cell-renderer.component */ "xOZy");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _newuser_newuser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./newuser/newuser.component */ "GD0e");





// used to create fake backend
// import { fakeBackendProvider } from './_helpers';












;
;
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["BasicAuthInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([_components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteComponent"]]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"],
        _components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteComponent"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
        _newuser_newuser_component__WEBPACK_IMPORTED_MODULE_13__["NewuserComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    ag_grid_angular__WEBPACK_IMPORTED_MODULE_10__["AgGridModule"].withComponents([_components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteComponent"]]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _report_report_component__WEBPACK_IMPORTED_MODULE_9__["ReportComponent"],
                    _components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteComponent"],
                    _users_users_component__WEBPACK_IMPORTED_MODULE_12__["UsersComponent"],
                    _newuser_newuser_component__WEBPACK_IMPORTED_MODULE_13__["NewuserComponent"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["BasicAuthInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_6__["ErrorInterceptor"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zrks":
/*!********************************************************!*\
  !*** ./src/app/services/material-name-area.service.ts ***!
  \********************************************************/
/*! exports provided: MaterialNameAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialNameAreaService", function() { return MaterialNameAreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MaterialNameAreaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.getAll();
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let materials = yield this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/material_name_ares/all`).toPromise();
            return materials['material_name_areas'];
        });
    }
}
MaterialNameAreaService.ɵfac = function MaterialNameAreaService_Factory(t) { return new (t || MaterialNameAreaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MaterialNameAreaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MaterialNameAreaService, factory: MaterialNameAreaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialNameAreaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jw39":
/*!********************************************!*\
  !*** ./src/app/report/report.component.ts ***!
  \********************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/select-cell-renderer.component */ "xOZy");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_comparison_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/comparison.service */ "peT6");
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/material.service */ "9zYQ");
/* harmony import */ var _services_price_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/price.service */ "7q1o");
/* harmony import */ var _services_material_name_area_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/material-name-area.service */ "Zrks");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");











const _c0 = ["reportTable"];
function ReportComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ag-grid-angular", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cellValueChanged", function ReportComponent_div_0_Template_ag_grid_angular_cellValueChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onCellValueChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowData", ctx_r0.rowData)("columnDefs", ctx_r0.columnDefs)("defaultColDef", ctx_r0.defaultColDef)("components", ctx_r0.components)("frameworkComponents", ctx_r0.frameworkComponents);
} }
const material_names = {
    "Beazer Homes MD": [
        { "material_name_area": "Abstolute Black" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Blanco Arabescato" },
        { "material_name_area": "Blue Pearl GT" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Gray Lagoon" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Peppercorn" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Soapstone Metropolis" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Stellar Gray" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "Volga Blue" },
        { "material_name_area": "White Ornamental (see White G) 3cm Polished" },
        { "material_name_area": "White G 3cm Polished" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "Beazer Homes MD	Snow White" }
    ],
    "Beazer Homes VA": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Arctic White" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Blanca Arabescato" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Calacatta Vicenza" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Carrara Morro" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Delicatus White Ice" },
        { "material_name_area": "Gray Lagoon" },
        { "material_name_area": "Iced White 2cm" },
        { "material_name_area": "Iced White 3cm" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia 3cm Polished" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Soapstone Metropolis" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Volga Blue" },
        { "material_name_area": "White Waves" },
        { "material_name_area": "NEW VENETIAN GOLD 3cm" }
    ],
    "Caruso MD": [
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Arctic White" },
        { "material_name_area": "Ariel" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Blue Pearl GT" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Calacatta Antarctica (Antartica)" },
        { "material_name_area": "Calacatta Classic 3cm" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Carrara Morro" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Desert Bloom" },
        { "material_name_area": "Eternal Bella" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Iced White 2cm" },
        { "material_name_area": "Lagoon" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lusso" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Lyra 3cm Polish" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Pearl Jasmine" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Sapphire Brown" },
        { "material_name_area": "Soapstone Metropolis" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Titanium Polished 3cm" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White *" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Springs" },
        { "material_name_area": "Infinity White Polished 3cm" },
        { "material_name_area": "Swanbridge" },
        { "material_name_area": "Marengo" },
        { "material_name_area": "Ariel" },
        { "material_name_area": "COLONIAL GOLD 3cm" },
        { "material_name_area": "Colonial Gold 3cm Polished" }
    ],
    "Creative Homes": [
        { "material_name_area": "Aspen Calacata Classic" },
        { "material_name_area": "Aspen Catania G043" },
        { "material_name_area": "Aspen Landscape" },
        { "material_name_area": "Aspen Latte" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Cashmere Carrera" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Dallas White" },
        { "material_name_area": "Delicatus White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Tan Brown" },
        { "material_name_area": "Ubatuba" }
    ],
    "Dan Ryan DE": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Ariel" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Orion" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Blanco City" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Calypso" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Eternal Calacatta" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Grey Expo (HD Grey Slate) 3cm Polish" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lusso" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "Ocean Jasper" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Pearl Jasime" },
        { "material_name_area": "Pietra" },
        { "material_name_area": "Pure White (aka Super White) 3cm" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Royal Reef" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Stellar Snow" },
        { "material_name_area": "Tebas Black" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White G 3cm Polished" },
        { "material_name_area": "White Zeus" }
    ],
    "Dan Ryan Metro": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Ariel" },
        { "material_name_area": "Aspen Blanco Maple (maybe sub for Silestone Blanco Maple) 3cm" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Orion" },
        { "material_name_area": "Blanco Orion 3cm Polish" },
        { "material_name_area": "Blanca Primata" },
        { "material_name_area": "Blanco Antico" },
        { "material_name_area": "Blanco City" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Calypso" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Et Bella" },
        { "material_name_area": "Eternal Calacatta" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Home Depot Color Solaris / Solarius 3cm Polish" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lusso" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Miami" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "Ocean Jasper" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Pearl Jasmine" },
        { "material_name_area": "Pietra" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Stellar Snow" },
        { "material_name_area": "Tebas Black" },
        { "material_name_area": "Ubatube" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Zeus" },
        { "material_name_area": "Blanco Orion 3cm Polish" },
        { "material_name_area": "Solaris / Solarius 3cm Polish" },
        { "material_name_area": "Eternal Calacatta Gold (HD Calacatta Glitz) 3cm Polish" }
    ],
    "DELUCA HOMES": [
        { "material_name_area": "Artic White" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bayshore Sands" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Black Pearl" },
        { "material_name_area": "Blue Pearl GT" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Calacatta Vicenza" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Desert Bloom" },
        { "material_name_area": "Emerald Pearl" },
        { "material_name_area": "Fossil Grey" },
        { "material_name_area": "Fossil Taupe" },
        { "material_name_area": "Iced Gray" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Mont Clair White" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Sahara Beige" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sapphire Blue" },
        { "material_name_area": "Snow Fall" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Swan Gray" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "Carrara Morro (Aspen Carrara Morro 3cm)" }
    ],
    "DMR - PDR": [
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "MSI Artic White" },
        { "material_name_area": "MSI Carrara Marmi" },
        { "material_name_area": "MSI Carrara Mist" },
        { "material_name_area": "MSI Iced White" },
        { "material_name_area": "MSI Pebble Rock" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Ubatuba" }
    ],
    "Dr Horton DE": [
        { "material_name_area": "Artic White" },
        { "material_name_area": "Black Pearl" },
        { "material_name_area": "Carrara Caldia" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Morro" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Dallas White" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Frost White" },
        { "material_name_area": "Giallo Ornamental" },
        { "material_name_area": "Gray Lagoon" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Pebble Rock" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White (Snow Meadow) 3cm" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "White G 3cm Polished" }
    ],
    "Gemcraft": [
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galazy" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Cashmer Carrara" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Dallas White" },
        { "material_name_area": "Delicatus White" },
        { "material_name_area": "Iced Gray" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Latte (Aspen)" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sparklling White" },
        { "material_name_area": "Sparkling White (Snow Meadow) 3cm" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Steel Grey 3cm Dual - Leather / Polish" },
        { "material_name_area": "Tan Brown" },
        { "material_name_area": "Crema Caramel 3cm Polished" }
    ],
    "Grand Villa Homes": [
        { "material_name_area": "	2cm Iced White" },
        { "material_name_area": "	African Rainbow" },
        { "material_name_area": "	Arctic White" },
        { "material_name_area": "	Ariel" },
        { "material_name_area": "	Azul Platino" },
        { "material_name_area": "	Bianca Primata" },
        { "material_name_area": "	Bianco Antico" },
        { "material_name_area": "	Black Galaxy" },
        { "material_name_area": "	Blanca Arabescato" },
        { "material_name_area": "	Blanco Maple" },
        { "material_name_area": "	Calacatta Alto" },
        { "material_name_area": "	Calacatta Class" },
        { "material_name_area": "	Carrara Marmi" },
        { "material_name_area": "	Carrara Mist" },
        { "material_name_area": "	Carrara Morro" },
        { "material_name_area": "	Colonial White" },
        { "material_name_area": "	Crema Caramel" },
        { "material_name_area": "	Fantasy Brown" },
        { "material_name_area": "	Fossil Gray" },
        { "material_name_area": "	Grey Expo" },
        { "material_name_area": "	Grey Lagoon" },
        { "material_name_area": "	Luna Pearl" },
        { "material_name_area": "	Lyra" },
        { "material_name_area": "	New Venetian Gold" },
        { "material_name_area": "	Pearl Jasmine" },
        { "material_name_area": "	Peppercorn White" },
        { "material_name_area": "	Royal Jade" },
        { "material_name_area": "	Salinas White" },
        { "material_name_area": "	Sapphire Brown" },
        { "material_name_area": "	Sparkling White" },
        { "material_name_area": "	Steel Gray" },
        { "material_name_area": "	Ubatuba" },
        { "material_name_area": "	Viscon White *" },
        { "material_name_area": "	Warehouse custom" },
        { "material_name_area": "	White Ice" },
        { "material_name_area": "	White Springs" },
        { "material_name_area": "	White Waves" }
    ],
    "HD": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Airy Concrete - Group C" },
        { "material_name_area": "Airy Concrete - Group D" },
        { "material_name_area": "Alaska White" },
        { "material_name_area": "Alba" },
        { "material_name_area": "Alpina White" },
        { "material_name_area": "Alpine Mist - Group C" },
        { "material_name_area": "Alpine Mist - Group D" },
        { "material_name_area": "Alpine Valley" },
        { "material_name_area": "Amarello Ornamental" },
        { "material_name_area": "Andino White" },
        { "material_name_area": "Arabescus Carrara Marble" },
        { "material_name_area": "Arga" },
        { "material_name_area": "Aria" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Ashbourne Matte" },
        { "material_name_area": "Aspen White" },
        { "material_name_area": "Atlantic Salt (HD Atlantic Salt) 3cm Polish A" },
        { "material_name_area": "Atlantic Salt" },
        { "material_name_area": "Aura - Dekton" },
        { "material_name_area": "Aura - Viatera" },
        { "material_name_area": "Azul Celeste" },
        { "material_name_area": "Azul Celeste Brushed" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bamboo" },
        { "material_name_area": "Bellwater" },
        { "material_name_area": "Bergen" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Calacatta" },
        { "material_name_area": "Bianco Romano" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Black Pearl" },
        { "material_name_area": "Black Pearl Brushed" },
        { "material_name_area": "Black Soapstone" },
        { "material_name_area": "Blanco City" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Blaze" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Brookvale" },
        { "material_name_area": "Calacaata Nuvo" },
        { "material_name_area": "Calacatta Antarctica (Antartica)" },
        { "material_name_area": "Calacatta Arno" },
        { "material_name_area": "Calacatta Botanica" },
        { "material_name_area": "Calacatta Classic 3cm" },
        { "material_name_area": "Calacatta Gold" },
        { "material_name_area": "Calacatta Laza" },
        { "material_name_area": "Calacatta Venice" },
        { "material_name_area": "Calacatta Vicenza Matte" },
        { "material_name_area": "Calico White" },
        { "material_name_area": "Calypso" },
        { "material_name_area": "Cameo Shore" },
        { "material_name_area": "Capri Limestone" },
        { "material_name_area": "Capricorn" },
        { "material_name_area": "Caravelas Gold" },
        { "material_name_area": "Carrara Iris" },
        { "material_name_area": "NEW Carrara Marmi (HD) 3cm" },
        { "material_name_area": "Carrara White Marble" },
        { "material_name_area": "Cemento" },
        { "material_name_area": "Charcoal Soapstone Suede" },
        { "material_name_area": "Chatsworth" },
        { "material_name_area": "Chesapeake Blue (Whisper White)" },
        { "material_name_area": "Clarino" },
        { "material_name_area": "Cloudy Mist" },
        { "material_name_area": "Coastal Grey" },
        { "material_name_area": "Coffee Brown" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Coral City" },
        { "material_name_area": "Cortina" },
        { "material_name_area": "Crema Atlantico" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Crystal Grey" },
        { "material_name_area": "Danae" },
        { "material_name_area": "Domoos" },
        { "material_name_area": "Dovestone" },
        { "material_name_area": "Empira White" },
        { "material_name_area": "Entzo Calacatta" },
        { "material_name_area": "Eternal Marfil" },
        { "material_name_area": "Eternal Noir Suede" },
        { "material_name_area": "Everest" },
        { "material_name_area": "Fairy White" },
        { "material_name_area": "Fantasy Brown Marble" },
        { "material_name_area": "Fantasy Macaubas Quartzite" },
        { "material_name_area": "Fiord" },
        { "material_name_area": "Florida Wave Quartzite" },
        { "material_name_area": "Fossil" },
        { "material_name_area": "Giallo Vitoria" },
        { "material_name_area": "Glacier" },
        { "material_name_area": "Gray Atlantico" },
        { "material_name_area": "Gray Nuevo" },
        { "material_name_area": "Gray Wave" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Halo" },
        { "material_name_area": "Hawkridge" },
        { "material_name_area": "Intermezzo" },
        { "material_name_area": "Jet Black" },
        { "material_name_area": "Karis" },
        { "material_name_area": "Kelya Marble" },
        { "material_name_area": "Keon Concrete" },
        { "material_name_area": "Keranium" },
        { "material_name_area": "Kimbler Mist" },
        { "material_name_area": "Kira" },
        { "material_name_area": "Lento" },
        { "material_name_area": "Lusso 3cm Polish - Level 4" },
        { "material_name_area": "Lusso 3cm Polish - Level 5" },
        { "material_name_area": "Mara Blanca" },
        { "material_name_area": "Marengo" },
        { "material_name_area": "Mirage White 3cm Polish" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "Moorland Fog" },
        { "material_name_area": "Mountain Mist" },
        { "material_name_area": "Muse" },
        { "material_name_area": "Mystic Spring" },
        { "material_name_area": "Nadenbrook" },
        { "material_name_area": "Natura" },
        { "material_name_area": "Nero Mist Honed" },
        { "material_name_area": "Nevasca Mist" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "New Venetial Gold" },
        { "material_name_area": "New Venetian Gold 3cm Polish" },
        { "material_name_area": "Nimbus" },
        { "material_name_area": "Noble Grey - Group C" },
        { "material_name_area": "Noble Grey - Group D" },
        { "material_name_area": "Nocturne" },
        { "material_name_area": "Ocean Storm" },
        { "material_name_area": "Olimpo" },
        { "material_name_area": "Opera" },
        { "material_name_area": "Orix" },
        { "material_name_area": "Pearl (Avalon White)" },
        { "material_name_area": "Pearl Jasmine" },
        { "material_name_area": "Pearla White" },
        { "material_name_area": "Pietra" },
        { "material_name_area": "Polaris" },
        { "material_name_area": "Quartet" },
        { "material_name_area": "Ridgegate" },
        { "material_name_area": "Risegate" },
        { "material_name_area": "River White" },
        { "material_name_area": "Rococo" },
        { "material_name_area": "Royal Teak" },
        { "material_name_area": "Rugged Concrete - Group C" },
        { "material_name_area": "Rugged Concrete - Group D" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Santa Cecilia" },
        { "material_name_area": "Sapphire Blue" },
        { "material_name_area": "Savannah Gold" },
        { "material_name_area": "Scorpio" },
        { "material_name_area": "Seacourt (HD) 3cm Polish" },
        { "material_name_area": "Seacourt" },
        { "material_name_area": "SF Real" },
        { "material_name_area": "Sherwood" },
        { "material_name_area": "Sienna Ridge" },
        { "material_name_area": "Silken Pearl" },
        { "material_name_area": "Silver Cloud" },
        { "material_name_area": "Silver Falls" },
        { "material_name_area": "Silver Mist" },
        { "material_name_area": "Silver Sands" },
        { "material_name_area": "Sirius" },
        { "material_name_area": "Smoked Pearl" },
        { "material_name_area": "Snowfall" },
        { "material_name_area": "Snowy Ibiza" },
        { "material_name_area": "Sogne" },
        { "material_name_area": "Soke" },
        { "material_name_area": "Solaris" },
        { "material_name_area": "Solaris / Solarius 3cm Polish" },
        { "material_name_area": "Soprano" },
        { "material_name_area": "Statuario" },
        { "material_name_area": "Statuario Nuvo" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Stellar Gray" },
        { "material_name_area": "Stellar Night" },
        { "material_name_area": "Stellar Snow" },
        { "material_name_area": "Stellar White" },
        { "material_name_area": "Summerbrook" },
        { "material_name_area": "Sunset Canyon" },
        { "material_name_area": "Super White" },
        { "material_name_area": "Taga" },
        { "material_name_area": "Taj Mahal Quartzite" },
        { "material_name_area": "Taj Royale" },
        { "material_name_area": "Talus" },
        { "material_name_area": "Tebas Black" },
        { "material_name_area": "Tenor" },
        { "material_name_area": "Trafalgar" },
        { "material_name_area": "Travella" },
        { "material_name_area": "Trilium" },
        { "material_name_area": "Tundra" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Urban Frost" },
        { "material_name_area": "Valle Nevado - Granite" },
        { "material_name_area": "Valle Nevado - Prefab Granite" },
        { "material_name_area": "Warwick" },
        { "material_name_area": "White Antico" },
        { "material_name_area": "White Arabesque" },
        { "material_name_area": "White Attica - Group C" },
        { "material_name_area": "White Attica - Group D" },
        { "material_name_area": "White Attica 3cm Polish A" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Ornamental" },
        { "material_name_area": "White Sparkle" },
        { "material_name_area": "White Spring 3cm Polish" },
        { "material_name_area": "White Springs" },
        { "material_name_area": "White Storm" },
        { "material_name_area": "White Zeus Extreme" },
        { "material_name_area": "Whitemdale" },
        { "material_name_area": "Yukon White" },
        { "material_name_area": "Zermatt Quartzite" },
        { "material_name_area": "Mirage White 3cm Polish" },
        { "material_name_area": "Solaris / Solarius 3cm Polish" },
        { "material_name_area": "Jet Black 3cm Polish A" },
        { "material_name_area": "Ridgegate (HD) 3cm Polish" },
        { "material_name_area": "Perla White (HD Perla White) 3cm" },
        { "material_name_area": "Color Silver Creek 3cm Polish" },
        { "material_name_area": "Color Pearl" },
        { "material_name_area": "Sparkling White (Snow Meadow) 3cm" },
        { "material_name_area": "Quartz Clarino (HD Chorino) 3cm" }
    ],
    "Howmar Homes": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Bianca Primata" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Blue Pearl GT" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Fantasy Brown" },
        { "material_name_area": "Giallo Fiorito" },
        { "material_name_area": "Giallo Ornamental" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Sapphire Brown" },
        { "material_name_area": "St. Cecilia Classic" },
        { "material_name_area": "St. Cecilia Light" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Springs" }
    ],
    "JP ORLEANS": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Babylon Gray" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Cashmere Carrara" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Concerto" },
        { "material_name_area": "Coronado" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Desert Bloom" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Latte (Aspen)" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sapphire Blue" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Steel Grey Leathered" },
        { "material_name_area": "Stellar Gray" },
        { "material_name_area": "Tan Brown" },
        { "material_name_area": "Toasted Almond" },
        { "material_name_area": "Tropical Brown" },
        { "material_name_area": "Verde Butterfly" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "Volga Blue" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "Carrara Mist 3cm" }
    ],
    "KETTLER FORLINES": [
        { "material_name_area": "Alpina White" },
        { "material_name_area": "Altair 15" },
        { "material_name_area": "Black Premium" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Coral Clay" },
        { "material_name_area": "Customer selected at Warehouse- Level 4" },
        { "material_name_area": "Customer selected at Warehouse- Level 5" },
        { "material_name_area": "Giallo Veneziano" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Iced White 2cm" },
        { "material_name_area": "Iron Bark" },
        { "material_name_area": "Lagoon" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Marengo" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sapphire Blue" },
        { "material_name_area": "Sienna Ridge" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Stellar Snow" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "Volga Blue" },
        { "material_name_area": "White Storm" },
        { "material_name_area": "White Zeus" },
        { "material_name_area": "Coral White 3cm" },
        { "material_name_area": "Lagoon" }
    ],
    "KHOV HOMES": [
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Babylon Gray" },
        { "material_name_area": "Baltic Brown" },
        { "material_name_area": "Calacatta Vincenza" },
        { "material_name_area": "Calcatta Vincenza Matte" },
        { "material_name_area": "Calcatta Vincenzo Matte" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Cedar Grove- Stacked - Package 3A - Q Snow White" },
        { "material_name_area": "Colonial White Brushed" },
        { "material_name_area": "Colonial White 3cm Dual - Leather / Polish" },
        { "material_name_area": "Crema Bordeaux" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Delicatus White Ice" },
        { "material_name_area": "Fantasy Brown Brushed" },
        { "material_name_area": "Fantasy Brown Marble" },
        { "material_name_area": "Fossil Brown" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Fossil Gray Matte" },
        { "material_name_area": "G Colonial White Brushed" },
        { "material_name_area": "G Fantasy Brown Brushed" },
        { "material_name_area": "G Luna Pearl" },
        { "material_name_area": "G Luna Pearl" },
        { "material_name_area": "G Santa Cecilia" },
        { "material_name_area": "G Silver Cloud Brushed" },
        { "material_name_area": "G Steel Grey (Brushed)" },
        { "material_name_area": "Giallo Ornamental" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Manhattan Gray" },
        { "material_name_area": "Neptuno Bordeaux" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Q Calcatta Vincenza Matte" },
        { "material_name_area": "Q Carrara Mist" },
        { "material_name_area": "Q Carrara Morro" },
        { "material_name_area": "Q Fossil Gray Matte" },
        { "material_name_area": "Q Fossil Grey" },
        { "material_name_area": "Rosewood" },
        { "material_name_area": "Sahara Beige" },
        { "material_name_area": "Santa Cecilia" },
        { "material_name_area": "Santa Cecilia (LC)" },
        { "material_name_area": "Snow White" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Steel Grey 3cm Dual - Leather / Polish" },
        { "material_name_area": "Steel Grey Brushed" },
        { "material_name_area": "Tan Brown" },
        { "material_name_area": "Tempest Black" },
        { "material_name_area": "Towns @ Glen Oaks - Elements 2 - Steel Grey Brushed" },
        { "material_name_area": "Towns @ Glen Oaks - Loft - Steel Grey Brushed" },
        { "material_name_area": "Tropical Brown" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "White Springs" },
        { "material_name_area": "White Ice 3cm Polished" }
    ],
    "KOCH HOMES": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Cashmere Carrara 3cm" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Emeral Pearl" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "GIBSON'S GRANT - Crema Caramel" },
        { "material_name_area": "GIBSON'S GRANT - Giallo Ornamental" },
        { "material_name_area": "GIBSON'S GRANT - Iced Gray" },
        { "material_name_area": "GIBSON'S GRANT - Iced White" },
        { "material_name_area": "GIBSON'S GRANT - Luna Pearl" },
        { "material_name_area": "GIBSON'S GRANT - New Calendonia" },
        { "material_name_area": "GIBSON'S GRANT - New Venetian Gold" },
        { "material_name_area": "GIBSON'S GRANT - Salinas White" },
        { "material_name_area": "GIBSON'S GRANT - Sapphire Brown/Blue" },
        { "material_name_area": "GIBSON'S GRANT - St Cecilia Classic" },
        { "material_name_area": "GIBSON'S GRANT - Stellar Snow 13" },
        { "material_name_area": "GIBSON'S GRANT - Steel Grey" },
        { "material_name_area": "GIBSON'S GRANT - Tan Brown" },
        { "material_name_area": "GIBSON'S GRANT - Ubatuba" },
        { "material_name_area": "GIBSON'S GRANT - Verde Peacock" },
        { "material_name_area": "Iced Gray" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Mont Blanc" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "Ornamental White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Sahara Beige" },
        { "material_name_area": "Solaris" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "St. Cecilia Light" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "Peppercorn White" }
    ],
    "Lennar": [
        { "material_name_area": "Brown Fantasy" },
        { "material_name_area": "Butterfly Beige" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Dallas White - Level 1" },
        { "material_name_area": "Dallas White - Level 2" },
        { "material_name_area": "Fantasy Brown 3cm Polished" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "St. Cecilia Gold" },
        { "material_name_area": "White G 3cm Polished" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "NEW VENETIAN GOLD 3cm" }
    ],
    "New Day Construction": [
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "New Venetial Gold" },
        { "material_name_area": "Santa Cecila Light" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "White Ornamental" },
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Giallo Napolean" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "Bayshore Sands" },
        { "material_name_area": "Iced Gray" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Colonial Gold" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "Alpine" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Fossil Grey" },
        { "material_name_area": "Fossil Grey Honed" },
        { "material_name_area": "Fossil Taupe" },
        { "material_name_area": "Pebble Rock" },
        { "material_name_area": "Snow White" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Stellar Grey" },
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Alaska White" },
        { "material_name_area": "Snowfall" },
        { "material_name_area": "White Spring" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Calacatta Vicenza" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Mont Clair White" },
        { "material_name_area": "Romano White" },
        { "material_name_area": "Sahara Beige" }
    ],
    "NVR- Ryan Homes": [
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Frost White" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Shell White" }
    ],
    "Pegasus": [
        { "material_name_area": "Luna Pearl" }
    ],
    "POWERS HOMES": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blue Pearl GT" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Carrara Morro" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Dallas White" },
        { "material_name_area": "Desert Bloom" },
        { "material_name_area": "Frost White" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Moon White" },
        { "material_name_area": "New Caledonia 3cm Polished" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Tan Brown" },
        { "material_name_area": "Toasted Almond" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" }
    ],
    "Procopio Homes": [
        { "material_name_area": "ALPINA WHITE" },
        { "material_name_area": "ALTAIR 15" },
        { "material_name_area": "ASPEN CALACATTA CL" },
        { "material_name_area": "BLACK PREMIUM" },
        { "material_name_area": "BLANCO MAPLE" },
        { "material_name_area": "BLUE PEARL" },
        { "material_name_area": "COLONIAL WHITE" },
        { "material_name_area": "CORAL CLAY" },
        { "material_name_area": "CUSTOMER SELECTED AT WAREHOUSE - Level 4" },
        { "material_name_area": "CUSTOMER SELECTED AT WAREHOUSE - Level 5" },
        { "material_name_area": "GIALLO VENEZIANO" },
        { "material_name_area": "GREY EXPO" },
        { "material_name_area": "IRON BARK" },
        { "material_name_area": "LAGOON" },
        { "material_name_area": "LUNA PEARL" },
        { "material_name_area": "LYRA" },
        { "material_name_area": "MARENGO" },
        { "material_name_area": "MOON WHITE" },
        { "material_name_area": "NEW CALEDONIA" },
        { "material_name_area": "NEW VENETIAN GOLD" },
        { "material_name_area": "ROYAL JADE" },
        { "material_name_area": "SANTA CECILIA LIGHT" },
        { "material_name_area": "SAPPHIRE BLUE" },
        { "material_name_area": "SIENNA RIDGE" },
        { "material_name_area": "STEEL GREY" },
        { "material_name_area": "STELLAR SNOW" },
        { "material_name_area": "UBATUBA" },
        { "material_name_area": "VISCON WHITE" },
        { "material_name_area": "VOLGA BLUE" },
        { "material_name_area": "WHITE STORM" },
        { "material_name_area": "WHITE ZEUS" }
    ],
    "Pulte MADC": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Arctic White Qz" },
        { "material_name_area": "Babylon Gray Concrete Qz" },
        { "material_name_area": "Bayshore Sand Qz" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Vicenza Qz" },
        { "material_name_area": "Carrara Marmi Qz" },
        { "material_name_area": "Colonial White 3cm Polished" },
        { "material_name_area": "Crema Caramel 3cm Polished" },
        { "material_name_area": "Dallas White" },
        { "material_name_area": "Desert Bloom Qz" },
        { "material_name_area": "Fossil Grey Qz" },
        { "material_name_area": "Frost White Qz" },
        { "material_name_area": "Giallo Ornamental" },
        { "material_name_area": "Grey Lagoon Qz" },
        { "material_name_area": "Iced White Qz" },
        { "material_name_area": "Landscape - A 3cm" },
        { "material_name_area": "Luna Pearl 3cm Polished" },
        { "material_name_area": "Meridian Grey Qz" },
        { "material_name_area": "Montclair White 3cm" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Pearl Jasmine" },
        { "material_name_area": "Salinas White Qz" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Snow White 3 cm" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Stellar Gray Qz" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "White (Luna) Pearl" },
        { "material_name_area": "Montclair White" },
        { "material_name_area": "Andromeda White 3cm" },
        { "material_name_area": "Toasted Almond 3cm" }
    ],
    "Pulte NEC": [
        { "material_name_area": "Andromeda White" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Black Premium" },
        { "material_name_area": "Blanco Arabescato" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Cashmere Carrara" },
        { "material_name_area": "Coarse Carrara 3cm" },
        { "material_name_area": "Colonial Gold" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Concerto (HD Concerto) 3cm" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Desert Bloom" },
        { "material_name_area": "Fairy White" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Giallo Napolean" },
        { "material_name_area": "Gray Lagoon" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Moonlight White (Moon)" },
        { "material_name_area": "Pebble Rock" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Pure White (aka Super White) 2cm" },
        { "material_name_area": "Pure White (aka Super White) 3cm" },
        { "material_name_area": "Salinas White" },
        { "material_name_area": "Sapphire Blue" },
        { "material_name_area": "Snow White" },
        { "material_name_area": "Soapstone Metropolis" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Toasted Almond" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "White Pearl (Luna)" },
        { "material_name_area": "Montclair White" },
        { "material_name_area": "SANTA CECILIA LIGHT (LC) 3cm" },
        { "material_name_area": "Alpine" },
        { "material_name_area": "Alpine" },
        { "material_name_area": "Pearl Gray" },
        { "material_name_area": "Montclair White 3cm" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Stellar Gray (HD) 3cm" },
        { "material_name_area": "Peacock Green 3cm Polished" },
        { "material_name_area": "ABSOLUTE BLACK" },
        { "material_name_area": "Baltic Brown 3cm Polished" }
    ],
    "Rachuba Group": [
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Alpina White" },
        { "material_name_area": "Altair 15" },
        { "material_name_area": "Aspen Calacatta Class." },
        { "material_name_area": "Bainbrook Brown" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blanco Maple" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Coral Clay" },
        { "material_name_area": "Giallo Napolean" },
        { "material_name_area": "Grey Expo" },
        { "material_name_area": "Ironbark" },
        { "material_name_area": "Lagoon" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Lyra" },
        { "material_name_area": "Marengo" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Santa Cecilia Light" },
        { "material_name_area": "Sapphire Brown" },
        { "material_name_area": "Sienna Ridge" },
        { "material_name_area": "Steel Gray" },
        { "material_name_area": "Stellar Snow" },
        { "material_name_area": "Sylvestre Gray" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Springs" },
        { "material_name_area": "White Storm" }
    ],
    "Stanley Martin": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "Alaska White" },
        { "material_name_area": "Alpine" },
        { "material_name_area": "Artic White" },
        { "material_name_area": "Ash Gray" },
        { "material_name_area": "Babylon Gray" },
        { "material_name_area": "Babylon Gray Concrete" },
        { "material_name_area": "Bayshore Sand" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco San Francisco" },
        { "material_name_area": "Black Pearl Leathered" },
        { "material_name_area": "Calacatta Vicenza" },
        { "material_name_area": "Carrara Caldia" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Concerto" },
        { "material_name_area": "Delicatus White" },
        { "material_name_area": "Fantasy Brown Marble" },
        { "material_name_area": "Frost White" },
        { "material_name_area": "Giallo Ornamental" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Meridian Gray" },
        { "material_name_area": "New Caledonia" },
        { "material_name_area": "Pebble Rock" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Rosa Beta" },
        { "material_name_area": "Shadow Gray" },
        { "material_name_area": "Snow White" },
        { "material_name_area": "St Cecilia Light" },
        { "material_name_area": "Steel Grey" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "White Springs" }
    ],
    "Triumph": [
        { "material_name_area": "Absolute Black" },
        { "material_name_area": "African Rainbow" },
        { "material_name_area": "Arctic White" },
        { "material_name_area": "Azul Platino" },
        { "material_name_area": "Bianco Antico" },
        { "material_name_area": "Bianco Primata" },
        { "material_name_area": "Black Galaxy" },
        { "material_name_area": "Blanca Arabescato" },
        { "material_name_area": "Blue Pearl" },
        { "material_name_area": "Calacatta Alto" },
        { "material_name_area": "Calacatta Classique" },
        { "material_name_area": "Calacatta Vicenza" },
        { "material_name_area": "Carrara Grigio" },
        { "material_name_area": "Carrara Marmi" },
        { "material_name_area": "Carrara Mist" },
        { "material_name_area": "Colonial White" },
        { "material_name_area": "Concerto" },
        { "material_name_area": "Crema Caramel" },
        { "material_name_area": "Emerald Pearl" },
        { "material_name_area": "Fantasy Brown" },
        { "material_name_area": "Fossil Gray" },
        { "material_name_area": "Gray Lagoon" },
        { "material_name_area": "Iced White" },
        { "material_name_area": "Luna Pearl" },
        { "material_name_area": "Mont Clair White" },
        { "material_name_area": "New Venetian Gold" },
        { "material_name_area": "Pebble Rock" },
        { "material_name_area": "Peppercorn White" },
        { "material_name_area": "Royal Jade" },
        { "material_name_area": "Sahara Beige" },
        { "material_name_area": "Snow White" },
        { "material_name_area": "Soapstone Metropolis" },
        { "material_name_area": "Sparkling Black" },
        { "material_name_area": "Sparkling White" },
        { "material_name_area": "Toasted Almond" },
        { "material_name_area": "Ubatuba" },
        { "material_name_area": "Viscon White" },
        { "material_name_area": "White Ice" },
        { "material_name_area": "White Ornamental" }
    ]
};
let materials = [];
let prices = [];
let material_name_areas = [];
class ReportComponent {
    constructor(comparisonService, materialService, priceService, materiaNameAreaService) {
        this.comparisonService = comparisonService;
        this.materialService = materialService;
        this.priceService = priceService;
        this.materiaNameAreaService = materiaNameAreaService;
        this.job_status = [
            { 'job_status': 'Complete' },
            { 'job_status': 'Canceled' },
            { 'job_status': 'Incompleted and Re-scheduled' },
            { 'job_status': 'Incomplete (CSR Action Required)' },
            { 'job_status': 'On Hold Missing Information' },
            { 'job_status': 'Customer Confirmed' },
            { 'job_status': 'Estimate' },
            { 'job_status': 'Service' }
        ];
        this.customer_types = [
            { 'customer_type': 'HD' },
            { 'customer_type': 'Builder' },
            { 'customer_type': 'COMMERCIAL GC' },
            { 'customer_type': 'COMMERCIAL Millwork' },
            { 'customer_type': 'Contractor HOUSE' },
            { 'customer_type': 'Contractor MD Showroom' },
            { 'customer_type': 'Kitchen & Bath House' },
            { 'customer_type': 'Kitchen & Bath MD Showroom' },
            { 'customer_type': 'Residential' },
        ];
        this.material_options = [
            { 'material_name': 1 },
            { 'material_name': 2 },
            { 'material_name': 3 },
            { 'material_name': 4 },
            { 'material_name': 5 },
            { 'material_name': 6 },
        ];
        this.area_options = [
            { 'area_option': 'Bar Top/ Wet Bar' },
            { 'area_option': 'BILLABLE Rework Top 1 - sink cutout' },
            { 'area_option': "Butler's" },
            { 'area_option': 'Coffee Bar' },
            { 'area_option': 'Copy/ Print' },
            { 'area_option': 'Drop Zone' },
            { 'area_option': 'FHBS' },
            { 'area_option': 'HovHub' },
            { 'area_option': 'Kitchen' },
            { 'area_option': 'Kitchen Perimeter' },
            { 'area_option': 'Kitchen (Perimeter & Island) - Gourmet' },
            { 'area_option': 'Kitchen w/o Cooktop Island' },
            { 'area_option': 'Kitchen Island' },
            { 'area_option': 'Laundry' },
            { 'area_option': 'Leasing Office' },
            { 'area_option': 'Morning Room' },
            { 'area_option': 'OFFICE' },
            { 'area_option': 'Pantry/ Coffee' },
            { 'area_option': 'Phase 1' },
            { 'area_option': 'Phase 10' },
            { 'area_option': 'Phase 11' },
            { 'area_option': 'Phase 12' },
            { 'area_option': 'Phase 13' },
            { 'area_option': 'Phase 14' },
            { 'area_option': 'Phase 15' },
            { 'area_option': 'Phase 16' },
            { 'area_option': 'Phase 17' },
            { 'area_option': 'Phase 18' },
            { 'area_option': 'Phase 19' },
            { 'area_option': 'Phase 19A' },
            { 'area_option': 'Phase 19B' },
            { 'area_option': 'Phase 2' },
            { 'area_option': 'Phase 20' },
            { 'area_option': 'Phase 3' },
            { 'area_option': 'Phase 4' },
            { 'area_option': 'Phase 5' },
            { 'area_option': 'Phase 6' },
            { 'area_option': 'Phase 7' },
            { 'area_option': 'Phase 8' },
            { 'area_option': 'Phase 9' },
            { 'area_option': 'Pocket Office' },
            { 'area_option': 'PPC' },
            { 'area_option': 'Reception /Concierge Desk' },
            { 'area_option': 'Remake' },
            { 'area_option': 'REMAKE PERIMETER' },
            { 'area_option': 'Replacement' },
            { 'area_option': 'Replacement Kitchen' },
            { 'area_option': 'Rework' },
            { 'area_option': 'Shower seat' },
            { 'area_option': 'Teller Top' },
            { 'area_option': 'Valet' },
            { 'area_option': 'Vanity' },
            { 'area_option': 'Window seat' },
            { 'area_option': 'Wine & Bar' },
        ];
        this.installer_options = [
            { 'installer_option': 'Jhonny Rivera' },
            { 'installer_option': 'Michael Davis' },
            { 'installer_option': 'Mauricio Valle' },
            { 'installer_option': 'Jack Master Lhama' },
            { 'installer_option': 'Paco Delcid' },
            { 'installer_option': 'Jorge Pichinte' },
            { 'installer_option': 'Uram Dagdandorj' },
            { 'installer_option': 'Kelvin Alexander' },
            { 'installer_option': 'Rodolfo Zelaya' },
            { 'installer_option': 'TJ' },
            { 'installer_option': 'OG' },
            { 'installer_option': 'Orgil Batjargal' },
            { 'installer_option': 'Alex Delcid' },
            { 'installer_option': 'Kemal Ausar' },
            { 'installer_option': 'Ben Jones' },
            { 'installer_option': 'Sodo Goocho' },
        ];
        this.columnDefs = [
            { headerName: 'id', field: 'id', pinned: 'left', hide: false, headerClass: 'color-header-1', sortable: true },
            { headerName: 'Date', field: 'date', pinned: 'left', headerClass: 'color-header-1', cellEditor: 'datePicker' },
            { headerName: 'Job Number', field: 'job_number', pinned: 'left', headerClass: 'color-header-1', cellEditorSelector: function (params) {
                    return {
                        component: 'numericCellEditor'
                    };
                }
            },
            { headerName: 'Job Status', field: 'job_status', pinned: 'left', headerClass: 'color-header-1',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'job_status',
                    'rowData': this.job_status,
                    'columnDefs': [{ headerName: 'Job Status', field: 'job_status' }]
                }
            },
            { headerName: 'Customer Type', field: 'customer_type', headerClass: 'color-header-1',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'customer_type',
                    'rowData': this.customer_types,
                    'columnDefs': [{ headerName: 'Customer Type', field: 'customer_type' }]
                }
            },
            { headerName: 'Customer(Builder Name)', field: 'customer_builder_name', headerClass: 'color-header-1',
                cellEditorSelector: function (param) {
                    if (param.data.customer_type != 'Residential') {
                        return {
                            component: 'selectCellRenderer'
                        };
                    }
                    else {
                        return {
                            component: ''
                        };
                    }
                },
                cellEditorParams: function (param) {
                    let rowData;
                    if (param.data.customer_type == 'HD') {
                        rowData = [
                            { 'customer_builder_name': 'HD' }
                        ];
                    }
                    if (param.data.customer_type == 'Builder') {
                        rowData = [
                            { 'customer_builder_name': 'Beazer Homes MD' },
                            { 'customer_builder_name': 'Beazer Homes VA' },
                            { 'customer_builder_name': 'Caruso MD' },
                            { 'customer_builder_name': 'Creative Homes' },
                            { 'customer_builder_name': 'Dan Ryan DE' },
                            { 'customer_builder_name': 'Dan Ryan Metro' },
                            { 'customer_builder_name': 'DELUCA HOMES' },
                            { 'customer_builder_name': 'DMR - PDR' },
                            { 'customer_builder_name': 'Dr Horton DE' },
                            { 'customer_builder_name': 'Floormax' },
                            { 'customer_builder_name': 'Gemcraft' },
                            { 'customer_builder_name': 'Grand Villa Homes' },
                            { 'customer_builder_name': 'Howmar Homes' },
                            { 'customer_builder_name': 'JP ORLEANS' },
                            { 'customer_builder_name': 'KHOV HOMES' },
                            { 'customer_builder_name': 'Kettler Forlines' },
                            { 'customer_builder_name': 'Koch Homes' },
                            { 'customer_builder_name': 'Lennar' },
                            { 'customer_builder_name': 'New Day Construction' },
                            { 'customer_builder_name': 'NVR- Ryan Homes' },
                            { 'customer_builder_name': 'Pegasus' },
                            { 'customer_builder_name': 'POWERS HOMES' },
                            { 'customer_builder_name': 'Procopio Homes' },
                            { 'customer_builder_name': 'Pulte MADC' },
                            { 'customer_builder_name': 'Pulte NEC' },
                            { 'customer_builder_name': 'Rachuba Group' },
                            { 'customer_builder_name': 'Stanley Martin' },
                            { 'customer_builder_name': 'Triumph' }
                        ];
                    }
                    if (param.data.customer_type == 'COMMERCIAL GC') {
                        rowData = [
                            { 'customer_builder_name': 'ADI Construction Inc.- AIA' },
                            { 'customer_builder_name': 'AMERICAN REMODELING CORPORATION' },
                            { 'customer_builder_name': 'Aslin Beer Company' },
                            { 'customer_builder_name': 'Balfour Beatty Construction-AIA' },
                            { 'customer_builder_name': 'Brown Contracting Co. Inc.' },
                            { 'customer_builder_name': 'Camson Construction Inc' },
                            { 'customer_builder_name': 'CDCI Inc' },
                            { 'customer_builder_name': 'CJW Contractors, Inc.' },
                            { 'customer_builder_name': 'Clune Construction Co.-AIA' },
                            { 'customer_builder_name': 'Constantine Commercial Construction' },
                            { 'customer_builder_name': 'Costello Construction-AIA' },
                            { 'customer_builder_name': 'Cutlass Contracting, LLC' },
                            { 'customer_builder_name': 'Doyle Construction Company-AIA' },
                            { 'customer_builder_name': 'DPR Construction-AIA' },
                            { 'customer_builder_name': 'Gilbane Building Company-AIA' },
                            { 'customer_builder_name': 'Grunley Construction Co. Inc.-AIA' },
                            { 'customer_builder_name': 'HBW Construction' },
                            { 'customer_builder_name': 'HITT Contracting, Inc.-AIA' },
                            { 'customer_builder_name': 'Hubert Construction-AIA' },
                            { 'customer_builder_name': 'James G. Davis Construction-AIA' },
                            { 'customer_builder_name': 'K3 Construction Group' },
                            { 'customer_builder_name': 'Kinsley Construction Inc.' },
                            { 'customer_builder_name': 'Legacy Builders & Construction' },
                            { 'customer_builder_name': 'Lend Lease (US) Construction Inc.-AIA' },
                            { 'customer_builder_name': 'M2 Construction LLC-AIA' },
                            { 'customer_builder_name': 'Manhattan Construction Company-AIA' },
                            { 'customer_builder_name': 'May Construction Group-AIA' },
                            { 'customer_builder_name': 'McCULLOUGH CONSTRUCTION, LLC' },
                            { 'customer_builder_name': 'Oakland Construction' },
                            { 'customer_builder_name': 'Pegasus' },
                            { 'customer_builder_name': 'Plan-Coudon, LLC-AIA' },
                            { 'customer_builder_name': 'Sordoni Construction Co.-AIA' },
                            { 'customer_builder_name': 'The Korth Companies, Inc-AIA' },
                            { 'customer_builder_name': 'Trinity Group Construction-AIA' },
                            { 'customer_builder_name': 'Walsh Construction Company II, LLC-AIA' },
                            { 'customer_builder_name': 'WHITING-TURNER CONTRACTING, CO.-AIA' },
                            { 'customer_builder_name': 'Wilkie Sanderson' },
                            { 'customer_builder_name': 'Wohlsen Construction' },
                            { 'customer_builder_name': 'Wohlsen Construction:Essilor Optical' },
                            { 'customer_builder_name': 'Wohlsen Construction:Solera Reserve' },
                            { 'customer_builder_name': 'WCS CONSTRUCTION-AIA' },
                        ];
                    }
                    if (param.data.customer_type == 'COMMERCIAL Millwork') {
                        rowData = [
                            { 'customer_builder_name': '777 Millwork & Cabinet LLC-AIA' },
                            { 'customer_builder_name': 'Blue Mountain Woodworks, Inc' },
                            { 'customer_builder_name': "Clark's Lumber & Millwork" },
                            { 'customer_builder_name': 'Gaithersburg Cabinetry & Millwork Co Inc' },
                            { 'customer_builder_name': 'Hayford Builders' },
                            { 'customer_builder_name': 'IBS Millwork Corp.' },
                            { 'customer_builder_name': 'ISEC, Inc-AIA' },
                            { 'customer_builder_name': 'Mortensen Woodwork-AIA' },
                            { 'customer_builder_name': 'New Era Custom Design & Cabinet' },
                            { 'customer_builder_name': 'Potomac Architectural Millwork Corp.' },
                            { 'customer_builder_name': 'Washington Woodworking CO' }
                        ];
                    }
                    if (param.data.customer_type == 'Contractor HOUSE') {
                        rowData = [
                            { 'customer_builder_name': 'LAND-RON Inc.' },
                            { 'customer_builder_name': 'Kalmia Construction Company, Inc' },
                            { 'customer_builder_name': 'JRK Property Holdings - Inigo Crossing' },
                            { 'customer_builder_name': 'Josh Yoltay' },
                            { 'customer_builder_name': 'Trinity Group Construction' },
                            { 'customer_builder_name': 'Artelye: Beltsville' },
                            { 'customer_builder_name': 'Crimco' },
                            { 'customer_builder_name': 'WDL Carpentry - COD' },
                            { 'customer_builder_name': 'JRK Property Holdings - Belmont Station' },
                            { 'customer_builder_name': 'Brown Contracting Co. Inc.' }
                        ];
                    }
                    if (param.data.customer_type == 'Contractor MD Showroom') {
                        rowData = [
                            { 'customer_builder_name': 'Edgewood Builders, Inc.' },
                            { 'customer_builder_name': 'Marsoni Home Restoration L.L.C' },
                            { 'customer_builder_name': 'Rev, Inc.' },
                            { 'customer_builder_name': 'cre8 Cabinetry Designs' },
                            { 'customer_builder_name': 'General Repair Services, Inc. - Deposit Required' },
                            { 'customer_builder_name': 'Renewal Homes - Gene Gamble' },
                            { 'customer_builder_name': 'Scott The Contractor' },
                            { 'customer_builder_name': 'Skafte Development Group LLC' },
                            { 'customer_builder_name': 'dwt Interiors' },
                            { 'customer_builder_name': 'D.A. McNeely Contracting' },
                            { 'customer_builder_name': 'Mark Amos Contracting' },
                            { 'customer_builder_name': "Dusan's Home Improvement LLC" },
                            { 'customer_builder_name': 'KC Contractors, LLC' },
                            { 'customer_builder_name': 'Rinker Renovations' },
                            { 'customer_builder_name': 'Lamy Enterprises' },
                            { 'customer_builder_name': 'R O Hutchinson LLC' },
                            { 'customer_builder_name': 'Tropea Restoration, Inc' },
                            { 'customer_builder_name': 'CRP Contracting, LLC' },
                            { 'customer_builder_name': 'Allen Sexton - Deposit Required' }
                        ];
                    }
                    if (param.data.customer_type == 'Kitchen & Bath HOUSE') {
                        rowData = [
                            { 'customer_builder_name': 'About Kitchens and Baths' }
                        ];
                    }
                    if (param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        rowData = [
                            { 'customer_builder_name': 'Phil Lazas Contracting LLC' }
                        ];
                    }
                    if (param.data.customer_type == 'Contractor MD Showroom') {
                        rowData = [
                            { 'customer_builder_name': 'AJ Home Improvement' }
                        ];
                    }
                    if (param.data.customer_type == 'Contractor HOUSE') {
                        rowData = [
                            { 'customer_builder_name': 'New Day Contracting Services' }
                        ];
                    }
                    return {
                        'propertyRendered': 'customer_builder_name',
                        'rowData': rowData,
                        'columnDefs': [{ headerName: 'Customer(Builder Name)', field: 'customer_builder_name' }]
                    };
                }
            },
            { headerName: 'Customer Job Area', field: 'customer_job_area', headerClass: 'color-header-1',
                cellEditorSelector: function (param) {
                    if (param.data.customer_type == 'Builder' ||
                        param.data.customer_builder_name == 'Beazer Homes MD' ||
                        param.data.customer_builder_name == 'Beazer Homes VA' ||
                        param.data.customer_builder_name == 'Caruso MD' ||
                        param.data.customer_builder_name == 'Creative Homes' ||
                        param.data.customer_builder_name == 'Dan Ryan Metro' ||
                        param.data.customer_builder_name == 'Dr Horton DE' ||
                        param.data.customer_builder_name == 'Gemcraft' ||
                        param.data.customer_builder_name == 'HD' ||
                        param.data.customer_builder_name == 'Howmar Homes' ||
                        param.data.customer_builder_name == 'JP ORLEANS' ||
                        param.data.customer_builder_name == 'Kettler Forlines' ||
                        param.data.customer_builder_name == 'KHOV HOMES' ||
                        param.data.customer_builder_name == 'Koch Homes' ||
                        param.data.customer_builder_name == 'Lennar' ||
                        param.data.customer_builder_name == 'NVR- Ryan Homes' ||
                        param.data.customer_builder_name == 'Pegasus' ||
                        param.data.customer_builder_name == 'POWERS HOMES' ||
                        param.data.customer_builder_name == 'Pulte NEC' ||
                        param.data.customer_builder_name == 'Stanley Martin' ||
                        param.data.customer_builder_name == 'AJ Home Improvement' ||
                        param.data.customer_builder_name == 'DELUCA HOMES' ||
                        param.data.customer_builder_name == 'DMR - PDR') {
                        return {
                            component: 'selectCellRenderer'
                        };
                    }
                    else {
                        return {
                            component: ''
                        };
                    }
                },
                cellEditorParams: function (param) {
                    let rowData;
                    if (param.data.customer_builder_name == 'Beazer Homes MD') {
                        rowData = [
                            { 'customer_job_area': 'Potomac Shores Villas' },
                            { 'customer_job_area': 'Riverwalk 24 & 20/22 TH (RW)' },
                            { 'customer_job_area': 'Parkside TH (PST)' },
                            { 'customer_job_area': 'Main Office' },
                            { 'customer_job_area': 'Riverwalk Condos' },
                            { 'customer_job_area': 'River Hill Estates' },
                            { 'customer_job_area': 'Tuscarora Creek' },
                            { 'customer_job_area': 'River Hill Estates (RHS)' },
                            { 'customer_job_area': 'The Ridge (TR)' },
                            { 'customer_job_area': 'Ballard Green Condos (BGC)' },
                            { 'customer_job_area': 'Parkside Condos 2/2 (PSC)' },
                        ];
                    }
                    if (param.data.customer_builder_name == 'Beazer Homes VA') {
                        rowData = [
                            { 'customer_job_area': 'Potomac Shores Villas (PTSV)' },
                            { 'customer_job_area': 'Potomac Shores TH (PTST)' },
                            { 'customer_job_area': 'Greens at Willowsford (GW)' },
                            { 'customer_job_area': 'Hunter at Haymarket' },
                            { 'customer_job_area': 'Potomac Shores' },
                            { 'customer_job_area': 'Grove North at Willowsford - 15A (GNW)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Caruso MD') {
                        rowData = [
                            { 'customer_job_area': 'Amblebrook (AB)' },
                            { 'customer_job_area': 'Archers Glen (AG)' },
                            { 'customer_job_area': 'Balmoral' },
                            { 'customer_job_area': 'Collingbrook Estates (CE)' },
                            { 'customer_job_area': 'Custom Homes on Your Lot North (CYLN)' },
                            { 'customer_job_area': 'Custom Homes on Your Lot South (CYLS)' },
                            { 'customer_job_area': 'Duvall Woods (DW)' },
                            { 'customer_job_area': 'Hunters Mill (HM)' },
                            { 'customer_job_area': 'Limekiln Farm (LF)' },
                            { 'customer_job_area': 'North Calvert Woods' },
                            { 'customer_job_area': 'Oakmont Estates' },
                            { 'customer_job_area': 'Seneca Creek (SC)' },
                            { 'customer_job_area': 'Shelleys Fields' },
                            { 'customer_job_area': 'Signature Club (SC)' },
                            { 'customer_job_area': 'Southern Hills (SH)' },
                            { 'customer_job_area': 'Windsor Manor (WM)' },
                            { 'customer_job_area': 'Woodburn Estates (WE)' },
                            { 'customer_job_area': 'Main Office MO' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Creative Homes') {
                        rowData = [
                            { 'customer_job_area': 'Erickson Residence' },
                            { 'customer_job_area': 'Academy Square' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Dan Ryan Metro') {
                        rowData = [
                            { 'customer_job_area': 'Hawthorne' },
                            { 'customer_job_area': 'Longley Green (4245 - LG)' },
                            { 'customer_job_area': 'Marshall Groves Estates (4227-MGE)' },
                            { 'customer_job_area': 'Odenton Station TH (4232-OST)' },
                            { 'customer_job_area': 'Parkside TH (4212 - PT)' },
                            { 'customer_job_area': 'Spring Bank (4230 - SB)' },
                            { 'customer_job_area': 'Timber Ridge (4254 - TR)' },
                            { 'customer_job_area': 'Tuscarora Creek SF (4250 - TCS)' },
                            { 'customer_job_area': 'Tuscarora Creek TH (4249 - TCT)' },
                            { 'customer_job_area': 'Villages of Urbana (4244 - VOU)' },
                            { 'customer_job_area': 'Vista Gardens West' },
                            { 'customer_job_area': 'Westridge' },
                            { 'customer_job_area': 'Glenn Dale SF (4240 - GDS)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Dr Horton DE') {
                        rowData = [
                            { 'customer_job_area': 'Beach Club North SF' },
                            { 'customer_job_area': 'Beach Club North TH' },
                            { 'customer_job_area': 'Bergmont Woods (BW)' },
                            { 'customer_job_area': 'Bowers Landing (BL)' },
                            { 'customer_job_area': 'Country Grove (CG)' },
                            { 'customer_job_area': 'Forty Nine Pines (49)' },
                            { 'customer_job_area': 'DE Division HQ' },
                            { 'customer_job_area': 'Ocean Acres' },
                            { 'customer_job_area': 'Point Landing (PL)' },
                            { 'customer_job_area': 'Seacrest Pines' },
                            { 'customer_job_area': 'The Vines at Sandhill' },
                            { 'customer_job_area': 'West Shores at New Milford (WS)' },
                            { 'customer_job_area': 'Willowwood (WW)' },
                            { 'customer_job_area': 'Windstone' },
                            { 'customer_job_area': 'Woodfield Preserve (WP)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Gemcraft') {
                        rowData = [
                            { 'customer_job_area': 'Briarcliff' },
                            { 'customer_job_area': 'Brimington Singles' },
                            { 'customer_job_area': 'Brook Pointe (BP)' },
                            { 'customer_job_area': 'Crosby Court' },
                            { 'customer_job_area': 'Cumberland Crossing (CC)' },
                            { 'customer_job_area': 'Garrison Falls' },
                            { 'customer_job_area': 'Grays Run Overlook (GR)' },
                            { 'customer_job_area': 'Harford Countty Offsites (GHI)' },
                            { 'customer_job_area': 'Long Boat Estates' },
                            { 'customer_job_area': 'Magnolia Landing' },
                            { 'customer_job_area': 'Main Office' },
                            { 'customer_job_area': 'Rolling Hills' },
                            { 'customer_job_area': 'South Stream' },
                            { 'customer_job_area': 'Tiller Estates' },
                            { 'customer_job_area': 'Walnut Hills' },
                            { 'customer_job_area': 'Winslett' },
                            { 'customer_job_area': 'Cecil County Offsites (CCO)' },
                            { 'customer_job_area': 'Sussex Place (SP)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'HD') {
                        rowData = [
                            { 'customer_job_area': '2562' },
                            { 'customer_job_area': '2558' },
                            { 'customer_job_area': '2509' },
                            { 'customer_job_area': '2503' },
                            { 'customer_job_area': '8550' },
                            { 'customer_job_area': '2501' },
                            { 'customer_job_area': '2571' },
                            { 'customer_job_area': '2579' },
                            { 'customer_job_area': '2589' },
                            { 'customer_job_area': '2582' },
                            { 'customer_job_area': '2551' },
                            { 'customer_job_area': '6945' },
                            { 'customer_job_area': '2505' },
                            { 'customer_job_area': '2575' },
                            { 'customer_job_area': '2566' },
                            { 'customer_job_area': '2751' },
                            { 'customer_job_area': '2759' },
                            { 'customer_job_area': '2557' },
                            { 'customer_job_area': '2550' },
                            { 'customer_job_area': '2507' },
                            { 'customer_job_area': '2584' },
                            { 'customer_job_area': '8548' },
                            { 'customer_job_area': 'Robert Adams' },
                            { 'customer_job_area': '2509 Bethesda' },
                            { 'customer_job_area': '8550 Upper Marlboro' },
                            { 'customer_job_area': '2566 Ellicott City' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Howmar Homes') {
                        rowData = [
                            { 'customer_job_area': 'L1507 Lowell Court' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'JP ORLEANS') {
                        rowData = [
                            { 'customer_job_area': 'Spring Oak' },
                        ];
                    }
                    if (param.data.customer_builder_name == 'Kettler Forlines') {
                        rowData = [
                            { 'customer_job_area': 'Kettler Forlines Homes (KFH)' },
                        ];
                    }
                    if (param.data.customer_builder_name == 'KHOV HOMES') {
                        rowData = [
                            { 'customer_job_area': 'Hilltop at Cedar Grove' },
                            { 'customer_job_area': 'K.Hovnanian - Four Ponds (FP)' },
                            { 'customer_job_area': 'Residences at Columbia Park' },
                            { 'customer_job_area': 'Villages at Country View' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Koch Homes') {
                        rowData = [
                            { 'customer_job_area': "Gibson's Grant (GG)" }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Lennar') {
                        rowData = [
                            { 'customer_job_area': 'Vicroty Square' },
                            { 'customer_job_area': 'Venue at Longview Farm (VLF)' },
                            { 'customer_job_area': 'NJ Home Office' },
                            { 'customer_job_area': 'Venue at Cobblestone Creek (VCC)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'NVR- Ryan Homes') {
                        rowData = [
                            { 'customer_job_area': 'Bells Hills Terrace (WAP-BT)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Pegasus') {
                        rowData = [
                            { 'customer_job_area': 'Trails at Short Pump (TSP)' },
                            { 'customer_job_area': 'Villages at West Laurel (VWL)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'POWERS HOMES') {
                        rowData = [
                            { 'customer_job_area': 'Hopewell Point (HP)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Pulte MADC') {
                        rowData = [
                            { 'customer_job_area': 'Celebrate VA Premiers III' },
                            { 'customer_job_area': 'Celebrate Classics III (2536)' },
                            { 'customer_job_area': "Glen Riddle Farm SF 40' (4334-GRS)" },
                            { 'customer_job_area': 'Heights at Main Street (3579)' },
                            { 'customer_job_area': 'Courts of Clarksburg (5539-CC)' },
                            { 'customer_job_area': 'Mid-Atlantic Division' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Pulte NEC') {
                        rowData = [
                            { 'customer_job_area': 'Crossings at Radburn' },
                            { 'customer_job_area': 'Del Webb at Florham Park Flats (6010)' },
                            { 'customer_job_area': 'Del Webb at Florham Park SIngles (6009)' },
                            { 'customer_job_area': 'Del Webb at Florham Park Towns (6012)' },
                            { 'customer_job_area': 'Enclave at Mountain Lakes (6728)' },
                            { 'customer_job_area': 'Gwynedd Park (7109)' },
                            { 'customer_job_area': 'Gwynedd Ridge (6432)' },
                            { 'customer_job_area': 'Heights at Main Street (3579)' },
                            { 'customer_job_area': 'Hunterdon Creekside Carriages (3276)' },
                            { 'customer_job_area': 'Hunterdon Creekside Manors (1678)' },
                            { 'customer_job_area': 'Livingston Square (1113)' },
                            { 'customer_job_area': 'Northeast Corridor Division' },
                            { 'customer_job_area': 'Reserve at North Caldwell (6397)' },
                            { 'customer_job_area': 'Valley Forge Greene' },
                            { 'customer_job_area': 'Whitehall Estates (6904)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'Stanley Martin') {
                        rowData = [
                            { 'customer_job_area': 'Marlboro Pointe (MP)' },
                            { 'customer_job_area': 'Marlboro Riding (MR)' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'AJ Home Improvement') {
                        rowData = [
                            { 'customer_job_area': 'Alvin Johnson' }
                        ];
                    }
                    if (param.data.customer_builder_name == 'DELUCA HOMES') {
                        rowData = [
                            { 'customer_job_area': 'Enclave at Providence (EP)' },
                        ];
                    }
                    if (param.data.customer_builder_name == 'DMR - PDR') {
                        rowData = [
                            { 'customer_job_area': 'Macallan Crossing (MC)' }
                        ];
                    }
                    return {
                        'propertyRendered': 'customer_job_area',
                        'rowData': rowData,
                        'columnDefs': [{ headerName: 'Customer Job Area', field: 'customer_job_area' }]
                    };
                }
            },
            { headerName: 'Material name', field: 'material_name', headerClass: 'color-header-1',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'material_name',
                    'rowData': this.material_options,
                    'columnDefs': [{ headerName: 'Material name', field: 'material_name' }]
                }
            },
            { headerName: 'AREA 1', field: 'area_1', headerClass: 'color-header-2',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'AREA 1', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Area 1', field: 'material_name_area_1', headerClass: 'color-header-2',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_1', headerClass: 'color-header-2', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_1', headerClass: 'color-header-2', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_1', headerClass: 'color-header-2', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_1', headerClass: 'color-header-2', valueGetter: this.priceGetter },
            { headerName: 'AREA 2', field: 'area_2', headerClass: 'color-header-3',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'AREA 2', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Area', field: 'material_name_area_2', headerClass: 'color-header-3',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_2', headerClass: 'color-header-3', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_2', headerClass: 'color-header-3', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_2', headerClass: 'color-header-3', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_2', headerClass: 'color-header-3', valueGetter: this.priceGetter },
            { headerName: 'Other Areas', field: 'area_other', headerClass: 'color-header-4',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'Other Areas', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Areas', field: 'material_name_area_other', headerClass: 'color-header-4',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_other', headerClass: 'color-header-4', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_other', headerClass: 'color-header-4', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_other', headerClass: 'color-header-4', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_other', headerClass: 'color-header-4', valueGetter: this.priceGetter },
            { headerName: 'Phases', field: 'phases', headerClass: 'color-header-5',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'Other Areas', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Phases', field: 'material_name_phases', headerClass: 'color-header-5',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_phases', headerClass: 'color-header-5', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_phases', headerClass: 'color-header-5', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_phases', headerClass: 'color-header-5', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_phases', headerClass: 'color-header-5', valueGetter: this.priceGetter },
            { headerName: 'Other Areas 2', field: 'area_other_2', headerClass: 'color-header-4',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'Other AREA 2', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Areas 2', field: 'material_name_area_other_2', headerClass: 'color-header-4',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_other_2', headerClass: 'color-header-4', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_other_2', headerClass: 'color-header-4', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_other_2', headerClass: 'color-header-4', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_other_2', headerClass: 'color-header-4', valueGetter: this.priceGetter },
            { headerName: 'Phases 2', field: 'phases_2', headerClass: 'color-header-5',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'area_option',
                    'rowData': this.area_options,
                    'columnDefs': [{ headerName: 'Other Areas', field: 'area_option' }]
                }
            },
            { headerName: 'Material Name Phases 2', field: 'material_name_phases_2', headerClass: 'color-header-5',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: function (param) {
                    if (param.data.customer_type == 'Residential' ||
                        param.data.customer_type == 'Builder' ||
                        param.data.customer_type == 'COMMERCIAL Millwork' ||
                        param.data.customer_type == 'COMMERCIAL GC' ||
                        param.data.customer_type == 'Contractor HOUSE' ||
                        param.data.customer_type == 'Contractor MD Showroom' ||
                        param.data.customer_type == 'Kitchen & Bath House' ||
                        param.data.customer_type == 'Kitchen & Bath MD Showroom') {
                        return {
                            'propertyRendered': 'material_name_area',
                            'rowData': material_name_areas,
                            'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                        };
                    }
                    return {
                        'propertyRendered': 'material_name_area',
                        'rowData': material_names[param.data.customer_builder_name],
                        'columnDefs': [{ headerName: 'Material Name', field: 'material_name_area' }]
                    };
                }
            },
            { headerName: 'Material', field: 'material_phases_2', headerClass: 'color-header-5', valueGetter: this.materialGetter },
            { headerName: 'Brand', field: 'brand_phases_2', headerClass: 'color-header-5', valueGetter: this.brandGetter },
            { headerName: 'Level', field: 'level_phases_2', headerClass: 'color-header-5', valueGetter: this.levelGetter },
            { headerName: 'Price', field: 'price_phases_2', headerClass: 'color-header-5', valueGetter: this.priceGetter },
            { headerName: 'STATE', field: 'state', headerClass: 'color-header-1',
                cellEditorSelector: function (param) {
                    return {
                        component: 'selectCellRenderer'
                    };
                },
                cellEditorParams: function (param) {
                    let rowData;
                    rowData = [
                        { state: 'AL' },
                        { state: 'AK' },
                        { state: 'AZ' },
                        { state: 'AR' },
                        { state: 'CA' },
                        { state: 'NC' },
                        { state: 'SC' },
                        { state: 'CO' },
                        { state: 'CT' },
                        { state: 'ND' },
                        { state: 'SD' },
                        { state: 'DE' },
                        { state: 'FL' },
                        { state: 'GA' },
                        { state: 'HI' },
                        { state: 'ID' },
                        { state: 'IL' },
                        { state: 'IN' },
                        { state: 'IA' },
                        { state: 'KS' },
                        { state: 'KY' },
                        { state: 'LA' },
                        { state: 'ME' },
                        { state: 'MD' },
                        { state: 'MA' },
                        { state: 'MI' },
                        { state: 'MN' },
                        { state: 'MS' },
                        { state: 'MO' },
                        { state: 'MT' },
                        { state: 'NE' },
                        { state: 'NV' },
                        { state: 'NJ' },
                        { state: 'NY' },
                        { state: 'NH' },
                        { state: 'NM' },
                        { state: 'OH' },
                        { state: 'OK' },
                        { state: 'OR' },
                        { state: 'PA' },
                        { state: 'RI' },
                        { state: 'TN' },
                        { state: 'TX' },
                        { state: 'UT' },
                        { state: 'VT' },
                        { state: 'VA' },
                        { state: 'WV' },
                        { state: 'WA' },
                        { state: 'WI' },
                        { state: 'WY' },
                        { state: 'DC' },
                        { state: 'GU' },
                        { state: 'MP31' },
                        { state: 'VI' },
                        { state: 'PR' },
                        { state: 'AS' },
                    ];
                    return {
                        'propertyRendered': 'state',
                        'rowData': rowData,
                        'columnDefs': [{ headerName: 'State', field: 'state' }]
                    };
                }
            },
            { headerName: 'Out of State', field: 'oute_of_state', headerClass: 'color-header-1' },
            { headerName: 'Complete Job Pictures', field: 'complete_job_picture', headerClass: 'color-header-1' },
            { headerName: 'Installer', field: 'installer', headerClass: 'color-header-1',
                cellEditor: 'selectCellRenderer',
                cellEditorParams: {
                    'propertyRendered': 'installer_option',
                    'rowData': this.installer_options,
                    'columnDefs': [{ headerName: 'Installer', field: 'installer_option' }]
                }
            },
            { headerName: 'MW CAD SQFT(Kitchen)', field: 'mw_cad_sqft_kitchen', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Kitchen)', field: 'calculated_cad_sqft_kitchen', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Kitchen)', field: 'mw_sold_sqft_kitchen', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Kitchen)', field: 'calculated_sold_sqft_kitchen', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Vanity)', field: 'mw_cad_sqft_vanity', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Vanity)', field: 'calculated_cad_sqft_vanity', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Vanity)', field: 'mw_sold_sqft_vanity', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Vanity)', field: 'calculated_sold_sqft_vanity', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Laundry)', field: 'mw_cad_sqft_laundry', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Laundry)', field: 'calculated_cad_sqft_laundry', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Laundry)', field: 'mw_sold_sqft_laundry', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Laundry)', field: 'calculated_sold_sqft_laundry', headerClass: 'color-header-1' },
            { headerName: "MW CAD SQFT(Butler's)", field: 'mw_cad_sqft_butlers', headerClass: 'color-header-1' },
            { headerName: "Calculated CAD SQFT(Butler's)", field: 'calculated_cad_sqft_butlers', headerClass: 'color-header-1' },
            { headerName: "MW SOLD SQFT(Butler's)", field: 'mw_sold_sqft_butlers', headerClass: 'color-header-1' },
            { headerName: "Calculated SOLD SQFT(Butler's)", field: 'calculated_sold_sqft_butlers', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(PPC)', field: 'mw_cad_sqft_ppc', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(PPC)', field: 'calculated_cad_sqft_ppc', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(PPC)', field: 'mw_sold_sqft_ppc', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(PPC)', field: 'calculated_sold_sqft_ppc', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Drop Zone)', field: 'mw_cad_sqft_drop_zone', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Drop Zone)', field: 'calculated_cad_sqft_drop_zone', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Drop Zone)', field: 'mw_sold_sqft_drop_zone', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Drop Zone)', field: 'calculated_sold_sqft_drop_zone', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(BAR TOP/WET BAR)', field: 'mw_cad_sqft_btwb', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(BAR TOP/WET BAR)', field: 'calculated_cad_sqft_btwb', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(BAR TOP/WET BAR)', field: 'mw_sold_sqft_btwb', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(BAR TOP/WET BAR)', field: 'calculated_sold_sqft_btwb', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(FHBS)', field: 'mw_cad_sqft_fhbs', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(FHBS)', field: 'calculated_cad_sqft_fhbs', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(FHBS)', field: 'mw_sold_sqft_fhbs', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(FHBS)', field: 'calculated_sold_sqft_fhbs', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Copy/Print)', field: 'mw_cad_sqft_copy_print', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Copy/Print)', field: 'calculated_cad_sqft_copy_print', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Copy/Print)', field: 'mw_sold_sqft_copy_print', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Copy/Print)', field: 'calculated_sold_sqft_copy_print', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Pantry/Coffee)', field: 'mw_cad_sqft_pantry_coffee', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Pantry/Coffee)', field: 'calculated_cad_sqft_pantry_coffee', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Pantry/Coffee)', field: 'mw_sold_sqft_pantry_coffee', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Pantry/Coffee)', field: 'calculated_sold_sqft_pantry_coffee', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Phase 19A)', field: 'mw_cad_sqft_phase_19a', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Phase 19A)', field: 'calculated_cad_sqft_phase_19a', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Phase 19A)', field: 'mw_sold_sqft_phase_19a', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Phase 19A)', field: 'calculated_sold_sqft_phase_19a', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Phase 19B)', field: 'mw_cad_sqft_phase_19b', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Phase 19B)', field: 'calculated_cad_sqft_phase_19b', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Phase 19B)', field: 'mw_sold_sqft_phase_19b', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Phase 19B)', field: 'calculated_sold_sqft_phase_19b', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Remake)', field: 'mw_cad_sqft_remake', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Remake)', field: 'calculated_cad_sqft_remake', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Remake)', field: 'mw_sold_sqft_remake', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Remake)', field: 'calculated_sold_sqft_remake', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Rework)', field: 'mw_cad_sqft_rework', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Rework)', field: 'calculated_cad_sqft_rework', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Rework)', field: 'mw_sold_sqft_rework', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Rework)', field: 'calculated_sold_sqft_rework', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Valet)', field: 'mw_cad_sqft_valet', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Valet)', field: 'calculated_cad_sqft_valet', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Valet)', field: 'mw_sold_sqft_valet', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Valet)', field: 'calculated_sold_sqft_valet', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Morning Room)', field: 'mw_cad_sqft_morning_room', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Morning Room)', field: 'calculated_cad_sqft_morning_room', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Morning Room)', field: 'mw_sold_sqft_morning_room', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Morning Room)', field: 'calculated_sold_sqft_morning_room', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Wine & Bar)', field: 'mw_cad_sqft_wine_bar', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Wine & Bar)', field: 'calculated_cad_sqft_wine_bar', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Wine & Bar)', field: 'mw_sold_sqft_wine_bar', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Wine & Bar)', field: 'calculated_sold_sqft_wine_bar', headerClass: 'color-header-1' },
            { headerName: 'MW CAD SQFT(Pocket Office)', field: 'mw_cad_sqft_pocket_office', headerClass: 'color-header-1' },
            { headerName: 'Calculated CAD SQFT(Pocket Office)', field: 'calculated_cad_sqft_pocket_office', headerClass: 'color-header-1' },
            { headerName: 'MW SOLD SQFT(Pocket Office)', field: 'mw_sold_sqft_pocket_office', headerClass: 'color-header-1' },
            { headerName: 'Calculated SOLD SQFT(Pocket Office)', field: 'calculated_sold_sqft_pocket_office', headerClass: 'color-header-1' },
            { headerName: 'Notes', field: 'notes', headerClass: 'color-header-6' },
            { headerName: 'Legend', field: 'legend', headerClass: 'color-header-1' }
        ];
        this.defaultColDef = {
            // flex: 1,
            minWidth: 50,
            editable: true,
            resizable: true
        };
        this.rowData = [];
        this.components = {
            datePicker: getDatePicker(),
            numericCellEditor: NumericCellEditor
        };
        this.frameworkComponents = {
            selectCellRenderer: _components_select_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"]
        };
        this.materials = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.materials = yield this.materialService.getAll();
            materials = this.materials;
            this.prices = yield this.priceService.getAll();
            prices = this.prices;
            material_name_areas = yield this.materiaNameAreaService.getAll();
            this.comparisonService.getAll().subscribe((res) => {
                this.rowData = res['comparisons'];
            });
        });
    }
    onCellValueChanged(event) {
        console.log('data after changes is: ', event);
        this.comparisonService.update(event.data).subscribe((res) => {
            console.log(res);
        });
    }
    addNew() {
        this.comparisonService.addNew().subscribe((res) => {
            console.log(res);
            this.rowData.push(res.data);
            this.reportTable.api.setRowData(this.rowData);
            this.reportTable.api.ensureIndexVisible(this.rowData.length - 1, 'bottom');
        });
    }
    materialGetter(params) {
        if (params.colDef.field == 'material_1' && params.data.area_1 == "")
            return "";
        if (params.colDef.field == 'material_2' && params.data.area_2 == "")
            return "";
        if (params.colDef.field == 'material_other' && params.data.area_other == "")
            return "";
        if (params.colDef.field == 'material_phases' && params.data.phases == "")
            return "";
        if (params.colDef.field == 'material_other_2' && params.data.area_other_2 == "")
            return "";
        if (params.colDef.field == 'material_phases_2' && params.data.phases_2 == "")
            return "";
        if (params.data.customer_type == null)
            return "";
        if (params.data.customer_type.toLowerCase() == 'Commercial GC'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Commercial Millwork'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Residential'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor MD Showroom'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath MD Showroom'.toLowerCase() ||
            params.data.customer_builder_name.toLowerCase() == 'Floormax'.toLowerCase()) {
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](materials, function (o) {
                if (params.colDef.field == 'material_1')
                    return o.title.toLowerCase() == params.data.material_name_area_1.toLowerCase();
                if (params.colDef.field == 'material_2')
                    return o.title.toLowerCase() == params.data.material_name_area_2.toLowerCase();
                if (params.colDef.field == 'material_other')
                    return o.title.toLowerCase() == params.data.material_name_area_other.toLowerCase();
                if (params.colDef.field == 'material_phases')
                    return o.title.toLowerCase() == params.data.material_name_phases.toLowerCase();
                if (params.colDef.field == 'material_other_2')
                    return o.title.toLowerCase() == params.data.material_name_area_other_2.toLowerCase();
                if (params.colDef.field == 'material_phases_2')
                    return o.title.toLowerCase() == params.data.material_name_phases_2.toLowerCase();
            });
            if (lookup) {
                return lookup.material;
            }
            return '';
        }
        else {
            let substitute;
            if (params.colDef.field == 'material_1')
                substitute = params.data.customer_builder_name + params.data.material_name_area_1;
            if (params.colDef.field == 'material_2')
                substitute = params.data.customer_builder_name + params.data.material_name_area_2;
            if (params.colDef.field == 'material_other')
                substitute = params.data.customer_builder_name + params.data.material_name_area_other;
            if (params.colDef.field == 'material_phases')
                substitute = params.data.customer_builder_name + params.data.material_name_phases;
            if (params.colDef.field == 'material_other_2')
                substitute = params.data.customer_builder_name + params.data.material_name_area_other_2;
            if (params.colDef.field == 'material_phases_2')
                substitute = params.data.customer_builder_name + params.data.material_name_phases_2;
            substitute = substitute.replaceAll(" ", "");
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prices, function (o) {
                return o.conct.toLowerCase() == substitute.toLowerCase();
            });
            if (lookup) {
                return lookup.material;
            }
            return "";
        }
        return "";
    }
    brandGetter(params) {
        if (params.colDef.field == "brand_1" && params.data.area_1 == "")
            return "";
        if (params.colDef.field == "brand_2" && params.data.area_2 == "")
            return "";
        if (params.colDef.field == "brand_other" && params.data.area_other == "")
            return "";
        if (params.colDef.field == "brand_phases" && params.data.phases == "")
            return "";
        if (params.colDef.field == "brand_other_2" && params.data.area_other_2 == "")
            return "";
        if (params.colDef.field == "brand_phases_2" && params.data.phases_2 == "")
            return "";
        if (params.data.customer_type == null)
            return "";
        if (params.data.customer_type.toLowerCase() == 'Commercial GC'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Commercial Millwork'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Residential'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor MD Showroom'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath MD Showroom'.toLowerCase() ||
            params.data.customer_builder_name.toLowerCase() == 'Floormax'.toLowerCase()) {
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](materials, function (o) {
                if (params.colDef.field == "brand_1")
                    return o.title.toLowerCase() == params.data.material_name_area_1.toLowerCase();
                if (params.colDef.field == "brand_2")
                    return o.title.toLowerCase() == params.data.material_name_area_2.toLowerCase();
                if (params.colDef.field == "brand_other")
                    return o.title.toLowerCase() == params.data.material_name_area_other.toLowerCase();
                if (params.colDef.field == "brand_phases")
                    return o.title.toLowerCase() == params.data.material_name_phases.toLowerCase();
                if (params.colDef.field == "brand_other_2")
                    return o.title.toLowerCase() == params.data.material_name_area_other_2.toLowerCase();
                if (params.colDef.field == "brand_phases_2")
                    return o.title.toLowerCase() == params.data.material_name_phases_2.toLowerCase();
            });
            if (lookup) {
                return lookup.material_type;
            }
            return '';
        }
        else {
            let substitute;
            if (params.colDef.field == "brand_1")
                substitute = params.data.customer_builder_name + params.data.material_name_area_1;
            if (params.colDef.field == "brand_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_2;
            if (params.colDef.field == "brand_other")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other;
            if (params.colDef.field == "brand_phases")
                substitute = params.data.customer_builder_name + params.data.material_name_phases;
            if (params.colDef.field == "brand_other_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other_2;
            if (params.colDef.field == "brand_phases_2")
                substitute = params.data.customer_builder_name + params.data.material_name_phases_2;
            substitute = substitute.replaceAll(" ", "");
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prices, function (o) {
                return o.conct.toLowerCase() == substitute.toLowerCase();
            });
            if (lookup) {
                return lookup.material_name;
            }
            return "";
        }
        return "";
    }
    levelGetter(params) {
        if (params.colDef.field == "level_1" && params.data.area_1 == "")
            return "";
        if (params.colDef.field == "level_2" && params.data.area_2 == "")
            return "";
        if (params.colDef.field == "level_other" && params.data.area_other == "")
            return "";
        if (params.colDef.field == "level_phases" && params.data.phases == "")
            return "";
        if (params.colDef.field == "level_other_2" && params.data.area_other_2 == "")
            return "";
        if (params.colDef.field == "level_phases_2" && params.data.phases_2 == "")
            return "";
        if (params.data.customer_type == null)
            return "";
        if (params.data.customer_type.toLowerCase() == 'Commercial GC'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Commercial Millwork'.toLowerCase()) {
            return "N/A";
        }
        if (params.data.customer_type.toLowerCase() == 'Residential'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor MD Showroom'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath MD Showroom'.toLowerCase() ||
            params.data.customer_builder_name.toLowerCase() == 'Floormax'.toLowerCase()) {
            return 'Select Level';
        }
        else {
            let substitute;
            if (params.colDef.field == "level_1")
                substitute = params.data.customer_builder_name + params.data.material_name_area_1;
            if (params.colDef.field == "level_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_2;
            if (params.colDef.field == "level_other")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other;
            if (params.colDef.field == "level_phases")
                substitute = params.data.customer_builder_name + params.data.material_name_phases;
            if (params.colDef.field == "level_other_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other_2;
            if (params.colDef.field == "level_phases_2")
                substitute = params.data.customer_builder_name + params.data.material_name_phases_2;
            substitute = substitute.replaceAll(" ", "");
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prices, function (o) {
                return o.conct.toLowerCase() == substitute.toLowerCase();
            });
            if (lookup) {
                return lookup.level;
            }
            return "";
        }
        return "";
    }
    priceGetter(params) {
        if (params.colDef.field == "price_1" && params.data.area_1 == "")
            return "";
        if (params.colDef.field == "price_2" && params.data.area_2 == "")
            return "";
        if (params.colDef.field == "price_other" && params.data.area_other == "")
            return "";
        if (params.colDef.field == "price_phases" && params.data.phases == "")
            return "";
        if (params.colDef.field == "price_other_2" && params.data.area_other_2 == "")
            return "";
        if (params.colDef.field == "price_phases_2" && params.data.phases_2 == "")
            return "";
        if (params.data.customer_type == null)
            return "";
        if (params.data.customer_type.toLowerCase() == 'Commercial GC'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Commercial Millwork'.toLowerCase()) {
            return "N/A";
        }
        if (params.data.customer_type.toLowerCase() == 'Residential'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Contractor MD Showroom'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath HOUSE'.toLowerCase() ||
            params.data.customer_type.toLowerCase() == 'Kitchen & Bath MD Showroom'.toLowerCase() ||
            params.data.customer_builder_name.toLowerCase() == 'Floormax'.toLowerCase()) {
            return 'Not defined';
        }
        else {
            let substitute;
            if (params.colDef.field == "price_1")
                substitute = params.data.customer_builder_name + params.data.material_name_area_1;
            if (params.colDef.field == "price_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_2;
            if (params.colDef.field == "price_other")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other;
            if (params.colDef.field == "price_phases")
                substitute = params.data.customer_builder_name + params.data.material_name_phases;
            if (params.colDef.field == "price_other_2")
                substitute = params.data.customer_builder_name + params.data.material_name_area_other_2;
            if (params.colDef.field == "price_phases_2")
                substitute = params.data.customer_builder_name + params.data.material_name_phases_2;
            substitute = substitute.replaceAll(" ", "");
            let lookup = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](prices, function (o) {
                return o.conct.toLowerCase() == substitute.toLowerCase();
            });
            if (lookup) {
                return lookup.price;
            }
            return "";
        }
        return "";
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_comparison_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_price_service__WEBPACK_IMPORTED_MODULE_6__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_material_name_area_service__WEBPACK_IMPORTED_MODULE_7__["MaterialNameAreaService"])); };
ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], viewQuery: function ReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reportTable = _t.first);
    } }, decls: 3, vars: 1, consts: [[4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "ag-theme-alpine", 2, "width", "100vw", "height", "80vh", 3, "rowData", "columnDefs", "defaultColDef", "components", "frameworkComponents", "cellValueChanged"], ["reportTable", ""]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportComponent_div_0_Template, 3, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportComponent_Template_button_click_1_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rowData.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridAngular"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-report',
                templateUrl: './report.component.html',
                styleUrls: ['./report.component.less']
            }]
    }], function () { return [{ type: _services_comparison_service__WEBPACK_IMPORTED_MODULE_4__["ComparisonService"] }, { type: _services_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"] }, { type: _services_price_service__WEBPACK_IMPORTED_MODULE_6__["PriceService"] }, { type: _services_material_name_area_service__WEBPACK_IMPORTED_MODULE_7__["MaterialNameAreaService"] }]; }, { reportTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['reportTable']
        }] }); })();
function getCharCodeFromEvent(event) {
    event = event || window.event;
    return (typeof event.which == "undefined") ? event.keyCode : event.which;
}
function isCharNumeric(charStr) {
    return !!/\d/.test(charStr);
}
function isKeyPressedNumeric(event) {
    var charCode = getCharCodeFromEvent(event);
    var charStr = String.fromCharCode(charCode);
    return isCharNumeric(charStr);
}
function NumericCellEditor() {
}
// gets called once before the renderer is used
NumericCellEditor.prototype.init = function (params) {
    // create the cell
    this.eInput = document.createElement('input');
    if (isCharNumeric(params.charPress)) {
        this.eInput.value = params.charPress;
    }
    else {
        if (params.value !== undefined && params.value !== null) {
            this.eInput.value = params.value;
        }
    }
    var that = this;
    this.eInput.addEventListener('keypress', function (event) {
        if (!isKeyPressedNumeric(event)) {
            that.eInput.focus();
            if (event.preventDefault)
                event.preventDefault();
        }
        else if (that.isKeyPressedNavigation(event)) {
            event.stopPropagation();
        }
    });
    // only start edit if key pressed is a number, not a letter
    var charPressIsNotANumber = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
    this.cancelBeforeStart = charPressIsNotANumber;
};
NumericCellEditor.prototype.isKeyPressedNavigation = function (event) {
    return event.keyCode === 39
        || event.keyCode === 37;
};
// gets called once when grid ready to insert the element
NumericCellEditor.prototype.getGui = function () {
    return this.eInput;
};
// focus and select can be done after the gui is attached
NumericCellEditor.prototype.afterGuiAttached = function () {
    this.eInput.focus();
};
// returns the new value after editing
NumericCellEditor.prototype.isCancelBeforeStart = function () {
    return this.cancelBeforeStart;
};
// example - will reject the number if it contains the value 007
// - not very practical, but demonstrates the method.
NumericCellEditor.prototype.isCancelAfterEnd = function () {
    var value = this.getValue();
    return value.indexOf('007') >= 0;
};
// returns the new value after editing
NumericCellEditor.prototype.getValue = function () {
    return this.eInput.value;
};
// any cleanup we need to be done here
NumericCellEditor.prototype.destroy = function () {
    // but this example is simple, no cleanup, we could  even leave this method out as it's optional
};
// if true, then this editor will appear in a popup
NumericCellEditor.prototype.isPopup = function () {
    // and we could leave this method out also, false is the default
    return false;
};
function getDatePicker() {
    function Datepicker() { }
    Datepicker.prototype.init = function (params) {
        this.eInput = document.createElement('input');
        this.eInput.value = params.value;
        this.eInput.classList.add('ag-input');
        this.eInput.style.height = '100%';
        $(this.eInput).datepicker({ dateFormat: 'mm/dd/yy' });
    };
    Datepicker.prototype.getGui = function () {
        return this.eInput;
    };
    Datepicker.prototype.afterGuiAttached = function () {
        this.eInput.focus();
        this.eInput.select();
    };
    Datepicker.prototype.getValue = function () {
        return this.eInput.value;
    };
    Datepicker.prototype.destroy = function () { };
    Datepicker.prototype.isPopup = function () {
        return false;
    };
    return Datepicker;
}


/***/ }),

/***/ "nSnL":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "J9tS");





class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "oYre":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/user.service */ "VITL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function UsersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errortop);
} }
function UsersComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_15_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectToEdit(user_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_15_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectToDelete(user_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3.role);
} }
function UsersComponent_div_19_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.error);
} }
function UsersComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_19_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.user.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_19_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.user.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_19_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.user.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_19_Template_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.user.role = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Password:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_div_19_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.user.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.updateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Update User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_19_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.closeUpdateUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UsersComponent_div_19_div_30_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.user.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
class UsersComponent {
    constructor(userService) {
        this.userService = userService;
        this.users = [];
        this.user = {
            id: 0,
            username: '',
            firstName: '',
            lastName: '',
            role: '',
            password: ''
        };
        this.error = '';
        this.errortop = '';
    }
    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.userService.getAll().subscribe((res) => {
            console.log(res);
            this.users = res;
        });
    }
    updateUser() {
        if (!this.validate()) {
            return;
        }
        this.userService.update(this.user).subscribe((res) => {
            if (res.error) {
                this.error = res.error;
            }
            this.closeUpdateUser();
            this.loadUsers();
        });
    }
    validate() {
        this.error = '';
        if (this.user.username == '' || this.user.firstName == '' || this.user.lastName == '' || this.user.role == '' || this.user.password == '') {
            this.error = 'Please input all user information!';
            return false;
        }
        return true;
    }
    selectToEdit(user) {
        this.user.id = user.id;
        this.user.firstName = user.firstName;
        this.user.lastName = user.lastName;
        this.user.username = user.username;
        this.user.role = user.role;
    }
    closeUpdateUser() {
        this.user = {
            id: 0,
            username: '',
            firstName: '',
            lastName: '',
            role: '',
            password: ''
        };
    }
    selectToDelete(user) {
        this.errortop = "";
        const isDelete = confirm(`Do you want to delete ${user.username}`);
        if (!isDelete) {
            return;
        }
        this.userService.delete(user.id).subscribe((res) => {
            if (res.errortop) {
                this.errortop = res.error;
            }
            this.loadUsers();
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 20, vars: 3, consts: [[1, "container"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "table", "table-striped", "table-bordered", "mt-4"], [4, "ngFor", "ngForOf"], [1, "row"], ["type", "button", "routerLink", "/newuser", 1, "btn", "btn-success"], ["class", "jumbotron", 4, "ngIf"], [1, "alert", "alert-danger", "mt-3", "mb-0"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "jumbotron"], [1, "form-group"], ["for", "username"], ["type", "text", "placeholder", "Enter User ID", "id", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "firstname"], ["type", "text", "placeholder", "Enter First Name", "id", "firstname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastname"], ["type", "text", "placeholder", "Enter Last Name", "id", "lastname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "role"], ["id", "role", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Editor"], ["value", "Admin"], ["for", "pwd"], ["type", "password", "placeholder", "Enter Password", "id", "pwd", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UsersComponent_tr_15_Template, 14, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Create New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersComponent_div_19_Template, 31, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errortop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".btn[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Rldi9Eb2N1bWVudHMvY2FsY3VsYXRpb25fcmVwb3J0L2FuZ3VsYXItMTAtYmFzaWMtYXV0aGVudGljYXRpb24tZXhhbXBsZS1tYXN0ZXIvc3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59IiwiLmJ0biB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.less']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");




class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const user = this.authenticationService.userValue;
        if (user) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "pW6c":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class AuthenticationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }
    get userValue() {
        return this.userSubject.value;
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/users/authenticate`, { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "peT6":
/*!************************************************!*\
  !*** ./src/app/services/comparison.service.ts ***!
  \************************************************/
/*! exports provided: ComparisonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparisonService", function() { return ComparisonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ComparisonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/comparisons/all`);
    }
    update(data) {
        return this.httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/comparisons/update/` + data.id, data);
    }
    addNew() {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/api/comparisons/addnew`, null);
    }
}
ComparisonService.ɵfac = function ComparisonService_Factory(t) { return new (t || ComparisonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ComparisonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComparisonService, factory: ComparisonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComparisonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pjXP":
/*!****************************************************!*\
  !*** ./src/app/_helpers/basic-auth.interceptor.ts ***!
  \****************************************************/
/*! exports provided: BasicAuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthInterceptor", function() { return BasicAuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "J9tS");




class BasicAuthInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add header with basic auth credentials if user is logged in and request is to the api url
        const user = this.authenticationService.userValue;
        const isLoggedIn = user && user.authdata;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${user.authdata}`
                }
            });
        }
        return next.handle(request);
    }
}
BasicAuthInterceptor.ɵfac = function BasicAuthInterceptor_Factory(t) { return new (t || BasicAuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
BasicAuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BasicAuthInterceptor, factory: BasicAuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicAuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "wn6f");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "NFyy");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report/report.component */ "jw39");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _newuser_newuser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newuser/newuser.component */ "GD0e");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_helpers */ "XgRA");










const routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'report', component: _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] },
    { path: 'newuser', component: _newuser_newuser_component__WEBPACK_IMPORTED_MODULE_6__["NewuserComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "J9tS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function LoginComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);
} }
function LoginComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function LoginComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 16);
} }
function LoginComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.error);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.userValue) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["ng-component"]], decls: 20, vars: 12, consts: [[1, "col-md-6", "offset-md-3", "mt-5"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Calculation Report App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_span_17_Template, 1, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ templateUrl: 'login.component.html' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "wn6f":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "xOZy":
/*!**************************************************************!*\
  !*** ./src/app/components/select-cell-renderer.component.ts ***!
  \**************************************************************/
/*! exports provided: AutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");





const _c0 = ["input"];
class AutoCompleteComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.rowSelection = 'single';
        this.gridHeight = 175;
        this.gridWidth = 375;
        this.isCanceled = true;
        this.selectedObject = {};
    }
    ngAfterViewInit() {
        window.setTimeout(() => {
            if (this.inputValue == this.cellValue) {
                this.input.nativeElement.select();
            }
            else {
                this.input.nativeElement.focus();
            }
            if (this.inputValue && !this.useApi)
                this.updateFilter();
        });
    }
    // ICellEditorAngularComp functions
    agInit(params) {
        this.params = params;
        if (!params.rowData) {
            this.apiEndpoint = params.apiEndpoint;
            this.useApi = true;
            this.rowData = [{}];
        }
        else {
            this.rowData = params.rowData;
        }
        if (params.gridHeight)
            this.gridHeight = params.gridHeight;
        if (params.gridWidth)
            this.gridWidth = params.gridWidth;
        this.columnDefs = params.columnDefs;
        this.propertyName = params.propertyRendered;
        this.cellValue = params.data[this.propertyName];
        this.returnObject = params.returnObject;
        if (!params.charPress) {
            if (this.cellValue)
                this.inputValue = this.cellValue;
        }
        else {
            this.inputValue = params.charPress;
        }
    }
    getValue() {
        if (!this.returnObject)
            return this.selectedObject[this.propertyName];
        return this.selectedObject;
    }
    isPopup() {
        return true;
    }
    isCancelAfterEnd() {
        return this.isCanceled;
    }
    // ag-Grid functions
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.columnFilter = this.gridApi.getFilterInstance(this.propertyName);
    }
    // component functions
    rowClicked(params) {
        this.selectedObject = params.data;
        this.isCanceled = false;
        this.params.api.stopEditing();
    }
    rowConfirmed() {
        if (this.gridApi.getSelectedRows()[0]) {
            this.selectedObject = this.gridApi.getSelectedRows()[0];
            this.isCanceled = false;
        }
        this.params.api.stopEditing();
    }
    // @HostListener('keydown', ['$event'])
    // onKeydown(event: any) {
    // 	event.stopPropagation();
    // 	if (event.key == "Escape") {
    // 		this.params.api.stopEditing();
    // 		return false;
    // 	}
    // 	if (event.key == "Enter" || event.key == "Tab") {
    // 		this.rowConfirmed();
    // 		return false;
    // 	}
    // 	if (event.key == "ArrowUp" || event.key == "ArrowDown") {
    // 		this.navigateGrid();
    // 		return false;
    // 	} 
    // }
    processDataInput(event) {
        if (this.useApi) {
            if (event.length == 0)
                this.gridApi.setRowData();
            if (event.length == 2) {
                this.getApiData(event).subscribe(data => {
                    this.rowData = data;
                    setTimeout(() => { this.updateFilter(); });
                });
            }
            ;
            if (event.length > 2)
                this.updateFilter();
        }
        else {
            this.updateFilter();
        }
    }
    getApiData(filter) {
        return this.httpClient.get(this.apiEndpoint + this.toQueryString(filter));
    }
    toQueryString(filter) {
        return "?" + this.propertyName + "=" + filter;
    }
    updateFilter() {
        this.columnFilter.setModel({
            type: 'startsWith',
            filter: this.inputValue,
        });
        this.columnFilter.onFilterChanged();
        if (this.gridApi.getDisplayedRowAtIndex(0)) {
            this.gridApi.getDisplayedRowAtIndex(0).setSelected(true);
            this.gridApi.ensureIndexVisible(0, 'top');
        }
        else {
            this.gridApi.deselectAll();
        }
    }
    navigateGrid() {
        if (this.gridApi.getFocusedCell() == null || this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex) == null) { // check if no cell has focus, or if focused cell is filtered
            this.gridApi.setFocusedCell(this.gridApi.getDisplayedRowAtIndex(0).rowIndex, this.propertyName);
            this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex).setSelected(true);
        }
        else {
            this.gridApi.setFocusedCell(this.gridApi.getFocusedCell().rowIndex, this.propertyName);
            this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex).setSelected(true);
        }
    }
}
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoCompleteComponent, selectors: [["auto-complete"]], viewQuery: function AutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, hostAttrs: [2, "position", "absolute", "left", "0px", "top", "0px", "background-color", "transparant"], decls: 3, vars: 10, consts: [[2, "height", "28px", "font-weight", "400", "font-size", "12px", 3, "ngModel", "ngModelChange"], ["input", ""], [1, "ag-theme-balham", 2, "font-weight", "150", 3, "rowData", "columnDefs", "rowSelection", "gridReady", "rowClicked"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutoCompleteComponent_Template_input_ngModelChange_0_listener($event) { return ctx.inputValue = $event; })("ngModelChange", function AutoCompleteComponent_Template_input_ngModelChange_0_listener($event) { return ctx.processDataInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ag-grid-angular", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("gridReady", function AutoCompleteComponent_Template_ag_grid_angular_gridReady_2_listener($event) { return ctx.onGridReady($event); })("rowClicked", function AutoCompleteComponent_Template_ag_grid_angular_rowClicked_2_listener($event) { return ctx.rowClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.params.column.actualWidth + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.gridHeight + "px")("max-width", ctx.gridWidth + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("rowSelection", ctx.rowSelection);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'auto-complete',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { style: `position: absolute;
					left: 0px; 
					top: 0px;
					background-color: transparant;
					` },
                template: ` 
		<input #input
			[(ngModel)]="inputValue"
			(ngModelChange)="processDataInput($event)"
			style=" height: 28px; font-weight: 400; font-size: 12px;"
			[style.width]="params.column.actualWidth + 'px'">
		<ag-grid-angular
			style="font-weight: 150;" 
			[style.height]="gridHeight + 'px'"
			[style.max-width]="gridWidth + 'px'"
			class="ag-theme-balham"
			[rowData]="rowData" 
			[columnDefs]="columnDefs"
			[rowSelection]="rowSelection"
			(gridReady)="onGridReady($event)"
			(rowClicked)="rowClicked($event)">
		</ag-grid-angular>
	`
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map