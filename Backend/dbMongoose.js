const mongoose = require("mongoose");

/*
todo{
    title:String 
    description:String
    completed: boolean
}
*/

//make connections
mongoose.connect(
  "mongodb+srv://hrutik:Hrutik%404721@cluster0.laoqo.mongodb.net/todos"
);

//creacted schema for database
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

//create model
//this is important
const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
