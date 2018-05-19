import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EquipoService {

  constructor(private http:Http) { }

  getAllEquipo(){
    return this.http.get('https://appneo-2ae6a.firebaseio.com/equipo.json').toPromise()   
  }
}
