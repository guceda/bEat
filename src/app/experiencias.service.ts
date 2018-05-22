import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ExperienciasService {

  constructor(private http: Http) { }

  getAllExperiencias() {
    return this.http.get('https://neolandbeat.firebaseio.com/experiencias.json').toPromise()
  }

  getExperienciasByLocalizacion(pLoc){
    return this.http.get('https://neolandbeat.firebaseio.com/experiencias.json')
    .map((exp)=>{
      let arrTemp = exp.json().filter(exp => exp.ubicacion ===pLoc)
      console.log(arrTemp);
      return arrTemp
    }).toPromise()
  }

}
