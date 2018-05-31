import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { Experiencia } from '../../models/experiencia.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-experiencia',
  templateUrl: './descripcion-experiencia.component.html',
  styleUrls: ['./descripcion-experiencia.component.css'],
  providers: [ExperienciasService]
})
export class DescripcionExperienciaComponent implements OnInit {

  res: any;
  experience:Experiencia
  idExperiencia:number
  imagenes:Array<any>

  constructor(private experienciasService:ExperienciasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(((params)=>{
      this.idExperiencia = Number(params.id)  
      this.imagenes = []  
    }))
   }

  ngOnInit() {
    this.experienciasService.getExperienciaById(this.idExperiencia).then((res)=>{
     this.res = res.json();
     this.experience = this.res.experiencia
     this.imagenes = this.res.imagenes
    console.log(this.experience);
    console.log(this.imagenes);
    
    
        
    })
  }

}


