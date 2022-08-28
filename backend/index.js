const express = require("express");
require("dotenv").config();
const cors = require("cors");
var jwt = require("jsonwebtoken");
const session = require("express-session");



const passport = require("./config/googleauth");
const connection = require("./config/db");
const userroute = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const authentication = require("./middlewares/authentication");
const taskController = require("./controllers/task.controller");
//   Sandeep imports

const InvoiceController=require('./controllers/invoice.controller')

const app = express();

app.use(cors());
app.use(express.json());

app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());


app.use("/user", userroute);
app.use("/project",authentication,projectController);
app.use("/task",taskController);
//  Sandeep  routes
app.use('/invoice',InvoiceController)



const authenticated = (req, res, next) => {
  next();
};

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

var userdata;

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    userdata = req.user._json;
    res.redirect("http://localhost:3000/homepage");
  }
);

app.get("/googleuser", authenticated, (req, res) => {
    const { email, name, picture, sub } = userdata;
  const token = jwt.sign({ email: email, userId: sub }, process.env.secret);
  res.send({
    email: email,
    name: name,
    profile_pic: picture,
    message: "Login Successfull",
    token,
  });
});


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection Established");
  } catch (err) {
    console.log(err);
  }
})
