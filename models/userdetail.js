'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserDetail.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  UserDetail.init({
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    inumber: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: `Inumber is required!`
        },
        notNull: {
          msg: `Inumber is required!`
        }
      }
    },
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `User is required!`
        },
        notNull: {
          msg: `User is required!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};