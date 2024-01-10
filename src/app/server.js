
//MongoDB connection

import express, { json } from 'express';
import mongodb, {MongoClient} from 'mongodb'
const app = express();

//Connect to the DB
const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const database = client.db('Students');
const students = database.collection('Student_Details');

//Get array of JSON objects
const allStudents = await students.find({}).toArray();
module.exports = allStudents;
/*
//From MongoDB docs

// connection string.
const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('Students');
    const students = database.collection('Student_Details');

    // Query for a student t
    const query = { id: 1 };
    let allStudents = await students.find({}).toArray();
    const student = await students.find();

    console.log(allStudents);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
