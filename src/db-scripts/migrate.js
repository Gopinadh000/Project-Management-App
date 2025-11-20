import fs from 'fs';
import path from 'path';
import { db } from '../config/db-config.js';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { consoleBox } from '../utils/common.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const runMigrations = async () => {
    if (String(process.env.APP_RUN_DB_SCRIPTS).toUpperCase() !== 'TRUE') {
        consoleBox('AUTO Migration is not TRUE :  Skipping migration scripts.')
        return;
    }
    try {
        const filePath = path.join(__dirname, 'migrations.sql');
        const sql = fs.readFileSync(filePath, 'utf-8');
        const lines = sql.split('\n');
        let inMigration = false;
        let currentMigrationId = null;
        let statementBuffer = [];

        for (let line of lines) {
            const trimmed = line.trim();
            const startMatch = trimmed.match(/^<migration-script id=\"(.+)\">$/);
            if (startMatch) {
                if (inMigration) throw new Error('Nested migration-script blocks are not allowed.');
                inMigration = true;
                currentMigrationId = startMatch[1];
                statementBuffer = [];
                continue;
            }
            if (trimmed === '</migration-script>') {
                if (!inMigration) throw new Error('End tag found without a matching start tag.');
                inMigration = false;
                const statement = statementBuffer.join('\n').trim();
                if (statement && currentMigrationId) {
                    if (currentMigrationId === '000_create_migration_history') {
                        // Always run this migration, do not check the table
                        console.log(`MIGRATION SCRIPT EXECUTED: ${currentMigrationId}`);
                        await db.query(statement);
                        // Only insert if not already present
                        const [rows] = await db.query(
                            'SELECT 1 FROM migration_history WHERE migration_id = ?',
                            [currentMigrationId]
                        );
                        if (rows.length === 0) {
                            await db.query(
                                'INSERT INTO migration_history (migration_id) VALUES (?)',
                                [currentMigrationId]
                            );
                        }
                    } else {
                        // For all other migrations, check if already applied
                        try {
                            const [rows] = await db.query(
                                'SELECT 1 FROM migration_history WHERE migration_id = ?',
                                [currentMigrationId]
                            );
                            if (rows.length > 0) {
                                console.log(`SKIPPED (already applied): ${currentMigrationId}`);
                            } else {
                                console.log(`MIGRATION SCRIPT EXECUTED: ${currentMigrationId}`);
                                await db.query(statement);
                                await db.query(
                                    'INSERT INTO migration_history (migration_id) VALUES (?)',
                                    [currentMigrationId]
                                );
                            }
                        } catch (err) {
                            // If the migration_history table does not exist, throw a clear error
                            if (err.code === 'ER_NO_SUCH_TABLE') {
                                throw new Error('migration_history table does not exist. Make sure the 000_create_migration_history migration runs first.');
                            } else {
                                throw err;
                            }
                        }
                    }
                }
                currentMigrationId = null;
                statementBuffer = [];
                continue;
            }
            if (inMigration && trimmed) {
                statementBuffer.push(line);
            }
        }
        if (inMigration) {
            throw new Error(`File ended but migration-script "${currentMigrationId}" was not closed.`);
        }
        consoleBox('✅ Migrations executed successfully')
    } catch (err) {
        console.error('❌ Migration failed:', err);
        process.exit(1);
    }
};