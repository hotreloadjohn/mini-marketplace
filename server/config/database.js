import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const db = new Sequelize("user_db", "root", "P@ssw0rd", {
//   host: "192.168.1.114",
//   dialect: "mysql",
// });
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "remotemysql.com",
    dialect: "mysql",
  }
);

export default db;
