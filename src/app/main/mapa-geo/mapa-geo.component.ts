import { Component, OnInit } from '@angular/core';
import { ExperienciasService } from '../../experiencias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa-geo',
  templateUrl: './mapa-geo.component.html',
  styleUrls: ['./mapa-geo.component.css'],
  providers: [ExperienciasService]
})
export class MapaGeoComponent implements OnInit {

  habilitarMap: string
  latitud: number
  longitud: number
  zoom: number = 12;
  idExperiencia: number
  ubicaciones:Array<any>



  constructor(private experienciasService: ExperienciasService, private activatedRoute: ActivatedRoute) {
    this.habilitarMap = 'none'
    this.activatedRoute.params.subscribe(((params) => {
      this.idExperiencia = Number(params.id)
    }))
    this.latitud = 40.4530100
    this.longitud = -3.6882900
  }

  ngOnInit() {
    //geolocalización mapa
    let self = this
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        //console.log(`LAT: ${position.coords.latitude} LGN: ${position.coords.longitude}`)
        self.latitud = position.coords.latitude
        self.longitud = position.coords.longitude
        self.zoom = 15
      })

    } else {
      console.log('tu navegador no te puede localizar, bitch')
    }
//recuperamos todas las ubicaciones de la base de datos para mostrarlas en el mapa
    this.experienciasService.getAllUbicaciones().then((res)=>{
      this.ubicaciones =  res.json() 
    })
  }
  handleMouseOut() {
    this.habilitarMap = 'none'
  }
  handleClick() {
    this.habilitarMap = 'auto'
  }
}


