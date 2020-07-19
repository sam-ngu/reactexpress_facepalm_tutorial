module.exports = (req, res, next) => {
    console.log('hey');
    console.log(req.user);
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        next()
    }else{
        res.status(401).json({
            errors: [{
                msg: "Please log in."
            }]
        })
    }
}