import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input()experience

  backgroundStyle: Object

  constructor() { 


  }


  ngOnInit() {
     setTimeout(()=>{
      this.backgroundStyle = {
        'background-image':`url(${this.experience.main_image})`,
      }
    },500)
   
  }

}
