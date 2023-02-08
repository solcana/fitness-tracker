const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

