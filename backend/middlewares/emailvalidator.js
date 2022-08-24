
const emailvalidator = (req,res,next) => {

    let {email} = req.body;

    let end = "";

    for(let i = email.length-10; i < email.length; i++){
        end = end + email[i];
    }

    if(end === "@gmail.com"){
        next();
    }else{
        res.send("Invalid Credentials")
    }
}

module.exports = emailvalidator;