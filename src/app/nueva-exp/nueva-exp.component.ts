import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExperienciasService } from '../experiencias.service';
import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
  providers: [ExperienciasService]
})
export class NuevaExpComponent implements OnInit {

  estadoExperiencia: number
  bar: any
  barPercentage: number
  precioInv: number
  numInv: number
  latitud: number
  longitud: number
  zoom: number
  form: FormGroup
  ingredientes: Array<string>
  customStyle: any
  chefId: any
  address: any
  coordenadas: any
  files: any

  @ViewChild('ingrediente') ingredienteInput

  constructor(private router: Router, private experienciasService: ExperienciasService, private http: HttpClient) {
    this.estadoExperiencia = 1
    this.barPercentage = 0
    this.precioInv = 0
    this.numInv = 1
    this.latitud = 40.415363
    this.longitud = -3.707398
    this.zoom = 15
    this.ingredientes = []
    this.chefId = JSON.parse(localStorage.getItem('usr')).chf
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(60)]),
      food_type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      availability: new FormControl('', [Validators.required, Validators.minLength(3)]),
      chef_id: new FormControl(`${this.chefId}`),

      calle: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pais: new FormControl('España', [Validators.required, Validators.minLength(3)]),
      cp: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(5), Validators.maxLength(5)]),

      imagen: new FormControl('')

    })

  }

  ngOnInit() {
    this.barGrouth()
  }

  handleSig() {
    if (this.form.controls.title.valid && this.form.controls.description.valid && this.form.controls.food_type.valid) {
      this.estadoExperiencia += 1
      this.barGrouth()
      console.log(this.estadoExperiencia)
    }
    if (this.estadoExperiencia === 5) {

    }
  }

  handleAtras() {
    this.estadoExperiencia -= 1
    this.barDecrease()
  }

  //función para hacer crecer la barra
  barGrouth() {
    this.bar = { 'width': `${this.barPercentage += 20}%` }
  }
  //función para reducir la barra
  barDecrease() {
    this.bar = { 'width': `${this.barPercentage -= 20}%` }
  }

  handleAumentarPrecio() {
    this.precioInv += 1
  }

  handleDisminuirPrecio() {
    if (this.precioInv > 0) this.precioInv -= 1
  }

  handleAumentarInv() {
    this.numInv += 1
  }

  handleDisminuirInv() {
    if (this.numInv > 1) this.numInv -= 1
  }

  handleFileChange($event) {
    this.files = $event.target.files
    console.log(this.files)
  }

  //INGREDIENTES
  handleAddIngredient(pIngrediente) {
    let ingrediente = pIngrediente.toLowerCase()
    if (ingrediente.length !== 0) {
      this.ingredientes.push(ingrediente)
      this.ingredienteInput.nativeElement.value = ''
    }
  }

  deleteIngrediente(pIndex) {
    this.ingredientes.splice(pIndex, 1)
  }

  //MAPA
  cargarMapa() {
    let address = `${this.form.value.calle} ${this.form.value.city} ${this.form.value.pais}`
    console.log(address)
    this.experienciasService.getcoords(address).then((coords) => {
      this.coordenadas = { latitud: Number(coords.json().latitud), longitud: Number(coords.json().longitud) }
      console.log(this.coordenadas)
    })
  }


  handleFinish() {
    let fd = new FormData()

    fd.append('title', this.form.value.title)
    fd.append('description', this.form.value.description)
    fd.append('food_type', this.form.value.food_type)
    fd.append('availability', this.form.value.availability)
    fd.append('chef_id', JSON.stringify(this.form.value.chef_id))
    fd.append('city', this.form.value.city.toLowerCase())

    fd.append('imagen', this.files[0])
    fd.append('ingredients', JSON.stringify(this.ingredientes))
    fd.append('price', JSON.stringify(this.precioInv))
    fd.append('number_invitados', JSON.stringify(this.numInv))
    fd.append('address', `${this.form.value.calle} ${this.form.value.city} ${this.form.value.pais}`)

    let headers = new HttpHeaders
    headers.append('Content-Type', 'multipart/form-data')

    const req = new HttpRequest('POST', 'http://localhost:3000/api/experiencias/nuevaExperiencia', fd, {
      headers: headers
    })

    this.http.request(req).toPromise()
      .then(() => {
        this.router.navigate(['misExperiencias'])
       })
      .catch(err => console.log(err))

   
  }











}
