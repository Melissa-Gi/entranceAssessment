// External Dependencies
import { collections } from "../services/backend.service";
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Student from "../models/student";

// Global Config
export const schoolRouter = express.Router();
schoolRouter.use(express.json());

// GET ALL STUDENTS
schoolRouter.get("/", async (_req: Request, res: Response) => {
    try {
        //Convert to instance of local class
        const allStudents = await collections.students.find({}).toArray();
        let STUDENTS = new Array <Student>(allStudents.length);
        for (let i=0; i<allStudents.length; i++){
        STUDENTS[i]=new Student(allStudents[i]);
        }

       const students = (await collections.students.find({}).toArray()) as Student[];

        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET ONE STUDENT
schoolRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.["id"];

    try {
        
        const query = { _id: new ObjectId(id) };
        const game = (await collections.students.findOne(query)) as unknown as Student;

        if (game) {
            res.status(200).send(game);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
// POST

// PUT

// DELETE


