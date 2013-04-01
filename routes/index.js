/*
 * GET home page.
 */
var db = require('../data/db');
var Fan = require('./fan');
exports.index = function (req, res) {
    var fanResult = {
        riceCount: 0,
        bredCount: 0,
        dishs: []
    };
    computFanResult();

    function computFanResult() {
        // 计算点菜结果
        var d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        Fan.Fan.find({date: d}, function (err, result) {
            if (err) {
                console.error.bind(console, 'connection error:');

            }
            for (var i = 0; i < result.length; i++) {
                fanResult.riceCount += result[i].riceCount;
                fanResult.bredCount += result[i].bredCount;
                for (var j = 0; j < result[i].dishs.length; j++) {
                    var flag = false;
                    for (var k = 0; k < fanResult.dishs.length; k++) {
                        var d = fanResult.dishs[k];
                        if (d.name == result[i].dishs[j]) {
                            d.count++;
                            flag = true;
                        }
                    }
                    if (!flag) {
                        fanResult.dishs.push({name: result[i].dishs[j], count: 1});
                    }
                }

            }
            fanResult.dishs.sort(function (a, b) {
                return b.count - a.count;
            });
            res.render('index.jade', { dishs: db.dishs, fanResult: fanResult });
        });
    }
};
