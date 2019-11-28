import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/model/Login';
import { Storage } from '@ionic/storage';
import { PadroesService } from 'src/app/services/padroes.service';
import { Usuario } from 'src/app/model/Usuario';
import { HttpHeaders } from '@angular/common/http';
import { Config } from 'src/app/services/Config';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  senha;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loginService.login = true;
  }

  acessar() {
    const login: Login = new Login();
    login.email = this.email;
    login.senha = this.senha;
    this.loginService.logar(login).subscribe(
      (dadosGestor) => {
        if (dadosGestor) {
          this.storage.set('gestor-cjm', JSON.stringify(dadosGestor));
          this.loginService.gestor = dadosGestor;
          this.loginService.empresa = dadosGestor.data.empresa;
          const headersTmp = {
            Authorization: 'Bearer ' + dadosGestor.data.autenticacao.token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          };
          this.storage.set('headers-cjm', JSON.stringify(headersTmp));
          this.loginService.header = headersTmp;
          this.router.navigate(['/home'], {replaceUrl: true});
        }
      },
      (error) => {alert(Config.centralDeTratamentoDeErros(error.status)); }
    );
  }

}

  /* header = { headers: new HttpHeaders({
    // 'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Accept, Credentials',
    'Access-Control-Allow-Headers': 'auth-token, access-control-allow-origin',
    'Access-Control-Allow-Origin': 'http://localhost:8100',
    // 'Access-Control-Max-Age': '3600',
    // 'Credentials': 'true',
    'Authorization': ''
  })}; */
    // 'Access-Control-Allow-Headers': 'Authorization, Content-Type, Access-Control-Allow-Origin'
    // 'Access-Control-Allow-Headers': 'auth-token, access-control-allow-origin',
    // 'Access-Control-Max-Age': '3600',
    // 'Credentials': 'true',
