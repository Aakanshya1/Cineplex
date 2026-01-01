'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Watchlist.belongsTo(models.User,{
        foreignKey: 'UserId',
        as:'user',
        onDelete: 'CASCADE'
      });
      Watchlist.belongsTo(models.Movie,{
        foreignKey: 'MovieId',
        as:'movie',
        onDelete: 'CASCADE'
      });

    }
  }
  Watchlist.init({
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    status: {
    type: DataTypes.ENUM("planned", "watching", "completed"),
    defaultValue: "planned"
  },
  }, {
    sequelize,
    modelName: 'Watchlist',
  });
  return Watchlist;
};