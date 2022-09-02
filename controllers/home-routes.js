const router = require("express").Router();
const { User } = require("../models");

// login form
router.get("/", (req, res) => {
  res.render("homepage");
});

// login form
router.get("/login", (req, res) => {
    res.render("login");
  });
  
//   sign up form
  router.get("/signup", (req, res) => {
    res.render("signup");
  });

  module.exports = router;