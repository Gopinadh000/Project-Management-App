import mysql from 'mysql2/promise';
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
    host: process.env.APP_HOST,
    user:  process.env.APP_DB_USER,
    password:  process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,     // 👈 max connections in the pool
    queueLimit: 0            // 👈 unlimited queue
})

export {db};