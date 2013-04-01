var db = require('../data/db');
var mongoose = require('mongoose');

//  定义mono的schema
var FanSchema = mongoose.Schema({
    userName: String,
    riceCount: Number,
    bredCount: Number,
    dishs: Array,
    date: {
        type: Date,
        default: function () {
            var d = new Date();
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d;
        }
    }
});
var Fan = exports.Fan = mongoose.model('Fans', FanSchema);
mongoose.connect('mongodb://localhost/fans');

exports.fan = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    // 判断用户是否是饭团成员
    var isMember = false;
    if (req.body.userName) {
        for (var i = 0; i < db.users.length; i++) {
            if (db.users[i]["name"] == req.body.userName) {
                isMember = true;
                break;
            }
        }
    }
    // 判断用户今天是否已经点过餐了
    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    Fan.findOne({
        userName: req.body.userName,
        date: d
    }, function (err, result) {
        if (err) {
            console.error.bind(console, 'connection error:');
        }
        if (result != undefined) {
            // 今天已经点过菜了
            console.error(req.body.userName + "：今天已经点过菜了。");
            res.send('{"error" : true, "errorCode" : 1}');
        } else {
            new Fan(req.body).save(computFanResult);
            console.info(req.body.userName + "：点菜成功！");
        }
    });



    function computFanResult() {
        var fanResult = {
            riceCount: 0,
            bredCount: 0,
            dishs: []
        };
        // 计算点菜结果
        Fan.find({date: d}, function (err, result) {
            if (err) {
                console.error.bind(console, 'connection error:');

            }
            for (var i = 0; i < result.length; i++) {
                fanResult.riceCount += result[i].riceCount;
                fanResult.bredCount += result[i].bredCount;
                for (var j = 0; j < result[i].dishs.length; j++) {
                    var flag = false;
                    for(var k=0; k<fanResult.dishs.length; k++){
                        var d = fanResult.dishs[k];
                        if(d.name == result[i].dishs[j]){
                            d.count++;
                            flag = true;
                        }
                    }
                    if(!flag){
                        fanResult.dishs.push({name:result[i].dishs[j],count:1});
                    }
                }

            }
            fanResult.dishs.sort(function(a,b){
                return b.count - a.count;
            });
            res.send({"success" : true, "data" : fanResult});
        });
//        res.render('index.jade', { dishs: db.dishs, fanResult: fanResult });
    }


}
;