

var express = require('express');

var path = require('path');


var app = express();


app.set("port", (process.env.PORT  || 5000));

app.use(function(req,res ,next){
   res.sendFile('public/index.html' , { root : __dirname});
   next();
})
app.use(function(err,req,res ,next){
  res.send(err);
   next();
})



app.listen(app.get("port"), function () {
    console.log('running server on 5000');
});