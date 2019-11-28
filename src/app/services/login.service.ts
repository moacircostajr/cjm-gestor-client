import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './Config';
import { Login } from '../model/Login';
import { Usuario } from '../model/Usuario';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: boolean;
  header: any = {};
  gestor: any = {};
  empresa: Empresa;

  constructor(
    private httpClient: HttpClient,
    private storage: Storage
    ) {     }

  /*
  obterHeader() {
    this.storage.get('headers-cjm').then(
      (dadosHeaders) => {
        this.header = JSON.parse(dadosHeaders);
      });
    return this.header;
  }

  obterGestor() {
    this.storage.get('gestor-cjm').then(
      (dadosGestor) => {
        this.gestor = JSON.parse(dadosGestor);
      });
    return this.gestor;
  }
 */
  logar(login: Login) {
    return this.httpClient.post<any>(Config.SERV_URL + '/api/cursos/auth', login);
  }



}
