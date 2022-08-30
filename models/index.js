// import all models
const User = require('./User');
const Category = require('./Category');
const Restaurant = require('./Restaurant');
const Review = require('./Review');

// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Review, {
  through: Review,
  as: 'reviwed_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Restaurant.belongsToMany(Review, {
  through: Review,
  as: 'reviewed_posts',
  foreignKey: 'restaurant_id',
  onDelete: 'SET NULL'
});

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
  onDelete: 'SET NULL'
});

Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id'
});

module.exports = { User, Category, Restaurant, Review };
