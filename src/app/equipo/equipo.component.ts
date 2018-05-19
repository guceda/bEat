import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  providers: [EquipoService]
})
export class EquipoComponent implements OnInit {
  constructor(private equipoService:EquipoService) { }

  ngOnInit() {
  
  }

}


