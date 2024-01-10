import Student from "../models/student";
import client from "./server";
import express, { json } from 'express';
import mongodb, {MongoClient} from 'mongodb'
const app = express();

//DB connection to collection
const database = client.db('Students');
const students = database.collection('Student_Details');

//getUser middleware
async function getStudent(req, res, next) {
    let student;
    try {
      student = await Student.findById(req.params.id);
      if (student == null) {
        return res.status(404).json({ message: "Cannot find User" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.student = student;
    next();
  }

// Get All Route
router.get("/api/students", async (req, res) => {
    try {
        const allStudents = [];
        allStudents = await students.find();
        res.json(allStudents);
      } catch (err) {
        res.status(500).json({message: err.message})
      }
}); 

// Get One Route
router.get("/api/students/:id", async (req, res) => {
    res.json(res.student);
}); 

// Create One Route
router.post("/api/students", async (req, res) => {
    const student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name
      });
      try {
        const newStudent = await student.save();
        res.status(201).json({ newStudent });
      } catch (err) {
        res.status(400).json({ message: err.message });}
});

// Edit One Route PUT version
router.put("/api/subjects/:id", async (req, res) => {
    try {
        const updatedUser = await res.user.set(req.body);
        res.json(updatedUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});

// Edit One Route PATCH version
router.patch("/api/subjects/:id", async (req, res) => {
    if (req.body.firstname != null) {
        res.user.firstname = req.body.firstname;
      }
      if (req.body.lastname != null) {
        res.user.lastname = req.body.lastname;
      }
      try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
});

// Delete One Route
router.delete("/api/students/:id", async (req, res) => {
    try {
        await res.student.deleteOne();
        res.json({ message: 'User has been deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }});

module.exports = router;