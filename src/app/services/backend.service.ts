// External Dependencies
import * as mongodb from "mongodb";
import * as dotenv from "dotenv";
import {MongoClient} from 'mongodb';

// Global Variables
export const collections:{
    students?: mongodb.Collection
    subjects?: mongodb.Collection}={}

// Initialize Connection
//Connect to the DB
export async function connectToDatabase () {
    dotenv.config();
    const client: mongodb.MongoClient = new MongoClient(DB_CONN_STRING);
    await client.connect();
    //const database = client.db('Students');
    const database: mongodb.Db = client.db(process.env.DB_NAME);
    //const students = database.collection('Student_Details');
    const studentsCollection: mongodb.Collection = database.collection(process.env.STUDENTS_COLLECITION_NAME);
    const subjectsCollection: mongodb.Collection = database.collection(process.env.SUBJECTS_COLLECITION_NAME);

    collections.students = studentsCollection;
    collections.subjects = subjectsCollection;
    }
