export class Invitado {
    edad:string
    nombre:string
    apellidos: string
    email:string
    contraseña: string
    imagen:string
    constructor(edad, nombre, apellidos, email, contraseña, imagen, experiencias){
        this.edad = edad
        this.nombre = nombre
        this.apellidos = apellidos
        this.email = email
        this.contraseña = contraseña
        this.imagen = imagen
    }
}