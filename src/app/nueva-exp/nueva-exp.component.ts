import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
})
export class NuevaExpComponent implements OnInit {

  estadoExperiencia:number
  bar: any
  barPercentage:number
  precioInv:number
  numInv:number
  latitud: number
  longitud: number
  zoom: number
  form:FormGroup
  ingredientes: Array<string>

  @ViewChild('ingrediente')ingredienteInput

  constructor(private router:Router) {
    this.estadoExperiencia = 1
    this.barPercentage = 0
    this.precioInv = 0
    this.numInv = 1
    this.latitud = 40.415363
    this.longitud = -3.707398
    this.zoom = 15
    this.ingredientes = ['arroz']
    this.form = new FormGroup ({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(60)]),
      food_type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      availability: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
   }

  ngOnInit() {
    this.barGrouth()
  }


  handleSig(){
    if(this.form.controls.title.valid && this.form.controls.description.valid && this.form.controls.food_type.valid){
    this.estadoExperiencia += 1 
    this.barGrouth()
    }
  }

  handleAtras(){
    this.estadoExperiencia -= 1
    this.barDecrease()
  }

  //función para hacer crecer la barra
  barGrouth(){
    this.bar = {'width': `${this.barPercentage += 20}%`}
  }
  //función para reducir la barra
  barDecrease(){
    this.bar = {'width': `${this.barPercentage -= 20}%`}
  }

  handleAumentarPrecio(){
    this.precioInv += 1
  }

  handleDisminuirPrecio(){
    if( this.precioInv > 0 )this.precioInv -= 1
  }

  handleAumentarInv(){
    this.numInv += 1
  }

  handleDisminuirInv(){
    if( this.numInv > 1 )this.numInv -= 1
  }
  
  handleFinish(){
    //this.router.navigate(['home'])
    console.log(this.form.value)
    this.form.value.ingredients = this.ingredientes
    this.form.value.price = this.precioInv
    this.form.value.number_invitados = this.numInv
  }

  handleAddIngredient(pIngrediente){
    let ingrediente = pIngrediente.toLowerCase()
    if(ingrediente.length !== 0){
    this.ingredientes.push(ingrediente)
    this.ingredienteInput.nativeElement.value = ''
    }
  }
  deleteIngrediente(pIndex){
    this.ingredientes.splice(pIndex, 1)
  }

 
}
