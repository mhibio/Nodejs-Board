const mysql = require("mysql");

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'mhibio',
	password: 's12341234',
	database: 'board' 
})
conn.connect();

function format() {
	var args = Array.prototype.slice.call (arguments, 1);
	return arguments[0].replace (/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

module.exports = (req, res) => {
	if(req.body.password != req.body.confirm_password) {
		res.render("./part/alert", {msg:"Password is different!", url:"/user/register"});
		return ;
	}

	conn.query('SELECT * from member', function(err, result) {
		if(err) throw err;
		data = JSON.parse(JSON.stringify(result));
		for(var i = 0; i < data.length; i++) {
			if(data[i].email === req.body.email) {
				res.render("./part/alert", {msg:"Email is exist!", url:"/user/register"});
				return ;
			}
			else if(data[i].id === req.body.id) {
				res.render("./part/alert", {msg:"User id is exist!", url:"/user/register"});
			}
		}

		conn.query(format("INSERT INTO member (uid, id, pw, name, permition, email) values ({0}, \"{1}\", \"{2}\", \"{3}\", 0, \"{4}\");", data.length+1, req.body.id, req.body.password, req.body.name, req.body.email), function(err, result) {
			if(err) throw err;
			res.render("./part/alert", {msg:"Register Sucssess!", url:"/user/login"})
		});
	});
}