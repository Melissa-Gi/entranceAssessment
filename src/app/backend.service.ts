import { Injectable, Type } from '@angular/core';
import client from "./server";
import { Logger } from './logger.service';
import { Hero } from './hero';

//import { Student } from '../models/student';
//import router from ./routes/students;

const database = client.db('Students');
const students = database.collection('Student_Details');
const subjects = database.collection('Subjects');

//const allStudents: Student[];
console.log(fetch('https://http://localhost:4200/api/students'));


const HEROES = [
        new Hero('Windstorm', 'Weather mastery'),
        new Hero('Dr Nice', 'Killing them with kindness'),
        new Hero('Magneta', 'Manipulates metallic objects')
      ];

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      // TODO: get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}