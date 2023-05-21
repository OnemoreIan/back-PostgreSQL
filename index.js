/* // Importar módulos necesarios
const mysql = require('mysql2/promise');

// Crear una conexión a la base de datos
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

// Insertar datos en la tabla 'colores'
const nombreColor = 'Rojo';
const idColor = 1;

const [rows, fields] = await connection.execute(
  'INSERT INTO colores (nombre, id) VALUES (?, ?)',
  [nombreColor, idColor]
);

console.log(rows.affectedRows + ' fila(s) insertada(s) en la tabla de colores');
 */
// query("SELECT * FROM tareas");

//libreria a usar
const { Client } = require("pg");
require("dotenv").config();


async function todo() {
  //iniciando cliente
  const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DB,
    password: process.env.PASSWORD,
  });

  //especificar a la base de datos

  await client.connect();

  const res = await client.query("SELECT * FROM tareas");
  const result = res.rows; // Hello world!
  await client.end();
  console.log("ejemplo");
  return result;
}

todo().then((result) => {
  console.log(result);
});
