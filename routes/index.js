var express = require('express');
var router = express.Router();

var listModel = require('../models/list');

/* list */
router.get('/', function(req, res, next) {
  res.render('index', {data:listModel()});
});

module.exports = router;
