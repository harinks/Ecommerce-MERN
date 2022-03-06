const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//route imports
const products = require("./routes/productRoute");
const users = require("./routes/userRoute");
const orders = require("./routes/orderRoute");

app.use('/api/v1', products)
app.use('/api/v1', users)
app.use('/api/v1', orders)

//middleware for errors
app.use(errorMiddleware)

module.exports = app