'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, { foreignKey: 'userId' }); 
      Transaction.hasMany(models.Cart, {foreignKey: 'transactionId', as: "menuIdAlias"})
      Transaction.belongsToMany(models.Menu, {through: "Carts", foreignKey: 'menuId', as: "MenuIdAlias"})
    }
  }
  Transaction.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: "UserId can't be null",
        },
        notEmpty: {
          msg: "UserId can't be empty",
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};