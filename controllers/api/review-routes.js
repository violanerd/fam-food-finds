const router = require('express').Router();
const {Category, Restaurant, Review, RestaurantCategory, User} = require('../../models')

// /api/review
// get all reviews by restaurant id
router.get('/:id', async (req, res) => {
    try {
      const restaurantData = await Restaurant.findByPk(req.params.id, {
        include: [
            {model: Review,
            include: [{model: User, attributes: ["username"]}]}]
      })
      res.status(200).json(restaurantData);
    } catch (err) {
      res.status(500).json(err);
    }
  
  });


module.exports = router;