import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visualizar-por-sangue',
  templateUrl: './visualizar-por-sangue.page.html',
  styleUrls: ['./visualizar-por-sangue.page.scss'],
})
export class VisualizarPorSanguePage implements OnInit {

  doadores: any;
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


