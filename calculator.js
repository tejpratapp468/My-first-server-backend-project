//jshint esversion: 6

const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

// these get and post are for our home route
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

// what should happen when somebody tries to make post request to this route
app.post("/",function(req,res){
  //console.log(req);
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var result=n1+n2;
  res.send("The result of your calculation is "+result);
});

// these get and post method are for /bmicalculator route
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/(height*height);

  res.send("Your BMI is "+bmi);
});

app.listen(3000,function(){
  console.log("server started at 3000");
});
