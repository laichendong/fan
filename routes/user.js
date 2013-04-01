
var db = require('../data/db');
var Fan = require('./fan');
/**
 * 饭团成员列表
 * @param req
 * @param res
 */
exports.list = function (req, res) {
    res.render('users.jade', { users: db.users });
};

/**
 * 验证是否为饭团成员
 * @param req
 * @param res
 */
exports.validateUser = function (req, res) {
    var valiedated = false;
    var userName = decodeURIComponent(req.param("userName"));
    if (userName) {
        for (var i=0; i<db.users.length; i++) {
            if (db.users[i]["name"] ==userName) {
                valiedated = true;
                break;
            }
        }
    }

    res.setHeader('Content-Type', 'application/json');
    if (valiedated) {
        // 判断用户今天是否已经点过餐了
        var d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);

        Fan.Fan.findOne({
            userName: userName,
            date: d
        }, function (err, result) {
            if (err) {
                console.error.bind(console, 'connection error:');
            }
            if (result != undefined) {
                // 今天已经点过菜了
                res.send('{"valiedated" : true, "dished" : true}');
            } else {
                res.send('{"valiedated" : true, "dished" : false}');
            }
        });
    } else {
        res.send('{"valiedated" : false}');
    }
};