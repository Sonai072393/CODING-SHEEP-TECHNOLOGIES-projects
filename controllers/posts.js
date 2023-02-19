import TodoSchema from "../models/BlogSchema.js";

import moment from "moment";


// New todo

export const insertTodo = async (req, res) => {

  const post = req.body;

  const newPost = new TodoSchema(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//get todo

export const getTodo = async(req,res)=>{
  const todoId = req.body.todoId
  let condition = {}
  if(todoId){
    condition = {...condition,"todo_id": todoId}
  }

  const todoData = await TodoSchema.aggregate([
    {
      $match:condition
    },
    {
      $project:{
        content:1,
        todo_id:1
      }
    }
  ])

  if(todoData){
    return res.status(201).send(todoData)
  }
  else{
   return res.status(409).json({ message: "Error!!!" });
  }
}

//update todo

export const updateTodo = async(req,res)=>{
  const todoId = req.body.todoId
  const content = req.body.content
  const data =  await TodoSchema.findOneAndUpdate(
    {
      todo_id: todoId
    },
    {
      $set:{
        content:content
      }
    }
  )

  if(data){
    return res.status(201).send(data)
  }
  else{
    return res.status(409).json({ message: "Error!!!" });
  }
}

export const deleteTodo = async(req,res)=>{
  const todoId = req.body.todoId
console.log(todoId)
  const data =  await TodoSchema.findOneAndDelete(
    {
      "todo_id": todoId
    },
  )

  if(data){
    return res.status(201).send(data)
  }
  else{
    return res.status(409).json({ message: "Error!!!" });
  }
}