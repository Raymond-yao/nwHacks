var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('/views/test.html', { "root": "./.." });
});

router.get('/camera', function (req, res, next) {
  res.sendFile('/views/camera.html', { "root": "./.."});
});

module.exports = router;
