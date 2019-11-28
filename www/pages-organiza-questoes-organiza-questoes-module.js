(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-organiza-questoes-organiza-questoes-module"],{

/***/ "./src/app/model/ClassificacaoPadrao.ts":
/*!**********************************************!*\
  !*** ./src/app/model/ClassificacaoPadrao.ts ***!
  \**********************************************/
/*! exports provided: ClassificacaoPadrao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificacaoPadrao", function() { return ClassificacaoPadrao; });
var ClassificacaoPadrao = /** @class */ (function () {
    function ClassificacaoPadrao(empresa) {
        this.empresa = empresa;
    }
    return ClassificacaoPadrao;
}());



/***/ }),

/***/ "./src/app/pages/organiza-questoes/organiza-questoes.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/organiza-questoes/organiza-questoes.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrganizaQuestoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaQuestoesPageModule", function() { return OrganizaQuestoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organiza_questoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organiza-questoes.page */ "./src/app/pages/organiza-questoes/organiza-questoes.page.ts");







var routes = [
    {
        path: '',
        component: _organiza_questoes_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaQuestoesPage"]
    }
];
var OrganizaQuestoesPageModule = /** @class */ (function () {
    function OrganizaQuestoesPageModule() {
    }
    OrganizaQuestoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_organiza_questoes_page__WEBPACK_IMPORTED_MODULE_6__["OrganizaQuestoesPage"]]
        })
    ], OrganizaQuestoesPageModule);
    return OrganizaQuestoesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/organiza-questoes/organiza-questoes.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/organiza-questoes/organiza-questoes.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"novoTopicoGeral()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"salvarTaxonomia()\">\n        <ion-icon name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>   \n    <ion-title>Matéria</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ng-template #recursiveList let-taxonomia>\n      <li *ngFor=\"let elemento of taxonomia\">\n        <ion-item>\n          <ion-input value=\"{{elemento.topico}}\" #valor (ionBlur)=\"atualiza(elemento.topico, valor.value)\"></ion-input>\n          <div>\n            <ion-button item-end (click)=\"remove(elemento.topico)\">\n              <ion-icon name=\"remove\"></ion-icon>\n            </ion-button>\n            <ion-button item-end (click)=\"novoSubitem(elemento.topico)\">\n              <ion-icon name=\"return-right\"></ion-icon>\n            </ion-button>\n          </div>\n        </ion-item>\n        <ul *ngIf=\"elemento.subtopico.length > 0\">\n          <ng-container *ngTemplateOutlet=\"recursiveList; context: { $implicit: elemento.subtopico }\"></ng-container>\n        </ul>\n      </li>\n    </ng-template>\n    <ng-container *ngTemplateOutlet=\"recursiveList; context: { $implicit: taxonomia }\"></ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/organiza-questoes/organiza-questoes.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/organiza-questoes/organiza-questoes.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul, li {\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYWNpci93b3Jrc3BhY2UvY2ptL2NqbS1nZXN0b3ItY2xpZW50L3NyYy9hcHAvcGFnZXMvb3JnYW5pemEtcXVlc3RvZXMvb3JnYW5pemEtcXVlc3RvZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmdhbml6YS1xdWVzdG9lcy9vcmdhbml6YS1xdWVzdG9lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/organiza-questoes/organiza-questoes.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/organiza-questoes/organiza-questoes.page.ts ***!
  \*******************************************************************/
/*! exports provided: OrganizaQuestoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizaQuestoesPage", function() { return OrganizaQuestoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/padroes.service */ "./src/app/services/padroes.service.ts");
/* harmony import */ var src_app_model_ClassificacaoPadrao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ClassificacaoPadrao */ "./src/app/model/ClassificacaoPadrao.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





