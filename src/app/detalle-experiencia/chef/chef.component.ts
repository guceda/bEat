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

  expFavorita:boolean
  experiencia:Experiencia
  idExperiencia:number
  invitado_id: any

  constructor(private experienciasService:ExperienciasService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(((params)=>{
      this.idExperiencia = Number(params.id)
    }))
    this.expFavorita = false
    this.invitado_id = JSON.parse(localStorage.getItem('usr')).inv
   }

  ngOnInit() {
    this.experienciasService.getExperienciaById(this.idExperiencia).then((res)=>{     
     this.experiencia = res.json()    
    })
    //comprobamos si la experiencia favorita está en local storage;
    JSON.parse(localStorage.getItem('fvs')).forEach(id => {
      if(id === this.idExperiencia) this.expFavorita = true
    })
  }

  marcarFavorita(){
    let favorita = {
      experiencia_id: this.experiencia.id_experiencia,
      invitado_id: this.invitado_id
    }
    this.experienciasService.addFavorita(favorita)
    this.expFavorita = true
  }

  eliminarFavorita(){
    console.log(this.idExperiencia, this.invitado_id)
    this.experienciasService.removeFavorita(this.idExperiencia, this.invitado_id )
    this.expFavorita = false
  }
  
}
