import { Hospital } from './../cadastro-hospital/cadastro-hospital.page';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visualizar-por-hospital',
  templateUrl: './visualizar-por-hospital.page.html',
  styleUrls: ['./visualizar-por-hospital.page.scss'],
})
export class VisualizarPorHospitalPage implements OnInit {
  hospitais: any;
  url = 'http://www.ubtlogistica.com.br/arquivoJson';
  ibge = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados';
  metadata = 'https://servicodados.ibge.gov.br/api/v3/agregados/1705/localidades/N7'      

  constructor(private http:HttpClient) { }

  getHospital():Observable<any>{
    return this.http.get<any>(this.metadata);
  }

  ngOnInit() {
    this.getHospital().subscribe(
      response =>(
        this.hospitais = response
      )
    )
  }

}
