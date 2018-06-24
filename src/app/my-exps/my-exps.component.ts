import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../experiencias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'app-my-exps',
  templateUrl: './my-exps.component.html',
  styleUrls: ['./my-exps.component.css'],
  providers: [ExperienciasService]
})
export class MyExpsComponent implements OnInit {

  chefId: Number
  experiencias: [object]
  check: number

  constructor(private experienciasService: ExperienciasService, private router: Router) {
    this.chefId = JSON.parse(localStorage.getItem('usr')).chf
    this.check = 0
  }

  ngOnInit() {
    this.experienciasService.getExperienciasbyChef(this.chefId).then((res) => {
      this.experiencias = res.json()
      console.log(this.experiencias)
    })

    //llamar al chatService y ver que experiencias tienen chats abiertos
  }
  checkDelete(id) {
    this.check = id
  }

  handleDelete(pId) {
    this.experienciasService.destroyExperienciaById(pId)
    location.reload()
  }
  handleCancelar() {
    this.check = 0
  }
  handleChat(expId) {
    let localData = {
      chef_id: this.chefId,
      experiencia_id: expId
    }
    localStorage.setItem('ct', JSON.stringify(localData))
    this.router.navigate(['chat'])
  }
}
