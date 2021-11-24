import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Category from "./CategoryModel.js";

const { DataTypes } = Sequelize;

const Product = db.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  description: {
    type: DataTypes.STRING,
  },
  condition: {
    type: DataTypes.STRING,
  },
  isSold: {
    type: DataTypes.BOOLEAN,
  },
  productImgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Product.hasOne(Category);
Category.hasMany(Product);
Product.belongsTo(Category);

export default Product;
