const mongoose = require("mongoose")
const schema = mongoose.Schema; 
// we are requiring mongoose
const todoSchema = new schema
({activity:{

    type: String,
    required:true,
},
 iscompleted:{
    type:Boolean,
    required:true,
    default:false
 }
 
})

const Todo = mongoose.model("todoschema", todoSchema)
module.exports = Todo







