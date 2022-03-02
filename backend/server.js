const app = require("./app");

//config
require("dotenv").config({ path:"backend/config/.env" })

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });