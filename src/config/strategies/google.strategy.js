var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
  passport.use(new GoogleStrategy({
      clientID: '****************',
      clientSecret: '***************',
      callbackURL: 'http://localhost:5000/auth/google/callback'
    },
    function (req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  ));
};
