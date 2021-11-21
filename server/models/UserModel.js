import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Product from "./ProductModel.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Product);
Product.belongsTo(User);

export default User;
