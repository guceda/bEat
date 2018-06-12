import { Component, OnInit } from '@angular/core'
import { DialogComponent, DialogService } from "ng2-bootstrap-modal"
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'confirm',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent  extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string
  message: string
  estado:number

  latitud: number
  longitud: number
  zoom: number = 15
  idWatch

  form:FormGroup

  
  constructor(dialogService: DialogService) {
    super(dialogService);
    this.estado = 0
   }

  ngOnInit() {
   this.latitud = 51.678418
   this.longitud = 7.809007

   this.form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(60)]),
    price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    number_invitados: new FormControl('', [ Validators.required, Validators.pattern('^[0-9]*$')]),
    city: new FormControl('', [Validators.required]),
    food_type: new FormControl('', [Validators.required]),
    availability: new FormControl('', [Validators.required])
  })
  }

  confirm() {
    //arrancamos el modal con inicio
    this.result = true;
    this.close();
  }

  handleSiguiente(){
    this.estado += 1
  }

}
