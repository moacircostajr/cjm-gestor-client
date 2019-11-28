import { Component, OnInit } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { QuestaoDaoService } from 'src/app/services/questao-dao.service';
import { Exercicio } from 'src/app/model/Exercicio';
// import { OrganizaQuestoesDaoService } from 'src/app/services/organiza-questoes-dao.service';
// import { OrganizaBancasDaoService } from 'src/app/services/organiza-bancas-dao.service';
// import { OrganizaConcursosDaoService } from 'src/app/services/organiza-concursos-dao.service';
import { QuestaoServiceService } from 'src/app/services/questao-service.service';
import { NavController } from '@ionic/angular';
import { PadroesService } from 'src/app/services/padroes.service';
import { ClassificacaoPadrao } from 'src/app/model/ClassificacaoPadrao';
import { ActivatedRoute } from '@angular/router';
import { BancasPadrao } from 'src/app/model/BancasPadrao';
import { ConcursosPadrao } from 'src/app/model/ConcursosPadrao';
import { LoginService } from 'src/app/services/login.service';
import {ImageSnippet} from '../../model/ImageSnippet';
// import { Base64 } from '@ionic-native/base64/ngx';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.page.html',
  styleUrls: ['./questao.page.scss'],
})

export class QuestaoPage implements OnInit {

  pId: number;
  pEnunciado1: string;
  pImagem: string;
  pArquivo: FormData;
  pEnunciado2: string;
  pOpcoes: string[];
  pNAssertivas = 0;
  pItem0: string;
  pItem1: string;
  pItem2: string;
  pItem3: string;
  pItem4: string;
  pGabaritoObjetivo: number;
  pGabaritoSubjetivo: string;
  pPontuacao: number;
  taxonomia: any[];
  bancas: string[];
  provas: string[];
  pAno: number[];

  pProva: string[];
  pMateria: string[];
  pBanca: string[];
  exercicio: Exercicio;
  final: boolean;
  materia: string[];
  iterador: number;
  private selectedFile: ImageSnippet;

