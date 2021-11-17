import { Sequelize } from "sequelize";

// const db = new Sequelize("user_db", "root", "P@ssw0rd", {
//   host: "192.168.1.114",
//   dialect: "mysql",
// });
const db = new Sequelize("VPJjfoZnYK", "VPJjfoZnYK", "W7JmLXn1Ir", {
  host: "remotemysql.com",
  dialect: "mysql",
});

export default db;
