import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'visualizar-por-sangue', loadChildren: './visualizar-por-sangue/visualizar-por-sangue.module#VisualizarPorSanguePageModule' },
  { path: 'visualizar-por-hospital', loadChildren: './visualizar-por-hospital/visualizar-por-hospital.module#VisualizarPorHospitalPageModule' },
  { path: 'cadastro-usuario', loadChildren: './cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'cadastro-hospital', loadChildren: './cadastro-hospital/cadastro-hospital.module#CadastroHospitalPageModule' },
  { path: 'esqueceu-senha', loadChildren: './esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
  { path: 'alterar-dados', loadChildren: './alterar-dados/alterar-dados.module#AlterarDadosPageModule' },
  { path: 'lista-doador', loadChildren: './lista-doador/lista-doador.module#ListaDoadorPageModule' },  { path: 'detalhes-doadores', loadChildren: './detalhes-doadores/detalhes-doadores.module#DetalhesDoadoresPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
