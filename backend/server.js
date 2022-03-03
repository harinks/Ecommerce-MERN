const app = require("./app");
const connectDatabase = require("./config/db");


//config
require("dotenv").config({ path:"backend/config/.env" })

//connecting to db
connectDatabase()


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });