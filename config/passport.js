const passport = require("passport");
const _ = require("lodash");
const User = require('./../models/User');
const { Strategy: LocalStrategy } = require("passport-local");


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

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


// /**
//  * Login Required middleware.
//  */
// exports.isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.json({
//     data: "please login mate",
//   });
// };

// /**
//  * Authorization Required middleware.
//  */
// exports.isAuthorized = (req, res, next) => {
//   const provider = req.path.split('/')[2];
//   const token = req.user.tokens.find((token) => token.kind === provider);
//   if (token) {
//     // Is there an access token expiration and access token expired?
//     // Yes: Is there a refresh token?
//     //     Yes: Does it have expiration and if so is it expired?
//     //       Yes, Quickbooks - We got nothing, redirect to res.redirect(`/auth/${provider}`);
//     //       No, Quickbooks and Google- refresh token and save, and then go to next();
//     //    No:  Treat it like we got nothing, redirect to res.redirect(`/auth/${provider}`);
//     // No: we are good, go to next():
//     if (token.accessTokenExpires && moment(token.accessTokenExpires).isBefore(moment().subtract(1, 'minutes'))) {
//       if (token.refreshToken) {
//         if (token.refreshTokenExpires && moment(token.refreshTokenExpires).isBefore(moment().subtract(1, 'minutes'))) {
//           res.redirect(`/auth/${provider}`);
//         } else {
//           refresh.requestNewAccessToken(`${provider}`, token.refreshToken, (err, accessToken, refreshToken, params) => {
//             User.findById(req.user.id, (err, user) => {
//               user.tokens.some((tokenObject) => {
//                 if (tokenObject.kind === provider) {
//                   tokenObject.accessToken = accessToken;
//                   if (params.expires_in) tokenObject.accessTokenExpires = moment().add(params.expires_in, 'seconds').format();
//                   return true;
//                 }
//                 return false;
//               });
//               req.user = user;
//               user.markModified('tokens');
//               user.save((err) => {
//                 if (err) console.log(err);
//                 next();
//               });
//             });
//           });
//         }
//       } else {
//         res.redirect(`/auth/${provider}`);
//       }
//     } else {
//       next();
//     }
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };