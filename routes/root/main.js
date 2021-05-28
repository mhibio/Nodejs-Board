const session = require("express-session");
const mysql = require("mysql");

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'mhibio',
	password: 's12341234',
	database: 'board' 
})
conn.connect();

module.exports = (req, res) => {
	sess = req.session;
    res.render("./pages/index", {title:"Index", isAuthenticated:sess.isAuthenticated})
}