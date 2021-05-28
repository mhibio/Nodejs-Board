const mysql = require("mysql");
const crypto = require('bcrypt');
const bcrypt = require('bcrypt')
const saltRounds = 10

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'mhibio',
	password: 's12341234',
	database: 'board' 
})
conn.connect();

module.exports = (req, res) => {
	conn.query('SELECT id, pw from member', function(err, result) {
		if (err) throw err;
		for(var i = 0; i < result.length; i++) {
			if(result[i].id == req.body.id) {
				if(result[i].pw == req.body.pw) {
					sess = req.session;
					sess.isAuthenticated = 1;
					sess.userid = req.body.id;
					res.render("./part/alert", { msg: "Login Sucsess", url: "/"});
					return ;
				}
				else {
					res.render("./part/alert", { msg: "Password is worng.", url: "/user/login"});
					return ;
				}
			}
		}
		res.render("./part/alert", { msg: "UserId is Wrong.", url: "/user/login"} );
		return ;
	});
}