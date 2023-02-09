// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Require Route Files
const indexRouter = require("./routes/index");

// Routes
// Mount imported Routers
app.use(indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is listening on port ${port}`));
