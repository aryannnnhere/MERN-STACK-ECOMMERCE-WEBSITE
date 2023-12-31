const express = require("express");
const app = express();
// const ErrorMiddleware = require("./middleware/error");

app.use(express.json());

// route import
const product = require("./routes/productRoute");

app.use("/api/v1", product);

// middleware for error
// app.use(ErrorMiddleware);


module.exports = app;