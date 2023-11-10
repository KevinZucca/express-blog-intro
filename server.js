const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const homeController = require("./controllers/home");
const postsController = require("./controllers/posts");

const port = process.env.PORT;

// ROUTES
app.get("/", homeController.index);
app.get("/posts", postsController.index);

//SERVER LISTEN
app.listen(port || 8000, () => {
  console.log(`Server is running on port ${port}`);
});
