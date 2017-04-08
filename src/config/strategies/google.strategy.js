var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
  passport.use(new GoogleStrategy({
      clientID: '695609297859-5b289kotr7ivfc0rqsi5s2cev4ukh6af.apps.googleusercontent.com',
      clientSecret: 'QvMvSAbClNoUFlluAF2TP8mb',
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    function (req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  ));
};