var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, function(){
    console.log("listening on PORT " + PORT)
});

