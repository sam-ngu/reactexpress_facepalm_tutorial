const express = require('express');
const auth = require('./api/auth/auth');
const user = require('./api/userRoutes');
const post = require('./api/postRoutes');
const comment = require('./api/commentRoutes');
const AuthenticatedMiddleware = require("./../middleware/AuthenticatedMiddleware");



const router = express.Router()



// to protect the following routes
router.use(auth);

router.use(AuthenticatedMiddleware)
router.use(user);
router.use(post)
router.use(comment)



module.exports = router;