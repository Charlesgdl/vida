import { Component, OnInit } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  constructor(private sqlite: SQLite) {}
    
    //this.sqlite.create({
     // name: 'vida.db',
     // location: 'default'
   // })
     // .then((db: SQLiteObject) => {
     // db.executeSql('create table doador(id INT not null, nome varchar(50), cpf varchar(15),dtNasc date, endereco varchar(100), telefone varchar(30), tipoSangue varchar(5),email varchar(50), senha varchar(10), primary key(id))', [])
      //  .then(() => console.log('Tabela doador criada com sucesso'))
      //  .catch(e => console.log(e));
   // })
   // .catch(e => console.log(e));
 // }
  
 
  

  ngOnInit() {
  }

}
