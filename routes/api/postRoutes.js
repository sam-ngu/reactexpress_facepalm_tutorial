const express = require("express");
const AuthenticatedMiddleware = require("./../../middleware/AuthenticatedMiddleware");
const Post = require("./../../models/Post");
const router = express.Router();

router.get("/posts", AuthenticatedMiddleware, (req, res) => {
    Post.find({}).then((results) => {
        res.json({
            data: results,
        });
    });
});

router.get("/posts/:id", (req, res) => {
    Post.findById(req.params.id).then((result) => {
        res.json({
            data: result,
        });
    });
});

router.post("/posts", (req, res) => {
    // validation

    Post.create(req.body).then((created) => {
        res.json({
            data: created,
        });
    });
});

router.patch("/posts/:id", (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $push: req.body,
        },
        { new: true, runValidators: true }
    ).then((updated) => {
        res.json({
            data: updated,
        });
    });
});

router.delete("/posts/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id).then((deleted) => {
        res.json({
            data: true,
        });
    });
});


module.exports = router
