(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-questao-questao-module"],{

/***/ "./src/app/model/Exercicio.ts":
/*!************************************!*\
  !*** ./src/app/model/Exercicio.ts ***!
  \************************************/
/*! exports provided: Exercicio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercicio", function() { return Exercicio; });
var Exercicio = /** @class */ (function () {
    function Exercicio() {
    }
    return Exercicio;
}());



/***/ }),

/***/ "./src/app/pages/questao/questao.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/questao/questao.module.ts ***!
  \*************************************************/
/*! exports provided: QuestaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestaoPageModule", function() { return QuestaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questao.page */ "./src/app/pages/questao/questao.page.ts");







var routes = [
    {
        path: '',
        component: _questao_page__WEBPACK_IMPORTED_MODULE_6__["QuestaoPage"]
    }
];
var QuestaoPageModule = /** @class */ (function () {
    function QuestaoPageModule() {
    }
    QuestaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_questao_page__WEBPACK_IMPORTED_MODULE_6__["QuestaoPage"]]
        })
    ], QuestaoPageModule);
    return QuestaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/questao/questao.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/questao/questao.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>    \n    <ion-title>Questão</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form>\n    <ion-card>\n      <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\">Enunciado</ion-label>\n            <ion-textarea name=\"enunciado1\" [(ngModel)]=\"pEnunciado1\"></ion-textarea>\n          </ion-item>\n\n          <ion-button class=\"botao\" color=\"primary\" (click)=\"fotografar()\">Imagem</ion-button>\n\n          <img [src]=\"pImagem\" *ngIf=\"pImagem\"/>\n\n          <ion-item>\n            <ion-label position=\"floating\">Complemento</ion-label>\n            <ion-textarea  name=\"enunciado2\" [(ngModel)]=\"pEnunciado2\"></ion-textarea>\n          </ion-item>\n          <ion-item-group>\n              <ion-item>\n                  <ion-label stacked>Nº de assertivas</ion-label>\n                <ion-select [(ngModel)]=\"pNAssertivas\" name=\"assertivas\">\n                  <ion-select-option value=\"2\">2</ion-select-option>\n                  <ion-select-option value=\"4\">4</ion-select-option>\n                  <ion-select-option value=\"5\">5</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item-group [hidden]=\"pNAssertivas==0\">\n                  <ion-item *ngIf=\"pNAssertivas>1\">\n                    <ion-label position=\"floating\">a) </ion-label>\n                    <ion-input name=\"item0\" [(ngModel)]=\"pItem0\"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf=\"pNAssertivas>1\">\n                    <ion-label position=\"floating\">b) </ion-label>\n                    <ion-input name=\"item1\" [(ngModel)]=\"pItem1\"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf=\"pNAssertivas>2\">\n                    <ion-label position=\"floating\">c) </ion-label>\n                    <ion-input name=\"item2\" [(ngModel)]=\"pItem2\"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf=\"pNAssertivas>2\">\n                    <ion-label position=\"floating\">d) </ion-label>\n                    <ion-input name=\"item3\" [(ngModel)]=\"pItem3\"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf=\"pNAssertivas>4\">\n                    <ion-label position=\"floating\">e) </ion-label>\n                    <ion-input name=\"item4\" [(ngModel)]=\"pItem4\"></ion-input>\n                  </ion-item>\n              </ion-item-group>\n              <ion-item [hidden]=\"pNAssertivas==0\">\n                  <ion-label stacked>Solução objetiva</ion-label>\n                  <ion-select [(ngModel)]=\"pGabaritoObjetivo\" [ngModelOptions]=\"{standalone:true}\">\n                      <ion-select-option value=\"0\" *ngIf=\"pNAssertivas>1\">A</ion-select-option>\n                      <ion-select-option value=\"1\" *ngIf=\"pNAssertivas>1\">B</ion-select-option>\n                      <ion-select-option value=\"2\" *ngIf=\"pNAssertivas>2\">C</ion-select-option>\n                      <ion-select-option value=\"3\" *ngIf=\"pNAssertivas>2\">D</ion-select-option>\n                      <ion-select-option value=\"4\" *ngIf=\"pNAssertivas>4\">E</ion-select-option>\n                  </ion-select>\n              </ion-item>\n          </ion-item-group>\n          <ion-item [hidden]=\"pNAssertivas>0\">\n            <ion-label position=\"floating\">Solução dissertativa</ion-label>\n            <ion-textarea name=\"gabaritoSubjetivo\" [(ngModel)]=\"pGabaritoSubjetivo\"></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label stacked>Pontuação</ion-label>\n            <ion-input type=\"number\" name=\"pontuacao\" [(ngModel)]=\"pPontuacao\"></ion-input>\n          </ion-item>\n          <ion-list>\n            <ion-radio-group>\n              <ion-list-header>\n                <ion-label>Matéria</ion-label>\n              </ion-list-header>\n              <ul>\n                <ng-template #recursiveList let-taxonomia>\n                  <li *ngFor=\"let elemento of taxonomia\">\n                    <ion-item>\n                      <ion-label>{{elemento.topico}}</ion-label>\n                      <ion-radio slot=\"end\" #status (ionSelect)=\"definirCriterio(status.checked, elemento.topico)\"></ion-radio>\n                    </ion-item>\n                    <ul *ngIf=\"elemento.subtopico.length > 0\">\n                      <ng-container *ngTemplateOutlet=\"recursiveList; context: { $implicit: elemento.subtopico }\"></ng-container>\n                    </ul>\n                  </li>\n                </ng-template>\n                <ng-container *ngTemplateOutlet=\"recursiveList; context: { $implicit: taxonomia }\"></ng-container>\n              </ul>\n            </ion-radio-group>\n          </ion-list>\n          <ion-list>\n            <ion-list-header>\n              <ion-label>Bancas</ion-label>\n            </ion-list-header>\n            <div *ngFor=\"let banca of bancas\">\n              <ion-item>\n                <ion-label>{{banca}}</ion-label>\n                <ion-toggle #status color=\"secondary\" (ionChange)=\"atualizaBancasQuestao(status.checked, banca)\"></ion-toggle>\n              </ion-item>\n            </div>\n          </ion-list>\n          <ion-list>\n            <ion-list-header>\n              <ion-label>Provas</ion-label>\n            </ion-list-header>\n            <div *ngFor=\"let prova of provas\">\n              <ion-item>\n                <ion-label>{{prova}}</ion-label>\n                <ion-toggle #status color=\"secondary\" (ionChange)=\"atualizaProvasQuestao(status.checked, prova)\"></ion-toggle>\n              </ion-item>\n            </div>\n          </ion-list>\n          <ion-list>\n              <ion-list-header>\n                <ion-label>Ano</ion-label>\n              </ion-list-header>\n              <ion-item>\n                <ion-input type=\"number\" #tAno value=\"2019\"></ion-input>\n                <ion-button (click)=\"adicionaAnoQuestao(tAno.value)\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </ion-item>\n              <div *ngFor=\"let ano of pAno\">\n                <ion-item>\n                  <ion-label>{{ano}}</ion-label>\n                  <ion-button item-end (click)=\"removeAnoQuestao(ano)\">\n                    <ion-icon name=\"remove\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </div>\n            </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </form>\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\n    <ion-fab-button (click)=\"registrarQuestao()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/questao/questao.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/questao/questao.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul, li {\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vYWNpci93b3Jrc3BhY2UvY2ptL2NqbS1nZXN0b3ItY2xpZW50L3NyYy9hcHAvcGFnZXMvcXVlc3Rhby9xdWVzdGFvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVlc3Rhby9xdWVzdGFvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/questao/questao.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/questao/questao.page.ts ***!
  \***********************************************/
