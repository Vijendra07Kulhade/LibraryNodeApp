var express = require('express');
var passport = require('passport');
var authRoutes = express.Router();

authRoutes.route('/google/callback')
  .get(passport.authenticate('google', {
    successRedirect: '/books/',
    failure: '/error'
  }));

authRoutes.route('/google')
  .get(passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email']
  }));

module.exports = authRoutes;