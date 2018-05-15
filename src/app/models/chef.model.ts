import { Experiencia } from './experiencia.model'
 
export class Chef {
    edad:string
    nombre:string
    apellidos: string
    email:string
    contraseña: string
    imagen:string
    experiencias: Array<Experiencia>
    constructor(edad, nombre, apellidos, email, contraseña, imagen, experiencias){
        this.edad = edad
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.contraseña = contraseña
        this.imagen = imagen
        this.experiencias = experiencias
    }
}