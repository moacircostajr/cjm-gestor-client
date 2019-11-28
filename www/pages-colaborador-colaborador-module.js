(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-colaborador-colaborador-module"],{

/***/ "./src/app/pages/colaborador/colaborador.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/colaborador/colaborador.module.ts ***!
  \*********************************************************/
/*! exports provided: ColaboradorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorPageModule", function() { return ColaboradorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _colaborador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colaborador.page */ "./src/app/pages/colaborador/colaborador.page.ts");







var routes = [
    {
        path: '',
        component: _colaborador_page__WEBPACK_IMPORTED_MODULE_6__["ColaboradorPage"]
    }
];
var ColaboradorPageModule = /** @class */ (function () {
    function ColaboradorPageModule() {
    }
    ColaboradorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_colaborador_page__WEBPACK_IMPORTED_MODULE_6__["ColaboradorPage"]]
        })
    ], ColaboradorPageModule);
    return ColaboradorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/colaborador/colaborador.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/colaborador/colaborador.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-title>Colaborador</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\n      <ion-fab-button (click)=\"registraUsuario()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\">Nome</ion-label>\n      <ion-input name=\"nome\" [(ngModel)]=\"usuario.nome\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Telefone</ion-label>\n      <ion-input name=\"telefone\" [(ngModel)]=\"usuario.telefone\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Perfil</ion-label>\n      <ion-select [(ngModel)]=\"usuario.perfil\" [ngModelOptions]=\"{standalone:true}\">\n        <ion-select-option value=\"ROLE_ADMIN\">ADMINISTRADOR</ion-select-option>\n        <ion-select-option value=\"ROLE_OPERADOR\">OPERADOR</ion-select-option>\n        <ion-select-option value=\"ROLE_PROFESSOR\">PROFESSOR</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Senha</ion-label>\n      <ion-input type=\"password\" name=\"senha\" [(ngModel)]=\"usuario.senha\"></ion-input>\n    </ion-item>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/colaborador/colaborador.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/colaborador/colaborador.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGFib3JhZG9yL2NvbGFib3JhZG9yLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/colaborador/colaborador.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/colaborador/colaborador.page.ts ***!
  \*******************************************************/
/*! exports provided: ColaboradorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaboradorPage", function() { return ColaboradorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Usuario */ "./src/app/model/Usuario.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/Config */ "./src/app/services/Config.ts");








var ColaboradorPage = /** @class */ (function () {
    function ColaboradorPage(activatedRoute, usuarioService, navCtrl, loginService) {
        this.activatedRoute = activatedRoute;
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
    }
    ColaboradorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (parametro) {
            if (parametro.id) {
                _this.usuarioService.obterUsuario(parametro.id).subscribe(function (dadosUsuario) {
                    if (dadosUsuario) {
                        _this.usuario.id = dadosUsuario.id;
                        _this.usuario.email = dadosUsuario.email;
                        _this.usuario.nome = dadosUsuario.nome;
                        _this.usuario.telefone = dadosUsuario.telefone;
                        _this.usuario.perfil = dadosUsuario.perfil;
                        _this.usuario.dataCriacao = dadosUsuario.dataCriacao;
                        _this.usuario.dataAtualizacao = dadosUsuario.dataAtualizacao;
                    }
                }, function (error) {
                    console.log(error);
                    // alert(PadroesService.centralDeTratamentoDeErros(error));
                });
            }
        });
    };
    ColaboradorPage.prototype.registraUsuario = function () {
        var _this = this;
        this.usuario.empresa = this.loginService.gestor.data.empresa;
        this.usuarioService.registrarUsuario(this.usuario).subscribe(function (resultado) {
            if (resultado != null) {
                alert(_services_Config__WEBPACK_IMPORTED_MODULE_7__["Config"].centralDeTratamentoDeErros(resultado.valueOf()));
                if (resultado === 201) {
                    _this.navCtrl.navigateBack('/colaboradores');
                }
            }
        }, function (erro) { alert(_services_Config__WEBPACK_IMPORTED_MODULE_7__["Config"].centralDeTratamentoDeErros(erro.status)); });
    };
    ColaboradorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colaborador',
            template: __webpack_require__(/*! ./colaborador.page.html */ "./src/app/pages/colaborador/colaborador.page.html"),
            styles: [__webpack_require__(/*! ./colaborador.page.scss */ "./src/app/pages/colaborador/colaborador.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_3__["UsuariosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], ColaboradorPage);
    return ColaboradorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-colaborador-colaborador-module.js.map