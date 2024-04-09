const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/empForm')
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  })