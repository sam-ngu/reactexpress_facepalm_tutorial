const express = require('express');
const passport = require('passport');
const router = express.Router();
const passportConfig = require('./../../../config/passport')
router.post('/login',passportConfig.isAuthenticated, passportConfig.isAuthorized, (req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.staus(422).json({
                data: info.msg
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