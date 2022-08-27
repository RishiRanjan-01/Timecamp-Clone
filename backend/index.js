const express = require("express");
require("dotenv").config();
const cors = require("cors");
var jwt = require("jsonwebtoken");
// const session = require("express-session");

// const passport = require("./config/googleauth");
// const userroute = require("./controllers/user.controller");
const connection = require("./config/db");
const userroute = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const authentication = require("./middlewares/authentication")


 const session = require("express-session");
 const passport = require("./config/googleauth");




//   Sandeep imports
const Invoiceconnection=require('./config/siddb')
const InvoiceController=require('./controllers/invoice.controller')

const app = express();

// app.use(session({ secret: "keyboard cat" }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(cors());
app.use(express.json());


app.use("/user", userroute);
app.use("/project",authentication,projectController)

// app.get(
//   "/auth/google",  
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

// app.get("/", (req, res) => {
//   const { email, name, picture, sub } = req.user._json;
//   console.log(req.user._json);
//   const token = jwt.sign({ email: email, userId: sub }, process.env.secret);

//   res.send({
//     email: email,
//     name: name,
//     profile_pic: picture,
//     message: "Login Successfull",
//     token,
//   });
// });

// app.use("/user", userroute);

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
    res.redirect("http://localhost:3000/");
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



// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function (req, res) {
    // Successful authentication, redirect home.
//     res.redirect("/");
//   }
// );

// app.get("/", (req, res) => {
//   const { email, name, picture, sub } = req.user._json;
//   console.log(req.user._json);
//   const token = jwt.sign({ email: email, userId: sub }, process.env.secret);

//   res.send({
//     email: email,
//     name: name,
//     profile_pic: picture,
//     message: "Login Successfull",
//     token,
//   });
// });



{
  /* Sandeep  routes*/
}

app.use('/invoice',InvoiceController)

app.listen(process.env.PORT, async () => {
  try {
    await Invoiceconnection;
    console.log("Connection Established");
  } catch (err) {
    console.log(err);
  }

  console.log("server started");
});
