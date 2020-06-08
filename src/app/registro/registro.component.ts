import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { InvitadosService } from '../invitados.service';
import { ChefsService } from '../chefs.service';


export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [InvitadosService, ChefsService]

})
export class RegistroComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string
  message: string
  estadoRegistro: string
  formInvitado: FormGroup
  formChef: FormGroup
  registro: any
  error: String
  constructor(dialogService: DialogService, private invitadosService: InvitadosService, private chefsService: ChefsService) {
    super(dialogService);
    this.estadoRegistro = 'inicio'
    this.error = ""
  }

  ngOnInit() {
    //generamos formulario angular
    this.formInvitado = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, this.validateEdad]),
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required]),
      password_repeat: new FormControl('', [Validators.required])
    })

    this.formChef = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.validateEdad]),
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required]),
      password_repeat: new FormControl('', [Validators.required])
    })
  }

  confirm() {
    //arrancamos el modal con inicio
    this.result = true;
    this.close();
    this.estadoRegistro = 'inicio'
  }

  handleClickChef() {
    //arrancamos el modal de registro para chef
    this.estadoRegistro = 'chef'
  }

  handleClickInv() {
    //arrancamos el modal de registro para Invitado
    this.estadoRegistro = 'invitado'
  }

  handleSubmitInvitado(pInvitado) {
    //enviamos los datos a node
    this.invitadosService.sendNewInvitado(pInvitado).then((res) => {
      if (JSON.parse(res["_body"]).ERROR_NODE) {
        this.error = 'El email ya existe'
      } else {
        //almacenamos los datos del formulario de invitados en local Storage
        console.log(JSON.parse(res["_body"]).id)
        localStorage.setItem('usr', JSON.stringify({ inv: JSON.parse(res["_body"]).id, name: JSON.parse(res["_body"]).name, img: 'http://localhost:3000/images/placeholder.jpg' }))
        this.estadoRegistro = 'fin'
        //refescamos la pagina
        setTimeout(() => {
        window.location.href = 'home';
        }, 1000)
      }
    })
  }

  handleSubmitChef(pChef) {
    //enviamos los datos a node
    this.chefsService.sendNewChef(pChef).then((res) => {
      if (JSON.parse(res["_body"]).ERROR_NODE) {
        this.error = 'El email ya existe'
      } else {
        //almacenamos los datos del formulario de invitados en local Storage
        localStorage.setItem('usr', JSON.stringify({ chf: JSON.parse(res["_body"]).id, name: JSON.parse(res["_body"]).name, img: 'http://localhost:3000/images/placeholder.jpg' }))
        this.estadoRegistro = 'fin'
        //refescamos la pagina
        setTimeout(() => {
          window.location.href = 'home';
        }, 1000)
      }
    })
  }

  //validator edad
  validateEdad(control) {
    let minEdad = 14
    let maxEdad = 100
    let edadInt = parseInt(control.value)
    if (edadInt >= minEdad && edadInt <= maxEdad) {
      return null
    } else {
      return {
        edadMinima: minEdad,
        edadMaxima: maxEdad,
        message: `El campo edad debe estar entre ${minEdad} y ${maxEdad}`
      }
    }
  }

}


//tengo que hacer todas las comprobaciones en node