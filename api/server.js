const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;
const mongodb = require('mongodb')

//MongoDB config
const STUDENTS_COLLECTION_NAME="Student_Details"
const SUBJECTS_COLLECTION_NAME="Subjects"
const uri = 'mongodb+srv://MelG:connectToDB19461@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(uri);
const database = client.db('Students');
const studentsCollection = database.collection(STUDENTS_COLLECTION_NAME);
const subjectsCollection = database.collection(SUBJECTS_COLLECTION_NAME);


const corsOptions = {
    origin: 'http://localhost:4200',
  };
app.use(cors(corsOptions));

//Get all subjects
app.get('/subjects', async (req, res) => {
    // get data from db
    let allSubjects = await subjectsCollection.find({}).toArray();
    // res.send(result)
    res.send(allSubjects);
});

//Get all students
app.get('/students', async (req, res) => {
    // get data from db
    let allStudents = await studentsCollection.find({}).toArray();
    // res.send(result)
    res.send(allStudents);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});