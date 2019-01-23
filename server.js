const express = require("express");
let app = express();
let PORT = process.env.PORT || 8080;
let exphbs = require("express-handlebars");

//give server location of our statics folders like CSS and Images.
app.use(express.static('public'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//make our app listen to the port
app.listen(PORT)
