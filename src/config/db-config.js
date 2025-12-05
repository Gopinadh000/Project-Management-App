import mysql from 'mysql2/promise';
import dotenv from "dotenv";
import { DB_CREDIENTAILS_CONFIG } from "./db-data.js";

dotenv.config();

// Get Application environment (DEV, PROD, or TEST)
const APP_ENV = process.env.APP_ENV || "DEV";

// Get database configuration based on environment
const dbConfigObject = () => {
  let z = DB_CREDIENTAILS_CONFIG[APP_ENV];
  const dbConfig = {
    host: z.HOST,
    port: z.PORT,
    user: z.USERNAME,
    password: z.PASSWORD,
    database: z.DATABASE,
  };
  return dbConfig;
};

const dbConfig = dbConfigObject();

const db = mysql.createPool(dbConfig);

export { db, APP_ENV };