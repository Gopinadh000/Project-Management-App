import express from "express";
import { serverConfig } from "./src/config/server-config.js";
import { db } from './src/config/db-config.js';
import dotenv from "dotenv";
import { router as v1Routes } from "./src/routes/v1.js";
import { runMigrations } from "./src/db-scripts/migrate.js";
import cors from "cors";
import { displayStartupInfo, shouldRunMigrations } from "./src/utils/common.js";

// Load environment variables
dotenv.config();

// Track startup time
const startTime = Date.now();

// Create Express app
const app = express();

// Configure server (middleware, etc.)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form-encoded bodies

// Add routes to the app
app.use('/api/v1', v1Routes);

// Configure server
serverConfig(app);

// Start the server
const PORT = process.env.APP_PORT || 4003;

// Test database connection and start server
(async () => {
  let dbStatus = null;
  let migrationsStatus = null;
  
  try {
    const [rows] = await db.query('SELECT NOW() AS currentTime');
    dbStatus = `✅ Connected to ${process.env.APP_DB_NAME || 'database'}`;
    
    // Run migrations only if should run (not on nodemon restarts)
    if (shouldRunMigrations() && String(process.env.APP_RUN_DB_SCRIPTS).toUpperCase() === 'TRUE') {
      try {
        await runMigrations();
        migrationsStatus = '✅ Completed';
      } catch (migErr) {
        migrationsStatus = `⚠️  ${migErr.message}`;
      }
    } else {
      if (String(process.env.APP_RUN_DB_SCRIPTS).toUpperCase() !== 'TRUE') {
        migrationsStatus = '⏭️  Skipped (APP_RUN_DB_SCRIPTS not TRUE)';
      } else {
        migrationsStatus = '⏭️  Skipped (nodemon restart)';
      }
    }
  } catch (err) {
    dbStatus = `❌ Failed to connect: ${err.message}`;
  }

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
})();
