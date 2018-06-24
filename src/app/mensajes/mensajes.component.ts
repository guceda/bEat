import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';
import { ExperienciasService } from '../experiencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
  providers: [ExperienciasService, ChatsService]
})
export class MensajesComponent implements OnInit {

  chefId: number
  invId: number
  idArrExpChef: Array<any>
  experiencias: Array<any>
  idArrExpInv: Array<any>



  constructor(private router: Router, private chatsService: ChatsService, private experienciasService: ExperienciasService) {

    this.idArrExpChef = []
    this.experiencias = []

    this.idArrExpInv = []
  

  }



  ngOnInit() {
    this.chefId = JSON.parse(localStorage.getItem('usr')).chf
    this.invId = JSON.parse(localStorage.getItem('usr')).inv

    if(this.chefId !== undefined){
      this.chatsService.getAllConversChef(this.chefId).then((res) => {
        this.idArrExpChef = res.json()
        console.log(this.idArrExpChef)
        this.idArrExpChef.forEach((experiencia) => {
          this.experienciasService.getExperienciaById(experiencia.experiencia_id).then((res)=>{
            this.experiencias.push(res.json())
            console.log(this.experiencias)
          })
        })
      })
    }else if( this.invId !== undefined){
      this.chatsService.getAllConversInv(this.invId).then((res)=>{
        this.idArrExpInv = res.json()
        console.log(this.idArrExpChef)
        this.idArrExpInv.forEach((experiencia)=>{
          this.experienciasService.getExperienciaById(experiencia.experiencia_id).then((res)=>{
            this.experiencias.push(res.json())
            console.log(this.experiencias)
          })
        })
      })
    }


  }

  handleChat(expId) {
    let localData = {
      chef_id: this.chefId,
      inv_id: this.invId,
      experiencia_id: expId
    }
    console.log(localData)
    localStorage.setItem('ct', JSON.stringify(localData))
    this.router.navigate(['chat'])
  }



}
