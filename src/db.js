const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch((err) => console.error('Error de conexión:', err.stack));

module.exports = client;