const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const homeController = require("./controllers/home");
const port = process.env.PORT;

app.get("/", homeController.index);

app.listen(port || 8000, () => {
  console.log(`Server is running on port ${port}`);
});