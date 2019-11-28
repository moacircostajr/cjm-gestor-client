import { Component, OnInit, ɵConsole } from '@angular/core';
import { QuestaoDaoService } from '../services/questao-dao.service';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  constructor(
    private router: Router,
    // private questaoDao:QuestaoDaoService,
    private network: Network,
    private loginService: LoginService,
    private storage: Storage
    ) {
      // console.log('AQUI!');
      /* se houver exercicio no banco de dados... */
      const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        console.log('Desconectado da internet');
      });

      const connectSubscription = this.network.onConnect().subscribe(() => {
          console.log('Conectado a internet!');
          /* fezer teste de conexao. se houver internet, iniciar o envio de padrões e em seguinda de questoes */
          /* apresentar loading... */
          /* quando terminar o envio de questões, fazer: */
          /* desligar loading */
          /* disconnectSubscription.unsubscribe */
          /* connectSubscription.unsubscribe */
      });
      /* fim do se */
    }

    ngOnInit(): void {
      this.loginService.login = false;
      /*
      this.storage.get('gestor-cjm').then(
        (dadosGestor) => {
          let dados = JSON.parse(dadosGestor);
          this.headersTmp = {
            'Authorization': 'Bearer ' + dados.data.autenticacao.token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization, Content-Type, Access-Control-Allow-Origin'
            // 'Access-Control-Allow-Headers': 'auth-token, access-control-allow-origin',
            // 'Access-Control-Max-Age': '3600',
            // 'Credentials': 'true',
          };
        });
      this.header = { headers: new HttpHeaders(this.headersTmp) };
      console.log(this.headersTmp);
      console.log(this.header); */
    }

  sair() {
    this.router.navigate(['/login'], {replaceUrl: true});
    this.storage.clear();
  }


}
