import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChefsService } from '../chefs.service';
import { InvitadosService } from '../invitados.service';
export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ChefsService, InvitadosService]

})
export class LoginComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  estadoLogin: string
  existeUsuario: boolean
  form: FormGroup
  error:String
  constructor(dialogService: DialogService, private ChefsService: ChefsService, private invitadosService:InvitadosService) {
    super(dialogService);
    this.estadoLogin = 'inicio'
    this.existeUsuario = true
    this.error = ""
  }
  confirm() {
    //trabajo con el MODAL
    this.result = true;
    this.close();
  }
  ngOnInit() {
    console.log('hola')
    this.form = new FormGroup({
      email: new FormControl('', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]),
      password: new FormControl('', [Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/), Validators.required])
    })

  }

  handleClickTipoUsuario(pUsuario) {
    this.estadoLogin = pUsuario
  }

  handleClickLoginInv(pInvitado) {
   //recuperamos el usuario de node
   this.invitadosService.loginInvitado(this.form.value).then((res) => {
     console.log(res.json())
    let usuario = res.json()
    if (usuario.error) {
      this.error = usuario.error     
    } else if (usuario.password) {
      localStorage.setItem('usr', JSON.stringify({inv:usuario.id_invitado, img: usuario.image, name: usuario.name}))
      this.estadoLogin = 'fin'
      //refescamos la pagina
      setTimeout(() => {
        window.location.href = 'home';
      }, 1000)
    }else{
      this.error ='Ha habido un error, inténtelo más tarde'
    }
  })
  }
  handleClickLoginChef(pChef) {
    //recuperamos el usuario de node
    this.ChefsService.loginChef(this.form.value).then((res) => {
      let usuario = res.json()
      if (usuario.error) {
        this.error = usuario.error     
      } else if (usuario.password) {
        localStorage.setItem('usr', JSON.stringify({chf:usuario.id_chef, img: usuario.image, name: usuario.name}))
        this.estadoLogin = 'fin'
        //refescamos la pagina
        setTimeout(() => {
          window.location.href = 'home';
        }, 1000)
      }else{
        this.error ='Ha habido un error, inténtelo más tarde'
      }
    })
  }
}


