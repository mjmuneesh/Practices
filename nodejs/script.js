

//1. How to import and Export 

// var a =12;
// module.exports = a;



//2. How to use npm

// var figlet = require("figlet");
// figlet("Hello I am Ashima", function(err, data){
// if(err){
// console.log("Something Went Wrong");
// console.dir(err);
// return
// }
// console.log(data)
// })


// 3. How to Use Express and make and server and listen to port and use of middleware 


// const express = require('express')
// const app = express() 

// this is middleware


//  app.use (function(req, res,next){
//     console.log("hello from middleware")
//     next();
//  })
 
// this is middleware



// This is Routing 

// app.get ("/" , function(req , res){
//     res.send("hello i am muneesh and i love noone");
// })

// app.get ("/Profile" , function(req , res){
//     res.send("Hello From Profile");
// })


// This is Routing 




// This is Dynamic Routing 

// app.get("/Profile/:username", function(req,res){
// res.send(`hello from AARK Employeee ${req.params.username}`)
// })

// This is Dynamic Routing 

// app.listen(3000);



// EJS 

// const express = require('express')
// const app = express(); 

// app.set("view engine" , "ejs");
// app.use(express.static('./public'))

// app.get("/", function (req, res){
//     res.render("index" , {age:25});  // humne age as a argument beja taki jha jha age hoga index  mein wha 25 hojaye aur yeh likha jata ha  ese <%= age%>
// })

// app.get("/Cards", function (req, res){
//     res.render("cards");
// })

// error handling 

// app.get("/error", function (req, res ,next){
//     throw  Error ("something went wrong");
// })

// app.use(function errorHandler (err, req, res, next) {
//     if (res.headersSent) {
//       return next(err)
//     }
//     res.status(500)
//     res.render('error', { error: err })
//   })

// error handling 

// app.listen(3000)


