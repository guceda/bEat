import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DialogService } from "ng2-bootstrap-modal";
import { RegistroComponent } from '../registro/registro.component'
import { ModalService } from '../modal.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ImageChangeService } from '../image-change.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ModalService]
})
export class HeaderComponent implements OnInit {

  user: string
  activeButton: number
  image: any
  name: any
  userName: any
  active: boolean
  inactive:boolean

  constructor(private router: Router, private dialogService: DialogService, private modalService: ModalService, private imageChange: ImageChangeService, private activatedRoute:ActivatedRoute ) {
    this.user = ''
    if (localStorage.getItem('usr')) { 
      this.userName = JSON.parse(localStorage.getItem('usr')).name
      this.imageChange.setNewImage(JSON.parse(localStorage.getItem('usr')).img)
     }
   

  

  }

  ngOnInit() {

    console.log(this.activatedRoute.root)


    if (localStorage.getItem('usr')) {
      if (JSON.parse(localStorage.getItem('usr')).chf) {
        this.image = JSON.parse(localStorage.getItem('usr')).img
        this.name = JSON.parse(localStorage.getItem('usr')).name
        this.user = "chef";
      } else if (JSON.parse(localStorage.getItem('usr')).inv) {
        this.image = JSON.parse(localStorage.getItem('usr')).img
        this.name = JSON.parse(localStorage.getItem('usr')).name
        this.user = 'invitado'
      }
    } else {
      this.user = 'none'
    }
  }

  handleClickSalir() {
    window.location.href = "home"
    localStorage.clear()

  }

  mostrarModal(pComponente) {
    this.modalService.showConfirm(pComponente)
  }

  handleOnClickHome() {
    // window.location.href = "home"
    this.router.navigate(['home'])

  }


  nuevaExp() {
    //window.location.href = "nuevaExperiencia"
    this.router.navigate(['nuevaExperiencia'])
  }

  myExps() {
    // window.location.href = "misExperiencias"
    this.router.navigate(['misExperiencias'])
  }

  favoritas() {
    //window.location.href = "favoritas"
    this.router.navigate(['favoritas'])
  }

  myMessages() {
    //window.location.href = "mensajes"
    this.router.navigate(['mensajes'])
  }

  handleUser() {
    this.router.navigate(['usuario', this.userName])
  }


}
