(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-alunos-alunos-module"],{

/***/ "./src/app/pages/alunos/alunos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/alunos/alunos.module.ts ***!
  \***********************************************/
/*! exports provided: AlunosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosPageModule", function() { return AlunosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alunos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alunos.page */ "./src/app/pages/alunos/alunos.page.ts");







var routes = [
    {
        path: '',
        component: _alunos_page__WEBPACK_IMPORTED_MODULE_6__["AlunosPage"]
    }
];
var AlunosPageModule = /** @class */ (function () {
    function AlunosPageModule() {
    }
    AlunosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alunos_page__WEBPACK_IMPORTED_MODULE_6__["AlunosPage"]]
        })
    ], AlunosPageModule);
    return AlunosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/alunos/alunos.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/alunos/alunos.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Alunos</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar #dadosCliente placeholder=\"Buscar\" (ionInput)=\"buscarAlunos(dadosCliente.value)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor=\"let aluno of alunos\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          {{aluno.nome}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>Email: {{aluno.email}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Endereço: {{aluno.endereco}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Bairro: {{aluno.bairro}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Cidade: {{aluno.cidade}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Estado: {{aluno.estado}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Telefone(s): {{aluno.telefone}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Questões resolvidas: {{aluno.questoes}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pontos obtidos: {{aluno.pontos}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Acertos: {{aluno.acertos}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Erros: {{aluno.erros}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Data da inscrição: {{aluno.dataCriacao}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Última atualização: {{aluno.dataAtualizacao}}</ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/alunos/alunos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/alunos/alunos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsdW5vcy9hbHVub3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/alunos/alunos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/alunos/alunos.page.ts ***!
  \*********************************************/
/*! exports provided: AlunosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosPage", function() { return AlunosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alunos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alunos.service */ "./src/app/services/alunos.service.ts");
/* harmony import */ var _services_Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Config */ "./src/app/services/Config.ts");






var AlunosPage = /** @class */ (function () {
    function AlunosPage(loginService, alunosService, router) {
        this.loginService = loginService;
        this.alunosService = alunosService;
        this.router = router;
    }
    AlunosPage.prototype.ngOnInit = function () {
    };
    AlunosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // tslint:disable-next-line:triple-equals
        if (this.loginService.empresa == undefined) {
            this.router.navigate([''], { replaceUrl: true });
        }
        else {
            this.alunosService.listarAlunos().subscribe(function (listaAlunos) {
                listaAlunos ? _this.alunos = listaAlunos : _this.alunos = [];
            }, function (erro) { alert(_services_Config__WEBPACK_IMPORTED_MODULE_5__["Config"].centralDeTratamentoDeErros(erro.status)); });
        }
    };
    AlunosPage.prototype.buscarAlunos = function (nomeAluno) {
        this.alunos = this.alunosService.filtrarAlunos(nomeAluno.toLowerCase(), this.alunos);
    };
    AlunosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alunos',
            template: __webpack_require__(/*! ./alunos.page.html */ "./src/app/pages/alunos/alunos.page.html"),
            styles: [__webpack_require__(/*! ./alunos.page.scss */ "./src/app/pages/alunos/alunos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _services_alunos_service__WEBPACK_IMPORTED_MODULE_4__["AlunosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AlunosPage);
    return AlunosPage;
}());



/***/ }),

/***/ "./src/app/services/alunos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/alunos.service.ts ***!
  \********************************************/
/*! exports provided: AlunosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlunosService", function() { return AlunosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Config */ "./src/app/services/Config.ts");





var AlunosService = /** @class */ (function () {
    function AlunosService(httpClient, loginService) {
        this.httpClient = httpClient;
        this.loginService = loginService;
    }
    Object.defineProperty(AlunosService.prototype, "header", {
        get: function () {
            return this.loginService.header;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlunosService.prototype, "empresa", {
        get: function () {
            return this.loginService.gestor.data.empresa;
        },
        enumerable: true,
        configurable: true
    });
    AlunosService.prototype.listarAlunos = function () {
        return this.httpClient.post(_Config__WEBPACK_IMPORTED_MODULE_4__["Config"].SERV_URL + '/api/cursos/alunos', this.empresa, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](this.header) });
    };
    AlunosService.prototype.filtrarAlunos = function (termosBusca, conjuntoDados) {
        return conjuntoDados.filter(function (item) {
            return item.nome.toLowerCase().indexOf(termosBusca) > -1;
        });
    };
    AlunosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AlunosService);
    return AlunosService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-alunos-alunos-module.js.map