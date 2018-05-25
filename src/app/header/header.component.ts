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
   this.user = 'chef'
  }

  ngOnInit() {
    if(localStorage.getItem('invitados') || localStorage.getItem('chefs')){
      this.user = "chef";
      
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


}
