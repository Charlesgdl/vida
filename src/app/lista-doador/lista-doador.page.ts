import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-doador',
  templateUrl: './lista-doador.page.html',
  styleUrls: ['./lista-doador.page.scss'],
})
export class ListaDoadorPage implements OnInit {
  doadores: any;
  
  
  url = 'http://localhost:8100/src/app/arquivosJson/doadores.json';
  ibge = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/daniel%7Ckelvin%7Ccharles%7Calyne%7CRony%7CAlex';      
  constructor(private http: HttpClient) { }

  getDoadores():Observable<any>{
    return this.http.get<any>(this.ibge);
  }

  ngOnInit() {
    this.getDoadores().subscribe(
      response =>(
        this.doadores = response
      )
    )
  }

}
