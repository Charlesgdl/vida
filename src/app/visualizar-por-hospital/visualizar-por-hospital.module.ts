import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { VisualizarPorHospitalPage } from './visualizar-por-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarPorHospitalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarPorHospitalPage]
})
export class VisualizarPorHospitalPageModule {}
