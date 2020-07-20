const express = require("express");
const User = require('./../../models/User');
const router = express.Router();



router.get("/users", (req, res) => {
    User.find({}).then((results) => {
        res.json({
            data: results,
        })
    })
});
router.get('/users/:id', (req, res) => {
    User.findById(req.params.id).then((result) => {
        res.json({
            data: result
        })
    })    
})

router.post('/users', (req, res) => {

    // validation 


    User.create(req.body).then((created)=> {
        res.json({
            data: created
        })
    })


})

router.patch('/users/:id', (req, res) => {


    User.findByIdAndUpdate(req.params.id, 
        {
            $push: {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
            },
        },
        { new: true, runValidators: true }
    ).then((updated) => {
        res.json({
            data: updated,
        });
    });
    

})

router.delete('/users/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then((deleted) => {
        res.json({
            data: true
        })
    })
})


router.get("/current-user", (req, res) => {
    return res.json({
        data: req.user,
    });
});


module.exports = router;
