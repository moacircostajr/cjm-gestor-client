import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { PadroesService } from 'src/app/services/padroes.service';
import { Storage } from "@ionic/storage";
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Empresa } from 'src/app/model/Empresa';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage {

  colaboradores;
  colaborador:Usuario = new Usuario();
  gestor;

  constructor(
    private usuariosService:UsuariosService,
    private navController:NavController,
    private loginService:LoginService
  ) { }

  ionViewWillEnter() {
    this.gestor = this.loginService.gestor;
    this.usuariosService.obterUsuarios(this.gestor.data.empresa).subscribe(
      (usuarios) => {
        this.colaboradores = usuarios;
      },
      (error) => {
        console.log(error);
        // alert(PadroesService.centralDeTratamentoDeErros(error));
      }
    );
  }

  verColaborador(colaborador:Usuario) {
    this.navController.navigateForward(['/colaborador', colaborador.id]);
  }
}
