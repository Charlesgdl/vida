import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  public doador:Usuarios = new Usuarios()
  constructor() {}

    ngOnInit() {
  }

  
  public salvar(){
    console.log(this.doador);
    alert("Registro salvo com sucesso");
 
  }

}
export class Usuarios{
  public nome: string
  public cpf: string
  public dtnasc: Date
  public endereco: string
  public telefone: string
  public tipoSang: string
  public email: string
  public senha: string

  constructor(){
    this.nome = ""
    this.cpf = ""
    this.dtnasc = null
    this.endereco = ""
    this.telefone = ""
    this.tipoSang = ""
    this.email = ""
    this.senha = ""
  }

}



