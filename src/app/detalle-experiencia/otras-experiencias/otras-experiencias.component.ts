import { Component, OnInit, Input } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';

@Component({
  selector: 'app-otras-experiencias',
  templateUrl: './otras-experiencias.component.html',
  styleUrls: ['./otras-experiencias.component.css'],
  providers: [ExperienciasService]
})
export class OtrasExperienciasComponent implements OnInit {

  experiencias: any
  @Input()datosExp:any

  constructor(private experienciasService:ExperienciasService) {
    
   }

  ngOnInit() {
    this.experienciasService.getExperienciasByTipo('japonesa').then((arrExperiencias)=>{
      this.experiencias = arrExperiencias     
    })  
    console.log(this.datosExp);
     
  }

}
