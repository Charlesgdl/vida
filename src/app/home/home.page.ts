import { by } from 'protractor';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  visivel = 0

  constructor() {}

   mudaVis1(){
    return this.visivel + this.visivel+ 1; 
  }

  imprime(){
    console.log(this.mudaVis1());
  }

  ngOnInit() {
    
    }
  
 
  


}


