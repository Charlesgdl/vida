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
  url = 'http://localhost:8100/arquivosJson/';
  constructor(private http: HttpClient) { }

  getDoadores():Observable<any>{
    return this.http.get<any>(this.url);
  }

  ngOnInit() {
    this.getDoadores().subscribe(
      response =>(
        this.doadores = response
      )
    )
  }

}
