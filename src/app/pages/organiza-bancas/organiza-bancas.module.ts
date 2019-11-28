import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrganizaBancasPage } from './organiza-bancas.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizaBancasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganizaBancasPage]
})
export class OrganizaBancasPageModule {}
