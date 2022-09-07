const router = require("express").Router();
const { User, Category, Restaurant, Review, RestaurantCategory } = require("../models");
const sequelize = require("../config/connection");

//search by category
router.get("/:category", async (req, res) => {
    const categoryName = req.params.category.replace("-", " ");
    try {
      console.log(categoryName)
      const category_id = await Category.findOne({
        where: { category_name: categoryName},
        attributes: ["id"],
      });
      const response = await RestaurantCategory.findAll({
        where: { category_id: category_id.id },
        attributes: [],
        include: [{ model: Restaurant,
          attributes:[
            "id" , 
            "restaurant_name", 
            "restaurant_url",  
            "restaurant_description", 
            "user_id", 
            "created_at", 
            "updated_at",
            [sequelize.literal('(SELECT count(user.id) FROM Review, User WHERE user.id = review.user_id AND restaurant.id = review.restaurant_id group by restaurant.id)'), 'userReviewCounts'],
            [sequelize.literal('(SELECT sum(rating) FROM Review, User WHERE user.id = review.user_id AND restaurant.id = review.restaurant_id group by restaurant.id)'), 'totalRated'],
            [sequelize.literal('(SELECT (sum(rating)/count(user.id)) FROM Review, User WHERE user.id = review.user_id AND restaurant.id = review.restaurant_id group by restaurant.id)'), 'avgRated'],
          ],  }]
      });
      const restaurants = response.map((restaurant) =>
        restaurant.restaurant.get({ plain: true })
      );
 
      const categeriesData = await Category.findAll({});
      const categories = categeriesData.map((category) =>
        category.get({ plain: true })
      );
      //res.status(200).json({restaurants, categories})
      res.render("homepage", { restaurants, categories });  
    } catch (err) {
      res.status(500).json(err);
    }
  })
  
module.exports = router;