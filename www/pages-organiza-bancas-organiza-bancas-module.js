(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-organiza-bancas-organiza-bancas-module"],{

/***/ "./src/app/model/BancasPadrao.ts":
/*!***************************************!*\
  !*** ./src/app/model/BancasPadrao.ts ***!
  \***************************************/
/*! exports provided: BancasPadrao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BancasPadrao", function() { return BancasPadrao; });
var BancasPadrao = /** @class */ (function () {
    function BancasPadrao(empresa) {
        this.empresa = empresa;
    }
    return BancasPadrao;
}());



/***/ }),

/***/ "./src/app/pages/organiza-bancas/organiza-bancas.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/organiza-bancas/organiza-bancas.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrganizaBancasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaBancasPageModule", function() { return OrganizaBancasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organiza_bancas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organiza-bancas.page */ "./src/app/pages/organiza-bancas/organiza-bancas.page.ts");







var routes = [
    {
        path: '',
        component: _organiza_bancas_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaBancasPage"]
    }
];
var OrganizaBancasPageModule = /** @class */ (function () {
    function OrganizaBancasPageModule() {
    }
    OrganizaBancasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organiza_bancas_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaBancasPage"]]
        })
    ], OrganizaBancasPageModule);
    return OrganizaBancasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/organiza-bancas/organiza-bancas.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/organiza-bancas/organiza-bancas.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"novaBanca()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"salvarBancas()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Bancas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor=\"let banca of bancas\">\n    <ion-item>\n      <ion-input value=\"{{banca}}\" #valor (ionBlur)=\"atualiza(banca, valor.value)\"></ion-input>\n      <div>\n        <ion-button item-end (click)=\"remove(banca)\">\n          <ion-icon name=\"remove\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-item>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/organiza-bancas/organiza-bancas.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/organiza-bancas/organiza-bancas.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZ2FuaXphLWJhbmNhcy9vcmdhbml6YS1iYW5jYXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/organiza-bancas/organiza-bancas.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/organiza-bancas/organiza-bancas.page.ts ***!
  \***************************************************************/
/*! exports provided: OrganizaBancasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaBancasPage", function() { return OrganizaBancasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/padroes.service */ "./src/app/services/padroes.service.ts");
/* harmony import */ var src_app_model_BancasPadrao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/BancasPadrao */ "./src/app/model/BancasPadrao.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





// import { QuestaoDaoService } from 'src/app/services/questao-dao.service';
var OrganizaBancasPage = /** @class */ (function () {
    function OrganizaBancasPage(padroesService, loginService
    // private questaoDao:QuestaoDaoService
    ) {
        this.padroesService = padroesService;
        this.loginService = loginService;
        this.bancas = [];
        this.bancasPadrao = new src_app_model_BancasPadrao__WEBPACK_IMPORTED_MODULE_3__["BancasPadrao"](this.loginService.empresa);
    }
    OrganizaBancasPage.prototype.ngOnInit = function () {
        this.obterBancas();
    };
    OrganizaBancasPage.prototype.atualiza = function (banca, novaBanca) {
        var pos = this.bancas.indexOf(banca);
        this.bancas[pos] = novaBanca;
    };
    OrganizaBancasPage.prototype.remove = function (banca) {
        var pos = this.bancas.indexOf(banca);
        this.bancas.splice(pos, 1);
    };
    OrganizaBancasPage.prototype.novaBanca = function () {
        if (this.bancas == undefined) {
            this.bancas = [];
        }
        this.bancas.push('NOVA_BANCA');
    };
    OrganizaBancasPage.prototype.salvarBancas = function () {
        this.bancasPadrao.bancas = this.bancas;
        // this.questaoDao.salvaBancasPadrao(JSON.stringify(bancasPadrao.bancas));
        this.padroesService.registrarBancas(this.bancasPadrao).subscribe(function (resultado) {
            resultado ? alert('Bancas registradas no servidor') : alert('Falha no servidor');
            /* TODO: quando houver falha, os dados registrados no banco local devem ser enviados p/ o servidor quando a internet estiver restabelecida */
        }, function (error) {
            console.log(error);
        });
    };
    OrganizaBancasPage.prototype.obterBancas = function () {
        var _this = this;
        this.padroesService.obterBancas().subscribe(function (padroesR) {
            if (padroesR) {
                _this.bancas = padroesR.bancas;
                _this.bancasPadrao = padroesR;
                // this.questaoDao.salvaBancasPadrao(JSON.stringify(padroesR));
            }
            else {
                _this.bancas = [];
            }
            ;
        } /* ,
        () => {
          this.questaoDao.obterBancasPadrao().then(
            (bancasPadraoDao) => {
              this.bancas = JSON.parse(bancasPadraoDao.rows.item(0).bancas);
            },
            (error) => {alert(PadroesService.centralDeTratamentoDeErros(error));}
          ).catch(
            (e) => {
              console.log(e);
              this.bancas = [];
            }
          );
        } */);
    };
    OrganizaBancasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organiza-bancas',
            template: __webpack_require__(/*! ./organiza-bancas.page.html */ "./src/app/pages/organiza-bancas/organiza-bancas.page.html"),
            styles: [__webpack_require__(/*! ./organiza-bancas.page.scss */ "./src/app/pages/organiza-bancas/organiza-bancas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__["PadroesService"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
            // private questaoDao:QuestaoDaoService
        ])
    ], OrganizaBancasPage);
    return OrganizaBancasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-organiza-bancas-organiza-bancas-module.js.map