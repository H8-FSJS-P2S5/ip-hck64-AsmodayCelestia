'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.Category, { foreignKey: 'categoryId' }); 
      Menu.hasMany(models.Cart, {foreignKey: 'menuId', as: "menuIdAlias"})
      Menu.belongsToMany(models.Transaction, {through: "Carts", foreignKey: 'menuId', as: "MenuIdAlias"})
    }
  }
  Menu.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Name can't be null",
        },
        notEmpty: {
          msg: "Name can't be empty",
        },
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull: {
          msg: "Description can't be null",
        },
        notEmpty: {
          msg: "Description can't be empty",
        },
      },
    },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Image can't be null",
          },
          notEmpty: {
            msg: "Image can't be empty",
          },
        },
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Price can't be null",
          },
          notEmpty: {
            msg: "Price can't be empty",
          },
        },
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "CategoryId can't be null",
          },
          notEmpty: {
            msg: "CategoryId can't be empty",
          },
        },
      },
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};