import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ExperienciasService {

  constructor(private http: Http) { }

  getAllExperiencias() {
    return this.http.get('http://localhost:3000/api/experiencias/index').toPromise()
  }

  getExperienciasByLocalizacion(pLoc){
    return this.http.get(`http://localhost:3000/api/experiencias/ciudad/${pLoc}`).toPromise()
  }

  getExperienciaById(pId){  
    return this.http.get(`http://localhost:3000/api/experiencias/id/${pId}`).toPromise()
  }

  getExperienciasByTipo(pTipo){
    return this.http.get(`http://localhost:3000/api/experiencias/tipo/${pTipo}`).toPromise()
  }

  getAllUbicaciones() {
    return this.http.get('http://localhost:3000/api/experiencias/ubicaciones').toPromise()
  }

  sendNewInvitado() {
    return this.http.post('http://localhost:3000/api/invitados/new', {param1: 'value1', param2: 'value2'}).toPromise()
      }
       
  
  

}
