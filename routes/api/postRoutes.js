const express = require("express");
const Post = require("./../../models/Post");
const router = express.Router();

const loadCommentsAggregate = [
    {
        $lookup: {
            from: "comments",
            let: { postId: "$_id" },
            pipeline: [
                { $match: { $expr: { $eq: ["$post_id", "$$postId"] } } },
            ],
            as: "comments",
        },
    },
    {
        $sort: {
            createdAt: -1
        }
    }
];

router.get("/posts", (req, res) => {

    // loading the inverse relationship, ie getting comments from post

    // find a way to populate user in comments
    Post.aggregate(loadCommentsAggregate)
    // Post.find({})
    // .populate('user')
    .then((posts) => {
        return Post.populate(posts, {
            path: 'user',
        })
    })
    .then((posts) => {
        res.json({
            data: posts,
        });
    });
});

router.get("/posts/:id", (req, res) => {
    Post.findOne({
        _id: req.params.id
    })
    .populate('user')
    .then((result) => {
        result.user = 
        res.json({
            data: result,
        });
    });
});

router.post("/posts", (req, res) => {
    // validation
    Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: req.user._id
    }).then(async (created) => {


        await created.populate('user').execPopulate()

        // to keep data structure consistent
        created.comments = [];

        console.log({created});

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
