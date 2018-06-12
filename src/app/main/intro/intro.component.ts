import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [ModalService]
})
export class IntroComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit() {
  }
  mostrarModal(pComponente) {
    this.modalService.showConfirm(pComponente)
  }
}
