import os from 'os';
import { readFileSync, existsSync, writeFileSync, unlinkSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
};

export function consoleBox(message) {
    const lines = message.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    const border = '-'.repeat(maxLength + 4);
    console.log(border);
    for (const line of lines) {
        console.log(`| ${line.padEnd(maxLength)} |`);
    }
    console.log(border);
}

/**
 * Get the local network IP address
 */
function getNetworkIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal (loopback) and non-IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

/**
 * Get app info from package.json
 */
function getAppInfo() {
  try {
    const packagePath = join(__dirname, '../../package.json');
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
    return {
      name: packageJson.name || 'pm-app-be',
      version: packageJson.version || '1.0.0',
    };
  } catch (error) {
    return {
      name: 'pm-app-be',
      version: '1.0.0',
    };
  }
}

/**
 * Check if we're running under nodemon
 */
function isRunningUnderNodemon() {
  // Nodemon sets these environment variables and process properties
  return !!(
    process.env.nodemon || 
    process.env.NODEMON ||
    process.env._?.includes('nodemon') ||
    process.argv.some(arg => arg.includes('nodemon')) ||
    // Check parent process name (more reliable)
    (typeof process.ppid === 'function' ? false : process.env.npm_lifecycle_script?.includes('nodemon'))
  );
}

/**
 * Check if startup display should be shown
 * Only shows on initial start, not on nodemon restarts
 */
function shouldShowStartupDisplay() {
  // Check environment variable first (user override)
  if (process.env.SHOW_STARTUP_DISPLAY !== undefined) {
    return process.env.SHOW_STARTUP_DISPLAY === 'true' || process.env.SHOW_STARTUP_DISPLAY === '1';
  }

  // If not running under nodemon, always show (manual start)
  if (!isRunningUnderNodemon()) {
    // Clear any existing flag file on manual start
    const flagFile = join(__dirname, '../../.startup-displayed');
    if (existsSync(flagFile)) {
      try {
        unlinkSync(flagFile);
      } catch (error) {
        // Ignore errors
      }
    }
    return true;
  }

  // Running under nodemon - use file-based approach to track first run
  const flagFile = join(__dirname, '../../.startup-displayed');
  
  if (existsSync(flagFile)) {
    try {
      // Check file timestamp - if less than 2 seconds old, it's a nodemon restart
      const fileTime = parseInt(readFileSync(flagFile, 'utf8'), 10);
      const now = Date.now();
      const age = now - fileTime;
      
      // Nodemon restarts happen very quickly (within 1-2 seconds)
      // If file is less than 2 seconds old, it's definitely a nodemon restart
      if (age < 2000) {
        // Recent file = nodemon restart, don't show
        return false;
      }
      
      // File is older than 2 seconds = manual restart, show display
      // Update the timestamp
      writeFileSync(flagFile, now.toString(), 'utf8');
      setupFlagCleanup();
      return true;
    } catch (error) {
      // If we can't read the file, show the display
      return true;
    }
  }

  // First run under nodemon - create flag file and show display
  try {
    writeFileSync(flagFile, Date.now().toString(), 'utf8');
    // Set up cleanup on process exit (won't actually cleanup if nodemon)
    setupFlagCleanup();
    return true;
  } catch (error) {
    // If we can't write the file, show the display anyway
    return true;
  }
}

/**
 * Setup cleanup handlers to remove flag file on process exit
 * Only clean up on actual exit, not on nodemon restarts
 */
function setupFlagCleanup() {
  const flagFile = join(__dirname, '../../.startup-displayed');
  const isNodemon = isRunningUnderNodemon();
  
  const cleanup = () => {
    // Only cleanup if NOT running under nodemon
    // Nodemon restarts send SIGTERM, but we want to keep the flag for restarts
    if (!isNodemon && existsSync(flagFile)) {
      try {
        unlinkSync(flagFile);
      } catch (error) {
        // Ignore errors during cleanup
      }
    }
  };

  // Only set up cleanup for actual exits, not nodemon restarts
  if (!isNodemon) {
    process.once('SIGINT', cleanup);  // Ctrl+C
    process.once('SIGTERM', cleanup); // Termination signal
    process.once('exit', cleanup);    // Normal exit
  }
}

/**
 * Check if migrations should run
 * Only runs on initial start, not on nodemon restarts
 */
export function shouldRunMigrations() {
  // Check environment variable first (user override)
  if (process.env.RUN_MIGRATIONS_ON_RESTART === 'true' || process.env.RUN_MIGRATIONS_ON_RESTART === '1') {
    return true;
  }

  // If not running under nodemon, always run (manual start)
  if (!isRunningUnderNodemon()) {
    // Clear any existing flag file on manual start
    const flagFile = join(__dirname, '../../.migrations-run');
    if (existsSync(flagFile)) {
      try {
        unlinkSync(flagFile);
      } catch (error) {
        // Ignore errors
      }
    }
    return true;
  }

  // Running under nodemon - use file-based approach to track first run
  const flagFile = join(__dirname, '../../.migrations-run');
  
  if (existsSync(flagFile)) {
    try {
      // Check file timestamp - if less than 2 seconds old, it's a nodemon restart
      const fileTime = parseInt(readFileSync(flagFile, 'utf8'), 10);
      const now = Date.now();
      const age = now - fileTime;
      
      // Nodemon restarts happen very quickly (within 1-2 seconds)
      // If file is less than 2 seconds old, it's definitely a nodemon restart
      if (age < 2000) {
        // Recent file = nodemon restart, don't run migrations
        return false;
      }
      
      // File is older than 2 seconds = manual restart, run migrations
      // Update the timestamp
      writeFileSync(flagFile, now.toString(), 'utf8');
      setupMigrationFlagCleanup();
      return true;
    } catch (error) {
      // If we can't read the file, run migrations
      return true;
    }
  }

  // First run under nodemon - create flag file and run migrations
  try {
    writeFileSync(flagFile, Date.now().toString(), 'utf8');
    // Set up cleanup on process exit (won't actually cleanup if nodemon)
    setupMigrationFlagCleanup();
    return true;
  } catch (error) {
    // If we can't write the file, run migrations anyway
    return true;
  }
}

