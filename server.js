const express = require('express');
const app = express();
const stepsRoute = require('./routes/steps'); // Require Steps Module









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