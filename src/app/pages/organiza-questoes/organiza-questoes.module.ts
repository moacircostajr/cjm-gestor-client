import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrganizaQuestoesPage } from './organiza-questoes.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizaQuestoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganizaQuestoesPage]
})
export class OrganizaQuestoesPageModule {}
