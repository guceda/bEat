import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';
import 'rxjs/add/operator/map';

@Injectable()
export class InvitadosService {

  constructor(private http: Http) { }

  //MANDAMOS LOS DATOS A NODE PARA EL NUEVO CHEF
  sendNewInvitado(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/new', {
      name: pInvitado.name,
      surname: pInvitado.surname,
      age: pInvitado.age,
      email: pInvitado.email,
      password: pInvitado.password
    }).toPromise()
  }

  //RECUPERAMOS EL CHEF LOGADO
  loginInvitado(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/login', {
      name: pInvitado.name,
      surname: pInvitado.surname,
      age: pInvitado.age,
      email: pInvitado.email,
      password: pInvitado.password
    }).toPromise()
  }

  //COMPROBAMOS EL EMAIL A REGISTRAR
  checkRegistro(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/email', {
      name: pInvitado.name,
      surname: pInvitado.surname,
      age: pInvitado.age,
      email: pInvitado.email,
      password: pInvitado.password
    }).toPromise()
  }
}



