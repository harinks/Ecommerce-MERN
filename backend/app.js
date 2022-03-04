const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json())

//route imports
const products = require("./routes/productRoute");
const users = require("./routes/userRoute")

app.use("/api/v1", products)
app.use("/api/v1", users)

//middleware for errors
app.use(errorMiddleware)

module.exports = app