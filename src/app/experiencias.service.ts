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

  getExperienciasByLocalizacion(pLoc) {
    return this.http.get(`http://localhost:3000/api/experiencias/ciudad/${pLoc}`).toPromise()
  }

  getExperienciaById(pId) {
    return this.http.get(`http://localhost:3000/api/experiencias/id/${pId}`).toPromise()
  }

  getExperienciasByTipo(pTipo) {
    return this.http.get(`http://localhost:3000/api/experiencias/tipo/${pTipo}`).toPromise()
  }

  getAllUbicaciones() {
    return this.http.get('http://localhost:3000/api/experiencias/ubicaciones').toPromise()
  }

  setNewExperience(pExperiencia) {
    console.log(pExperiencia)
    return this.http.post('http://localhost:3000/api/experiencias/nuevaExperiencia', {
      title: pExperiencia.title,
      description: pExperiencia.description,
      food_type: pExperiencia.food_type,
      ingredients: pExperiencia.ingredients,
      availability: pExperiencia.availability,
      city: pExperiencia.city,
      number_invitados: pExperiencia.number_invitados,
      price: pExperiencia.price,
      chef_id: pExperiencia.chef_id
    }).toPromise()
  }

  sendImages(headers) {
    return this.http.post('http://localhost:3000/api/experiencias/nuevaExperiencia/imagenes', headers ).toPromise()
  }

  getExperienciasbyChef(pId){
    return this.http.get(`http://localhost:3000/api/experiencias/chef/${pId}`).toPromise()
  }

  destroyExperienciaById(pId){
    console.log(pId)
    return this.http.delete(`http://localhost:3000/api/experiencias/destroy/${pId}`).toPromise()
  }
  addFavorita(pFav){
    return this.http.post('http://localhost:3000/api/experiencias/addFavorita', {
      experiencia_id: pFav.experiencia_id,
      invitado_id: pFav.invitado_id
    }).toPromise()
  }
  getAllFavoritas(pId){
    return this.http.post('http://localhost:3000/api/experiencias/getAllFavoritas', {
      invitado_id: pId
    }).toPromise()
  }

  removeFavorita(pIdExp, pIdInv){
    return this.http.delete(`http://localhost:3000/api/experiencias/removeFavorita/${pIdExp}/${pIdInv}`).toPromise()
  }

}
