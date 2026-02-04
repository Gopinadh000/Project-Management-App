import { runMigrations } from "./migrate.js";

async function runMigrateScript(){
       await runMigrations();
        process.exit(0); // stop
};


runMigrateScript();