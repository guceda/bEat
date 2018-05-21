import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ExperienciasService {

  constructor(private http: Http) { }

  getAllExperiencias() {
    return this.http.get('https://appneo-2ae6a.firebaseio.com/experiencias.json').toPromise()
  }

  getExperienciasbyCategoria(pCat){
    return this.http.get('https://appneo-2ae6a.firebaseio.com/experiencias.json')
    .map( (res) => {
      console.log('res');  
      return res.json()
    }).toPromise()
  }
}
