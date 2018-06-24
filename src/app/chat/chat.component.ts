import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from '../chats.service';
import { ExperienciasService } from '../experiencias.service';
import { interval } from 'rxjs/observable/interval';


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
  interval:any
  info:any

  constructor(private chatsService: ChatsService, private experienciasService: ExperienciasService) {
    this.invId = JSON.parse(localStorage.getItem('usr')).inv
  }

  ngOnInit() {

    var localInfo = JSON.parse(localStorage.getItem('ct'))
    //CREAMOS UN OBJETO CON LOS DATOS DEL CHAT almacenados en LOCALSTORAGE
    this.converData = {
      invitado_id: Number(localStorage.getItem('i')),
      chef_id: Number(localStorage.getItem('c')),
      experiencia_id: localInfo.experiencia_id,
    }
    //recuperamos la info de la experiencia
    this.experienciasService.getExperienciaById(localInfo.experiencia_id).then((exp) => {
      this.experiencia = exp.json()
      console.log(this.experiencia)
      localStorage.setItem('c', this.experiencia.id_chef)
      //console.log(this.experiencia)
    })

    //RECUPERAMOS EL CHAT ACTIVO pasando por parametro los datos de arriba y ALMACENAMOS LOS MENSAJES DE LA CONVERSACIÓN
    this.chatsService.getChat(this.converData).then((mensajes) => {
      this.arrayMensajes = mensajes.json()
      console.log(this.arrayMensajes)
      //guardamos el invitado
     localStorage.setItem('i', this.arrayMensajes[0].invitado_id )
    })

  }

  handleSend(pMessage) {
    let user = JSON.parse(localStorage.getItem('usr'))
    //CREAMOS UN OBJETO CON LOS DATOS DEL MENSAJE Y LA CONVERSACIÓN
    this.info = {
      texto: pMessage.value,
      invitado_id: (user.inv === undefined) ? user.inv = null : user.inv,
      chef_id: (user.chf === undefined) ? user.chf = null : user.chf,
      fecha_envio: new Date(),
      datosConversacion: this.converData
    }
    if (pMessage.value !== "") {
      //ENVIAMOS EL MENSAJE pasando el objeto de arriba por parámetro
      this.chatsService.sendMessage(this.info).then(() => {
        //recuperamos los mensajes de nuevo
        this.chatsService.getChat(this.converData).then((mensajes) => {
          this.arrayMensajes = mensajes.json()
          pMessage.value = ""
        })
      })
    }

    //REFRESCO AUTOMÁTICO cada dos segundos, solo se actualiza si hay mensajes nuevos
    this.interval = setInterval(() => {
      //recuperamos los mensajes y comprobamos si hay alguno nuevo
      this.chatsService.getChat(this.converData).then((mensajes) => {
        this.arrayMensajes.length === mensajes.json().length ? this.arrayMensajes : this.arrayMensajes = mensajes.json()
      })
    }, 2000)


  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }
}
