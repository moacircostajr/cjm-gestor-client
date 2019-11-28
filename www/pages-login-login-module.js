(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/model/Login.ts":
/*!********************************!*\
  !*** ./src/app/model/Login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding scroll=\"false\">\n  <p class=\"texto-alinh-centr\">Gestor do Site</p>\n  <p class=\"texto-alinh-centr\">Login</p>\n  <div class=\"painel-login\">\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Senha</ion-label>\n      <ion-input type=\"password\" name=\"senha\" [(ngModel)]=\"senha\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"acessar()\">\n      Entrar\n    </ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto-alinh-centr {\n  text-align: center; }\n\n.painel-login {\n  padding: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYWNpci93b3Jrc3BhY2UvY2ptL2NqbS1nZXN0b3ItY2xpZW50L3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvLWFsaW5oLWNlbnRyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWluZWwtbG9naW4ge1xuICAgIHBhZGRpbmc6IDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_model_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Login */ "./src/app/model/Login.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/Config */ "./src/app/services/Config.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, loginService, storage) {
        this.router = router;
        this.loginService = loginService;
        this.storage = storage;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginService.login = true;
    };
    LoginPage.prototype.acessar = function () {
        var _this = this;
        var login = new src_app_model_Login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
        login.email = this.email;
        login.senha = this.senha;
        this.loginService.logar(login).subscribe(function (dadosGestor) {
            if (dadosGestor) {
                _this.storage.set('gestor-cjm', JSON.stringify(dadosGestor));
                _this.loginService.gestor = dadosGestor;
                _this.loginService.empresa = dadosGestor.data.empresa;
                var headersTmp = {
                    Authorization: 'Bearer ' + dadosGestor.data.autenticacao.token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                };
                _this.storage.set('headers-cjm', JSON.stringify(headersTmp));
                _this.loginService.header = headersTmp;
                _this.router.navigate(['/home'], { replaceUrl: true });
            }
        }, function (error) { alert(src_app_services_Config__WEBPACK_IMPORTED_MODULE_6__["Config"].centralDeTratamentoDeErros(error.status)); });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());

/* header = { headers: new HttpHeaders({
  // 'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Accept, Credentials',
  'Access-Control-Allow-Headers': 'auth-token, access-control-allow-origin',
  'Access-Control-Allow-Origin': 'http://localhost:8100',
  // 'Access-Control-Max-Age': '3600',
  // 'Credentials': 'true',
  'Authorization': ''
})}; */
// 'Access-Control-Allow-Headers': 'Authorization, Content-Type, Access-Control-Allow-Origin'
// 'Access-Control-Allow-Headers': 'auth-token, access-control-allow-origin',
// 'Access-Control-Max-Age': '3600',
// 'Credentials': 'true',


/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map