/*! exports provided: QuestaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestaoPage", function() { return QuestaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_app_services_questao_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/questao-dao.service */ "./src/app/services/questao-dao.service.ts");
/* harmony import */ var src_app_model_Exercicio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Exercicio */ "./src/app/model/Exercicio.ts");
/* harmony import */ var src_app_services_questao_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/questao-service.service */ "./src/app/services/questao-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/padroes.service */ "./src/app/services/padroes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





// import { OrganizaQuestoesDaoService } from 'src/app/services/organiza-questoes-dao.service';
// import { OrganizaBancasDaoService } from 'src/app/services/organiza-bancas-dao.service';
// import { OrganizaConcursosDaoService } from 'src/app/services/organiza-concursos-dao.service';





// import { Base64 } from '@ionic-native/base64/ngx';
var QuestaoPage = /** @class */ (function () {
    function QuestaoPage(camera, questaoDao, 
    // private organizaQuestoesDaoService:OrganizaQuestoesDaoService,
    // private organizaBancasDaoService:OrganizaBancasDaoService,
    // private organizaProvasDaoService:OrganizaConcursosDaoService,
    questaoService, padroesService, navCtrl, activatedRoute, loginService
    // private base64:Base64
    ) {
        this.camera = camera;
        this.questaoDao = questaoDao;
        this.questaoService = questaoService;
        this.padroesService = padroesService;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.pNAssertivas = 0;
    }
    QuestaoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (parametro) {
            if (parametro.id) {
                _this.questaoService.acessarExercicio(parametro.id).subscribe(function (dadosExercicio) {
                    _this.pId = dadosExercicio.id;
                    _this.pEnunciado1 = dadosExercicio.enunciado1;
                    _this.pImagem = dadosExercicio.imagemEnunciado;
                    _this.pEnunciado2 = dadosExercicio.enunciado2;
                    _this.pOpcoes = JSON.parse(dadosExercicio.opcoes);
                    if (dadosExercicio.opcoes) {
                        _this.pNAssertivas = dadosExercicio.opcoes.length;
                        _this.pOpcoes[0] ? _this.pItem0 = _this.pOpcoes[0] : _this.pItem0 = null;
                        _this.pOpcoes[1] ? _this.pItem1 = _this.pOpcoes[1] : _this.pItem1 = null;
                        _this.pOpcoes[2] ? _this.pItem2 = _this.pOpcoes[2] : _this.pItem2 = null;
                        _this.pOpcoes[3] ? _this.pItem3 = _this.pOpcoes[3] : _this.pItem3 = null;
                        _this.pOpcoes[4] ? _this.pItem4 = _this.pOpcoes[4] : _this.pItem4 = null;
                        dadosExercicio.gabaritoObjetivo ? _this.pGabaritoObjetivo = dadosExercicio.gabaritoObjetivo : _this.pGabaritoObjetivo = null;
                    }
                    dadosExercicio.gabaritoSubjetivo ? _this.pGabaritoSubjetivo = dadosExercicio.gabaritoSubjetivo : _this.pGabaritoSubjetivo = null;
                    _this.pPontuacao = dadosExercicio.pontuacao;
                    _this.taxonomia = JSON.parse(dadosExercicio.materias);
                    _this.bancas = JSON.parse(dadosExercicio.bancas);
                    _this.provas = JSON.parse(dadosExercicio.concursos);
                    _this.pAno = JSON.parse(dadosExercicio.anos);
                });
            }
        });
        this.obterTaxonomia();
        this.obterBancas();
        this.obterProvas();
    };
    QuestaoPage.prototype.fotografar = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            quality: 10,
            correctOrientation: true
        })
            .then(function (foto) {
            _this.pImagem = 'data:image/jpeg;base64,' + foto;
            _this.questaoDao.salvaFoto(_this.pImagem);
        }, function (err) { console.log(err); })
            .catch(function (err) { return console.log(err); });
    };
    Object.defineProperty(QuestaoPage.prototype, "foto", {
        get: function () {
            var _this = this;
            var resultado;
            this.questaoDao.recuperaFoto().subscribe(function (foto) {
                _this.pImagem = foto;
            }, function (err) { console.log(err); });
            return this.pImagem;
        },
        enumerable: true,
        configurable: true
    });
    QuestaoPage.prototype.registrarQuestao = function () {
        var _this = this;
        if (!this.exercicio) {
            this.exercicio = new src_app_model_Exercicio__WEBPACK_IMPORTED_MODULE_4__["Exercicio"]();
        }
        this.exercicio.empresa = this.loginService.gestor.data.empresa;
        this.exercicio.enunciado1 = this.pEnunciado1;
        this.exercicio.imagemEnunciado = JSON.stringify(this.pImagem);
        this.exercicio.enunciado2 = this.pEnunciado2;
        this.pOpcoes = new Array();
        if (this.pNAssertivas > 1) {
            this.pOpcoes.push(this.pItem0);
            this.pOpcoes.push(this.pItem1);
            if (this.pNAssertivas > 2) {
                this.pOpcoes.push(this.pItem2);
                this.pOpcoes.push(this.pItem3);
                if (this.pNAssertivas > 4) {
                    this.pOpcoes.push(this.pItem4);
                }
            }
            this.exercicio.opcoes = JSON.stringify(this.pOpcoes);
            this.exercicio.gabaritoObjetivo = this.pGabaritoObjetivo;
        }
        else {
            this.exercicio.gabaritoSubjetivo = this.pGabaritoSubjetivo;
        }
        this.exercicio.pontuacao = this.pPontuacao;
        this.exercicio.materias = JSON.stringify(this.pMateria);
        this.exercicio.bancas = JSON.stringify(this.pBanca);
        this.exercicio.concursos = JSON.stringify(this.pProva);
        this.exercicio.anos = JSON.stringify(this.pAno);
        if (this.pId == null) {
            this.questaoService.enviaExercicio(this.exercicio).subscribe(function (retorno) {
                if (retorno) {
                    alert('Exercício salvo no Servidor');
                    _this.navCtrl.navigateBack('questoes');
                } /*  else {
                  this.exercicio.metodoRequisicao = 'POST';
                  this.questaoDao.salvaExercicio(this.exercicio)
                } */
            } /* ,
            (error) => {
              this.exercicio.metodoRequisicao = 'POST';
              this.questaoDao.salvaExercicio(this.exercicio).subscribe(
                () => {alert('Questão salva localmente');},
                (err) => {console.log(err);}
              );
            } */);
            /*
                } else {
                  this.questaoService.atualizarExercicio(this.exercicio).subscribe(
                    (retorno) => {
                      if (retorno) {
                        alert('Exercício salvo no Servidor');
                        this.navCtrl.navigateBack('questoes');
                      } */ /*  else {
              this.exercicio.metodoRequisicao = 'PUT';
              this.questaoDao.salvaExercicio(this.exercicio);
            } */
            /*} ,
            (error) => {
              this.exercicio.metodoRequisicao = 'PUT';
              this.questaoDao.salvaExercicio(this.exercicio).subscribe(
                () => {alert('Questão salva localmente');},
                (err) => {console.log(err);}
              ) ;
            }
          );*/
        }
    };
    /* registrarQuestao() {
      if (!this.exercicio) {
        this.exercicio = new Exercicio();
      }
      this.exercicio.enunciado1 =this.pEnunciado1;
      this.exercicio.imagemEnunciado = this.pImagem;
      this.exercicio.enunciado2 = this.pEnunciado2;
      this.exercicio.opcoes = new Array<string>();
      if (this.pNAssertivas >= 4) {
        this.exercicio.opcoes.push(this.pItem0);
        this.exercicio.opcoes.push(this.pItem1);
        this.exercicio.opcoes.push(this.pItem2);
        this.exercicio.opcoes.push(this.pItem3);
        if (this.pNAssertivas === 5) {
          this.exercicio.opcoes.push(this.pItem4);
        }
        this.exercicio.gabaritoObjetivo = this.pGabaritoObjetivo;
      } else {
        this.exercicio.gabaritoSubjetivo = this.pGabaritoSubjetivo;
      }
      this.exercicio.pontuacao = this.pPontuacao;
      this.exercicio.materia = this.pMateria;
      this.exercicio.banca = this.pBanca;
      this.exercicio.prova = this.pProva;
      this.exercicio.ano = this.pAno;
      
      this.questaoService.enviaExercicio(this.exercicio).subscribe(
        (retorno) => {
          if (retorno) {
            alert('Exercício salvo no Servidor');
            this.navCtrl.navigateBack('questoes');
          } else {
            alert('Erro no Servidor');
          }
        },
        (error) => {
          this.questaoDao.salvaQuestao(this.exercicio).subscribe(
            () => {alert('Questão salva localmente');},
            (err) => {console.log(err);}
          );
        }
      );
      
    } */
    QuestaoPage.prototype.obterTaxonomia = function () {
        var _this = this;
        this.padroesService.obterClassificacao().subscribe(function (classificacao) {
            if (classificacao) {
                // this.questaoDao.salvaClassificacaoPadrao(classificacao.classificacao);
                _this.taxonomia = JSON.parse(classificacao.classificacao);
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
         (organizacao :any[]) => {this.taxonomia = organizacao;},
         (error) => {console.log(error);}
       ); */
    };
    QuestaoPage.prototype.definirCriterio = function (status, topico) {
        this.pMateria = [];
        this.final = false;
        this.materia = [];
        this.iterador = 0;
        if (status == true) {
            this.defineItensClassificacao(this.taxonomia, topico, 'taxonomia');
            // console.log(this.pMateria);
        }
    };
    QuestaoPage.prototype.defineItensClassificacao = function (array, valor, nomeArray) {
        var _this = this;
        array.forEach(function (obj) {
            if (_this.final == false) {
                if (nomeArray == 'taxonomia') {
                    _this.materia = [];
                }
                _this.iterador = array.indexOf(obj);
                if (obj.topico == valor) {
                    _this.materia.push(obj.topico);
                    _this.pMateria = _this.materia;
                    _this.final = true;
                    return;
                }
                else if (obj.subtopico.length > 0) {
                    if (_this.final == false) {
                        _this.materia.push(array[_this.iterador].topico);
                    }
                    _this.defineItensClassificacao(obj.subtopico, valor, obj.topico);
                }
            }
        });
    };
    QuestaoPage.prototype.obterBancas = function () {
        var _this = this;
        this.padroesService.obterBancas().subscribe(function (listaBancas) {
            if (listaBancas) {
                // this.questaoDao.salvaBancasPadrao(JSON.stringify(listaBancas));
                _this.bancas = listaBancas.bancas;
            }
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
    QuestaoPage.prototype.obterProvas = function () {
        var _this = this;
        this.padroesService.obterConcursos().subscribe(function (listaConcursos) {
            if (listaConcursos) {
                // this.questaoDao.salvaConcursosPadrao(JSON.stringify(listaConcursos));
                _this.provas = listaConcursos.concursos;
            }
        } /* ,
        (error) => {
          console.log(error);
          this.questaoDao.obterConcursosPadrao().then(
            (concursosPadraoDao) => {
              this.provas = JSON.parse(concursosPadraoDao.rows.item(0).concursos);
            },
            (error) => {alert(PadroesService.centralDeTratamentoDeErros(error));}
          ).catch(
            (e) => {
              console.log(e);
              this.provas = [];
            }
          );
        } */);
    };
    QuestaoPage.prototype.atualizaBancasQuestao = function (status, banca) {
        var pos = 0;
        if (!this.pBanca) {
            this.pBanca = [];
        }
        if (status) {
            this.pBanca.push(banca);
            pos = this.pBanca.indexOf(banca);
        }
        else {
            this.pBanca.splice(pos, 1);
        }
    };
    QuestaoPage.prototype.atualizaProvasQuestao = function (status, provas) {
        var pos = 0;
        if (!this.pProva) {
            this.pProva = [];
        }
        if (status) {
            this.pProva.push(provas);
            pos = this.pProva.indexOf(provas);
        }
        else {
            this.pProva.splice(pos, 1);
        }
    };
    QuestaoPage.prototype.adicionaAnoQuestao = function (ano) {
        if (!this.pAno) {
            this.pAno = [];
        }
        this.pAno.push(ano);
    };
    QuestaoPage.prototype.removeAnoQuestao = function (ano) {
        var pos = this.pAno.indexOf(ano);
        this.pAno.splice(pos, 1);
    };
    QuestaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questao',
            template: __webpack_require__(/*! ./questao.page.html */ "./src/app/pages/questao/questao.page.html"),
            styles: [__webpack_require__(/*! ./questao.page.scss */ "./src/app/pages/questao/questao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            src_app_services_questao_dao_service__WEBPACK_IMPORTED_MODULE_3__["QuestaoDaoService"],
            src_app_services_questao_service_service__WEBPACK_IMPORTED_MODULE_5__["QuestaoServiceService"],
            src_app_services_padroes_service__WEBPACK_IMPORTED_MODULE_7__["PadroesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]
            // private base64:Base64
        ])
    ], QuestaoPage);
    return QuestaoPage;
}());



/***/ }),

