import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Experiencia } from '../models/experiencia.model';
import { ExperienciasService } from '../experiencias.service';

@Component({
  selector: 'app-detalle-experiencia',
  templateUrl: './detalle-experiencia.component.html',
  styleUrls: ['./detalle-experiencia.component.css'],
  providers: [ExperienciasService]
})
export class DetalleExperienciaComponent implements OnInit {

  experience: Experiencia
  idExperiencia: number

  constructor(private experienciasService: ExperienciasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(((params) => {
      this.idExperiencia = Number(params.id)
      this.experienciasService.getExperienciaById(this.idExperiencia).then((res) => {
        this.experience = res.json()
      })
    }))

  }
  ngOnInit() {
  }
  

}
