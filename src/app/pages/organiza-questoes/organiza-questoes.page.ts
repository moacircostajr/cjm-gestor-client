import { Component, OnInit } from '@angular/core';
import { OrganizaQuestoesDaoService } from 'src/app/services/organiza-questoes-dao.service';
import { PadroesService } from 'src/app/services/padroes.service';
import { ClassificacaoPadrao } from 'src/app/model/ClassificacaoPadrao';
// import { QuestaoDaoService } from 'src/app/services/questao-dao.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Empresa } from 'src/app/model/Empresa';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-organiza-questoes',
  templateUrl: './organiza-questoes.page.html',
  styleUrls: ['./organiza-questoes.page.scss'],
})
export class OrganizaQuestoesPage implements OnInit {

  classificacaoPadrao: ClassificacaoPadrao = new ClassificacaoPadrao(this.loginService.empresa);
  taxonomia: any[] = [];

  constructor(
    // private organizaQuestoesDaoService: OrganizaQuestoesDaoService,
    private padroesService: PadroesService,
    private loginService: LoginService
    // private questaoDao:QuestaoDaoService
    ) { }

  ngOnInit() {
    this.obterTaxonomia();
  }
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

  atualiza(pTopico, pValor) {
    this.buscaEAtualiza(this.taxonomia, pTopico, pValor);
  }

  private buscaEAtualiza(array, valor, novoValor) {
    let indice;
    array.forEach((obj) => {
      if (obj.topico === valor) {
        indice = array.indexOf(obj);
        array[indice].topico = novoValor;
      } else if (obj.subtopico.length > 0) {
        this.buscaEAtualiza(obj.subtopico, valor, novoValor);
      }
    });
  }

  remove(valor) {
    this.buscaERemove(this.taxonomia, valor);
  }

  private buscaERemove(array, valor) {
    let indice;
    array.forEach((obj) => {
      if (obj.topico === valor) {
        indice = array.indexOf(obj);
        array.splice(indice, 1);
      } else if (obj.subtopico.length > 0) {
        this.buscaERemove(obj.subtopico, valor);
      }
    });
  }

  novoSubitem(valor) {
    this.buscaEIncluiSubitem(this.taxonomia, valor);
  }

  private buscaEIncluiSubitem(array, valor) {
    let indice;
    array.forEach((obj) => {
      if (obj.topico === valor) {
        indice = array.indexOf(obj);
        array[indice].subtopico.push({topico: 'NOVO_SUBTOPICO', subtopico: []});
      } else if (obj.subtopico.length > 0) {
        this.buscaEIncluiSubitem(obj.subtopico, valor);
      }
    });
  }

  novoTopicoGeral() {
    this.taxonomia.push({topico: 'NOVO_TOPICO', subtopico: []});
  }

  obterTaxonomia() {
    this.padroesService.obterClassificacao().subscribe(
      (padroesR: ClassificacaoPadrao) => {
        if (padroesR) {
          this.taxonomia = JSON.parse(padroesR.classificacao);
          this.classificacaoPadrao = padroesR;
          // this.questaoDao.salvaClassificacaoPadrao(JSON.stringify(padroesR.classificacao));
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
      (organizacao :any[]) => {
        this.taxonomia = organizacao;
      },
      (error) => { console.log(error); }
    ); */
  }

  /* recuperarObjetos(dados) {
    console.log(dados);
  } */

  salvarTaxonomia() {
    this.classificacaoPadrao.classificacao = JSON.stringify(this.taxonomia);
    // this.classificacaoPadrao.empresa = this.loginService.gestor.data.empresa;
    // this.questaoDao.salvaClassificacaoPadrao(JSON.stringify(this.taxonomia));
    this.padroesService.registrarClassificacao(this.classificacaoPadrao).subscribe(
      (resultado) => {
        if (resultado) {
          alert('Classificação registrada no servidor');
        } else {
          alert('Falha no servidor');
        }
      },
      (error) => {
        console.log(error);
        // alert(this.padroesService.centralDeTratamentoDeErros(error));
      }
    );
    // this.organizaQuestoesDaoService.salvar(this.taxonomia);
  }
}
