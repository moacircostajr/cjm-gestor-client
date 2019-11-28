import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {AlunosService} from '../../services/alunos.service';
import {Aluno} from '../../model/Aluno';
import {Config} from '../../services/Config';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos: Aluno[];
  constructor(
      private loginService: LoginService,
      private alunosService: AlunosService,
      private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // tslint:disable-next-line:triple-equals
    if (this.loginService.empresa == undefined) {
      this.router.navigate([''], {replaceUrl: true});
    } else {
      this.alunosService.listarAlunos().subscribe(
          (listaAlunos) => {
            listaAlunos ? this.alunos = listaAlunos : this.alunos = [];
          },
          (erro) => {alert(Config.centralDeTratamentoDeErros(erro.status)); }
      );
    }
  }

  buscarAlunos(nomeAluno: string) {
    this.alunos = this.alunosService.filtrarAlunos(nomeAluno.toLowerCase(), this.alunos);
  }
}