var OrganizaQuestoesPage = /** @class */ (function () {
    function OrganizaQuestoesPage(
    // private organizaQuestoesDaoService: OrganizaQuestoesDaoService,
    padroesService, loginService
    // private questaoDao:QuestaoDaoService
    ) {
        this.padroesService = padroesService;
        this.loginService = loginService;
        this.classificacaoPadrao = new src_app_model_ClassificacaoPadrao__WEBPACK_IMPORTED_MODULE_3__["ClassificacaoPadrao"](this.loginService.empresa);
        this.taxonomia = [];
    }
    OrganizaQuestoesPage.prototype.ngOnInit = function () {
        this.obterTaxonomia();
    };
    /* public taxonomia =
    [
      {
        topico: 'gramatica',
        subtopico: [
          {
            topico: 'morfologia',
            subtopico: []
          }, {
            topico: 'sintaxe',
            subtopico: [{topico: 'frase', subtopico:[]},{topico: 'oracao', subtopico: []}, {topico: 'periodo', subtopico: []}]
          }
        ]
      }, {
        topico: 'semantica',
        subtopico: []
      }, {
        topico: 'estilistica',
        subtopico: []
      }
    ]; */
    OrganizaQuestoesPage.prototype.atualiza = function (pTopico, pValor) {
        this.buscaEAtualiza(this.taxonomia, pTopico, pValor);
    };
    OrganizaQuestoesPage.prototype.buscaEAtualiza = function (array, valor, novoValor) {
        var _this = this;
        var indice;
        array.forEach(function (obj) {
            if (obj.topico === valor) {
                indice = array.indexOf(obj);
                array[indice].topico = novoValor;
            }
            else if (obj.subtopico.length > 0) {
                _this.buscaEAtualiza(obj.subtopico, valor, novoValor);
            }
        });
    };
    OrganizaQuestoesPage.prototype.remove = function (valor) {
        this.buscaERemove(this.taxonomia, valor);
    };
    OrganizaQuestoesPage.prototype.buscaERemove = function (array, valor) {
        var _this = this;
        var indice;
        array.forEach(function (obj) {
            if (obj.topico === valor) {
                indice = array.indexOf(obj);
                array.splice(indice, 1);
            }
            else if (obj.subtopico.length > 0) {
                _this.buscaERemove(obj.subtopico, valor);
            }
        });
    };
    OrganizaQuestoesPage.prototype.novoSubitem = function (valor) {
        this.buscaEIncluiSubitem(this.taxonomia, valor);
    };
    OrganizaQuestoesPage.prototype.buscaEIncluiSubitem = function (array, valor) {
        var _this = this;
        var indice;
        array.forEach(function (obj) {
            if (obj.topico === valor) {
                indice = array.indexOf(obj);
                array[indice].subtopico.push({ topico: 'NOVO_SUBTOPICO', subtopico: [] });
            }
            else if (obj.subtopico.length > 0) {
                _this.buscaEIncluiSubitem(obj.subtopico, valor);
            }
        });
    };
    OrganizaQuestoesPage.prototype.novoTopicoGeral = function () {
        this.taxonomia.push({ topico: 'NOVO_TOPICO', subtopico: [] });
    };
    OrganizaQuestoesPage.prototype.obterTaxonomia = function () {
        var _this = this;
        this.padroesService.obterClassificacao().subscribe(function (padroesR) {
            if (padroesR) {
                _this.taxonomia = JSON.parse(padroesR.classificacao);
                _this.classificacaoPadrao = padroesR;
                // this.questaoDao.salvaClassificacaoPadrao(JSON.stringify(padroesR.classificacao));
            }
        } /* ,
          (error) => {
            console.log(error);
            this.questaoDao.obterClassificacaoPadrao().then(
              (classificacaoPadraoDao) => {
                this.taxonomia = JSON.parse(classificacaoPadraoDao.rows.item(0).classificacao);
              },
              (error) => {alert(PadroesService.centralDeTratamentoDeErros(error));}
            ).catch(
              (e) => {
                console.log(e);
                this.taxonomia = [];
              }
            );
          } */);
        /* this.organizaQuestoesDaoService.obter().subscribe(
          (organizacao :any[]) => {
            this.taxonomia = organizacao;
          },
          (error) => { console.log(error); }
        ); */
    };
    /* recuperarObjetos(dados) {
      console.log(dados);
    } */
    OrganizaQuestoesPage.prototype.salvarTaxonomia = function () {
        this.classificacaoPadrao.classificacao = JSON.stringify(this.taxonomia);
        // this.classificacaoPadrao.empresa = this.loginService.gestor.data.empresa;
        // this.questaoDao.salvaClassificacaoPadrao(JSON.stringify(this.taxonomia));
        this.padroesService.registrarClassificacao(this.classificacaoPadrao).subscribe(function (resultado) {
            if (resultado) {
                alert('Classificação registrada no servidor');
            }
            else {
                alert('Falha no servidor');
            }
        }, function (error) {
            console.log(error);
            // alert(this.padroesService.centralDeTratamentoDeErros(error));
        });
        // this.organizaQuestoesDaoService.salvar(this.taxonomia);
    };
    OrganizaQuestoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-organiza-questoes',
            template: __webpack_require__(/*! ./organiza-questoes.page.html */ "./src/app/pages/organiza-questoes/organiza-questoes.page.html"),
            styles: [__webpack_require__(/*! ./organiza-questoes.page.scss */ "./src/app/pages/organiza-questoes/organiza-questoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_2__["PadroesService"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
            // private questaoDao:QuestaoDaoService
        ])
    ], OrganizaQuestoesPage);
    return OrganizaQuestoesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-organiza-questoes-organiza-questoes-module.js.map