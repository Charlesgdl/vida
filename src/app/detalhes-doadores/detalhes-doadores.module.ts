import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalhesDoadoresPage } from './detalhes-doadores.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesDoadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalhesDoadoresPage]
})
export class DetalhesDoadoresPageModule {}
