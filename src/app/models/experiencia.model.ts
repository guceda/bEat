import { Chef } from "./chef.model";

export class Experiencia {
  imagenes: any[];
  experiencia: Experiencia;
    title:string
    description:string
    main_image:string
    city:string
    food_type: string
    price: number
    number_invitados: number
    latitude: number
    longitude: number
    availability: string
    id_experiencia:number
    constructor(title, description, city, main_image, food_type, price, latitude, longitude, availability, number_invitados, id_experiencia){
        this.title = title
        this.description = description
        this.main_image = main_image
        this.city = city
        this.food_type = food_type
        this.price = price
        this.latitude = latitude
        this.longitude = longitude
        this.availability = availability
        this.number_invitados = number_invitados
        this.id_experiencia = id_experiencia
    }
}