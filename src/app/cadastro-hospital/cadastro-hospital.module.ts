import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroHospitalPage } from './cadastro-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroHospitalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroHospitalPage]
})
export class CadastroHospitalPageModule {}
