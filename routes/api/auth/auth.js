const express = require('express');
const passport = require('./../../../config/passport');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            console.log({info});
            return res.status(422).json({
                data: info.message
            });
        }
        res.json({
            data: user
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