import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'confirm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel  {
  title: string;
  message: string;
  estadoLogin:string
  constructor(dialogService: DialogService) {
    super(dialogService);
    this.estadoLogin = 'inicio'
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
  ngOnInit() {
  }

  handleClickTipoUsuario(pUsuario){
    this.estadoLogin = pUsuario 
  }
  handleClickLoginInv(){
    if(localStorage.getItem('invitados')){
      this.estadoLogin = 'fin'
    }
  }

}
