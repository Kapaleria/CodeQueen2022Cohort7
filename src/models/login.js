
const mongoose = require("mongoose")
const schema = mongoose.Schema
const login = new schema({
Username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
gender:{
    type:Boolean,
    required:true
}
})
const details = mongoose.model("login",login)
module.exports= details