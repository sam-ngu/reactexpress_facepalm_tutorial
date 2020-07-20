const express = require('express');
const passport = require('./../../../config/passport');
const validator = require('validator');
const User = require('./../../../models/User');

const router = express.Router();

router.post('/register', (req, res, next) => {
  const validationErrors = [];
  // validator is expecting a string
  if (!validator.isEmail(req.body.email || ''))
      validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password || '', { min: 8 }))
      validationErrors.push({
          msg: "Password must be at least 8 characters long",
      });
  if (req.body.password !== req.body.password_again)
      validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
      return res.status(422).json({
          errors: validationErrors,
      })
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
  });

  const user = new User({
      email: req.body.email,
      password: req.body.password,
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
      if (err) {
          return next(err);
      }
      if (existingUser) {
          
          return res.status(422).json({
              errors: [
                  {
                      msg: "Account with that email address already exists.",
                  },
              ],
          });
      }
      user.save((err) => {
          if (err) {
              return next(err);
          }
          req.logIn(user, (err) => {
              if (err) {
                  return next(err);
              }
              res.json({
                  data: user
              });
          });
      });
  });


})

router.post('/login',  (req, res, next) => {


    // res.json({
    //     data: req.user
    // })

    passport.authenticate('local', (err, user, info) => {
        console.log({err});
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(422).json({
                errors: [
                    {
                        msg: info.msg,
                    },
                ],
            });
        }
        console.log({user});
        req.logIn(user, (err) => {
            if(err){
                return res.status(400).json({
                    errors: [{msg: err}]
                })
            }
            res.json({
                data: user,
            });
        })
        
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    console.log('heyyyy');
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