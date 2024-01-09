
//MongoDB connection

//require("dotenv").config();
import express, { json } from 'express';
const app = express();
import { set, connect, connection as _connection } from "mongoose";

const connectionStr = "mongodb+srv://MelG:<0rganisationIsKey952>@cluster0.intpyda.mongodb.net/?retryWrites=true&w=majority"
set("strictQuery", true); 
const options = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}; 
connect(connectionStr, options, (error, connection) => { 
    if (error) { 
        console.error("Error connecting to MongoDB:", error); 
    } else { 
        console.log("Connected to MongoDB!"); 
    } 
});

//mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }); 
const db = _connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));
app.use(json());
import usersRouter from "./routes/students";
app.use("/students", usersRouter);
app.listen(process.env.PORT, () => console.log(`server has started at port ${process.env.PORT}`));



/*Old stuff
// Create a new student object
const person = await Student.create({
    id: 'LYC9n2c',
    first_name: 'Larry',
    last_name: 'Gray',
  });
  

//test the insert with a find
// Find a particular student
const firstPerson = await Student.find({first_name:'Larry'});
console.log(person);*/