import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'


export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']

})
export class RegistroComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string
  message: string
  estadoRegistro: string
  formInvitado: FormGroup
  formChef:FormGroup
  invitados: Array<object>
  chefs: Array<object>
  constructor(dialogService: DialogService) {
    super(dialogService);
    this.estadoRegistro = 'inicio'
    this.invitados = []
    this.chefs = []
  }

  ngOnInit() {
    //generamos formulario angular
    this.formInvitado = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl('', ),
      edad: new FormControl('', Validators.min(18)),
      email: new FormControl(''),
      password: new FormControl('')
    })

    this.formChef = new FormGroup({
      nombre: new FormControl(''),
      apellidos: new FormControl('', ),
      edad: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
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
    console.log(this.estadoRegistro);
  }

  handleClickInv() {
    //arrancamos el modal de registro para Invitado
    this.estadoRegistro = 'invitado'
    console.log(this.estadoRegistro);
  }
  
  handleSubmitInvitado(pInvitado) {
    //alamacenamos los datos del formulario de invitados
    console.log(this.formInvitado.value);
    this.invitados.push(this.formInvitado.value)
    this.estadoRegistro = 'fin'
    //refescamos la pagina
    setTimeout(()=>{
      window.location.href = 'home';
    },1000)
    localStorage.setItem('invitados', JSON.stringify(this.invitados))
  }

  handleSubmitChef(pChef) {
    //alamacenamos los datos del formulario de invitados
    console.log(this.formChef.value);
    this.chefs.push(this.formChef.value)
    this.estadoRegistro = 'fin'
        //refescamos la pagina
        setTimeout(()=>{
          window.location.href = 'home';
        },1000)
    localStorage.setItem('chefs', JSON.stringify(this.chefs))
  }
}