  constructor(
    private camera: Camera,
    private questaoDao: QuestaoDaoService,
    // private organizaQuestoesDaoService:OrganizaQuestoesDaoService,
    // private organizaBancasDaoService:OrganizaBancasDaoService,
    // private organizaProvasDaoService:OrganizaConcursosDaoService,
    private questaoService: QuestaoServiceService,
    private padroesService: PadroesService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
    // private base64:Base64
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametro) => {
        if (parametro.id) {
          this.questaoService.acessarExercicio(parametro.id).subscribe(
            (dadosExercicio: Exercicio) => {
              this.pId = dadosExercicio.id;
              this.pEnunciado1 = dadosExercicio.enunciado1;
              this.pImagem = dadosExercicio.imagemEnunciado;
              this.pEnunciado2 = dadosExercicio.enunciado2;
              this.pOpcoes = JSON.parse(dadosExercicio.opcoes);
              if (dadosExercicio.opcoes) {
                this.pNAssertivas = dadosExercicio.opcoes.length;
                this.pOpcoes[0] ? this.pItem0 = this.pOpcoes[0] : this.pItem0 = null;
                this.pOpcoes[1] ? this.pItem1 = this.pOpcoes[1] : this.pItem1 = null;
                this.pOpcoes[2] ? this.pItem2 = this.pOpcoes[2] : this.pItem2 = null;
                this.pOpcoes[3] ? this.pItem3 = this.pOpcoes[3] : this.pItem3 = null;
                this.pOpcoes[4] ? this.pItem4 = this.pOpcoes[4] : this.pItem4 = null;
                dadosExercicio.gabaritoObjetivo ? this.pGabaritoObjetivo = dadosExercicio.gabaritoObjetivo : this.pGabaritoObjetivo = null;
              }
              dadosExercicio.gabaritoSubjetivo ? this.pGabaritoSubjetivo = dadosExercicio.gabaritoSubjetivo : this.pGabaritoSubjetivo = null;
              this.pPontuacao = dadosExercicio.pontuacao;
              this.taxonomia = JSON.parse(dadosExercicio.materias);
              this.bancas = JSON.parse(dadosExercicio.bancas);
              this.provas = JSON.parse(dadosExercicio.concursos);
              this.pAno =  JSON.parse(dadosExercicio.anos);
            }
          );
        }
      }
    );
    this.obterTaxonomia();
    this.obterBancas();
    this.obterProvas();
  }

  fotografar() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      quality: 10,
      correctOrientation: true
    })
    .then((foto) => {
      this.pImagem = 'data:image/jpeg;base64,' + foto;
      this.questaoDao.salvaFoto(this.pImagem);
    },
    (err) => {console.log(err); })
    .catch(err => console.log(err));
  }

  get foto() {
    this.questaoDao.recuperaFoto().subscribe(
      (foto) => {
        this.pImagem = foto;
      },
      (err) => {console.log(err); }
      );
    return this.pImagem;
  }

  enviarArquivo(imageInput: any) {
    const file: File = imageInput.file[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      const formData = new FormData();

      formData.append('image', this.selectedFile.file);

      this.pArquivo = formData;
    });

    reader.readAsDataURL(file);
  }

  registrarQuestao() {
    if (!this.exercicio) {
      this.exercicio = new Exercicio();
    }
    this.exercicio.empresa = this.loginService.gestor.data.empresa;
    this.exercicio.enunciado1 = this.pEnunciado1;
    this.exercicio.imagemEnunciado = JSON.stringify(this.pImagem);
    this.exercicio.enunciado2 = this.pEnunciado2;
    this.pOpcoes = new Array<string>();
    if (this.pNAssertivas > 1) {
      this.pOpcoes.push(this.pItem0);
      this.pOpcoes.push(this.pItem1);
      if (this.pNAssertivas > 2) {
        this.pOpcoes.push(this.pItem2);
        this.pOpcoes.push(this.pItem3);
        if (this.pNAssertivas > 4) {
          this.pOpcoes.push(this.pItem4);
      }}
      this.exercicio.opcoes = JSON.stringify(this.pOpcoes);
      this.exercicio.gabaritoObjetivo = this.pGabaritoObjetivo;
    } else {
      this.exercicio.gabaritoSubjetivo = this.pGabaritoSubjetivo;
    }
    this.exercicio.pontuacao = this.pPontuacao;
    this.exercicio.materias = JSON.stringify(this.pMateria);
    this.exercicio.bancas = JSON.stringify(this.pBanca);
    this.exercicio.concursos = JSON.stringify(this.pProva);
    this.exercicio.anos = JSON.stringify(this.pAno);
    if (this.pId == null) {
      this.questaoService.enviaExercicio(this.exercicio).subscribe(
        (retorno) => {
          if (retorno) {
            alert('Exercício salvo no Servidor');
            this.navCtrl.navigateBack('/questoes');
          }/*  else {
            this.exercicio.metodoRequisicao = 'POST';
            this.questaoDao.salvaExercicio(this.exercicio)
          } */
        }/* ,
        (error) => {
          this.exercicio.metodoRequisicao = 'POST';
          this.questaoDao.salvaExercicio(this.exercicio).subscribe(
            () => {alert('Questão salva localmente');},
            (err) => {console.log(err);}
          );
        } */
      );
/*
    } else {
      this.questaoService.atualizarExercicio(this.exercicio).subscribe(
        (retorno) => {
          if (retorno) {
            alert('Exercício salvo no Servidor');
            this.navCtrl.navigateBack('questoes');
          } *//*  else {
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

  }

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

  obterTaxonomia() {
    this.padroesService.obterClassificacao().subscribe(
      (classificacao: ClassificacaoPadrao) => {
        if (classificacao) {
          // this.questaoDao.salvaClassificacaoPadrao(classificacao.classificacao);
          this.taxonomia = JSON.parse(classificacao.classificacao);
        }
      }/* ,
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
      } */
      );
     /* this.organizaQuestoesDaoService.obter().subscribe(
      (organizacao :any[]) => {this.taxonomia = organizacao;},
      (error) => {console.log(error);}
    ); */
  }

  definirCriterio(status, topico) {
    this.pMateria = [];
    this.final = false;
    this.materia = [];
    this.iterador = 0;
    if (status === true) {
      this.defineItensClassificacao(this.taxonomia, topico, 'taxonomia');
      // console.log(this.pMateria);
    }
  }

  private defineItensClassificacao(array, valor, nomeArray) {
    array.forEach((obj) => {
      if (this.final === false) {
        if (nomeArray === 'taxonomia') {
          this.materia = [];
        }
        this.iterador = array.indexOf(obj);
        if (obj.topico === valor) {
          this.materia.push(obj.topico);
          this.pMateria = this.materia;
          this.final = true;
          return;
        } else if (obj.subtopico.length > 0) {
          if (this.final === false) {
            this.materia.push(array[this.iterador].topico);
          }
          this.defineItensClassificacao(obj.subtopico, valor, obj.topico);
        }
      }
    });
  }

  obterBancas() {
    this.padroesService.obterBancas().subscribe(
      (listaBancas: BancasPadrao) => {
        if (listaBancas) {
          // this.questaoDao.salvaBancasPadrao(JSON.stringify(listaBancas));
          this.bancas = listaBancas.bancas;
        }
      }/* ,
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
      } */
    );
  }

  obterProvas() {
    this.padroesService.obterConcursos().subscribe(
      (listaConcursos: ConcursosPadrao) => {
        if (listaConcursos) {
          // this.questaoDao.salvaConcursosPadrao(JSON.stringify(listaConcursos));
          this.provas = listaConcursos.concursos;
        }
      }/* ,
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
      } */
    );
  }

  atualizaBancasQuestao(status, banca) {
    let pos = 0;
    if (!this.pBanca) {
      this.pBanca = [];
    }
    if (status) {
      this.pBanca.push(banca);
      pos = this.pBanca.indexOf(banca);
    } else {
      this.pBanca.splice(pos, 1);
    }
  }

  atualizaProvasQuestao(status, provas) {
    let pos = 0;
    if (!this.pProva) {
      this.pProva = [];
    }
    if (status) {
      this.pProva.push(provas);
      pos = this.pProva.indexOf(provas);
    } else {
      this.pProva.splice(pos, 1);
    }
  }

  adicionaAnoQuestao(ano) {
    if (!this.pAno) {
      this.pAno = [];
    }
    this.pAno.push(ano);
  }

  removeAnoQuestao(ano) {
    const pos = this.pAno.indexOf(ano);
    this.pAno.splice(pos, 1);
  }
}
