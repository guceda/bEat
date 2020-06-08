import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ChefsService {

  constructor(private http: Http) { }

  //MANDAMOS LOS DATOS A NODE PARA EL NUEVO CHEF
  sendNewChef(pChef) {
    return this.http.post('http://localhost:3000/api/chefs/new', {
      name: pChef.name,
      surname: pChef.surname,
      age: pChef.age,
      email: pChef.email,
      password: pChef.password
    }).toPromise()
  }

  //RECUPERAMOS EL CHEF LOGADO
  loginChef(pChef) {
    return this.http.post('http://localhost:3000/api/chefs/login',{
      name: pChef.name,
      surname: pChef.surname,
      age: pChef.age,
      email: pChef.email,
      password: pChef.password
    }).toPromise()
  }

    //RECUPERAMOS CHef POR ID 
    getById(idChef) {
      return this.http.get(`http://localhost:3000/api/chefs/${idChef}`).toPromise()
    }


    //MODIFICAMOS LOS DATOS DEL CHEF
    modifyChef(pValue){
      console.log(pValue)
      return this.http.post('http://localhost:3000/api/chefs/change', {
        id_chef:pValue.userId, 
        name:pValue.name, 
        surname:pValue.surname,
        age:pValue.age,
      }).toPromise()

    }
  
}

