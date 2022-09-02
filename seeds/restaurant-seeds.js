const { Restaurant } = require("../models");

const restaurantdata = [
    {
        restaurant_name: "Mamma Mia",
        restaurant_url: "google.com",
        user_id: 1
    },
    {
        restaurant_name: "Oga's",
        restaurant_url: "https://www.ogasnatick.com/menu",
        user_id: 2
    },
    {
        restaurant_name: "Whataburger",
        restaurant_url: "https://whataburger.com/home",
        user_id: 3
    },
    {
        restaurant_name: "Escalantes",
        restaurant_url: "https://www.escalantes.net/",
        user_id: 1
    },
    {
        restaurant_name: "Shake Shack",
        restaurant_url: "https://shakeshack.com/home#/",
        user_id: 2
    }
  ];
  
  const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

  module.exports = seedRestaurant;