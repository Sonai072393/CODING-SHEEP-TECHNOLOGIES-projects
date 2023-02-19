import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence";

const AutoIncrement = autoIncrement(mongoose)

const todoSchema = mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: new Date() },
  todo_id:{type:Number},

})
todoSchema.plugin(AutoIncrement,{ inc_field: "todo_id",id:"_id" })

const TodoSchema = mongoose.model('01_todo', todoSchema)

export default TodoSchema;