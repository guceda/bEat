import { Chef } from "./chef.model";

export class Experiencia {
    titulo:string
    descripcion:string
    imagen:string
    ubicacion:string
    tipo: string
    precio: number
    invitados: number
    chef: Chef
    fecha: string
    ingredientes: string
    constructor(titulo, descripcion, imagen, ubicacion, tipo, precio, chef, fecha, ingredientes, invitados){
        this.titulo = titulo
        this.descripcion = descripcion
        this.imagen = imagen
        this.ubicacion = ubicacion
        this.tipo = tipo
        this.precio = precio
        this.chef = chef
        this.fecha = fecha
        this.ingredientes = ingredientes
        this.invitados = invitados
    }
}