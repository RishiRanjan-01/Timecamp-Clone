const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticaton = async(req, res, next) => {

    const token = req.headers.authorization.split(" ")[1];

    // console.log(req.headers.authorization.split(" ")[1]);
    // console.log(process.env.secret);
    await jwt.verify(token, process.env.secret , function(err, decoded) {
        if(err){
            console.log(err);
          return  res.send({message:"login failed"})
        }
        const userId = decoded.userId;
        req.body.userId = userId;
        req.body.email = decoded.email
        next();
    });
}

module.exports = authenticaton;