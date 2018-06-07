
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';

import 'rxjs/add/operator/map';

@Injectable()
export class InvitadosService {

  constructor(private http: Http) { }

  sendNewInvitado(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/new', {
      name: pInvitado.name, 
      surname: pInvitado.surname, 
      age: pInvitado.age, 
      email: pInvitado.email, 
      password: pInvitado.password
    }).toPromise()
      }
}
