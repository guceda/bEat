import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { Experiencia } from '../../models/experiencia.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
  providers: [ExperienciasService]
})
export class ChefComponent implements OnInit {


  experiencia:Experiencia
  idExperiencia:number

  constructor(private experienciasService:ExperienciasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(((params)=>{
      this.idExperiencia = Number(params.id)
      console.log(this.idExperiencia);
      
    }))
   }

  ngOnInit() {
    this.experienciasService.getExperienciaById(this.idExperiencia).then((res)=>{
     this.experiencia = res[0]
      console.log(this.experiencia.tipo);

      
    })
  }

}
