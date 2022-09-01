const router = require("express").Router();
const {Category, Restaurant, Review, RestaurantCategory, User} = require("../../models")


//get all restaurants
//GET /api/restaurant
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

// filter by category
// GET /api/restaurant/:category
router.get("/:category", async (req, res) => {
  // this code allows for both "Italian" and "Burger-Joint" to be passed in
  const categoryName = req.params.category.replace("-", " ");
  
  //find category id
  try{ 
    const category_id = await Category.findOne({
      where: {category_name: categoryName},
      attributes: ["id"]  
    });
    
    const response = await RestaurantCategory.findAll({
      where: {category_id: category_id.id },
      attributes: ["restaurant_id"],
      include: [{model: Restaurant}] 
    });
    
    res.status(200).json(response)

  } catch(err) {
    res.status(500).json(err);
  }

});


  


module.exports = router;