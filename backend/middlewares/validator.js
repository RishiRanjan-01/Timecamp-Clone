
const validator = (req,res,next) => {
    if(req.method !== "GET"){
    const {email,password,phone} = req.body;

    if(!email || !password){
        res.send("Please provide all fields");
    }else{
        next();
    }
}else{
    next();
}
}

module.exports = validator;