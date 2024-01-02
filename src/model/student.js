import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const studentsSchema = new Schema({
  id: String,
  first_name: String,
  last_name: Boolean,
  subjects: [String],
});

const Student = model('Student', studentsSchema);
export default Student;