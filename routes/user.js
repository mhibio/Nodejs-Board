const router = require('express').Router();

router.get('/register', require("./user_f/register"));
router.get('/login', require("./user_f/login"));
router.post('/login_check', require("./user_f/login_check"));
router.post('/register_check', require("./user_f/register_check"));

module.exports = router;