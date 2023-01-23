const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Home Page
app.get("/", function(req, res) {
    res.render("home");
});


// About Page
app.get("/about", function(req, res) {
    res.render("about");
});







var port = process.env.port || 3000;
app.listen(port, function() {
    console.log("Server is running on port " + port + ".");
});