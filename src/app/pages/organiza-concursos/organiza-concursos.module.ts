import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrganizaConcursosPage } from './organiza-concursos.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizaConcursosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganizaConcursosPage]
})
export class OrganizaConcursosPageModule {}
