import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../chats.service';
import { ExperienciasService } from '../experiencias.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatsService]
})
export class ChatComponent implements OnInit {

  invId: number
  converData: any
  converDataChef: any
  arrayMensajes: any
  experiencia_id: any
  experiencia: any

  constructor(private chatsService: ChatsService, private experienciasService: ExperienciasService) {
    this.invId = JSON.parse(localStorage.getItem('usr')).inv
  }

  ngOnInit() {

    let localInfo = JSON.parse(localStorage.getItem('ct'))
    //CREAMOS UN OBJETO CON LOS DATOS DEL CHAT almacenados en LOCALSTORAGE
    this.converData = {
      invitado_id: localInfo.invitado_id,
      chef_id: localInfo.chef_id,
      experiencia_id: localInfo.experiencia_id,
    }
    //recuperamos la info de la experiencia
    this.experienciasService.getExperienciaById(localInfo.experiencia_id).then((exp) => {
      this.experiencia = exp.json()
      //console.log(this.experiencia)

      //RECUPERAMOS EL CHAT ACTIVO pasando por parametro los datos de arriba y ALMACENAMOS LOS MENSAJES DE LA CONVERSACIÓN
      this.chatsService.getChat(this.converData).then((mensajes) => {
        this.arrayMensajes = mensajes.json()
        console.log(this.arrayMensajes)
      })



      //cuando el chef es quien entra al chat el invitado id es undefined, por lo que lo recuperamos del primer mensaje que nos ha mandado el invitado
      localInfo.invitado_id === undefined ? this.converData.invitado_id = this.arrayMensajes[0].invitado_id : this.converData.invitado_id
    })


  }

  handleSend(pMessage) {
    let user = JSON.parse(localStorage.getItem('usr'))
    //CREAMOS UN OBJETO CON LOS DATOS DEL MENSAJE Y LA CONVERSACIÓN
    let info = {
      texto: pMessage.value,
      invitado_id: (user.inv === undefined) ? user.inv = null : user.inv,
      chef_id: (user.chf === undefined) ? user.chf = null : user.chf,
      fecha_envio: new Date(),
      datosConversacion: this.converData
    }

    if (pMessage.value !== "") {
      //ENVIAMOS EL MENSAJE pasando el objeto de arriba por parámetro
      this.chatsService.sendMessage(info).then(() => {
        //recuperamos los mensajes de nuevo
        this.chatsService.getChat(this.converData).then((mensajes) => {
          this.arrayMensajes = mensajes.json()
          pMessage.value = ""
        })
      })
    }

    //REFRESCO AUTOMÁTICO cada dos segundos, solo se actualiza si hay mensajes nuevos
    // let interval = setInterval(() => {
    //   //recuperamos los mensajes y comprobamos si hay alguno nuevo
    //   this.chatsService.getChat(this.converData).then((mensajes) => {
    //     this.arrayMensajes.length === mensajes.json().length ? this.arrayMensajes : this.arrayMensajes = mensajes.json()
    //   })
    // }, 2000)


  }

}
