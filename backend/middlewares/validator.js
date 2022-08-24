
const validator = (req,res,next) => {
    const {email,password,phone} = req.body;

    if(!email || !password){
        res.send("Please provide all fields");
    }else{
        next();
    }
}

module.exports = validator;