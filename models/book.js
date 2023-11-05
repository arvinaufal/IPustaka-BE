'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.History, {foreignKey: 'bookId'});
      Book.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Title is required!`
        },
        notNull: {
          msg: `Title is required!`
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Author is required!`
        },
        notNull: {
          msg: `Author is required!`
        }
      }
    },
    synopsis: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Synopsis is required!`
        },
        notNull: {
          msg: `Synopsis is required!`
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notEmpty: {
          msg: `Stock is required!`
        },
        notNull: {
          msg: `Stock is required!`
        }
      }
    },
    status: { 
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'inactive',
      validate: {
        notEmpty: {
          msg: `Status is required!`
        },
        notNull: {
          msg: `Status is required!`
        }
      }
    },
    genreId: DataTypes.INTEGER,
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
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Image Url is required!`
        },
        notNull: {
          msg: `Image Url is required!`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};