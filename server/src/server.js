const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logRoutes = require("./routes/logRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", logRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
