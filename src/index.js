import express from "express";
import { db, APP_ENV } from "./config/db-config.js";
import dotenv from "dotenv";
import { router as v1Routes } from "./routes/v1.js";
import { runMigrations } from "./db-scripts/migrate.js";
import cors from "cors";
import { displayStartupInfo, shouldRunMigrations } from "./utils/common.js";
import { consoleBox } from "./utils/common.js";

dotenv.config();

// Create Express app
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form-encoded bodies

// Add routes to the app
app.use("/api/v1", v1Routes); 

// Start the server
const PORT = process.env.APP_PORT || 4003;

// Test database connection and start server
(async () => {
  let dbStatus = null;
  let migrationsStatus = null;
  // Track startup time
  const startTime = Date.now();

  try {
    const [rows] = await db.query("SELECT NOW() AS currentTime");

    // Get database name from environment
    const getDbName = (env) => {
      const envKey = `APP_DB_NAME_${env}`;
      return process.env[envKey] || process.env.APP_DB_NAME || "database";
    };

    // dbStatus = `✅ Connected to ${getDbName(APP_ENV)} [${APP_ENV}]`;

    // Calculate startup time
    const startupTime = `${Date.now() - startTime} ms`;

    // Start the server
    app.listen(PORT, () => {
      displayStartupInfo(PORT, {
        dbStatus,
        migrationsStatus,
        startupTime,
      });
    });

    if (
      shouldRunMigrations() &&
      String(process.env.APP_RUN_DB_SCRIPTS).toUpperCase() === "TRUE"
    ) {
      try {
        await runMigrations();
        migrationsStatus = "✅ Completed";
      } catch (migErr) {
        migrationsStatus = `⚠️  ${migErr.message}`;
      }
    } else {
      if (String(process.env.APP_RUN_DB_SCRIPTS).toUpperCase() !== "TRUE") {
        migrationsStatus = "⏭️  Skipped (APP_RUN_DB_SCRIPTS not TRUE)";
      } else {
        migrationsStatus = "⏭️  Skipped (nodemon restart)";
      }
    }
  } catch (err) {
    dbStatus = `❌ Failed to connect: ${err.message}`;
  }
})();

const serverConfig = (app) => {
  consoleBox("✅ Server configured successfully");
};

serverConfig(app);
