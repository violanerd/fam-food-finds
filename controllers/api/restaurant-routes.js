const router = require("express").Router();
const {Category, Restaurant, Review, RestaurantCategory, User} = require("../../models")

//GET /api/restaurant
//get all restaurants
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