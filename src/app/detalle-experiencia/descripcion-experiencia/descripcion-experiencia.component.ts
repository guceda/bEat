import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { Experiencia } from '../../models/experiencia.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-experiencia',
  templateUrl: './descripcion-experiencia.component.html',
  styleUrls: ['./descripcion-experiencia.component.css'],
  providers: [ExperienciasService]
})
export class DescripcionExperienciaComponent implements OnInit {

  experience: Experiencia
  idExperiencia: number

  constructor(private experienciasService: ExperienciasService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(((params) => {
      this.idExperiencia = Number(params.id)
    }))
  }

  ngOnInit() {
    this.experienciasService.getExperienciaById(this.idExperiencia).then((res) => {
      this.experience = res.json()
      console.log(this.experience)
    })
  }

}


