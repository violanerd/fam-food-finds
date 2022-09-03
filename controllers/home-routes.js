const router = require("express").Router();
const { User, Category, Review } = require("../models");

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

//get all restaurants 
//GET "/"
router.get("/", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll({
      include: [{model: Category,
      attributes: ["category_name"]}, {model: Review,
      attributes: ["id", "review_text", "user_id"],
        include: {model: User, attributes: ["username"]}}]
    })
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }

});
  module.exports = router;