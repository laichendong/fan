var db = require('../data/db');
exports.fan = function (req, res) {
    // 判断用户是否是饭团成员
    var isMember = false;
    if (req.body.userName) {
        for (var i=0; i<db.users.length; i++) {
            if (db.users[i]["name"] == req.body.userName) {
                isMember = true;
                break;
            }
        }
    }

    console.log(req.body);
    console.log(isMember);
    res.render('index.jade', { dishs: db.dishs });
};
