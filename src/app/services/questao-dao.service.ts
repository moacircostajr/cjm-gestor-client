import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx"
import { from as observableFrom } from 'rxjs';
import { Exercicio } from '../model/Exercicio';

@Injectable({
  providedIn: 'root'
})
export class QuestaoDaoService {

  private opcoes:any = {
    name: 'cjm_exercicios.db',
    location: 'default'
  };
  db:SQLiteObject;
  qtdeExercicios: number;

  constructor(
    private storage: Storage,
    private sqlite: SQLite
    ) {
      this.sqlite.create(this.opcoes).then(
        (sqliteObject:SQLiteObject) => {
          this.db = sqliteObject;
        },
        (e) => {console.log(e);}
      ).catch();
      if (this.storage.get('sqlite') == null) {
        this.criarBanco();
      }
      // this.limparTabelas();
      // this.criarBanco();
    }

  salvaFoto(imagem) {
    this.storage.set('imagem', imagem); /* o retorno do metodo set é uma promise, mas estamos trabalhando com observable. */
  }

  recuperaFoto() {
    let promise = this.storage.get('imagem'); /* o retorno do metodo set é uma promise, mas estamos trabalhando com observable. */
    return observableFrom(promise);
  }
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

  obterExercicio(id:number) {
    let query = 'SELECT id_serv, enunciado1, imagemEnunciado, enunciado2, opcoes, gabaritoObjetivo, gabaritoSubjetivo, pontuacao, materias, bancas, concursos, anos, metodoRequisicao FROM exercicios WHERE id = ?';
    return this.db.executeSql(query, [id]);
  }

  salvaExercicio(questao: Exercicio) {
    let id:number;
    this.obterNumeroExercicios();
    this.qtdeExercicios ? id = this.qtdeExercicios + 1 : id = 1;
    console.log('Salvando exercício.');
    let query = 'insert into exercicios (id, id_serv, enunciado1, imagemEnunciado, enunciado2, opcoes, gabaritoObjetivo, gabaritoSubjetivo, pontuacao, materias, bancas, concursos, anos, metodoRequisicao) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    this.db.executeSql(query, [id, questao.id, questao.enunciado1, questao.imagemEnunciado, questao.enunciado2, questao.opcoes, questao.gabaritoObjetivo, questao.gabaritoSubjetivo, questao.pontuacao, questao.materias, questao.bancas, questao.concursos, questao.anos, questao.metodoRequisicao]);
  }

  private obterNumeroExercicios() {
    let query = 'SELECT * FROM exercicios';
    this.db.executeSql(query, []).then(
      (resultado) => {
          this.qtdeExercicios = resultado.res.rows.length;
      }
    ).catch(e => console.log(e));
  }
  

  salvaClassificacaoPadrao(classificacao: string) {
    let query;
    query = "UPDATE classificacao_padrao SET classificacao = '" + classificacao + "' WHERE id = 1";
    this.db.executeSql(query, []);
  }

  obterClassificacaoPadrao() {
    let query = 'SELECT * FROM classificacao_padrao WHERE id = ?';
    return this.db.executeSql(query, [1]);
  }

  salvaConcursosPadrao(concursos: string) {
    let query;
    query = "UPDATE concursos_padrao SET concursos = '" + concursos + "' WHERE id = 1";
    this.db.executeSql(query, []);
  }

  obterConcursosPadrao() {
    let query = 'SELECT * FROM concursos_padrao WHERE id = ?';
    return this.db.executeSql(query, [1]);
  }

  salvaBancasPadrao(bancas: string) {
    let query;
    query = "UPDATE bancas_padrao SET bancas = '" + bancas + "' WHERE id = 1";
    this.db.executeSql(query, []);
  }

  obterBancasPadrao() {
    let query = 'SELECT * FROM bancas_padrao WHERE id = ?';
    return this.db.executeSql(query, [1]);
  }

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

  criarBanco() {
    let queryCriaTblExercicios = 'CREATE TABLE IF NOT EXISTS exercicios (id NUMBER PRIMARY KEY, id_serv NUMBER, enunciado1 TEXT, imagemEnunciado BLOB, enunciado2 TEXT, opcoes TEXT, gabaritoObjetivo NUMBER, gabaritoSubjetivo TEXT, pontuacao NUMBER, materias TEXT, bancas TEXT, concursos TEXT, anos TEXT, metodoRequisicao VARCHAR(7))';
    let queryCriaTblClassificacaoPadrao = 'CREATE TABLE IF NOT EXISTS classificacao_padrao (id NUMBER, classificacao TEXT)';
    let queryNovaClassificacaoPadrao = "INSERT INTO classificacao_padrao (id, classificacao) VALUES (1, 'classificacao_padrao')";
    let queryCriaTblBancasPadrao = 'CREATE TABLE IF NOT EXISTS bancas_padrao (id NUMBER, bancas TEXT)';
    let queryNovasBancasPadrao = "INSERT INTO bancas_padrao (id, bancas) VALUES (1, 'bancas_padrao')";
    let queryCriaTblConcursosPadrao = 'CREATE TABLE IF NOT EXISTS concursos_padrao (id NUMBER, concursos TEXT)';
    let queryNovosConcursosPadrao = "INSERT INTO concursos_padrao (id, concursos) VALUES (1, 'concursos_padrao')";

    this.db.executeSql(queryCriaTblClassificacaoPadrao, []);
    this.db.executeSql(queryNovaClassificacaoPadrao, []);
    this.db.executeSql(queryCriaTblBancasPadrao, []);
    this.db.executeSql(queryNovasBancasPadrao, []);
    this.db.executeSql(queryCriaTblConcursosPadrao, []);
    this.db.executeSql(queryNovosConcursosPadrao, []);
    this.db.executeSql(queryCriaTblExercicios, []);

    this.storage.set('sqlite', '1');
  }

  limparTabelas() {
    let query = 'DELETE FROM classificacao_padrao';
    this.db.executeSql(query, []);
    let query1 = 'DELETE FROM concursos_padrao';
    this.db.executeSql(query1, []);
    let query2 = 'DELETE FROM bancas_padrao';
    this.db.executeSql(query2, []);
  }

/* 
  private executarConsultaSQLite(query:string) {
    this.sqlite.create(this.opcoes).then(
      (sqLiteObject:SQLiteObject) => {
        sqLiteObject.executeSql(query, []).then(
          (resultado) => {
            this.resultadoConsultaSQLite = resultado.rows.item(0).bancas;
            for (let i = 0; i < resultado.rows.length; i++) {
              this.resultadoConsultaSQLite = resultado.rows.item(i);
            }
          }
          ).catch(e => console.log(e));
      }
    ).catch(e => console.log(e));
  } */

}
