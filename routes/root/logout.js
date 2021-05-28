module.exports = (req, res) => {
	sess = req.session;
	sess = req.session;
	if(sess.isAuthenticated == 1) {
        sess.isAuthenticated = 0;
		res.redirect("/");
	} else {
        res.render("./part/alert", {msg:"Login First Plz", url:"/user/login"});
    } 
}