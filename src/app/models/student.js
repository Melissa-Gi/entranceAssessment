const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const studentsSchema = new Schema({
  id: String,
  first_name: {
    type: String,
    required: true},
  last_name: {
    type: Boolean,
    required: true},
  subjects: {
    type: [String],
    require:true},
});

const Student = model('Student', studentsSchema);
module.exports = Student;