import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas5-chan", "root", "", {
  host: "35.202.212.232",
  dialect: "mysql",
});

export default db;
