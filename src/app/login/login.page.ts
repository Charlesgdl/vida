import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public login:Login = new Login()
  constructor() { }

  ngOnInit() {
  }

  public acessar(){
    if((this.login.email=="daniel@gmail.com") &&
    (this.login.senha="123456")){
      console.log(this.login);
      alert("Acesso permitido");
    }else{
      alert("Acesso não permitido");
    }
     
  }

}

export class Login{
  public email: string
  public senha: string

  constructor(){
    this.email = ""
    this.senha = ""
  }

}

