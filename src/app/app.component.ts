import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    /* {
      title: 'Ferramentas',
      url: '/list',
      icon: 'list'
    }, */
    {
      title: 'Questões',
      url: '/questoes',
      icon: 'list'
    },
    {
      title: 'Matéria',
      url: '/organiza-questoes',
      icon: 'list'
    },
    {
      title: 'Bancas',
      url: '/organiza-bancas',
      icon: 'list'
    },
    {
      title: 'Concursos',
      url: '/organiza-concursos',
      icon: 'list'
    },
    {
      title: 'Colaboradores',
      url: '/colaboradores',
      icon: 'list'
    },
    {
      title: 'Alunos',
      url: '/alunos',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  get login() {
    return this.loginService.login;
  }
}
