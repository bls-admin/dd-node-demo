var express = require('express');
var router = express.Router();
var converter = require("../custom/converter");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/rgbToHex", function(req, res) {
  var red   = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue  = parseInt(req.query.blue, 10);

  var hex = converter.rgbToHex(red, green, blue);

  res.status(200).send(hex);
  //res.send(hex);
});

router.get("/hexToRgb", function(req, res) {
  var hex = req.query.hex;

  var rgb = converter.hexToRgb(hex);

  res.status(200).send(rgb);
  //req.sent(JSON.stringify(rgb));
});

module.exports = router;
