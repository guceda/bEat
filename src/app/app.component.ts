import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ExperienciasService } from './experiencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ExperienciasService]
})
export class AppComponent {
  invId: any

  constructor(private router: Router, private experienciasService:ExperienciasService) {
    this.invId = JSON.parse(localStorage.getItem("usr")).inv
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
    if(this.invId) this.experienciasService.getAllFavoritas(this.invId).then((res)=>{
      //console.log(res.json()[0].id_experiencia)
      let arrTemp = []
        res.json().forEach(exp => {
          arrTemp.push(exp.id_experiencia)
          localStorage.setItem('fvs', JSON.stringify(arrTemp))
        })
      })

  }

}
