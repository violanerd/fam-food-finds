const { Restaurant } = require('../models');

const restaurantdata = [
    {
        restaurant_name: "Mamma Mia",
        restaurant_url: "google.com",
    },
    {
        restaurant_name: "Oga's",
        restaurant_url: "https://www.ogasnatick.com/menu",
    },
    {
        restaurant_name: "Whataburger",
        restaurant_url: "https://whataburger.com/home",
    },
    {
        restaurant_name: "Escalantes",
        restaurant_url: "https://www.escalantes.net/",
    },
    {
        restaurant_name: "Shake Shack",
        restaurant_url: "https://shakeshack.com/home#/",
    }
  ];
  
  const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

  module.exports = seedRestaurant;