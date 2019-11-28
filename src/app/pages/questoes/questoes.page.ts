import { Component } from '@angular/core';
// import { QuestaoDaoService } from 'src/app/services/questao-dao.service';
import { Exercicio } from 'src/app/model/Exercicio';
import { QuestaoServiceService } from 'src/app/services/questao-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.page.html',
  styleUrls: ['./questoes.page.scss'],
})
export class QuestoesPage {

  public exercicios:Exercicio[];
  public exercicio:Exercicio;
  constructor(
    // private exercicioDaoService:QuestaoDaoService,
    private exercicioService:QuestaoServiceService,
    private navController:NavController
    ) { }

  ionViewWillEnter() {
    this.obterExercicios();
    // this.obterExerciciosPorEnviar();
  }

  obterExercicios() {
    this.exercicioService.obterExercicios().subscribe(
      (exercicios: Exercicio[]) => {this.exercicios = exercicios;},
      (error) => {
        console.log(error);
      }
    );
    /* if (!this.questoes) {
      this.questoes = [];
    }
    this.exercicioDaoService.obterQuestoes().subscribe(
      (listaQuestoes) => {
        this.questoes.push(listaQuestoes);
      },
      (error) => {console.log(error);}
    ); */
  }

  verExercicio(questao) {
    this.navController.navigateForward(['/questao', questao.id]);
  }

  // TODO: fazer essa bagaça
  /* obterExerciciosPorEnviar() {
    console.log(this.exercicioDaoService.obterExercicios());
  } */
}
