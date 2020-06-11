var express = require('express');
var router = express.Router();

/* GET list - SKKU2020-Capstone */
router.get('/', function(req, res, next) {
    var result = Object();
    result.imgUrl = "http://qweqwe.jpg";
    result.title = "원숭이와 자화상";
    result.width = 1080;
    result.height = 1920;
    var data = Array();
    for (var i = 0; i < 3; i++) {
        var datum = Object();
        datum.title = "나뭇잎";
        datum.positionX = 13 * i;
        datum.positionY = 97 * i;
        datum.imgUrl = "http://sdadwaweas.jpg";
        datum.width = 46;
        datum.height = 87;
        datum.soundUrl = "http://qweqweqwe.mp3";
        data.push(datum);
    }
    result.data = data;

    res.send(result);
});

module.exports = router;
