import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo',
  templateUrl: './miembro-equipo.component.html',
  styleUrls: ['./miembro-equipo.component.css']
})
export class MiembroEquipoComponent implements OnInit {

  @Input()miembro
  constructor() { }

  ngOnInit() {
  }

}
