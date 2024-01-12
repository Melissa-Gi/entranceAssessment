
//MongoDB connection

import express, { json } from 'express';
import mongodb, {MongoClient} from 'mongodb'
const app = express();

//From MongoDB docs
// connection string.
const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const database = client.db('Students');
const students = database.collection('Student_Details');
let studentsString;
let subjectsString;

async function run() {
  try {
    const database = client.db('Students');
    const students = database.collection('Student_Details');
    const subjects = database.collection('Subjects');

    // Query for all
    let allStudents = await students.find({}).toArray();
    let allSubjects = await subjects.find({}).toArray();
    studentsString = allStudents;
    subjectsString = allSubjects;
    // Query for all students
    //let allStudents = await students.find({}).toArray();
   
    console.log(studentsString);
    console.log(subjectsString);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export default {studentsString,subjectsString};