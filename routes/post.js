const router = require('express').Router();

router.get('/list', require("./post_f/list"));
router.get('/write', require("./post_f/write"));
router.get('/manage', require("./post_f/manage"));
router.post('/write_post', require("./post_f/write_post"));

module.exports = router;