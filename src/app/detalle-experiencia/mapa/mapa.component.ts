import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  providers: [ExperienciasService]
})
export class MapaComponent implements OnInit {

  habilitarMap: string
  latitud: number
  longitud: number
  zoom: number = 15;
  idExperiencia: number
  idWatch

  constructor(private experienciasService: ExperienciasService, private activatedRoute: ActivatedRoute) {
    this.habilitarMap = 'none'
    this.activatedRoute.params.subscribe(((params) => {
      this.idExperiencia = Number(params.id)
    }))

  }
  ngOnInit() {
    this.idWatch = this.experienciasService.getExperienciaById(this.idExperiencia).then((res) => {
      let exp = res.json()
      this.latitud = exp.experiencia.latitude
      this.longitud = exp.experiencia.longitude         
    })
   }

  handleMouseOut() {
    //se vuelve a desactivar al sacar el ratón
    this.habilitarMap = 'none'
  }
  handleClick() {
    this.habilitarMap = 'auto'
  }
}