/**
 * Setup cleanup handlers to remove migration flag file on process exit
 * Only clean up on actual exit, not on nodemon restarts
 */
function setupMigrationFlagCleanup() {
  const flagFile = join(__dirname, '../../.migrations-run');
  const isNodemon = isRunningUnderNodemon();
  
  const cleanup = () => {
    // Only cleanup if NOT running under nodemon
    // Nodemon restarts send SIGTERM, but we want to keep the flag for restarts
    if (!isNodemon && existsSync(flagFile)) {
      try {
        unlinkSync(flagFile);
      } catch (error) {
        // Ignore errors during cleanup
      }
    }
  };

  // Only set up cleanup for actual exits, not nodemon restarts
  if (!isNodemon) {
    process.once('SIGINT', cleanup);  // Ctrl+C
    process.once('SIGTERM', cleanup); // Termination signal
    process.once('exit', cleanup);    // Normal exit
  }
}

/**
 * Clear the startup display flag (useful for testing or manual restarts)
 */
export function clearStartupFlag() {
  const flagFile = join(__dirname, '../../.startup-displayed');
  if (existsSync(flagFile)) {
    try {
      unlinkSync(flagFile);
    } catch (error) {
      // Ignore errors
    }
  }
}

/**
 * Display Storybook-like startup information
 * Only displays on initial start, not on nodemon restarts
 */
export function displayStartupInfo(port, options = {}) {
  // Check if we should show the display
  if (!shouldShowStartupDisplay()) {
    return;
  }

  const { 
    dbName = null, 
    dbStatus = null, 
    startupTime = null,
    migrationsStatus = null 
  } = options;

  const appInfo = getAppInfo();
  const networkIP = getNetworkIP();
  const localUrl = `http://localhost:${port}`;
  const networkUrl = `http://${networkIP}:${port}`;

  // Calculate box width
  const lines = [
    `${appInfo.name} ${appInfo.version} started`,
    startupTime ? `${startupTime} for startup` : '',
    `Local: ${localUrl}`,
    `On your network: ${networkUrl}`,
    dbStatus ? `Database: ${dbStatus}` : '',
    migrationsStatus ? `Migrations: ${migrationsStatus}` : '',
  ].filter(Boolean);

  const maxLength = Math.max(...lines.map(line => {
    // Remove ANSI codes for length calculation
    return line.replace(/\x1b\[[0-9;]*m/g, '').length;
  }));

  const boxWidth = maxLength + 4;
  const border = '─'.repeat(boxWidth);
  const topBorder = `╭${border}╮`;
  const bottomBorder = `╰${border}╯`;
  const sideBorder = '│';

  // Build the display
  console.log('\n');
  console.log(`${colors.bright}${colors.green}${topBorder}${colors.reset}`);
  
  // App name and version
  const appLine = `${appInfo.name} ${appInfo.version} for Express started`;
  const appLinePadded = appLine.padEnd(maxLength);
  console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${colors.green}${appLinePadded}${colors.reset} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);

  // Startup time
  if (startupTime) {
    const timeLine = `${startupTime} for startup`;
    const timeLinePadded = timeLine.padEnd(maxLength);
    console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${colors.gray}${timeLinePadded}${colors.reset} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);
  }

  // Empty line
  console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${''.padEnd(maxLength)} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);

  // Local URL
  const localLine = `Local: ${colors.cyan}${localUrl}${colors.reset}`;
  const localLinePadded = localLine.replace(/\x1b\[[0-9;]*m/g, '').padEnd(maxLength);
  console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${localLine}${' '.repeat(maxLength - localLinePadded.length)} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);

  // Network URL
  const networkLine = `On your network: ${colors.cyan}${networkUrl}${colors.reset}`;
  const networkLinePadded = networkLine.replace(/\x1b\[[0-9;]*m/g, '').padEnd(maxLength);
  console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${networkLine}${' '.repeat(maxLength - networkLinePadded.length)} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);

  // Database status
  if (dbStatus) {
    const dbLine = `Database: ${dbStatus}`;
    const dbLinePadded = dbLine.padEnd(maxLength);
    console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${dbLinePadded} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);
  }

  // Migrations status
  if (migrationsStatus) {
    const migLine = `Migrations: ${migrationsStatus}`;
    const migLinePadded = migLine.padEnd(maxLength);
    console.log(`${colors.bright}${colors.green}${sideBorder}${colors.reset} ${migLinePadded} ${colors.bright}${colors.green}${sideBorder}${colors.reset}`);
  }

  console.log(`${colors.bright}${colors.green}${bottomBorder}${colors.reset}`);
  console.log('\n');
}