/*
 * GET users listing.
 */
var db = require('../data/db');
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
exports.valiedateUser = function (req, res) {
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
        res.send('{"valiedated" : true}');
    } else {
        res.send('{"valiedated" : false}');
    }
}