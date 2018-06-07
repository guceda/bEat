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
  constructor(dialogService: DialogService, private invitadosService:InvitadosService, private chefsService:ChefsService) {
    super(dialogService);
    this.estadoRegistro = 'inicio'
  }

  ngOnInit() {
    //generamos formulario angular
    this.formInvitado = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [Validators.required, this.validateEdad]),
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required])
    })

    this.formChef = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.validateEdad]),
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required])
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
  this.invitadosService.sendNewInvitado(pInvitado)

    //alamacenamos los datos del formulario de invitados
    this.estadoRegistro = 'fin'
    localStorage.setItem('invitado', JSON.stringify(pInvitado))
    //refescamos la pagina
    setTimeout(() => {
      window.location.href = 'home';
    }, 1000)
  }

  handleSubmitChef(pChef) {
    //enviamos los datos a node
  this.chefsService.sendNewChef(pChef)
    //alamacenamos los datos del formulario de invitados
    localStorage.setItem('chef', JSON.stringify(pChef))
    this.estadoRegistro = 'fin'
    //refescamos la pagina
    setTimeout(() => {
      window.location.href = 'home';
    }, 1000)
  }
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

