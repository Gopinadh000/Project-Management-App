import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function listTables() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.APP_HOST,
            port: parseInt(process.env.APP_DB_PORT) || 3306,
            user: process.env.APP_DB_USER,
            password: process.env.APP_DB_PASSWORD,
            database: process.env.APP_DB_NAME,
            ssl: {
                rejectUnauthorized: false
            }
        });

        console.log('Connected to database:', process.env.APP_DB_NAME);
        console.log('');

        // Get all tables
        const [tables] = await connection.execute(
            `SELECT TABLE_NAME, TABLE_ROWS, DATA_LENGTH, INDEX_LENGTH, CREATE_TIME
             FROM information_schema.TABLES 
             WHERE TABLE_SCHEMA = ?
             ORDER BY TABLE_NAME`,
            [process.env.APP_DB_NAME]
        );

        if (tables.length === 0) {
            console.log('No tables found in the database.');
        } else {
            console.log(`Found ${tables.length} table(s):\n`);
            console.log('┌─────────────────────────────────────────────────────────────────────────────┐');
            console.log('│ Table Name                    │ Rows      │ Size      │ Created             │');
            console.log('├─────────────────────────────────────────────────────────────────────────────┤');
            
            for (const table of tables) {
                const name = table.TABLE_NAME.padEnd(30);
                const rows = (table.TABLE_ROWS || 0).toLocaleString().padEnd(9);
                const size = formatBytes((table.DATA_LENGTH || 0) + (table.INDEX_LENGTH || 0)).padEnd(9);
                const created = table.CREATE_TIME ? 
                    new Date(table.CREATE_TIME).toLocaleString() : 'N/A';
                
                console.log(`│ ${name} │ ${rows} │ ${size} │ ${created} │`);
            }
            
            console.log('└─────────────────────────────────────────────────────────────────────────────┘');
            
            // Also show table names in a simple list
            console.log('\nTable names:');
            tables.forEach((table, index) => {
                console.log(`${index + 1}. ${table.TABLE_NAME}`);
            });
        }

        await connection.end();
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

listTables();


