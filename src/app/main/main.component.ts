import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [ModalService]
})
export class MainComponent implements OnInit {

  mostrarError:boolean

  constructor(private activatedRoute:ActivatedRoute, private modalService:ModalService) { 
    this.mostrarError = false
  }

  ngOnInit() {

    if(this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'login'){
      this.mostrarError = true
    }
  }

}
