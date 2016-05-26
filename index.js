

var express = require('express');

var path = require('path');


var app = express();


app.set("port", (process.env.PORT  || 5000));

app.use(express.static('public'));

app.use(function(err, req,res ,next){
   
   res.sendStatus(404);
    next();
})


app.listen(app.get("port"), function () {
    console.log('running server on 5000');
});