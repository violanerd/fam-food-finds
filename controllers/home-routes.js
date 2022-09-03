const router = require("express").Router();
const { User, Category, Restaurant, Review } = require("../models");

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
      include: [
        { model: Category, attributes: ["category_name"] },
        {
          model: Review,
          attributes: ["id", "review_text", "user_id"],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });

    const restaurants = restaurantData.map((restaurant) =>
      restaurant.get({ plain: true })
    );
    const categeriesData = await Category.findAll({});
    const categories = categeriesData.map((category) =>
      category.get({ plain: true })
    );
    res.render("homepage", { restaurants, categories });
    // res.status(200).json(restaurantData);
    // restaurants
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/restaurant/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findOne({
      include: [
        { model: Category, attributes: ["category_name"] },
        {
          model: Review,
          attributes: ["id", "review_text", "user_id"],
          include: { model: User, attributes: ["username"] },
        },
      ],
    });

    const restaurants = restaurantData.map((restaurant) =>
      restaurant.get({ plain: true })
    );
    res.render("homepage", { restaurants});
    // res.status(200).json(restaurantData);
    // restaurants
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
