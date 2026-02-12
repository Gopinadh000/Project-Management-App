import mysql from 'mysql2/promise';
import dotenv from "dotenv";
import fs from "fs";
import { DB_CREDIENTAILS_CONFIG } from "./db-data.js";

dotenv.config();

// Get Application environment (DEV, PROD, or TEST)
let APP_ENV = process.env.APP_ENV || "TEST";
if (typeof APP_ENV === "string") {
  APP_ENV = APP_ENV.trim()
    .replace(/^\"|\"$/g, "")
    .toUpperCase();
}

console.log(APP_ENV, "APP_ENV");

// Get database configuration based on environment
const dbConfigObject = () => {
  const z = DB_CREDIENTAILS_CONFIG[APP_ENV] || DB_CREDIENTAILS_CONFIG.TEST;
  const port = z.PORT ? Number(z.PORT) : undefined;
  const dbConfig = {
    host: z.HOST,
    port,
    user: z.USERNAME,
    password: z.PASSWORD,
    database: z.DATABASE,
  };

  // Use ssl only if provided in the selected config (allows DEV:false)
  if (z.ssl) {
    dbConfig.ssl = z.ssl;

    // If a CA file path is provided via env, load it and attach to ssl
    const caFile = process.env.APP_DB_CA_FILE;
    const caEnv = process.env.APP_DB_CA;
    try {
      if (caFile && fs.existsSync(caFile)) {
        dbConfig.ssl.ca = fs.readFileSync(caFile);
      } else if (caEnv) {
        // Support passing the CA certificate directly via env var
        // Replace escaped newlines with real newlines if needed
        dbConfig.ssl.ca = caEnv.replace(/\\n/g, "\n");
      }
    } catch (err) {
      console.warn("Failed to load DB CA certificate:", err.message);
    }
  }

  return dbConfig;
};

const dbConfig = dbConfigObject();

const db = mysql.createPool(dbConfig);

export { db, APP_ENV };