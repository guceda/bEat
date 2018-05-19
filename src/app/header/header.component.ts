import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user:string

  constructor() {
    this.user = "chef";
  }

  ngOnInit() {
  }

  handleClickSalir() {
    this.user = "none"
  }

}
