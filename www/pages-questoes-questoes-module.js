(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-questoes-questoes-module"],{

/***/ "./src/app/pages/questoes/questoes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/questoes/questoes.module.ts ***!
  \***************************************************/
/*! exports provided: QuestoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesPageModule", function() { return QuestoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questoes.page */ "./src/app/pages/questoes/questoes.page.ts");







var routes = [
    {
        path: '',
        component: _questoes_page__WEBPACK_IMPORTED_MODULE_6__["QuestoesPage"]
    }
];
var QuestoesPageModule = /** @class */ (function () {
    function QuestoesPageModule() {
    }
    QuestoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_questoes_page__WEBPACK_IMPORTED_MODULE_6__["QuestoesPage"]]
        })
    ], QuestoesPageModule);
    return QuestoesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/questoes/questoes.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/questoes/questoes.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Questões</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\n    <ion-fab-button routerLink=\"/questao\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div *ngFor=\"let exercicio of exercicios\">\n    <ion-card (click)=\"verExercicio(exercicio)\">\n      <ion-card-content>\n        <ion-item>\n          <ion-label>{{exercicio.id}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{exercicio.enunciado1}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{exercicio.enunciado2}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{exercicio.opcoes}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{exercicio.gabaritoObjetivo}}</ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/questoes/questoes.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/questoes/questoes.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0b2VzL3F1ZXN0b2VzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/questoes/questoes.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/questoes/questoes.page.ts ***!
  \*************************************************/
/*! exports provided: QuestoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesPage", function() { return QuestoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_questao_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/questao-service.service */ "./src/app/services/questao-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var QuestoesPage = /** @class */ (function () {
    function QuestoesPage(
    // private exercicioDaoService:QuestaoDaoService,
    exercicioService, navController) {
        this.exercicioService = exercicioService;
        this.navController = navController;
    }
    QuestoesPage.prototype.ionViewWillEnter = function () {
        this.obterExercicios();
        // this.obterExerciciosPorEnviar();
    };
    QuestoesPage.prototype.obterExercicios = function () {
        var _this = this;
        this.exercicioService.obterExercicios().subscribe(function (exercicios) { _this.exercicios = exercicios; }, function (error) {
            console.log(error);
        });
        /* if (!this.questoes) {
          this.questoes = [];
        }
        this.exercicioDaoService.obterQuestoes().subscribe(
          (listaQuestoes) => {
            this.questoes.push(listaQuestoes);
          },
          (error) => {console.log(error);}
        ); */
    };
    QuestoesPage.prototype.verExercicio = function (questao) {
        this.navController.navigateForward(['/questao', questao.id]);
    };
    QuestoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questoes',
            template: __webpack_require__(/*! ./questoes.page.html */ "./src/app/pages/questoes/questoes.page.html"),
            styles: [__webpack_require__(/*! ./questoes.page.scss */ "./src/app/pages/questoes/questoes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_questao_service_service__WEBPACK_IMPORTED_MODULE_2__["QuestaoServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], QuestoesPage);
    return QuestoesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-questoes-questoes-module.js.map