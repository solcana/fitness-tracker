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

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Connected to MongoDB");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Port is listening"));
