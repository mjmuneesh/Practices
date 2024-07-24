var express = require("express");
var router = express.Router();
const userModel = require("./users");
const passport = require("passport");
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */

router.get("/", function (req, res) {
  res.render("index");
});

//1.  creating a user in database mongo db

// router.get("/create", async function(req, res) {
//   const createdUser = await userModel.create(
//   {
//     username :"Ashima",
//     age:23,
//     name:"Ashima gupta"
//   });
//   res.send(createdUser)
// });

//2.  reading a user in database by find method which gives us all the users in thye database

// router.get("/allusers", async function(req,res){
//  const allUsers = await userModel.find()
//  res.send(allUsers);
// });

//3. fineOne will give us only one user

// router.get("/Oneuser", async function(req,res){
//   const oneUsers = await userModel.findOne({username:"Ashima"})
//   res.send(oneUsers);
//  });

// 4. deleting a user from the database

// router.get("/delete", async function(req,res){
//   const deletedUsers = await userModel.findOneAndDelete({
//     username:"Ashima"
//   });
//   res.send(deletedUsers);
//  });

// 5. session

//  how to set a sessions

// router.get("/doBan" , function(req, res){
//   req.session.Mysession = true;
//   res.render("index")
// })

//  how to read/check a sessions

// router.get("/CheckBan" , function(req, res){
// if(req.session.Mysession === true){
//   res.send("you are banned")
// }else{
//   res.send("you are not banned")
// }
// });

//how to delete a session

// router.get("/Removeban" , function(req, res){
//  req.session.destroy(function(err){
//  if (err) throw Error (err)
//  res.send("ban removed")
// })
//   })

// 6. cookies

// how to create a cookie ---- remember when you send data from server to front-end or browser , it will go through (res).

// router.get("/" , function(req,res){
//   res.cookie("newcookie" , 25)
//   res.render("index")
// })

// how to read a cookie

// router.get("/read" , function(req,res){
//   console.log(req.cookies.newcookie);
//   res.send("check it ")
// })

//how to delete a cookie

// router.get("/delete" , function(req,res){
// res.clearCookie("newcookie")
//   res.send("clear hogyi ")
// })

//7. Flash

// Create a flash

// router.get("/create",function(req,res){
//     req.flash("Name","Muneesh");
//     req.flash("Age",25);
//     res.send('Flash msg is created!')
//   })

// how to access that flash msg in different route

//   router.get("/check",function(req,res){
//     console.log(req.flash("Name"),req.flash("Age"));
//     res.send("ban gya ");
//   })

//8. MongooDB Questions

// Q1. Do a case-insensitive search in mongoose ?

// router.get("/createdoc", async function (req, res) {
//   const CreatedUser = await userModel.create(
//    [

//     {
//       username:"momin",
//       password:"xyz",
//       categories: ["Iphone", "Samsung", "Motorola"]

//     },
//      {
//       username: "Muneesh",
//       password: "Tatabyebye",
//       categories: ["Iphone", "Samsung", "Motorola"],
//     },
//     {
//       username: "ashima",
//       password: "guptaAshima",
//       categories: ["Lava", "Samsung", "Sony"],
//     },
//     {
//         username: "Sapna",
//         password: "ash",
//         categories: ["Google", "Xiomi", "OnePlus"],
//       },
//     {
//             username: "Sapnaaaa",
//             password: "guh",
//             categories: ["asg", "bita", "aldh"],
//           }
//         ]
//   );
//   res.send(CreatedUser)
// });


// router.get("/all", async function(req,res){
//   const SearchResult = await userModel.find();
//   res.send(SearchResult)
// })

// router.get("/find", async function(req,res){
//     const user = new RegExp("^muneesh$", "i")
//     const SearchResult = await userModel.find({username:user});
//     res.send(SearchResult)
// })

// Q2. How can i find a document where an array field contains all set of a values? 
// in this we are getting the users who have iphone and samsung in their categories while doing case insensitive search for them

// router.get("/users", async function(req,res){
//   const regex = new RegExp("^samsung$","i")
//   const regex2 = new RegExp("^iphone$","i")
//   const SearchResult = await userModel.find({categories:{$all: [regex,regex2]}});
//   res.send(SearchResult)
// })

// Q3. how can i search for document with a specific date range in mongoose ?

// router.get("/date" , async function(req,res){
//   const date1 = new Date("2024-03-19")
//   const date2 = new Date("2024-03-20")

//   const user = await userModel.find({date:{$gte:date1,$lte:date2}});
//   res.send(user)
// })

// Q4. how can i filter documents based on existence of a field in mongoose ? 


// router.get("/filter" , async function(req,res){
//   const user = await userModel.find({categories :{$exists :true}});
//   res.send(user)
// })

//Q5. how can i filter documents based on a specific field's length in mongoose ?

// router.get("/length" , async function(req,res){
//   const user = await userModel.find({
//     $expr : {
//       $and : [
//         {$gte :[{$strLenCP : '$username'},0]},
//         {$lte:[{$strLenCP: '$username'},5 ]}
//       ]
//     }
//   });
//   res.send(user)
// })


//9. Authentication and Authorization 

//profile route 

router.get("/profile",isLoggedIn,function(req,res){
  res.render("profile")
})


//register route
router.post("/register", function(req, res){
  var userdata = new userModel({
    username:req.body.username,
    secret:req.body.secret
  });

  userModel.register(userdata, req.body.password)
.then(function(registereduser){
  passport.authenticate("local")(req,res, function(){
    res.redirect('/profile')
  })
})

});

//login route 

 router.post("/login",passport.authenticate("local",{
successRedirect:"/profile",
failureRedirect:"/"
 }),
 function(req,res){})


 //logout route 

 router.get("/logout", function(req, res, next){
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect('/')
  })
 })


 //isLoggedIn Middleware 

 function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
 }


module.exports = router;
