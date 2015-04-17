var express = require('express');
var router = express.Router();

var listModel = require('../models/list');

/* GET home page list. */
router.get('/', function(req, res, next) {
  res.render('index', {data:listModel()});
});

module.exports = router;
