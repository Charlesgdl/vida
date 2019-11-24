import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtualizarHospitalPage } from './atualizar-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarHospitalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AtualizarHospitalPage]
})
export class AtualizarHospitalPageModule {}
