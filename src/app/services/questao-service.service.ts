import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './Config';
import { Exercicio } from '../model/Exercicio';
import { LoginService } from './login.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestaoServiceService {

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


  enviaExercicio(exercicio: Exercicio) {
    return this.httpClient.post<boolean>(Config.SERV_URL + '/api/cursos/registrar/exercicio', exercicio, {headers: new HttpHeaders(this.header)});
  }

  /*public enviarImagem(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.httpClient.post('/api/v1/image-upload', formData);
  }*/

  obterExercicios() {
    return this.httpClient.post<Exercicio[]>(Config.SERV_URL + '/api/cursos/exercicios', this.empresa, {headers: new HttpHeaders(this.header)});

  }

  acessarExercicio(id) {
    return this.httpClient.get<Exercicio>(Config.SERV_URL + '/api/cursos/exercicio/' + id, {headers: new HttpHeaders(this.header)});
  }

  /* atualizarExercicio(exercicio:Exercicio) {
    return this.httpClient.put(Config.SERV_URL + '/api/cursos/exercicio/' + exercicio.id, exercicio, {headers: new HttpHeaders(this.header)});
  } */
}
