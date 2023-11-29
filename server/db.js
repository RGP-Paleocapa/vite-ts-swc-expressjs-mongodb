// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => console.log("Connected to MongoDB database"))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
