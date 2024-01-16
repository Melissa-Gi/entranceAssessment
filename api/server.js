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
    let allSubjects = await subjectsCollection.find({}).toArray();
    res.send(allSubjects);
});

//Get one subject
app.get('/subjects/:id', async (req, res) => {
  const subjectID = Number(req.params.id);
  let oneSubject = await subjectsCollection.find({sub_id:subjectID}).toArray();
  res.send(oneSubject);
});

//Get all students
app.get('/students', async (req, res) => {
    // get data from db
    let allStudents = await studentsCollection.find({}).toArray();
    // res.send(result)
    res.send(allStudents);
});

//Get one student
app.get('/students/:id', async (req, res) => {
  const studentID = req.params.id;
  let oneStudent = await studentsCollection.find({id:studentID}).toArray();
  res.send(oneStudent);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});