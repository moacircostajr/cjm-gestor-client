import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './Config';
import { ClassificacaoPadrao } from '../model/ClassificacaoPadrao';
import { LoginService } from './login.service';
import { BancasPadrao } from '../model/BancasPadrao';
import { ConcursosPadrao } from '../model/ConcursosPadrao';

@Injectable({
  providedIn: 'root'
})
export class PadroesService {

  constructor(
    private httpClient:HttpClient,
    private loginService:LoginService
    ) { }

  get header() {
    return this.loginService.header;
  }

  get empresa() {
    return this.loginService.empresa;
  }

  registrarClassificacao(classificacao:ClassificacaoPadrao) {
    return this.httpClient.post(Config.SERV_URL + '/api/cursos/registrar/classificacao', classificacao, {headers: new HttpHeaders(this.header)});
  }

  registrarBancas(bancas:BancasPadrao) {
    return this.httpClient.post(Config.SERV_URL + '/api/cursos/registrar/bancas', bancas, {headers: new HttpHeaders(this.header)});
  }
  registrarConcursos(concursos:ConcursosPadrao) {
    return this.httpClient.post(Config.SERV_URL + '/api/cursos/registrar/concursos', concursos, {headers: new HttpHeaders(this.header)});
  }

  obterClassificacao() {
    return this.httpClient.post<ClassificacaoPadrao>(Config.SERV_URL + '/api/cursos/padrao_classificacao', this.empresa, {headers: new HttpHeaders(this.header)});
  }

  obterBancas() {
    return this.httpClient.post<BancasPadrao>(Config.SERV_URL + '/api/cursos/padrao_bancas', this.empresa, {headers: new HttpHeaders(this.header)});
  }

  obterConcursos() {
    return this.httpClient.post<ConcursosPadrao>(Config.SERV_URL + '/api/cursos/padrao_concursos', this.empresa, {headers: new HttpHeaders(this.header)});
  }

}
