const ejs = require('ejs');
const express = require('express');
const cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var path = require('path');

const app = express();

app.use(cookieParser());
app.use(expressSession({ 
  secret: "ADMINISZZLOL",
  resave: true,
  saveUninitialized:true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/", require("./routes/index"));
app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/post"));

app.use(express.static('public'));
app.use('/user', express.static('public'));
app.use("/post", express.static("public"));
app.use("/posting", express.static("public"));

app.listen(3000, () => {
  console.log("Express server has started on port 3000")
});