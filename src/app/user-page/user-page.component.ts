import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InvitadosService } from '../invitados.service';
import { ChefsService } from '../chefs.service';
import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { ImageChangeService } from '../image-change.service';




@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [InvitadosService, ChefsService]
})
export class UserPageComponent implements OnInit {

  userId: any
  usuario: any
  users:any
  files: any
  imagen: any 
  imgStyles: any
  modificar:boolean
  disable = true


  form: FormGroup
  formImg: FormGroup



  constructor(private invitadosService: InvitadosService, private chefsService: ChefsService, private http:HttpClient, private imageChange: ImageChangeService) {

    this.usuario = {}
    this.modificar = false
    

    //recuperamos el user ID
    this.imagen = JSON.parse(localStorage.getItem('usr')).img
    this.users = JSON.parse(localStorage.getItem('usr'))
    this.users.inv ? this.userId = this.users.inv : this.userId = this.users.chf

    this.imgStyles = {
      'background-image': `url(${this.imagen})`,
      'height': '400px',
      'width':'400px',
      'color': 'red',
      'background-position': 'center',
      'background-size': 'cover'
     
    }


    this.form = new FormGroup({
      name: new FormControl({value: '', disabled: this.disable}, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl({value: '', disabled: this.disable}, [Validators.required, Validators.minLength(3)]),
      age: new FormControl({value: '', disabled: this.disable}, [Validators.required, this.validateEdad]),
      //newPassword: new FormControl({value: '', disabled: this.disable}, Validators.required),
      userId: new FormControl(this.userId)
    })

    this.formImg = new FormGroup({
      image: new FormControl('')
    })
  }

  ngOnInit() {
    this.getUser()
   
  }

  getUser(){
    //recuperamos el usuario completo
    if (this.users.inv) {
      this.invitadosService.getById(this.userId).then((res) => {
        this.usuario = res.json()[0]
        this.setFormValues(this.usuario)
      })
    } else {
      this.chefsService.getById(this.userId).then((res) => {
        this.usuario = res.json()[0]
        console.log(this.usuario)
        this.setFormValues(this.usuario)
      })
    }
  }


  handleFileChange($event){
    this.files = $event.target.files
    console.log(this.files)
    let fd = new FormData()
    fd.append('imagen', this.files[0])
    fd.append('id', this.userId)

    let headers = new HttpHeaders
    headers.append('Content-Type', 'multipart/form-data')

    const req = new HttpRequest('POST', 'http://localhost:3000/api/chefs/changeImage', fd, {
      headers: headers 
    })

    this.http.request(req).toPromise()
    .then((res)=>{
      this.users.img = res['body'].urlImagen
      this.imagen = this.users.img
      localStorage.setItem('usr', JSON.stringify(this.users))
      this.imgStyles = {
        'background-image': `url(${this.imagen})`,
        'height': '400px',
        'width':'400px',
        'color': 'red',
        'background-position': 'center',
        'background-size': 'cover'
       
      }
      this.imageChange.setNewImage(this.imagen)
     })
     .catch(err => console.log(err))
  }

  setFormValues(pUser){
    console.log(pUser)
    let form = this.form.controls
    form.name.setValue(this.capitalize(pUser.name))
    form.surname.setValue(this.capitalize(pUser.surname))
    // form.name.setValue(pUser.name)
    // form.surname.setValue(pUser.surname)
    form.age.setValue(pUser.age)
  }

  capitalize(value){
    return value.replace(/\b\w/g, l => l.toUpperCase())
  }

  handleDisable(){
    this.disable = !this.disable
    console.log(this.disable)
    this.disable === false ? this.form.controls.name.enable() : this.form.controls.name.disable()
    this.disable === false ? this.form.controls.surname.enable() : this.form.controls.surname.disable()
    this.disable === false ? this.form.controls.age.enable() : this.form.controls.age.disable()
    //this.disable === false ? this.form.controls.newPassword.enable() : this.form.controls.newPassword.disable()

    this.modificar = !this.modificar
  }

  handleCancelar(){
    this.handleDisable()
    this.setFormValues(this.usuario)
  }



   //validator edad
   validateEdad(control) {
    let minEdad = 14
    let maxEdad = 100
    let edadInt = parseInt(control.value)
    if (edadInt >= minEdad && edadInt <= maxEdad) {
      return null
    } else {
      return {
        edadMinima: minEdad,
        edadMaxima: maxEdad,
        message: `El campo edad debe estar entre ${minEdad} y ${maxEdad}`
      }
    }
  }


  onSubmit(values){
    if (this.users.inv) {
      this.invitadosService.modifyInvitado(values).then(()=>{
        this.getUser()
        this.handleCancelar()
      })
    } else {
      this.chefsService.modifyChef(values).then(()=>{
        this.getUser()
        this.handleCancelar()
      })
      
      
    }
    
  }

}

