const router = require("express").Router();
const {
  Category,
  Restaurant,
  Review,
  RestaurantCategory,
  User,
} = require("../../models");

// Get all reviews
router.get("/", (req, res) => {
  console.log("======================");
  Review.findAll({
    attributes: [
      "id",
      "review_text",
      "rating",
      "user_id",
      "restaurant_id",
      "created_at",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all reviews by restaurant id
// /api/review/1
router.get("/:id", async (req, res) => {
  try {
    const reviewData = await Restaurant.findByPk(req.params.id, {
      include: [
        { model: Review, include: [{ model: User, attributes: ["username"] }] },
      ],
    });
    const reviewPost = reviewData.get({ plain: true });
    res.render("review", {
     reviewPost,
   });
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a review
// /api/review
router.post("/", async (req, res) => {
  try {
    const reviewData = await Review.create({
      review_text: req.body.review_text,
      rating: req.body.rating,
      user_id: req.body.user_id, // req.session.user_id
      restaurant_id: req.body.restaurant_id, // pull this off the url
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
