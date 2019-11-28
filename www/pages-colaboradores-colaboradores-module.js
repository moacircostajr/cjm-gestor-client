(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-colaboradores-colaboradores-module"],{

/***/ "./src/app/pages/colaboradores/colaboradores.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/colaboradores/colaboradores.module.ts ***!
  \*************************************************************/
/*! exports provided: ColaboradoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresPageModule", function() { return ColaboradoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _colaboradores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colaboradores.page */ "./src/app/pages/colaboradores/colaboradores.page.ts");







var routes = [
    {
        path: '',
        component: _colaboradores_page__WEBPACK_IMPORTED_MODULE_6__["ColaboradoresPage"]
    }
];
var ColaboradoresPageModule = /** @class */ (function () {
    function ColaboradoresPageModule() {
    }
    ColaboradoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_colaboradores_page__WEBPACK_IMPORTED_MODULE_6__["ColaboradoresPage"]]
        })
    ], ColaboradoresPageModule);
    return ColaboradoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/colaboradores/colaboradores.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/colaboradores/colaboradores.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Colaboradores</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\n    <ion-fab-button routerLink=\"/colaborador\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <div>\n    <ion-item (click)=\"verColaborador(colaborador)\" *ngFor=\"let colaborador of colaboradores\">\n      <ion-label>{{colaborador.nome}}</ion-label>\n    </ion-item>\n  </div>\n</ion-content>\n  \n"

/***/ }),

/***/ "./src/app/pages/colaboradores/colaboradores.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/colaboradores/colaboradores.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGFib3JhZG9yZXMvY29sYWJvcmFkb3Jlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/colaboradores/colaboradores.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/colaboradores/colaboradores.page.ts ***!
  \***********************************************************/
/*! exports provided: ColaboradoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradoresPage", function() { return ColaboradoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ "./src/app/model/Usuario.ts");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");






var ColaboradoresPage = /** @class */ (function () {
    function ColaboradoresPage(usuariosService, navController, loginService) {
        this.usuariosService = usuariosService;
        this.navController = navController;
        this.loginService = loginService;
        this.colaborador = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
    }
    ColaboradoresPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.gestor = this.loginService.gestor;
        this.usuariosService.obterUsuarios(this.gestor.data.empresa).subscribe(function (usuarios) {
            _this.colaboradores = usuarios;
        }, function (error) {
            console.log(error);
            // alert(PadroesService.centralDeTratamentoDeErros(error));
        });
    };
    ColaboradoresPage.prototype.verColaborador = function (colaborador) {
        this.navController.navigateForward(['/colaborador', colaborador.id]);
    };
    ColaboradoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colaboradores',
            template: __webpack_require__(/*! ./colaboradores.page.html */ "./src/app/pages/colaboradores/colaboradores.page.html"),
            styles: [__webpack_require__(/*! ./colaboradores.page.scss */ "./src/app/pages/colaboradores/colaboradores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], ColaboradoresPage);
    return ColaboradoresPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-colaboradores-colaboradores-module.js.map