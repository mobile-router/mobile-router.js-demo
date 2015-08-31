var express = require('express');
var router = express.Router();

/* v2 */
router.get('/', function(req, res, next) {
  res.render('v2');
});

module.exports = router;
