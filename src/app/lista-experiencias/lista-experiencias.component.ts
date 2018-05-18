import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../experiencias.service';
import { Experiencia } from '../models/experiencia.model';

@Component({
  selector: 'app-lista-experiencias',
  templateUrl: './lista-experiencias.component.html',
  styleUrls: ['./lista-experiencias.component.css'],
  providers: [ ExperienciasService ]
})
export class ListaExperienciasComponent implements OnInit {

  experiencias: Array<Experiencia>

  constructor(private experienciasService:ExperienciasService) { 
    this.experiencias = []
  }

  ngOnInit() {
    this.experienciasService.getAllExperiencias().then((arrExperiencias)=>{
      this.experiencias = arrExperiencias.json()
      console.log(this.experiencias); 
    })
  }

}
