const passport = require("passport");
const _ = require("lodash");
const User = require('./../models/User');
const { Strategy: LocalStrategy } = require("passport-local");


passport.serializeUser((user, done) => {
  console.log('serialize user');
  console.log({user});
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserialize user");

    User.findById(id, (err, user) => {
        console.log('deserialise');
        console.log({user});
        done(err, user);
    });
});

// passport.serializeUser(function (user, cb) {
//     cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//     cb(null, obj);
// });

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log({email});
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
        // done(err, user, info pass back to controller)
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    if (!user.password) {
      return done(null, false, { msg: 'Please enter a password.' });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));



module.exports = passport

