import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChefsService } from '../chefs.service';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  estadoLogin: string
  existeUsuario: boolean
  form: FormGroup
  constructor(dialogService: DialogService,  private ChefsService:ChefsService) {
    super(dialogService);
    this.estadoLogin = 'inicio'
    this.existeUsuario = true
  }
  confirm() {
    //trabajo con el MODAL
    this.result = true;
    this.close();
  }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required])
    })
  }

  handleClickTipoUsuario(pUsuario) {
    this.estadoLogin = pUsuario
  }
  handleClickLoginInv() {
    //alamacenamos los datos del formulario de invitados
    if (localStorage.getItem('invitado')) {
      this.estadoLogin = 'fin'
      //refescamos la pagina
      setTimeout(() => {
        window.location.href = 'home';
      }, 1000)
    } else {
      this.estadoLogin = 'error'
    }
  }
  handleClickLoginChef() {
    //alamacenamos los datos del formulario de invitados
    if (localStorage.getItem('chef')) {
      this.estadoLogin = 'fin'
      //refescamos la pagina
      setTimeout(() => {
        window.location.href = 'home';
      }, 1000)
    } else {
      this.existeUsuario = false
    }
  } 
}


