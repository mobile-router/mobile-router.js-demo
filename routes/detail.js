var express = require('express');
var router = express.Router();

var detailModel = require('../models/detail');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('detail', {
    data: detailModel(req.params.id)
  });
});

module.exports = router;
