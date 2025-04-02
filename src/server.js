require('dotenv').config();  // Carga las variables de entorno

const { DATABASE_URL } = process.env;  // Accede a la variable de entorno

// Importar dependencias
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Client } = require('pg');

// Cargar las variables de entorno desde .env
dotenv.config();

// Crear una instancia de la aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Para poder leer el cuerpo de las solicitudes JSON

// Conexión a la base de datos PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect()
  .then(() => console.log('Conectado a la base de datos PostgreSQL'))
  .catch((err) => console.error('Error de conexión:', err.stack));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a PlanIt!');
});

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});