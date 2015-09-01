var express = require('express');
var router = express.Router();

/* v2 */
router.get('/:type?/:key?', function(req, res, next) {
  res.render('v2');
});

module.exports = router;
