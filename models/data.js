const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  }
});


const emCollection = new mongoose.model('empcollection', empSchema);
module.exports = emCollection;