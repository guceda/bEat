import { Component, OnInit, Input } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from '../../models/experiencia.model';

@Component({
  selector: 'app-otras-experiencias',
  templateUrl: './otras-experiencias.component.html',
  styleUrls: ['./otras-experiencias.component.css'],
  providers: [ExperienciasService]
})
export class OtrasExperienciasComponent implements OnInit {

  @Input()experience
  experiencias: any

  constructor(private experienciasService: ExperienciasService) {
   
  }

  ngOnInit() {
    setTimeout(()=>{
      this.experienciasService.getExperienciasByTipo(this.experience.food_type).then((res)=>{
        this.experiencias = res.json()
        //console.log(this.experiencias);
        
      })
    }, 1000)
   
  }
  



}
