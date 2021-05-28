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
	if(sess.isAuthenticated != 1 ) {
		res.render("./part/alert", {msg:"Login first please.", url:"/user/login"});
	} else {
    	res.render("./pages/profile", {title:"board", isAuthenticated:sess.isAuthenticated});
	}
}