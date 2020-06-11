var express = require('express');
var router = express.Router();

/* GET list - SKKU2020-Capstone */
router.get('/', function(req, res, next) {
    var result = Object();
    result.imgUrl = "http://qweqwe.jpg";
    result.title = "원숭이와 자화상";
    result.sizeX = 1080;
    result.sizeY = 1920;
    result.data = Array();
    res.send(result);
});

module.exports = router;
