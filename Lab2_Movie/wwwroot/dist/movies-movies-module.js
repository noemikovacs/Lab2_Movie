(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movies-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-edit/movies-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-edit/movies-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n    Add/Edit movie\r\n</p>\r\n\r\n<mat-card class=\"example-card\">\r\n    <form *ngIf=\"formGroup\" [formGroup]=\"formGroup\">\r\n        <div class=\"example-container\">\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Title\" formControlName=\"title\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('title').touched && formGroup.get('title').errors && formGroup.get('title').errors.required\">\r\n                    Title required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Description\" formControlName=\"description\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('description').touched && formGroup.get('description').errors && formGroup.get('description').errors.required\">\r\n                    Description required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Genre\" formControlName=\"genre\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('genre').touched && formGroup.get('genre').errors && formGroup.get('genre').errors.required\">\r\n                    Genre required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"DurationInMin\" formControlName=\"durationInMin\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('durationInMin').touched && formGroup.get('durationInMin').errors && formGroup.get('durationInMin').errors.required\">\r\n                    DurationInMin required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"YearOfRelease\" formControlName=\"yearOfRelease\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('yearOfRelease').touched && formGroup.get('yearOfRelease').errors && formGroup.get('yearOfRelease').errors.required\">\r\n                    YearOfRealease required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Director\" formControlName=\"director\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('director').touched && formGroup.get('director').errors && formGroup.get('director').errors.required\">\r\n                    Director required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"DateAdded\" formControlName=\"dateAdded\" type=\"datetime\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('dateAdded').touched && formGroup.get('dateAdded').errors && formGroup.get('dateAdded').errors.required\">\r\n                    Date required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <!--<mat-form-field>\r\n                <input matInput placeholder=\"Rating\" formControlName=\"rating\" type=\"number\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('rating').touched && formGroup.get('rating').errors && formGroup.get('rating').errors.required\">\r\n                    Rating required!\r\n                </mat-error>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Watched\" formControlName=\"wasWatched\" type=\"text\">\r\n\r\n                <mat-error *ngIf=\"formGroup.get('wasWatched').touched && formGroup.get('wasWatched').errors && formGroup.get('wasWatched').errors.required\">\r\n                    Watched required!\r\n                </mat-error>\r\n            </mat-form-field>-->\r\n\r\n        </div>\r\n        <div class=\"example-button-row\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n            <button mat-raised-button color=\"primary\" [routerLink]='routerLink'>Cancel</button>\r\n        </div>\r\n    </form>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Movies</h1>\r\n\r\n<p>Many movies in the list</p>\r\n\r\n<div class=\"example-button-row\">\r\n    <button mat-raised-button [routerLink]='[\"../edit\"]' color=\"primary\">Add</button>\r\n</div>\r\n\r\n<table mat-table [dataSource]=\"movies\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Title </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.title}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Description </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.description}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"genre\" style=\"width:21%\">\r\n        <th mat-header-cell *matHeaderCellDef> Genre </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.genre}} </td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"durationInMin\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> DurationInMin </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.durationInMin}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"yearOfRelease\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> YearOfRelease </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.yearOfRelease}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"director\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Director </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.director}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"dateAdded\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> DateAdded </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.dateAdded}} </td>\r\n    </ng-container>\r\n\r\n    <!--<ng-container matColumnDef=\"rating\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Rating </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.rating}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"wasWatched\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> Watched </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.wasWatched}} </td>\r\n    </ng-container>-->\r\n\r\n\r\n    <ng-container matColumnDef=\"numberOfComments\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:21%\"> NrOfComments </th>\r\n        <td mat-cell *matCellDef=\"let movie\"> {{movie.numberOfComments}} </td>\r\n    </ng-container>\r\n\r\n\r\n    Action Column\r\n    <ng-container matColumnDef=\"action\">\r\n        <th mat-header-cell *matHeaderCellDef style=\"width:10%\"> Action </th>\r\n        <td mat-cell *matCellDef=\"let movie\">\r\n            <button mat-icon-button matTooltip=\"Edit\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon\" [routerLink]=\"['../edit', movie.id]\">edit</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button matTooltip=\"Delete\" [matTooltipPosition]=\"'after'\">\r\n                <mat-icon aria-label=\"Example icon-button with a heart icon \" (click)=\"deleteMovie(movie)\">delete</mat-icon>\r\n            </button>\r\n        </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!movies\"></mat-progress-bar>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/authentication.guard */ "./src/app/core/guards/authentication.guard.ts");
/* harmony import */ var _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/http-request-interceptor */ "./src/app/core/services/http-request-interceptor.ts");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security.service */ "./src/app/core/services/security.service.ts");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [],
        providers: [
            _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_2__["AuthenticationGuard"],
            _services_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
            _services_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                useClass: _services_http_request_interceptor__WEBPACK_IMPORTED_MODULE_3__["HttpRequestInterceptor"],
                multi: true
            }
        ],
        exports: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/authentication.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/guards/authentication.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AuthenticationGuard = class AuthenticationGuard {
    constructor() { }
    canActivate() {
        return true;
    }
};
AuthenticationGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AuthenticationGuard);



