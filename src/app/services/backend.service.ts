// External Dependencies
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";
import {MongoClient} from 'mongodb';
import Student from "../models/student";
import { Injectable, Type } from '@angular/core';
import { Logger } from '../services/logger.service';

// Global Variables
const STUDENTS = allStudents();
export const collections:{
    students?: mongodb.Collection
    subjects?: mongodb.Collection}={}
const DB_CONN_STRING="mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority"
const DB_NAME="Students"
const STUDENTS_COLLECTION_NAME="Student_Details"
const SUBJECTS_COLLECTION_NAME="Subjects"

// Initialize Connection
//Connect to the DB
export async function connectToDatabase () {
    dotenv.config();
    const client: mongodb.MongoClient = new MongoClient(DB_CONN_STRING);
    await client.connect();
    //const database = client.db('Students');
    const database: mongodb.Db = client.db(DB_NAME);
    //const students = database.collection('Student_Details');
    const studentsCollection: mongodb.Collection = database.collection(STUDENTS_COLLECTION_NAME);
    const subjectsCollection: mongodb.Collection = database.collection(SUBJECTS_COLLECTION_NAME);

    collections.students = studentsCollection;
    collections.subjects = subjectsCollection;
}
//Connect to the DB
export async function allStudents ():Promise<Student[]> {
    dotenv.config();
    const client: mongodb.MongoClient = new MongoClient(DB_CONN_STRING);
    await client.connect();
    //const database = client.db('Students');
    const database: mongodb.Db = client.db(DB_NAME);
    //const students = database.collection('Student_Details');
    const studentsCollection: mongodb.Collection = database.collection(STUDENTS_COLLECTION_NAME);
    const subjectsCollection: mongodb.Collection = database.collection(SUBJECTS_COLLECTION_NAME);

    collections.students = studentsCollection;
    collections.subjects = subjectsCollection;

    //To show successful connection
    try{
        // Query for all students
        const query = { id: 1 };
        let allStudents = await studentsCollection.find({}).toArray();
        let studentArray = <Student[]> JSON.parse(allStudents.toString());      
        return studentArray;
        /*let students = new Array <Student>(allStudents.length);
        for (let i=0; i<allStudents.length; i++){
        students[i]=new Student(allStudents[i]);}*/
    }
      finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

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