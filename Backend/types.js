//for authentication using zod library
// install zod library =>  npm install zod

const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  _id: zod.string(),
});

//to export it to different file
module.exports = {
  createTodo: createTodo,
  updateTodo: updateTodo,
};
