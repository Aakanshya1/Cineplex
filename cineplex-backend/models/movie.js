'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Movie.hasMany(models.Watchlist);
    Movie.hasMany(models.Review);

    }
  }
  Movie.init({
    imdbId: DataTypes.STRING,
    title: DataTypes.STRING,
    poster: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};