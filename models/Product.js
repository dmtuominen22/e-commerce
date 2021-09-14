// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
    // use the special Sequelize DataTypes object
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    },
 
  //   // define a product_name column
  //   product_name: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  //   },

//define a price column
    // {

    // },
//define stock column
    // {

    // },
//define category_id column
    // {

   },

    
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
