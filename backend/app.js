const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//route imports
const products = require("./routes/productRoute");
const users = require("./routes/userRoute")

app.use("/api/v1", products)
app.use("/api/v1", users)

//middleware for errors
app.use(errorMiddleware)

module.exports = app