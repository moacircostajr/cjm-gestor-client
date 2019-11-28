(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-organiza-concursos-organiza-concursos-module"],{

/***/ "./src/app/model/ConcursosPadrao.ts":
/*!******************************************!*\
  !*** ./src/app/model/ConcursosPadrao.ts ***!
  \******************************************/
/*! exports provided: ConcursosPadrao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcursosPadrao", function() { return ConcursosPadrao; });
var ConcursosPadrao = /** @class */ (function () {
    function ConcursosPadrao(empresa) {
        this.empresa = empresa;
    }
    return ConcursosPadrao;
}());



/***/ }),

/***/ "./src/app/pages/organiza-concursos/organiza-concursos.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/organiza-concursos/organiza-concursos.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrganizaConcursosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaConcursosPageModule", function() { return OrganizaConcursosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organiza_concursos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organiza-concursos.page */ "./src/app/pages/organiza-concursos/organiza-concursos.page.ts");







var routes = [
    {
        path: '',
        component: _organiza_concursos_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaConcursosPage"]
    }
];
var OrganizaConcursosPageModule = /** @class */ (function () {
    function OrganizaConcursosPageModule() {
    }
    OrganizaConcursosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organiza_concursos_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaConcursosPage"]]
        })
    ], OrganizaConcursosPageModule);
    return OrganizaConcursosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/organiza-concursos/organiza-concursos.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/organiza-concursos/organiza-concursos.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"novoConcurso()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"salvarConcursos()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Concursos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor=\"let concurso of concursos\">\n    <ion-item>\n      <ion-input value=\"{{concurso}}\" #valor (ionBlur)=\"atualiza(concurso, valor.value)\"></ion-input>\n      <div>\n        <ion-button item-end (click)=\"remove(concurso)\">\n          <ion-icon name=\"remove\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-item>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/organiza-concursos/organiza-concursos.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/organiza-concursos/organiza-concursos.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZ2FuaXphLWNvbmN1cnNvcy9vcmdhbml6YS1jb25jdXJzb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/organiza-concursos/organiza-concursos.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/organiza-concursos/organiza-concursos.page.ts ***!
  \*********************************************************************/
/*! exports provided: OrganizaConcursosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaConcursosPage", function() { return OrganizaConcursosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/padroes.service */ "./src/app/services/padroes.service.ts");
/* harmony import */ var src_app_model_ConcursosPadrao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ConcursosPadrao */ "./src/app/model/ConcursosPadrao.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





var OrganizaConcursosPage = /** @class */ (function () {
    function OrganizaConcursosPage(padroesService, 
    // private questaoDao:QuestaoDaoService,
    loginService) {
        this.padroesService = padroesService;
        this.loginService = loginService;
        this.concursosPadrao = new src_app_model_ConcursosPadrao__WEBPACK_IMPORTED_MODULE_3__["ConcursosPadrao"](this.loginService.empresa);
    }
    OrganizaConcursosPage.prototype.ngOnInit = function () {
        this.obterConcursos();
    };
    OrganizaConcursosPage.prototype.atualiza = function (concurso, novoConcurso) {
        var pos = this.concursos.indexOf(concurso);
        this.concursos[pos] = novoConcurso;
    };
    OrganizaConcursosPage.prototype.remove = function (concurso) {
        var pos = this.concursos.indexOf(concurso);
        this.concursos.splice(pos, 1);
    };
    OrganizaConcursosPage.prototype.novoConcurso = function () {
        if (this.concursos == undefined) {
            this.concursos = [];
        }
        this.concursos.push('NOVO_CONCURSO');
    };
    OrganizaConcursosPage.prototype.salvarConcursos = function () {
        // this.questaoDao.salvaConcursosPadrao(JSON.stringify(concursosPadrao.concursos));
        this.concursosPadrao.concursos = this.concursos;
        this.padroesService.registrarConcursos(this.concursosPadrao).subscribe(function (resultado) {
            resultado ? alert('Concursos padrão registrados no servidor') : alert('Falha no servidor');
        }, function (error) {
            console.log(error);
        });
    };
    OrganizaConcursosPage.prototype.obterConcursos = function () {
        var _this = this;
        this.padroesService.obterConcursos().subscribe(function (concursosPadrao) {
            if (concursosPadrao) {
                _this.concursos = concursosPadrao.concursos;
                _this.concursosPadrao = concursosPadrao;
                // this.questaoDao.salvaConcursosPadrao(JSON.stringify(concursosPadrao));
            }
            else {
                _this.concursos = [];
            }
        } /* ,
        (error) => {
          console.log(error);
          this.questaoDao.obterConcursosPadrao().then(
            (concursosPadraoDao) => {
              this.concursos = JSON.parse(concursosPadraoDao.rows.item(0).concursos);
            },
            (error) => {alert(PadroesService.centralDeTratamentoDeErros(error));}
          ).catch(
            (e) => {
              console.log(e);
              this.concursos = [];
            }
          );
        } */);
    };
    OrganizaConcursosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organiza-concursos',
            template: __webpack_require__(/*! ./organiza-concursos.page.html */ "./src/app/pages/organiza-concursos/organiza-concursos.page.html"),
            styles: [__webpack_require__(/*! ./organiza-concursos.page.scss */ "./src/app/pages/organiza-concursos/organiza-concursos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__["PadroesService"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], OrganizaConcursosPage);
    return OrganizaConcursosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-organiza-concursos-organiza-concursos-module.js.map