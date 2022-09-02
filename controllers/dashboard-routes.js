const router = require("express").Router();
const sequelize = require('../config/connection');
const { Restaurant, User } = require('../models/index');
const withAuth = require('../utils/auth')


// code to render all the restaurants from one user 
// /dashboard/
router.get('/:id', async (req, res) => { //withAuth add
    try {
        const restaurantData = await Restaurant.findAll({
            where: {user_id: req.params.id},//req.session.user_id},
            include: [{model: User}]
        })
        res.status(200).json(restaurantData)
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
router.get('/new', async (req, res) => {})



module.exports = router;