import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Product from "./ProductModel.js";

const { DataTypes } = Sequelize;

const Category = db.define("category", {
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
});

export default Category;
