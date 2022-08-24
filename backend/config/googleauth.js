var GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
           return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user,done) {
    done(null,user);
})

passport.deserializeUser(function (user,done) {
    done(null,user);
})

module.exports = passport;