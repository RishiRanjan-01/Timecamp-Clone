const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const validator = require("../middlewares/validator");
const emailvalidator = require("../middlewares/emailvalidator");
const passwordvalidator = require("../middlewares/passwordvalidator");
const UserModel = require("../models/User.model");

const userroute = express.Router()
const saltRounds = Number(process.env.SALT);

userroute.use(validator, emailvalidator);

userroute.post("/register", passwordvalidator, async (req, res) => {
  const { email, password, phone } = req.body;

  const user = await UserModel.findOne({ email:email });

  if (user) {
    console.log(user)
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
    const token = jwt.sign({ email:email }, process.env.secret);
    return res.send({ message: "Login Successfull", token });
  } else {
    return res.send("Invalid Credentials");
  }
});

module.exports = userroute;
