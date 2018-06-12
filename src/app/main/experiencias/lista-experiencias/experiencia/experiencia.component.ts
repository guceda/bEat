import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from '../../../../models/experiencia.model';
import { ModalService } from '../../../../modal.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  providers: [ModalService]
})
export class ExperienciaComponent implements OnInit {


  @Input() experiencia: Experiencia

  constructor(private modalService: ModalService, private router:Router) { }

  ngOnInit() {

  }
  handleClick() {
    console.log('hola');
    
    if (localStorage.getItem('usr')){
      this.router.navigate(['experiencia',this.experiencia.id_experiencia,])
    } else {
      this.modalService.showConfirm('login')
    }
  }
}
