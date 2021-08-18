const mysql = require("mysql");

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'mhibio',
	password: 's12341234',
	database: 'board',
    dateStrings: 'date'
})
conn.connect();

function format() {
	var args = Array.prototype.slice.call (arguments, 1);
	return arguments[0].replace (/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

module.exports = (req, res) => {
    sess = req.session;
    
    if(sess.isAuthenticated != 1) {
        res.render("./part/alert", {msg:"Login first please.", url:"/user/login"})
        return ;
    }

    conn.query(format("Insert Into post (title, content, writer) values (\"{0}\", \"{1}\", \"{2}\");", conn.escape(req.body.title), conn.escape(req.body.content), conn.escape(sess.userid)), function(err, result) {
        if(err) throw err;
        res.render("./part/alert", {msg:"Post Sucssess!", url:"/post/list"})
        return ;
    });
}
