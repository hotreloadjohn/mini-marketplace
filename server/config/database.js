import { Sequelize } from "sequelize";

const db = new Sequelize("user_db", "root", "", {
  host: "192.168.1.114",
  dialect: "mysql",
});

export default db;
