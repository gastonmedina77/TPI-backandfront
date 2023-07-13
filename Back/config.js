// config.js - variables de entorno
module.exports = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'sql.freedb.tech',
    DB_DATA_BASE: process.env.DB_DATA_BASE || 'freedb_dbtpfinal',
    DB_USER: process.env.DB_USER || 'freedb_usuario20',
    DB_PASSWORD: process.env.DB_PASSWORD || 'nsa@DhH6c8g@vmR',
    DB_DIALECT: process.env.DB_DIALECT || 'mysql'
  }