const router = require("express").Router();
const sequelize = require('../config/connection');
const { Restaurant, User } = require('../models/index');
const withAuth = require('../utils/auth')


// code to render all the restaurants from one user 
// /dashboard/
router.get('/:id', async (req, res) => { //withAuth add
    // for design dashboard layout I just test for user_id = 1 to get the restaurant post by user.
    const userId = 1;
    try {
        const restaurantData = await Restaurant.findAll({
            where: {user_id: userId},//req.session.user_id},
            include: [{model: User, attributes: ["username"]}]
        })
        const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
        res.render("post-restaurants", { 
            layout: "dashboard",
            restaurants,
            username: restaurants[0].user.username,
         });
        //const restaurants = restaurantData.map(restaurant => restaurant.get({ plain: true}))
        //res.render('dashboard', { restaurants, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }

  });

  
// /dashboard/edit
// get one restaurant to edit
router.get('/edit/:id', async (req, res) => {})

// /dashboard/new
// CREATE a restaurant - render new page
router.get('/new', async (req, res) => {
    res.render("new-restaurant", {
        layout: "dashboard",
      });
})



module.exports = router;