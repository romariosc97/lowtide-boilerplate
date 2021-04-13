var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.status(200).json({success: true, data: []})
});

module.exports = router;
