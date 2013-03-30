
/*
 * GET users listing.
 */
var db = require('../data/db');
exports.list = function(req, res){
    res.render('users.jade', { users: db.users });
};