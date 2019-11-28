import { Component, OnInit } from '@angular/core';
import { PadroesService } from 'src/app/services/padroes.service';
import { ConcursosPadrao } from 'src/app/model/ConcursosPadrao';
// import { QuestaoDaoService } from 'src/app/services/questao-dao.service';
import { Config } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-organiza-concursos',
  templateUrl: './organiza-concursos.page.html',
  styleUrls: ['./organiza-concursos.page.scss'],
})
export class OrganizaConcursosPage implements OnInit {
  
  concursos:string[];
  concursosPadrao = new ConcursosPadrao(this.loginService.empresa);

  constructor(
    private padroesService:PadroesService,
    // private questaoDao:QuestaoDaoService,
    private loginService:LoginService
    ) { }
  

  ngOnInit() {
    this.obterConcursos();
  }



  atualiza(concurso, novoConcurso) {
    let pos = this.concursos.indexOf(concurso);
    this.concursos[pos] = novoConcurso;
  }

  remove(concurso) {
    let pos = this.concursos.indexOf(concurso);
    this.concursos.splice(pos, 1);
  }

  novoConcurso() {
    if (this.concursos == undefined) {
      this.concursos = [];
    }
    this.concursos.push('NOVO_CONCURSO');
  }

  salvarConcursos() {
    // this.questaoDao.salvaConcursosPadrao(JSON.stringify(concursosPadrao.concursos));
    this.concursosPadrao.concursos = this.concursos;
    this.padroesService.registrarConcursos(this.concursosPadrao).subscribe(
      (resultado) => {
        resultado ? alert('Concursos padrão registrados no servidor') : alert('Falha no servidor');
      },
      (error) => { 
        console.log(error);
      }
    );
  }

  obterConcursos() {
    this.padroesService.obterConcursos().subscribe(
      (concursosPadrao:ConcursosPadrao) => {
        if(concursosPadrao) {
          this.concursos = concursosPadrao.concursos;
          this.concursosPadrao = concursosPadrao;
          // this.questaoDao.salvaConcursosPadrao(JSON.stringify(concursosPadrao));
        } else {
          this.concursos = [];
        }
      }/* ,
      (error) => {
        console.log(error);
        this.questaoDao.obterConcursosPadrao().then(
          (concursosPadraoDao) => {
            this.concursos = JSON.parse(concursosPadraoDao.rows.item(0).concursos);
          },
          (error) => {alert(PadroesService.centralDeTratamentoDeErros(error));}
        ).catch(
          (e) => {
            console.log(e);
            this.concursos = [];
          }
        );
      } */
    );
  }
}
