import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';
import 'rxjs/add/operator/map';

@Injectable()
export class InvitadosService {

  constructor(private http: Http) { }

  //MANDAMOS LOS DATOS A NODE PARA EL NUEVO INVITADO
  sendNewInvitado(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/new', {
      name: pInvitado.name,
      surname: pInvitado.surname,
      age: pInvitado.age,
      email: pInvitado.email,
      password: pInvitado.password
    }).toPromise()
  }

  //RECUPERAMOS EL INVITADO LOGADO
  loginInvitado(pInvitado) {
    return this.http.post('http://localhost:3000/api/invitados/login', {
      name: pInvitado.name,
      surname: pInvitado.surname,
      age: pInvitado.age,
      email: pInvitado.email,
      password: pInvitado.password
    }).toPromise()
  }

  //RECUPERAMOS INVITADO POR ID 

  getById(idInv) {
    return this.http.get(`http://localhost:3000/api/invitados/${idInv}`).toPromise()
  }



    //MODIFICAMOS LOS DATOS DEL Invitado
    modifyInvitado(pValue){
      console.log(pValue)
      return this.http.post('http://localhost:3000/api/invitados/change', {
        id_invitado:pValue.userId, 
        name:pValue.name, 
        surname:pValue.surname,
        age:pValue.age,
      }).toPromise()

    }


}



