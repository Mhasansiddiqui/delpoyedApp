

var express = require('express');

var path = require('path');


var app = express();


app.set("port", (process.env.PORT  || 5000));

app.use(function(req,res ,next){
   res.send('hi hasan');
    next();
})


app.listen(app.get("port"), function () {
    console.log('running server on 5000');
});