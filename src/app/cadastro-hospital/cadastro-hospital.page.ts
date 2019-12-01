import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-hospital',
  templateUrl: './cadastro-hospital.page.html',
  styleUrls: ['./cadastro-hospital.page.scss'],
})
export class CadastroHospitalPage implements OnInit {
  
  public hospital:Hospital = new Hospital();
  constructor() { }

  ngOnInit() {
  }

  public salvar(){
    console.log(this.hospital);
    alert("Registro salvo com sucesso");
  }

}

export class Hospital{
  public nome: string
  public endereco: string
  public telefone: string
  public CNPJ: string
  public email: string
  public senha: string
  public sAp: string
  public sAn: string
  public sBp: string
  public sBn: string
  public sABp: string
  public sABn: string
  public sOp: string
  public sOn: string

  constructor(){
    this.nome = ""
    this.endereco = ""
    this.telefone = ""
    this.CNPJ = ""
    this.email = ""
    this.senha = ""
    this.sAp = "false"
    this.sAn = "false"
    this.sBp = "false"
    this.sBn = "false"
    this.sABp = "false"
    this.sABn = "false"
    this.sOp = "false"
    this.sOn = "false"
  }
}


