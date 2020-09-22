var express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require("mongoose"),
  Telepon = require("./api/models/KontakModel"), //created model loading here
  bodyParser = require("body-parser"),
  cors = require("cors");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/kontak");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/KontakRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Kontak RESTful API server started on: " + port);
