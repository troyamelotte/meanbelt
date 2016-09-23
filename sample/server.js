var express = require("express");
var session = require('express-session')
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(express.static(path.join(__dirname, "client", "static")));

var sessionConfig = {
 secret:'CookieMonster', // Secret name for decoding secret and such
 resave:false, // Don't resave session if no changes were made
 saveUninitialized: true, // Don't save session if there was nothing initialized
 name:'myCookie', // Sets a custom cookie name
 cookie: {
  secure: false, // This need to be true, but only on HTTPS
  httpOnly:false, // Forces cookies to only be used over http
  maxAge: 3600000
 }
}

// Use session with our app
app.use(session(sessionConfig));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);



var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
