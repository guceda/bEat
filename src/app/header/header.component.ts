import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DialogService } from "ng2-bootstrap-modal";
import { RegistroComponent } from '../registro/registro.component'
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ModalService]
})
export class HeaderComponent implements OnInit {

  user: string

  constructor(private dialogService: DialogService, private modalService: ModalService) {
   this.user = ''
  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('usr')).chf){
      this.user = "chef";
      
    }else if(JSON.parse(localStorage.getItem('usr')).inv){
      this.user = 'invitado'
    }else{
      this.user = 'none'
    }
  }
  handleClickSalir() {
    this.user = "none"
  }

  mostrarModal(pComponente) {
    this.modalService.showConfirm(pComponente)
  }

  handleOnClickHome(){
    window.location.href = "home"
  }

  mostrarReg(){
    this.modalService.showConfirm('registro')
  }

}
