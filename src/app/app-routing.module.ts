import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'questao', loadChildren: './pages/questao/questao.module#QuestaoPageModule' },
  { path: 'questao/:id', loadChildren: './pages/questao/questao.module#QuestaoPageModule' },
  { path: 'questoes', loadChildren: './pages/questoes/questoes.module#QuestoesPageModule' },
  { path: 'organiza-questoes', loadChildren: './pages/organiza-questoes/organiza-questoes.module#OrganizaQuestoesPageModule' },
  { path: 'organiza-bancas', loadChildren: './pages/organiza-bancas/organiza-bancas.module#OrganizaBancasPageModule' },
  { path: 'organiza-concursos', loadChildren: './pages/organiza-concursos/organiza-concursos.module#OrganizaConcursosPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'colaboradores', loadChildren: './pages/colaboradores/colaboradores.module#ColaboradoresPageModule' },
  { path: 'colaborador', loadChildren: './pages/colaborador/colaborador.module#ColaboradorPageModule' },
  { path: 'colaborador/:id', loadChildren: './pages/colaborador/colaborador.module#ColaboradorPageModule' },
  { path: 'alunos', loadChildren: './pages/alunos/alunos.module#AlunosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
