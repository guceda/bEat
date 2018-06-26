import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ExperienciasService } from './experiencias.service';
import { ChatsService } from './chats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExperienciasService, ChatsService]
})
export class AppComponent {
  invId: any


  constructor(private router: Router, private experienciasService:ExperienciasService, private chatsService:ChatsService) {
    if(JSON.parse(localStorage.getItem("usr"))) {
       this.invId = JSON.parse(localStorage.getItem("usr")).inv
    }else{
    this.invId = 'noExiste'
    }
   }

  ngOnInit() {
    //hacer que las paginas suban arriba
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    //almacenamos el localstorage la info de la experiencias favoritas
    if(this.invId !== 'noExiste') this.experienciasService.getAllFavoritas(this.invId).then((res)=>{
      //console.log(res.json()[0].id_experiencia)
      if(res.json().length > 0){
      let arrTemp = []
        res.json().forEach(exp => {
          arrTemp.push(exp.id_experiencia)
          localStorage.setItem('fvs', JSON.stringify(arrTemp))
        })
      }else {
        localStorage.setItem('fvs', 'empt')
      }
      })

      // this.checkNewMessages({chef: JSON.parse(localStorage.getItem('usr')).chf,inv: this.invId})
  }


  // checkNewMessages(pIds){
  //  if(pIds.inv === undefined) {
  //    this.chatsService.getAllConversChef(pIds.chef).then((res)=>{
  //     console.log(res.json())
  //    })
  //  } else if (pIds.chef === undefined){
  //    this.chatsService.getAllConversInv(pIds.inv).then((res)=>{
  //     console.log(res.json())
  //    })
  //  }

  // }

}
