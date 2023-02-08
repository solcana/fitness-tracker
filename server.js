const express = require('express');
const app = express();
const stepsRoute = require('./routes/steps'); // Require Steps Module



const express = require('express');
const mongoose = require('mongoose');

const app = express();

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



/** 
 * Use the app.use() method to associate the module with the '/steps' route.
 
app.use('/steps', stepsRoute);
 
* Create an express application for Steps
 * 
 * */ 



/**
 * 
 * The app listens on port 3000 and logs a message to the console to indicate that the server is running.

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

 *  */ 


// ... the rest of our Express application code

app.listen(3000, () => {
  console.log('Express server started on port 3000');
});
