var express = require('express');
var router = express.Router();

var listModel = require('../models/list');
var detailModel = require('../models/detail');

router.get('/list', function(req, res, next) {
  res.send(listModel());
});

router.get('/detail/:id', function(req, res, next) {
  res.send(detailModel(req.params.id));
});

router.post('/updateDetail', function(req, res, next) {
  // update data
  res.send({});
});

module.exports = router;
