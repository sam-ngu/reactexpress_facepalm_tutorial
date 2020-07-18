const express = require('express');
const router = express.router
const passport = require('passport');

router.post('login', (req, res, next) => {

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

router.post('logout', (req, res) => {
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