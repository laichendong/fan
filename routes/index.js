/*
 * GET home page.
 */
var db = require('../data/db');
exports.index = function (req, res) {
    res.render('index.jade', { dishs: db.dishs });
};