/***/ }),

/***/ "./src/app/core/services/application.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/application.service.ts ***!
  \******************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ApplicationService = class ApplicationService {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.baseUrl = document.getElementsByTagName('base')[0].href;
    }
    isLoggedIn() {
        return this.tokenService.getToken() != null;
    }
    userEmail() {
        var token = this.tokenService.getToken();
        if (token != null)
            return token.email;
        return "";
    }
};
ApplicationService.ctorParameters = () => [
    { type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }
];
ApplicationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
], ApplicationService);



/***/ }),

/***/ "./src/app/core/services/http-request-interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/http-request-interceptor.ts ***!
  \***********************************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let HttpRequestInterceptor = class HttpRequestInterceptor {
    constructor(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    intercept(request, next) {
        var token = this.tokenService.getToken();
        request = token ? request.clone({
            headers: request.headers.set("Authorization", "Bearer " + token.value)
        }) : request;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error.status === 401) {
                this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            if (error.status === 403) {
                this.router.navigate(['/forbidden']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
HttpRequestInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }
];
HttpRequestInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]])
], HttpRequestInterceptor);



/***/ }),

/***/ "./src/app/core/services/security.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/security.service.ts ***!
  \***************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let SecurityService = class SecurityService {
    constructor(httpClient, tokenService, applicationService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.applicationService = applicationService;
    }
    register(registerModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Register`, registerModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    login(loginModel) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((obs) => {
            this.httpClient.post(`${this.applicationService.baseUrl}Account/Login`, loginModel).subscribe(token => {
                this.tokenService.saveToken(token);
                obs.next(token);
                obs.complete();
            });
        });
    }
    logout() {
        this.tokenService.deleteToken();
    }
};
SecurityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] },
    { type: _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }
];
SecurityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"],
        _application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]])
], SecurityService);



/***/ }),

/***/ "./src/app/core/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TokenService = class TokenService {
    constructor() { }
    saveToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }
    getToken() {
        return this.validate(JSON.parse(localStorage.getItem("token")));
    }
    validate(token) {
        if (token) {
            if (new Date(token.expiry) > new Date())
                return token;
        }
        return null;
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
};
TokenService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenService);



/***/ }),

/***/ "./src/app/movies/movies-edit/movies-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/movies/movies-edit/movies-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n    .example-container > * {\r\n        width: 100%;\r\n    }\r\n\r\n    body {\r\n    background-image: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy1lZGl0L21vdmllcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0lBRUk7UUFDSSxXQUFXO0lBQ2Y7O0lBR0o7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLWVkaXQvbW92aWVzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiAgICAuZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/movies/movies-edit/movies-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movies/movies-edit/movies-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesEditComponent", function() { return MoviesEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let MoviesEditComponent = class MoviesEditComponent {
    constructor(router, route, moviesService, formBuilder) {
        this.router = router;
        this.route = route;
        this.moviesService = moviesService;
        this.formBuilder = formBuilder;
        this.routerLink = '../list';
        this.isEdit = false;
    }
    ngOnInit() {
        this.movieID = parseInt(this.route.snapshot.params['id']);
        if (this.movieID) {
            this.routerLink = '../../list';
            this.moviesService.getMovie(this.movieID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm({});
        }
    }
    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });
        if (this.formGroup.valid) {
            let movie = this.formGroup.value;
            movie.title = "bububu";
            if (this.isEdit) {
                movie.id = this.movieID;
                this.moviesService.modifyMovie(movie).subscribe(res => {
                    this.router.navigate(['/movies']);
                });
            }
            else {
                this.moviesService.saveMovie(movie).subscribe(res => {
                    this.router.navigate(['/movies']);
                });
            }
        }
    }
    initForm(movie) {
        this.formGroup = this.formBuilder.group({
            title: [movie.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [movie.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            genre: [movie.genre, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            durationInMin: [movie.durationInMin, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yearOfRelease: [movie.yearOfRelease, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            director: [movie.director, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateAdded: [movie.dateAdded, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
};
MoviesEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
MoviesEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movies-edit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movies-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-edit/movies-edit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movies-edit.component.css */ "./src/app/movies/movies-edit/movies-edit.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], MoviesEditComponent);



/***/ }),

/***/ "./src/app/movies/movies-list/movies-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/movies/movies-list/movies-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/movies/movies-list/movies-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/movies/movies-list/movies-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let MoviesListComponent = class MoviesListComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.displayedColumns = ['title', 'description', 'genre', 'durationInMin', 'yearOfRelease', 'director', 'dateAdded', 'numberOfComments', 'action'];
    }
    ngOnInit() {
        this.loadMovies();
    }
    loadMovies() {
        this.moviesService.listMovies().subscribe(res => {
            this.movies = res;
        });
    }
    deleteMovie(movie) {
        this.moviesService.deleteMovie(movie.id).subscribe(x => {
            this.loadMovies();
        });
    }
};
MoviesListComponent.ctorParameters = () => [
    { type: _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"] }
];
MoviesListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movies-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-list/movies-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movies-list.component.css */ "./src/app/movies/movies-list/movies-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
], MoviesListComponent);



/***/ }),

/***/ "./src/app/movies/movies-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _movies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movies_edit_movies_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movies-edit/movies-edit.component */ "./src/app/movies/movies-edit/movies-edit.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies/movies-list/movies-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





const routes = [
    {
        path: '', component: _movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"] },
            { path: 'edit/:id', component: _movies_edit_movies_edit_component__WEBPACK_IMPORTED_MODULE_3__["MoviesEditComponent"] },
            { path: 'edit', component: _movies_edit_movies_edit_component__WEBPACK_IMPORTED_MODULE_3__["MoviesEditComponent"] },
        ]
    }
];
let MoviesRoutingModule = class MoviesRoutingModule {
};
MoviesRoutingModule.routedComponents = [_movies_component__WEBPACK_IMPORTED_MODULE_2__["MoviesComponent"], _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_4__["MoviesListComponent"], _movies_edit_movies_edit_component__WEBPACK_IMPORTED_MODULE_3__["MoviesEditComponent"]];
MoviesRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        //declarations: [MoviesEditComponent, MoviesListComponent],
        //imports: [
        //  CommonModule
        //]
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], MoviesRoutingModule);



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let MoviesComponent = class MoviesComponent {
    constructor() { }
    ngOnInit() {
    }
};
MoviesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-movies',
        template: __importDefault(__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], MoviesComponent);



/***/ }),

/***/ "./src/app/movies/movies.module.ts":
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/angular-material.module */ "./src/app/shared/angular-material.module.ts");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/movies/movies-routing.module.ts");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"].routedComponents],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_5__["MoviesRoutingModule"],
            _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ],
        providers: [_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"]],
    })
], MoviesModule);



/***/ }),

/***/ "./src/app/movies/movies.service.ts":
/*!******************************************!*\
  !*** ./src/app/movies/movies.service.ts ***!
  \******************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/application.service */ "./src/app/core/services/application.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let MoviesService = class MoviesService {
    constructor(http, applicationService) {
        this.http = http;
        this.applicationService = applicationService;
    }
    getMovie(id) {
        return this.http.get(`${this.applicationService.baseUrl}api/Movies/${id}`);
    }
    listMovies() {
        return this.http.get(`${this.applicationService.baseUrl}api/Movies`);
    }
    saveMovie(movie) {
        return this.http.post(`${this.applicationService.baseUrl}api/Movies`, movie);
    }
    modifyMovie(movie) {
        return this.http.put(`${this.applicationService.baseUrl}api/Movies/${movie.id}`, movie);
    }
    deleteMovie(id) {
        return this.http.delete(`${this.applicationService.baseUrl}api/Movies/${id}`);
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }
];
MoviesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _core_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
], MoviesService);



/***/ })

}]);
//# sourceMappingURL=movies-movies-module.js.map