/***/ "./src/app/services/questao-dao.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/questao-dao.service.ts ***!
  \*************************************************/
/*! exports provided: QuestaoDaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestaoDaoService", function() { return QuestaoDaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var QuestaoDaoService = /** @class */ (function () {
    function QuestaoDaoService(storage, sqlite) {
        var _this = this;
        this.storage = storage;
        this.sqlite = sqlite;
        this.opcoes = {
            name: 'cjm_exercicios.db',
            location: 'default'
        };
        this.sqlite.create(this.opcoes).then(function (sqliteObject) {
            _this.db = sqliteObject;
        }, function (e) { console.log(e); }).catch();
        if (this.storage.get('sqlite') == null) {
            this.criarBanco();
        }
        // this.limparTabelas();
        // this.criarBanco();
    }
    QuestaoDaoService.prototype.salvaFoto = function (imagem) {
        this.storage.set('imagem', imagem); /* o retorno do metodo set é uma promise, mas estamos trabalhando com observable. */
    };
    QuestaoDaoService.prototype.recuperaFoto = function () {
        var promise = this.storage.get('imagem'); /* o retorno do metodo set é uma promise, mas estamos trabalhando com observable. */
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(promise);
    };
    /*
      salvaQuestao(questao: Exercicio) {
        let promise = this.storage.set('questao', questao);
        return observableFrom(promise);
      }
    
      obterQuestoes() {
        let promise = this.storage.get('questao');
        return observableFrom(promise);
      }
     */
    QuestaoDaoService.prototype.obterExercicio = function (id) {
        var query = 'SELECT id_serv, enunciado1, imagemEnunciado, enunciado2, opcoes, gabaritoObjetivo, gabaritoSubjetivo, pontuacao, materias, bancas, concursos, anos, metodoRequisicao FROM exercicios WHERE id = ?';
        return this.db.executeSql(query, [id]);
    };
    QuestaoDaoService.prototype.salvaExercicio = function (questao) {
        var id;
        this.obterNumeroExercicios();
        this.qtdeExercicios ? id = this.qtdeExercicios + 1 : id = 1;
        console.log('Salvando exercício.');
        var query = 'insert into exercicios (id, id_serv, enunciado1, imagemEnunciado, enunciado2, opcoes, gabaritoObjetivo, gabaritoSubjetivo, pontuacao, materias, bancas, concursos, anos, metodoRequisicao) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        this.db.executeSql(query, [id, questao.id, questao.enunciado1, questao.imagemEnunciado, questao.enunciado2, questao.opcoes, questao.gabaritoObjetivo, questao.gabaritoSubjetivo, questao.pontuacao, questao.materias, questao.bancas, questao.concursos, questao.anos, questao.metodoRequisicao]);
    };
    QuestaoDaoService.prototype.obterNumeroExercicios = function () {
        var _this = this;
        var query = 'SELECT * FROM exercicios';
        this.db.executeSql(query, []).then(function (resultado) {
            _this.qtdeExercicios = resultado.res.rows.length;
        }).catch(function (e) { return console.log(e); });
    };
    QuestaoDaoService.prototype.salvaClassificacaoPadrao = function (classificacao) {
        var query;
        query = "UPDATE classificacao_padrao SET classificacao = '" + classificacao + "' WHERE id = 1";
        this.db.executeSql(query, []);
    };
    QuestaoDaoService.prototype.obterClassificacaoPadrao = function () {
        var query = 'SELECT * FROM classificacao_padrao WHERE id = ?';
        return this.db.executeSql(query, [1]);
    };
    QuestaoDaoService.prototype.salvaConcursosPadrao = function (concursos) {
        var query;
        query = "UPDATE concursos_padrao SET concursos = '" + concursos + "' WHERE id = 1";
        this.db.executeSql(query, []);
    };
    QuestaoDaoService.prototype.obterConcursosPadrao = function () {
        var query = 'SELECT * FROM concursos_padrao WHERE id = ?';
        return this.db.executeSql(query, [1]);
    };
    QuestaoDaoService.prototype.salvaBancasPadrao = function (bancas) {
        var query;
        query = "UPDATE bancas_padrao SET bancas = '" + bancas + "' WHERE id = 1";
        this.db.executeSql(query, []);
    };
    QuestaoDaoService.prototype.obterBancasPadrao = function () {
        var query = 'SELECT * FROM bancas_padrao WHERE id = ?';
        return this.db.executeSql(query, [1]);
    };
    /*
    obterExercicios() {
      console.log('Obtendo lista de exercícios salvos no SQLite');
      let listaExercicios:Exercicio[];
      let query = 'select * from exercicios';
      this.sqlite.create(this.opcoes).then(
        (sqLiteObject:SQLiteObject) => {
          sqLiteObject.executeSql(query, []).then(
            (resultado) => {
              console.log('SQL Executado: ' + query );
              if (resultado.res.rows.length > 0) {
                resultado.res.rows.forEach(element => {
                  listaExercicios.push(element);
                });
              }
            }
            ).catch(e => console.log(e));
        }
      ).catch(e => console.log(e));
      return listaExercicios;
    }
  */
    QuestaoDaoService.prototype.criarBanco = function () {
        var queryCriaTblExercicios = 'CREATE TABLE IF NOT EXISTS exercicios (id NUMBER PRIMARY KEY, id_serv NUMBER, enunciado1 TEXT, imagemEnunciado BLOB, enunciado2 TEXT, opcoes TEXT, gabaritoObjetivo NUMBER, gabaritoSubjetivo TEXT, pontuacao NUMBER, materias TEXT, bancas TEXT, concursos TEXT, anos TEXT, metodoRequisicao VARCHAR(7))';
        var queryCriaTblClassificacaoPadrao = 'CREATE TABLE IF NOT EXISTS classificacao_padrao (id NUMBER, classificacao TEXT)';
        var queryNovaClassificacaoPadrao = "INSERT INTO classificacao_padrao (id, classificacao) VALUES (1, 'classificacao_padrao')";
        var queryCriaTblBancasPadrao = 'CREATE TABLE IF NOT EXISTS bancas_padrao (id NUMBER, bancas TEXT)';
        var queryNovasBancasPadrao = "INSERT INTO bancas_padrao (id, bancas) VALUES (1, 'bancas_padrao')";
        var queryCriaTblConcursosPadrao = 'CREATE TABLE IF NOT EXISTS concursos_padrao (id NUMBER, concursos TEXT)';
        var queryNovosConcursosPadrao = "INSERT INTO concursos_padrao (id, concursos) VALUES (1, 'concursos_padrao')";
        this.db.executeSql(queryCriaTblClassificacaoPadrao, []);
        this.db.executeSql(queryNovaClassificacaoPadrao, []);
        this.db.executeSql(queryCriaTblBancasPadrao, []);
        this.db.executeSql(queryNovasBancasPadrao, []);
        this.db.executeSql(queryCriaTblConcursosPadrao, []);
        this.db.executeSql(queryNovosConcursosPadrao, []);
        this.db.executeSql(queryCriaTblExercicios, []);
        this.storage.set('sqlite', '1');
    };
    QuestaoDaoService.prototype.limparTabelas = function () {
        var query = 'DELETE FROM classificacao_padrao';
        this.db.executeSql(query, []);
        var query1 = 'DELETE FROM concursos_padrao';
        this.db.executeSql(query1, []);
        var query2 = 'DELETE FROM bancas_padrao';
        this.db.executeSql(query2, []);
    };
    QuestaoDaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"]])
    ], QuestaoDaoService);
    return QuestaoDaoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-questao-questao-module.js.map