const express = require("express");
const Comment = require("./../../models/Comment");
const router = express.Router();

router.get("/comments", (req, res) => {

    console.log(req.query)

    
    const query = {}
    if(req.query.post_id){
        query.post_id = req.query.post_id
    }
    Comment.find(query)
    .populate('user')
    .then((results) => {
        res.json({
            data: results,
        });
    });
});

router.get("/comments/:id", (req, res) => {
    Comment.findOne({
        _id: req.params.id,
    })
        .populate("user")
        .then((result) => {
            result.user = res.json({
                data: result,
            });
        });
});

router.post("/comments", (req, res) => {
    // validation
    Comment.create({
        user_id: req.user._id,
        post_id: req.body.post_id,
        body: req.body.body,
    }).then(async (created) => {
        await created.populate('user').execPopulate()
        res.json({
            data: created,
        });
    }).catch((err) => {
        res.status(422).json({
            errors: [
                {
                    msg: err
                }
            ]
        })
    });
});

router.patch("/comments/:id", (req, res) => {
    Comment.findByIdAndUpdate(
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

router.delete("/comments/:id", (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((deleted) => {
        res.json({
            data: true,
        });
    });
});

module.exports = router;

