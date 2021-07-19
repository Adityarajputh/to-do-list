//jshint esversion:6

const fs = require("express");
const bp = require("body-parser");
const date = require(__dirname+"/date.js");
const app = fs();

const items = [];
const workItems = [];

app.set('view engine','ejs');
app.use(bp.urlencoded({extended: true}));
app.use(fs.static("public"));

app.get("/",function(req, res){
  let day = date.getDay();
  res.render("list", {listtitle: day, listitems: items});
});

app.get("/work",function(req, res){
  res.render("list", {listtitle: "Work List", listitems: workItems});
})

app.get("/about",function(req,res){
  res.render("about");
});

// app.post("/work".function(req, res){
//   var list = req.body.button;
//   workItems.push(list);
//
//
// })

app.post("/",function(req,res){
  let item = req.body.input;
  // console.log(req.body);
  if(req.body.button === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});


app.listen(3000, function(){
  console.log("server hosted on port 3000");
})






// switch (currentDay) {
//   case 0:
//     day =  "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thrusday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
//   default:
//
// }
// if(currentDay === 6 || currentDay === 0){
//   day = "yeh shawty it's the weekend!!";
// }else{
//   day = "bleh go work";
// }
