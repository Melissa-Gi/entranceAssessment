
import mongoose from 'mongoose';
import Student from './model/student';

mongoose.connect("mongodb+srv://<username>:<0rganisationIsKey952>@cluster0.eyhty.mongodb.net/Students?retryWrites=true&w=majority")

// Create a new student object
const person = await Student.create({
    id: 'LYC9n2c',
    first_name: 'Larry',
    last_name: 'Gray',
  });
  

//test the insert with a find
// Find a particular student
const firstPerson = await Student.find({first_name:'Larry'});
console.log(person);