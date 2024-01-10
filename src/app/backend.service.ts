import { Injectable, Type } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Logger } from './logger.service';
import { Student } from './student';
import mongodb, {MongoClient} from 'mongodb'
//Get query data
//const db =  require('./server.js');

//Connect to the DB
const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const database = client.db('Students');
const students = database.collection('Student_Details');

//Get array of JSON objects
let allStudents = await students.find({}).toArray();

//Convert to instance of local class
let STUDENTS = new Array <Student>(allStudents.length);
for (let i=0; i<allStudents.length; i++){
  STUDENTS[i]=new Student(allStudents[i]);
}

@Injectable({providedIn: 'root'})
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Student) {
      // TODO: get from the database
      return Promise.resolve<Student[]>(STUDENTS);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
