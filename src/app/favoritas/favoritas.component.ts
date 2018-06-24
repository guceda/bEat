import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../experiencias.service';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css'],
  providers: [ExperienciasService]
})
export class FavoritasComponent implements OnInit {

  experiencias:Array<any>
  expFavorita:any
  invId: number

  constructor(private experienciasService:ExperienciasService) {
    this.invId = JSON.parse(localStorage.getItem('usr')).inv
  }

  ngOnInit() {
    this.experienciasService.getAllFavoritas(this.invId).then((res)=>{
      this.experiencias = res.json()
    })
  }
  setFav(num){
    this.expFavorita = String(num)
  }

  unsetFav(num){
    this.expFavorita = num
    let idExp = this.experiencias[num].id_experiencia
    this.experienciasService.removeFavorita(idExp, this.invId).then((res)=>{
      location.reload()
   })
    
  }


}
