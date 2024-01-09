const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subjectsSchema = new Schema({
  sub_id: {
    type: Number,
    required: true},
  name: {
    type: String,
    required: true},
  teacher: {
    type: String,
    required: true},
});

const Subject = model('Student', subjectsSchema);
module.exports = Subject;