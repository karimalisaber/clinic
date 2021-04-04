const mongoose = require('mongoose');

const uniquValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
  email: {type: String, required: true, unique: true}, // unique for optimazation not for validate
  password : {type: String, required: false},
  role : {type: Number, required: false, default: 0}
})

userSchema.plugin(uniquValidator)

module.exports = mongoose.model('User', userSchema)
