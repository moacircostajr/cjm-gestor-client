import { Component, OnInit } from '@angular/core';
import { PadroesService } from 'src/app/services/padroes.service';
import { BancasPadrao } from 'src/app/model/BancasPadrao';
import { LoginService } from 'src/app/services/login.service';
// import { QuestaoDaoService } from 'src/app/services/questao-dao.service';

@Component({
  selector: 'app-organiza-bancas',
  templateUrl: './organiza-bancas.page.html',
  styleUrls: ['./organiza-bancas.page.scss'],
})
export class OrganizaBancasPage implements OnInit {
  
  bancas:string[] = [];
  bancasPadrao:BancasPadrao = new BancasPadrao(this.loginService.empresa);

  constructor(
    private padroesService:PadroesService,
    private loginService:LoginService
    // private questaoDao:QuestaoDaoService
    ) { }

  ngOnInit() {
    this.obterBancas();
  }


  atualiza(banca, novaBanca) {
    let pos = this.bancas.indexOf(banca);
    this.bancas[pos] = novaBanca;
  }

  remove(banca) {
    let pos = this.bancas.indexOf(banca);
    this.bancas.splice(pos, 1);
  }

  novaBanca() {
    if (this.bancas == undefined) {
      this.bancas = [];
    }
    this.bancas.push('NOVA_BANCA');
  }

  salvarBancas() {
    this.bancasPadrao.bancas = this.bancas;
    // this.questaoDao.salvaBancasPadrao(JSON.stringify(bancasPadrao.bancas));
    this.padroesService.registrarBancas(this.bancasPadrao).subscribe(
      (resultado) => {
        resultado ? alert('Bancas registradas no servidor') : alert ('Falha no servidor');
        /* TODO: quando houver falha, os dados registrados no banco local devem ser enviados p/ o servidor quando a internet estiver restabelecida */
      },
      (error) => { 
        console.log(error);
      }
    );
  }

  obterBancas() {
    this.padroesService.obterBancas().subscribe(
      (padroesR:BancasPadrao) => {
        if (padroesR) {
          this.bancas = padroesR.bancas;
          this.bancasPadrao = padroesR;
          // this.questaoDao.salvaBancasPadrao(JSON.stringify(padroesR));
        } else {
          this.bancas = []
        };
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
}
