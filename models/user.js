'use strict';
const { hashPassword } = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, {foreignKey:'userId', as: "TransactionAlias"})
      User.belongsToMany(models.Menu, {through: 'Transactions', foreignKey: 'MenuAlias'})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        arg: true,
        msg: 'This email is already taken'
      },
      validate: {
        notNull: {
          msg: "Email can't be null"
        },
        notEmpty: {
          msg: "Email can't be empty"
        },
        isEmail: {
          msg: 'Format email invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password can't be null"
        },
        notEmpty: {
          msg: "Password can't be empty"
        }
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) =>{
    user.password = hashPassword(user.password)
  })
  return User;
};