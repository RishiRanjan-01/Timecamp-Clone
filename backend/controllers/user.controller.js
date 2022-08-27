const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const validator = require("../middlewares/validator");
const emailvalidator = require("../middlewares/emailvalidator");
const passwordvalidator = require("../middlewares/passwordvalidator");
const UserModel = require("../models/User.model");

const userroute = express.Router();
const saltRounds = Number(process.env.SALT);

userroute.use(validator, emailvalidator);

userroute.post("/register", passwordvalidator, async (req, res) => {
  const { email, password, phone } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (user) {
    return res.send("User Already Exists");
  }

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (!err) {
      await UserModel.insertMany({ email, password: hash, phone });
      res.send("Signup Successfull");
    } else {
      return res.send("Invalid Credentials");
    }
  });
});

userroute.post("/login", async (req, res) => {
  const { password, email } = req.body;
  const user = await UserModel.findOne({ email });

  if (user) {
    bcrypt.compare(password, user.password).then(function (result) {
      if (result) {
        const token = jwt.sign(
          { email: email, userId: user._id },
          process.env.secret
        );
       return res.send({ message: "Login Successfull", token });
      }else{
         res.send("Invalid Credentials");
      }
    });
  } else {
    return ;
  }
});

userroute.get("/getuser",async (req,res) => {
  let { email } = req.headers;

  const user = await UserModel.findOne({ email });
if(user){
  res.send("Valid");
}else{
  res.send("User does not exist");
}
})

userroute.post("/updateuser",passwordvalidator, async (req, res) => {
  let { email,password } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (!err) {
        await UserModel.updateOne({email},({$set:{password:hash}}));
        res.send("Password Updated Successfully");
      } else {
        return res.send("Invalid Credentials");
      }
    });
  } else {
    res.send("Please try again later");
  }
});

module.exports = userroute;
