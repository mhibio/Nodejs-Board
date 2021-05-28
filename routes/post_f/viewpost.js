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
    sess = req.session;
    
    if(sess.isAuthenticated != 1) {
        res.render("./part/alert", {msg:"Login first please.", url:"/user/login"})
        return ;
    }

    conn.query(format("Select * from post where idx ={0};"  , req.params.idx), function(err, result) {
        if(err) throw err;
        conn.query(format("update post set views = views + 1 where idx={0};", req.params.idx), function(err, result) {
            if(err) throw err;
        });
        
        res.render("./post/postview", {
            title: "Post view",
            isAuthenticated:sess.isAuthenticated,
            data: JSON.parse(JSON.stringify(result))[0]
        });
    });
}