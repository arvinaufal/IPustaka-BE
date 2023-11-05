'use strict';
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
      User.hasOne(models.UserDetail, {foreignKey: 'userId'});
      User.hasMany(models.History, {foreignKey: 'userId'});
      User.hasMany(models.Book, {foreignKey: 'userId'});
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: `Username is required!`
        },
        notNull: {
          msg: `Username is required!`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: `Email is required!`
        },
        notNull: {
          msg: `Email is required!`
        },
        isEmail: {
          msg: `Email is invalid, use a valid email!`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password is required!`
        },
        notNull: {
          msg: `Password is required!`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Role is required!`
        },
        notNull: {
          msg: `Role is required!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};