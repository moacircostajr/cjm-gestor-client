import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from './Config';
import { Usuario } from '../model/Usuario';
import { LoginService } from './login.service';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {    }

  get header() {
    return this.loginService.header;
  }

  obterUsuarios(empresa: Empresa) {
    return this.httpClient.post<Usuario[]>(Config.SERV_URL + '/api/cursos/usuarios', empresa, {headers: new HttpHeaders(this.header)});
  }

  obterUsuario(idUsuario: number) {
    return this.httpClient.get<Usuario>(Config.SERV_URL + '/api/cursos/usuario/' + idUsuario, {headers: new HttpHeaders(this.header)});
  }

  registrarUsuario(usuario) {
    return this.httpClient.post<number>(Config.SERV_URL + '/api/cursos/usuario', usuario, {headers: new HttpHeaders(this.header)});
  }
}
