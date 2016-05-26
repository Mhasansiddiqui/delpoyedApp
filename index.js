

var express = require('express');

var app = express();


var app = express();

app.use(express.static(__dirname + '/public'));



app.set("port", (process.env.PORT  || 5000));

app.use(function(req,res ,next){
   res.sendFile('index.html') ;
   next();
})


app.listen(app.get("port"), function () {
    console.log('running server on 5000');
});