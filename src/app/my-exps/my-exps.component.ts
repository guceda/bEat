import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../experiencias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-exps',
  templateUrl: './my-exps.component.html',
  styleUrls: ['./my-exps.component.css'],
  providers: [ExperienciasService]
})
export class MyExpsComponent implements OnInit {

  chefId: Number
  experiencias: [object]
  check:number

  constructor(private experienciasService: ExperienciasService) {
    this.chefId = JSON.parse(localStorage.getItem('usr')).chf
    this.check = 0
  }

  ngOnInit() {
    this.experienciasService.getExperienciasbyChef(this.chefId).then((res) => {
      this.experiencias = res.json()
      console.log(this.experiencias)
    })
  }
  checkDelete(id){
    this.check = id
  }

  handleDelete(pId) {
    this.experienciasService.destroyExperienciaById(pId)
    location.reload()
  }
  handleCancelar(){
    this.check = 0
  }
}
