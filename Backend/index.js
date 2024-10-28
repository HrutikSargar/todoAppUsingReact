//write a basic boiler plate code for backend
// with express.json() middleware

const express = require("express");
const app = express();

const { createTodo , updateTodo}= require ("./types")
app.use(express.json());

app.post("/todo", function (req, res) {
  // const title = req.body.title;
  // const description = req.body.description;

  const createPayload = req.body;

  const parsedPayLoad= createTodo.safeParse(createPayload)

  if(!parsedPayLoad.success){
    res.status(400).json({
      msg:"invalid payload"
    })
    return
  }
  //put it in mongoDb if all payload is correct


  const response = 
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  //get the data from the request
  const updatedPayload = req.body;

  //validate it
  const parsedPayLoad= updateTodo.safeParse(updatedPayload)

  // if not correct return error
  if(!parsedPayLoad.success){
    res.status(400).json({
      msg:"invalid payload"
    })
    return
  }
  //put it in mongoDb if all payload is correct
});

app.listen(3000);
