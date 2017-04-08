var express = require('express');
var index = express.Router();

var indexRouter = function (nav) {
  index.route('/')
    .get(function (req, res) {
      res.render('index', {
        title: 'Library',
        nav: nav
      });
    });
  return index;
};

module.exports = indexRouter;