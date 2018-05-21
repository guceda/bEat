import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../../equipo.service';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {

  miembros

  constructor(private equipoService:EquipoService) { 
    this.miembros = []
  }

  ngOnInit() {
    this.equipoService.getAllEquipo().then((arrEquipo)=>{ 
      this.miembros = arrEquipo.json()
    })
  }

}
