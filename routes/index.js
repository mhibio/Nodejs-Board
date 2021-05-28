const router = require('express').Router();

router.get('/', require('./root/main'));
router.get('/userlist', require('./root/userlist'));
router.get('/board', require('./root/board'));
router.get('/profile', require("./root/profile"));
router.get('/logout', require("./root/logout"));

router.get('/posting/:idx', require("./post_f/viewpost"));

module.exports = router;