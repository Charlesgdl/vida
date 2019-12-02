import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

   public recSenha:RecSenha = new RecSenha();
  constructor() { }

  ngOnInit() {
  }

  public enviaEmail(){
    console.log(this.recSenha);
    alert("Email enviado com sucesso!");
  }

}

export class RecSenha{
  public email: string

  constructor(){
    this.email = ""
   
  }
}
