import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detalle-experiencia',
  templateUrl: './detalle-experiencia.component.html',
  styleUrls: ['./detalle-experiencia.component.css']
})
export class DetalleExperienciaComponent implements OnInit {


  experiencia:any

  constructor() {  
    this.experiencia = {} 
   }

  ngOnInit() {}

  //recuperamos el tipo y id experiencia mediante output
  handleOnSendType($event){
    this.experiencia = $event  
    console.log(this.experiencia);   
  }
  
  
}
