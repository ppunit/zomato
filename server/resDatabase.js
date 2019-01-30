const express = require("express");
const app = express();
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/restaurant',{ useNewUrlParser: true }).then(() => {
   console.log('Sucessfully connected with  database');
   app.listen(7777, function () {
    console.log("server is running on port 7777")
})
 });
 
module.exports={mongoose, app};