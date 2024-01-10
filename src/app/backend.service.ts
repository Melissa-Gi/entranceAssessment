import { Injectable, Type } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Logger } from './logger.service';
import { Student } from './hero';
import client from './server';
var StudentModel = require('./models/student');

const database = client.db('Students');
const students = database.collection('Student_Details');

const HEROES = [await students.find()];
console.log(HEROES)

export class MyComponent {
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('http://localhost:4200/api/students')
      .subscribe(data => {
        console.log(data)
        // handle the data
      });
  }
}

/*const HEROES = [
        new Hero('Windstorm', 'Weather mastery'),
        new Hero('Dr Nice', 'Killing them with kindness'),
        new Hero('Magneta', 'Manipulates metallic objects')
      ];*/

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === StudentModel.Student) {
      // TODO: get from the database
      return Promise.resolve<Student[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
