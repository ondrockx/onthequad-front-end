var express = require('express');
var router = express.Router();

/* GET posting page. */
router.get('/', function(req, res, next) {
  res.render('posting', { title: 'OnTheQuad - Posting' });
});

module.exports = router;
