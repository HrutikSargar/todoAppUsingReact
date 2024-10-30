//write a basic boiler plate code for backend
// with express.json() middleware

const express = require("express");
const app = express();

//imported zod exported data here
const { createTodo, updateTodo } = require("./types");

//imported DB from dbMongoose.js file
const { todos } = require("./dbMongoose");

app.use(express.json());

//TO SAVE TODO INTO DB
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

  //saving the data into the db
  //save and create are used to store the data into the databases
  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

//TO FETCH ALL DATA FROM DB
app.get("/todos", async function (req, res) {
  try {
    //get the data from the request
    const findTodos = await todos.find();
    res.json(findTodos);
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

//TO UPDATE TODO AS DONE INTO DB
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
  await todos.update(
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
