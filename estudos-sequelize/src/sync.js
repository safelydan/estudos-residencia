import Cliente from "./modelTest1.js";
import sequelize from "./db.js";
await sequelize.sync();

export {Cliente}