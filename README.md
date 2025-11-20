# PM App Backend

A Node.js backend application for project management with JWT authentication and role-based access control.

## Features

- 🔐 JWT-based authentication with 5-minute cookie expiration
- 👥 User management with role-based permissions (SUPER-ADMIN, ADMIN, USER)
- 🏢 Multi-tenant company support
- 📊 Project CRUD operations with permission controls
- 🛡️ Protected routes with authentication middleware
- 🍪 Cookie and header-based authentication support

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pm-app-be
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.template .env
   ```
   
   Edit `.env` file with your database credentials and JWT secret.

4. **Set up database:**
   - Create a MySQL database
   - Run the migration script:
   ```bash
   node src/db-scripts/migrate.js
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_database_name
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=5m

# Server Configuration
APP_PORT=4003
NODE_ENV=development

# Cookie Configuration
COOKIE_SECRET=your-cookie-secret-key
```

## API Endpoints

### Authentication (Public)
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login

### Protected Routes
- `GET /api/v1/auth/me` - Get current user info
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create user
- `PUT /api/v1/users/:id` - Update user
- `DELETE /api/v1/users/:id` - Delete user

### Projects (Protected)
- `POST /api/v1/projects` - Create project
- `GET /api/v1/projects` - Get all projects (with pagination)
- `GET /api/v1/projects/:id` - Get project by ID
- `PUT /api/v1/projects/:id` - Update project
- `DELETE /api/v1/projects/:id` - Delete project

### Other Protected Routes
- `GET /api/v1/dashboard` - Dashboard data
- `GET /api/v1/settings/*` - Settings endpoints

## Authentication

The API supports both cookie-based and header-based authentication:

### Header Authentication
```
Authorization: Bearer YOUR_JWT_TOKEN
```

### Cookie Authentication
```
Cookie: auth_token=YOUR_JWT_TOKEN
```

JWT tokens expire after 5 minutes for security.

## Permission System

### User Roles
- **SUPER-ADMIN**: Full access to all operations, can delete projects
- **ADMIN**: Can manage users and projects within their company
- **USER**: Basic access to view and create projects

### Project Permissions
- **Create**: Any authenticated user
- **Read**: Any authenticated user within the same company
- **Update**: SUPER-ADMIN or project owner
- **Delete**: SUPER-ADMIN only

## Database Schema

### Key Tables
- `companies` - Company/tenant information
- `users` - User accounts with roles
- `users_passwords` - Hashed passwords
- `projects` - Project information
- `app_roles` - Role definitions
- `priorities` - Priority levels
- `statuses` - Project statuses

## Testing with Postman

See `postman_test_examples.md` for comprehensive testing examples including:

1. User registration and login
2. Project CRUD operations
3. Permission testing
4. Error scenario testing
5. Cookie-based authentication testing

## Project Structure

```
src/
├── config/          # Database and server configuration
├── controllers/     # Route controllers
├── db-scripts/     # Database migrations
├── models/         # Data models
├── routes/         # API route definitions
├── services/       # Business logic and utilities
│   ├── jwt/       # JWT authentication services
│   ├── email/     # Email services
│   └── passport/  # Passport authentication
└── utils/          # Utility functions
```

## Security Features

- HTTP-only cookies for JWT storage
- Password hashing with bcrypt
- Role-based access control
- Company isolation (multi-tenant)
- JWT token expiration (5 minutes)
- Input validation and sanitization

## Error Handling

The API uses standardized error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Development

### Running in Development Mode
```bash
npm start
```

### Database Migrations
```bash
node src/db-scripts/migrate.js
```

### Code Style
- ES6+ syntax
- Async/await for database operations
- Consistent error handling
- Input validation

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check database credentials in `.env`
   - Ensure MySQL service is running
   - Verify database exists

2. **JWT Token Expired**
   - Tokens expire after 5 minutes
   - Re-login to get a new token

3. **Permission Denied**
   - Check user role
   - Verify company association
   - Ensure proper authentication

4. **Migration Errors**
   - Check database permissions
   - Verify table structure
   - Run migrations in order

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Include input validation
4. Test with Postman examples
5. Update documentation as needed

## License

[Your License Here]


