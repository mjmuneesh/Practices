// requiring mongoose 
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose")

// connect node js to mongodb database through mongoose which will lead to database creation 
mongoose.connect("mongodb://127.0.0.1:27017/practise");


//constructing schema


// Understanding what is schema 

const userschema = mongoose.Schema({
  username:String,
  name:String,
  age:Number,
  secret:String
});


userschema.plugin(plm);

//created new schema for mongoDB questions

// const userSchema = mongoose.Schema({
//   username : String,
//   password : String,
//   categories : {
//     type : Array,
//     default:[]
//   },
//   date:{
//     type:Date,
//     default:Date.now()
//   }
// })


// this creates a model 
module.exports = mongoose.model("user" , userschema);