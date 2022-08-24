const express = require("express");
require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/googleauth");
const app = express();

app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

const userroute = require("./controllers/user.controller");
const connection = require("./config/db");

app.use(express.json());

app.use("/user", userroute);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.get("/", (req, res) => {
  console.log(req.user.displayName);
  res.send("Homepage");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connection Established");
  } catch (err) {
    console.log(err);
  }

  console.log("server started");
});
