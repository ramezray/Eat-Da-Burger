const express = require("express");
var bodyParser = require('body-parser');

let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});