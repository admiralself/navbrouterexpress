var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
const responseTime = require('./response-time')


router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});




router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/ourservices",function(req,res){
  res.sendFile(path + "ourservices.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use((req, res, next) => {
  var date = new Date();
  let day = date.getDate();

  if (day > 5) {
      
      next();    
  } else {
    
      res.send('Out of office');

  }


});


app.use(responseTime);


app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});