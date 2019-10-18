import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsqueceuSenhaPage } from './esqueceu-senha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueceuSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsqueceuSenhaPage]
})
export class EsqueceuSenhaPageModule {}
