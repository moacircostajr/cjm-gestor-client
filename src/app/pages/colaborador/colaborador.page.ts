import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/model/Usuario';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import {Config} from '../../services/Config';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.page.html',
  styleUrls: ['./colaborador.page.scss'],
})
export class ColaboradorPage implements OnInit {

  gestor;
  usuario: Usuario = new Usuario();

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuariosService,
    private navCtrl: NavController,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (parametro) => {
        if (parametro.id) {
          this.usuarioService.obterUsuario(parametro.id).subscribe(
            (dadosUsuario: Usuario) => {
              if (dadosUsuario) {
                this.usuario.id = dadosUsuario.id;
                this.usuario.email = dadosUsuario.email;
                this.usuario.nome = dadosUsuario.nome;
                this.usuario.telefone = dadosUsuario.telefone;
                this.usuario.perfil = dadosUsuario.perfil;
                this.usuario.dataCriacao = dadosUsuario.dataCriacao;
                this.usuario.dataAtualizacao = dadosUsuario.dataAtualizacao;
              }
            },
            (error) => {
              console.log(error);
              // alert(PadroesService.centralDeTratamentoDeErros(error));
            }
          );
        }
      }
    );
  }

  registraUsuario() {
    this.usuario.empresa = this.loginService.gestor.data.empresa;
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      (resultado) => {
          if (resultado != null) {
            alert(Config.centralDeTratamentoDeErros(resultado.valueOf()));
            if (resultado === 201) { this.navCtrl.navigateBack('/colaboradores'); }
          }
        },
        (erro) => {alert(Config.centralDeTratamentoDeErros(erro.status)); }
    );
  }
}
