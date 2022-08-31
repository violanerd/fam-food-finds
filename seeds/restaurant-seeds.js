const { Restaurant } = require('../models');

const restaurantdata = [
    {
        restaurant_name: "Mamma Mia",
        restaurant_url: "google.com",
        review_id: "1",
        category_id: "1"

    },
    {
        restaurant_name: "Oga's",
        restaurant_url: "https://www.ogasnatick.com/menu",
        review_id: "2",
        category_id: "2"
    },
    {
        restaurant_name: "Whataburger",
        restaurant_url: "https://whataburger.com/home",
        review_id: "3",
        category_id: "3"
    },
    {
        restaurant_name: "Escalantes",
        restaurant_url: "https://www.escalantes.net/",
        review_id: "4",
        category_id: "4"
    },
    {
        restaurant_name: "Shake Shack",
        restaurant_url: "https://shakeshack.com/home#/",
        review_id: "5",
        category_id: "5"
    }
  ];
  
  const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

  module.exports = seedRestaurant;