import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { Experiencia } from '../../models/experiencia.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css'],
  providers: [ExperienciasService]
})
export class ChefComponent implements OnInit {

  expFavorita:boolean
  experiencia:any
  idExperiencia:number
  invitado_id: any
  chef_id: number

  constructor(private experienciasService:ExperienciasService, private activatedRoute:ActivatedRoute, private router:Router) {
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
  handleContacta(){
    this.chef_id = this.experiencia.id_chef
    let chat = {
      chef_id:this.chef_id,
      invitado_id: this.invitado_id,
      experiencia_id:this.idExperiencia 
    }
    localStorage.setItem('ct', JSON.stringify(chat) )
    this.router.navigate(['chat'])
  }
  
}
