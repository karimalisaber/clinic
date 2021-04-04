const mongoose = require('mongoose');

const uniquValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  name: {type: String, required: false },
  address: {type: String, required: false },
  phone: {type: String, required: false },
  age: {type: String, required: false },
  father_name: {type: String, required: false },
  father_job: {type: String, required: false },
  father_age: {type: String, required: false },
  mather_name: {type: String, required: false },
  mather_age: {type: String, required: false },
  number_of_births: {type: String, required: false },
  mather_job: {type: String, required: false } ,
  date: {type: String, required: false },
  note: {type: String, required: false },
  relation_type: {type: String, required: false }
})


module.exports = mongoose.model('Doctor', userSchema)
