import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'ejemplo_dto',  // DB_NAME
  'root',         // DB_USER
  '',             // DB_PASSWORD
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,   //--cada comando que impaca en la base de datos lo ves por consola
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    },
    // timezone: '-03:00' // UTC -3 para Argentina
  }
);

export default db;
