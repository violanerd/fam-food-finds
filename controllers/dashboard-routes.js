const router = require("express").Router();
const sequelize = require("../config/connection");
const { Restaurant, Category, User, Review } = require("../models");
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

// it will load to edit form when click on post itself.
router.get("/restaurant/edit/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findByPk(req.params.id);
    const categeriesData = await Category.findAll({});
    const categories = categeriesData.map((category) =>
      category.get({ plain: true })
    );
    if (restaurantData) {
      const restaurant = restaurantData.get({ plain: true });
      res.render("edit-restaurant", {
        layout: "dashboard",
        restaurant,
        categories,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

// comment will load to edit form when click on post itself.
router.get("/review/edit/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id);

    if (reviewData) {
      const review = reviewData.get({ plain: true });
      res.render("edit-review", {
        layout: "dashboard",
        review,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
