const router = require("express").Router();
const {
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
  User,
} = require("../../models");

// filter by category
// GET /api/restaurant/:category
router.get("/:category", async (req, res) => {
  // this code allows for both "Italian" and "Burger-Joint" to be passed in
  const categoryName = req.params.category.replace("-", " ");

  //find category id
  try {
    const category_id = await Category.findOne({
      where: { category_name: categoryName },
      attributes: ["id"],
    });

    const response = await RestaurantCategory.findAll({
      where: { category_id: category_id.id },
      attributes: ["restaurant_id"],
      include: [{ model: Restaurant }],
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET restaurant by restaurant id api/restaurant/1
// DOESN'T work with category route above
// router.get('/:id', async (req, res) => {
//   try {
//     const restaurantData = await Restaurant.findOne({
//       where: {id: req.params.id}
//     })
//     if (!restaurantData){
//       res.status(400).json({message: 'No restaurant found'})
//       return;
//     }
//     res.status(200).json(restaurantData)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

// Get All Restaurants
router.get("/", (req, res) => {
  console.log("======================");
  Restaurant.findAll({
    attributes: ["id", "restaurant_name", "restaurant_url", "user_id"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Review,
        attributes: [
          "id",
          "review_text",
          "rating",
          "user_id",
          "restaurant_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get a Restaurant
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "post_url",
      "title",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create new restaurant /api/restaurant/
router.post("/", (req, res) => {
  Restaurant.create({
    restaurant_name: req.body.restaurant_name,
    restaurant_url: req.body.restaurant_url,
    user_id: req.session.user_id,
  })
    .then((dbRestaurantData) => res.json(dbRestaurantData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update restaurant /api/restaurant/1
router.put("/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.update(
      {
        restauarant_name: req.body.restauarant_name,
        restauarant_url: req.body.restauarant_url,
        user_id: req.body.user_id,
      }, //req.session.user_id
      { where: { id: req.params.id } }
    );
    if (!restaurantData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE restaurant /api/restaurant/1
router.delete("/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.destroy({
      where: { id: req.params.id },
    });
    if (!restaurantData) {
      res.status(400).json({ message: "No restaurant found" });
      return;
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
