const router = require("express").Router();
const { User, Category, Restaurant, Review, RestaurantCategory} = require("../models");


// login form
router.get("/login", (req, res) => {
    res.render("login");
  });
  
//   sign up form
router.get("/signup", (req, res) => {
    res.render("signup");
  });

router.get("/:category", async (req, res) => {
  const categoryName = req.params.category.replace("-", " ");

  //find category id
  try {
    const category_id = await Category.findOne({
      where: { category_name: categoryName },
      attributes: ["id"],
    });

    const response = await RestaurantCategory.findAll({
      where: { category_id: category_id.id },
      //attributes: ["restaurant_id"]
      include: [{ model: Restaurant }],
    });
    const catData = await Category.findAll({});
    const restaurants = response.map((restaurant) => restaurant.restaurant.get({ plain: true }));
    // not working because of how data is formatted
    const categories = catData.map((category) => category.get({ plain: true}));
    //res.send({restData, cats});
    res.render("homepage", {restaurants, categories})
  } catch (err) {
    res.status(500).json(err);
  }
})

//get all restaurants 
//GET "/"
router.get("/", async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll({
      include: [{model: Category,
      attributes: ["category_name"]}, {model: Review,
      attributes: ["id", "review_text", "user_id"],
        include: {model: User, attributes: ["username"]}}]
    });
    
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
    const categeriesData = await Category.findAll({});
    const categories = categeriesData.map((category) => category.get({ plain: true }));
    res.render("homepage", { restaurants, categories });
    // res.status(200).json(restaurantData);
    // restaurants
  } catch (err) {
    res.status(500).json(err);
  }

});




module.exports = router;