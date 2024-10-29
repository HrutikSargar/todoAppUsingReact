//write a basic boiler plate code for backend
// with express.json() middleware

const express = require("express");
const app = express();

//imported zod exported data here
const { createTodo, updateTodo } = require("./types");

//imported DB from dbMongoose.js file
const { todo } = require("./dbMongoose");

app.use(express.json());

app.post("/todo", async function (req, res) {
  // const title = req.body.title;
  // const description = req.body.description;

  const createPayload = req.body;

  const parsedPayLoad = createTodo.safeParse(createPayload);

  if (!parsedPayLoad.success) {
    res.status(400).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  //put it in mongoDb if all payload is correct

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", function (req, res) {
  //get the data from the request
  const findTodos = todo.find({});

  res.json({
    findTodos,
  });
});

app.put("/completed", async function (req, res) {
  //get the data from the request
  const updatedPayload = req.body;

  //validate it
  const parsedPayLoad = updateTodo.safeParse(updatedPayload);

  // if not correct return error
  if (!parsedPayLoad.success) {
    res.status(400).json({
      msg: "invalid payload",
    });
    return;
  }
  //put it in mongoDb if all payload is correct
  await todo.update(
    {
      //i wwant to update which has id as this
      _id: req.body.id,
    },
    {
      //update this
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
