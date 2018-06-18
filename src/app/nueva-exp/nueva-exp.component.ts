import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExperienciasService } from '../experiencias.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
  providers: [ExperienciasService]
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
  customStyle:any
  chefId:any

  @ViewChild('ingrediente')ingredienteInput

  constructor(private router:Router, private experienciasService:ExperienciasService) {
    this.estadoExperiencia = 1
    this.barPercentage = 0
    this.precioInv = 0
    this.numInv = 1
    this.latitud = 40.415363
    this.longitud = -3.707398
    this.zoom = 15
    this.ingredientes = ['arroz']
    this.chefId = JSON.parse(localStorage.getItem('usr')).chf
    this.form = new FormGroup ({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(60)]),
      food_type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      availability: new FormControl('', [Validators.required, Validators.minLength(3)]),
      chef_id: new FormControl(`${this.chefId}`)
    })
//estilos del input de imágenes
    this.customStyle = {
      selectButton: {
        "background-color": "lightgrey",
        "color": "white",
        "width": "100px",
        "height": "100px",
        "line-height": "80px",
        "text-align": "center",
        "border-radius": "50%",
        "font-size": "500%",
        
      },
      clearButton: {
        "background-color": "#FFF",
        "border-radius": "25px",
        "display": "none",
        "margin-left": "10px"
      },
      layout: {
        "background-color": "white",
        "border": "0",
        "color": "#FFF",
        "font-size": "15px",
        "margin": "10px",
        "padding-top": "5px",
        "width": "100%"
      },
      previewPanel: {
        "background-color": "white",
        "border": "0",
        "margin-bottom": "30px"
      }
    }
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
    this.experienciasService.setNewExperience(this.form.value).then((res)=>{console.log(res)})
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

  onUploadStateChanged($event){
    console.log('holi')
    console.log($event)
  }
 
}
