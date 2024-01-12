// External Dependencies
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";
import {MongoClient} from 'mongodb';
import Student from "../models/student";
import Subject from '../models/subject';
import { Injectable, Type } from '@angular/core';
import { Logger } from '../services/logger.service';

// Global Variables
let STUDENTS: Student[];
let SUBJECTS: Subject[];

export const collections:{
    students?: mongodb.Collection
    subjects?: mongodb.Collection}={}

const STUDENTS_COLLECTION_NAME="Student_Details"
const SUBJECTS_COLLECTION_NAME="Subjects"

// Initialize Connection
//Connect to the DB
/*export async function connectToDatabase () {
    dotenv.config();
    const client: mongodb.MongoClient = new MongoClient(DB_CONN_STRING);
    await client.connect();
    //const database = client.db('Students');
    const database: mongodb.Db = client.db(DB_NAME);
    //const students = database.collection('Student_Details');
    const studentsCollection: mongodb.Collection = database.collection(STUDENTS_COLLECTION_NAME);
    const subjectsCollection: mongodb.Collection = database.collection(SUBJECTS_COLLECTION_NAME);

    collections.students = studentsCollection;
    collections.subjects = subjectsCollection;*
}*/

//Read in from database
allData();
//Connect to the DB
export async function allData () {
  const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);
  const database = client.db('Students');
  const studentsCollection = database.collection(STUDENTS_COLLECTION_NAME);
  const subjectsCollection = database.collection(SUBJECTS_COLLECTION_NAME);

    try{
        // Query for all
        let allStudents = await studentsCollection.find({}).toArray();
        let allSubjects = await subjectsCollection.find({}).toArray();

        let studentArray = <Student[]> JSON.parse(allStudents.toString());  
        let subjectArray = <Subject[]> JSON.parse(allSubjects.toString());
        STUDENTS = studentArray;  
        SUBJECTS = subjectArray;  
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
export class BackendStudentService {
  constructor(private logger: Logger) {}

  getAllStudents(type: Type<any>): PromiseLike<any[]> {
    if (type === Student) {
      // TODO: get from the database
      return Promise.resolve<Student[]>(STUDENTS);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}

@Injectable({providedIn: 'root'})
export class BackendSubjectService {
  constructor(private logger: Logger) {}

  getAllSubjects(type: Type<any>): PromiseLike<any[]> {
    if (type === Subject) {
      // TODO: get from the database
      return Promise.resolve<Subject[]>(SUBJECTS);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}