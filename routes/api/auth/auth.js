const express = require('express');
const passport = require('./../../../config/passport');
const { Strategy: LocalStrategy } = require("passport-local");

const router = express.Router();

const localStrategy = new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log({email});
  User.findOne({ email: email.toLowerCase() }, (err, user) => {
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
});

router.post('/login', (req, res, next) => {
    passport.authenticate(localStrategy, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log({info});
            return res.status(422).json({
                data: info.message
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            req.json({
                data: user
            })
        });
    })(req, res, next);
});

router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy((err) => {
        if (err){
            res.json({
                data: {
                    error: "Failed to destroy the session during logout.",
                    err,
                },
            });

        }
        req.user = null;
        res.json({
            data: {
                message: 'success'
            }
        });
    });
});

module.exports = router