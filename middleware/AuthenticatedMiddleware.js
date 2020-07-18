module.exports = (req, res, next) => {

    if(req.user){
        next()
    }else{
        res.status(401).json({
            data: {
                error: "Please log in."
            }
        })
    }
}