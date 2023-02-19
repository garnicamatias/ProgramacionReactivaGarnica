import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private teachers : Teacher[] = [
    {
      id: 0,
      name : 'Luis',
      surname: 'Hoffman',
      fileNumber: 2546,
      subject: 'Física',
      img: '../assets/img/hoffmanLuis.jpg'
    },
    {
      id: 1,
      name : 'Malena',
      surname: 'Suarez',
      fileNumber: 2056,
      subject: 'Diseño',
      img: '../assets/img/suarezMalena.jpg'

    },
    {
      id: 2,
      name : 'Federico',
      surname: 'Lopez',
      fileNumber: 1755,
      subject: 'Matemática',
      img: '../assets/img/lopezFederico.jpg'

    },
    {
      id: 3,
      name : 'Lorena',
      surname: 'Gamboa',
      fileNumber: 3200,
      subject: 'Inglés',
      img: '../assets/img/gamboaLorena.jpg'

    }
  ]

  constructor() {
   }

   getTeachers() : Promise<Teacher[]>{

    return new Promise((resolve, reject) =>{
       resolve(this.teachers)
    })
   }
}