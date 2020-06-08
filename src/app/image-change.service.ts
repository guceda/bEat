import { Injectable } from '@angular/core';

@Injectable()
export class ImageChangeService {

  image: string

  constructor() { }

  setNewImage(newImage){
    this.image = newImage
  }
  
  getImage(){
    return this.image
  }

}

