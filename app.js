const express = require("express");
const app = express();
const PORT = process.env.PORT;

//telling nodejs to require and use .env
require("dotenv").co;

//say nodejs that we are using ejs ,set every thing

app.set("view engine ", "ejs");

app.get("addBlog", (req, res) => {
  res.render("addBlog");
});
app.get("allBlog", (req, res) => {
  res.render("allBlog");
});

// app.listen(3000, () => {
//   //callback function
//   console.log("Node js project has started at port 3000");
// });

console.log(process.env.PORT);
