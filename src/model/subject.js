import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const subjectsSchema = new Schema({
  sub_id: Number,
  name: String,
  teacher: String,
});

const subject = model('Student', subjectsSchema);
export default subject;