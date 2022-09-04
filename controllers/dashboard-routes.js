const router = require("express").Router();
const sequelize = require("../config/connection");
const { Restaurant, Category, User } = require("../models");
const withAuth = require("../utils/auth");

// code to render all the restaurants from one user
// /dashboard/
router.get("/", withAuth, async (req, res) => {
  //withAuth add
  
  
  try {
    const restaurantData = await Restaurant.findAll({
      where: { user_id: req.session.user_id},
      include: [{ model: User, attributes: ["username"] }],
    });
    const restaurants = restaurantData.map((restaurant) =>
      restaurant.get({ plain: true })
    );
    res.render("post-restaurants", {
      layout: "dashboard",
      restaurants,
      username: restaurants[0].user.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// /dashboard/new
// CREATE a restaurant - render new page
// load new create form for new post when click create new
router.get("/restaurant/new", async (req, res) => {
  const categeriesData = await Category.findAll({});
  const categories = categeriesData.map((category) =>
    category.get({ plain: true })
  );
  res.render("new-restaurant", {
    layout: "dashboard",
    categories,
  });
});

// /dashboard/edit
// get one restaurant to edit
router.get("/edit/:id", async (req, res) => {});

module.exports = router;
