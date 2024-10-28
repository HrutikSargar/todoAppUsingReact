//write a basic boiler plate code for backend
// with express.json() middleware

const express = require("express");
const app = express();

app.use(express.json());

app.post("/todo", function (req, res) {
  const title = req.body.title;
  const description = req.body.description;


  const response = 
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {});

app.listen(3000);
