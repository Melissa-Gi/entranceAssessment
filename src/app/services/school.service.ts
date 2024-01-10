import { Injectable, Type } from '@angular/core';
import { Logger } from '../logger.service';
import { Student } from '../student';
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";
import {MongoClient} from 'mongodb'

//Get query data
//const db =  require('./server.js');





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
