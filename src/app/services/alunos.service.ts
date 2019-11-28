import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Config} from './Config';
import {Aluno} from '../model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(
      private httpClient: HttpClient,
      private loginService: LoginService
  ) { }

  get header() {
    return this.loginService.header;
  }

  get empresa() {
    return this.loginService.gestor.data.empresa;
  }

  listarAlunos() {
    return this.httpClient.post<Aluno[]>(Config.SERV_URL + '/api/cursos/alunos', this.empresa, {headers: new HttpHeaders(this.header)});
  }

  filtrarAlunos(termosBusca: any, conjuntoDados: Aluno[]) {
    return conjuntoDados.filter(
        (item) => {
          return item.nome.toLowerCase().indexOf(termosBusca) > -1;
        }
    );
  }
}
