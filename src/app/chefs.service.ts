import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Experiencia } from './models/experiencia.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ChefsService {

  constructor(private http: Http) { }

  sendNewChef(pChef) {
    return this.http.post('http://localhost:3000/api/chefs/new', {
      name: pChef.name, 
      surname: pChef.surname, 
      age: pChef.age, 
      email: pChef.email, 
      password: pChef.password
    }).toPromise()
      }
}
