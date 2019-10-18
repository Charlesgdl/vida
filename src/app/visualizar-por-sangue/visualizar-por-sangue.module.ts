import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarPorSanguePage } from './visualizar-por-sangue.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarPorSanguePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarPorSanguePage]
})
export class VisualizarPorSanguePageModule {}
