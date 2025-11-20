# Postman Test Examples

## Base URL
```
http://localhost:4003/api/v1
```

## 1. Register User

**POST** `/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "companyId": "COMP001",
    "companyName": "Example Corp"
}
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": "COMP001-0001",
            "name": "John Doe",
            "email": "john.doe@example.com",
            "role": "SUPER-ADMIN",
            "companyId": "COMP001"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "message": "User registered successfully"
}
```

## 2. Login User

**POST** `/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": "COMP001-0001",
            "email": "john.doe@example.com",
            "name": "John Doe",
            "role": "SUPER-ADMIN",
            "companyId": "COMP001"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    },
    "message": "Login successful"
}
```

## 3. Get Current User (Protected Route)

**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "user": {
            "id": "COMP001-0001",
            "email": "john.doe@example.com",
            "name": "John Doe",
            "role": "SUPER-ADMIN",
            "companyId": "COMP001"
        }
    },
    "message": "Current user info"
}
```

## 4. Projects CRUD Operations

### 4.1 Create Project

**POST** `/projects`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
    "projectName": "Website Redesign",
    "description": "Complete redesign of company website",
    "projectOwner": "COMP001-0001",
    "startDate": "2024-01-15",
    "endDate": "2024-03-15",
    "priority": "HIGH",
    "status": "ACTIVE"
}
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "id": "COMP001-PROJ-0001",
        "project_name": "Website Redesign",
        "description": "Complete redesign of company website",
        "project_owner": "COMP001-0001",
        "created_by": "COMP001-0001",
        "company_id": "COMP001",
        "status": "ACTIVE",
        "priority": "HIGH",
        "start_date": "2024-01-15",
        "end_date": "2024-03-15"
    },
    "message": "Project created successfully"
}
```

### 4.2 Get All Projects

**GET** `/projects?page=1&limit=10&status=ACTIVE&priority=HIGH`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "projects": [
            {
                "id": "COMP001-PROJ-0001",
                "project_name": "Website Redesign",
                "description": "Complete redesign of company website",
                "project_owner": "COMP001-0001",
                "created_by": "COMP001-0001",
                "company_id": "COMP001",
                "status": "ACTIVE",
                "priority": "HIGH",
                "start_date": "2024-01-15",
                "end_date": "2024-03-15",
                "owner_name": "John Doe",
                "creator_name": "John Doe"
            }
        ],
        "pagination": {
            "page": 1,
            "limit": 10,
            "total": 1,
            "pages": 1
        }
    },
    "message": "Projects retrieved successfully"
}
```

### 4.3 Get Project by ID

**GET** `/projects/COMP001-PROJ-0001`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "id": "COMP001-PROJ-0001",
        "project_name": "Website Redesign",
        "description": "Complete redesign of company website",
        "project_owner": "COMP001-0001",
        "created_by": "COMP001-0001",
        "company_id": "COMP001",
        "status": "ACTIVE",
        "priority": "HIGH",
        "start_date": "2024-01-15",
        "end_date": "2024-03-15",
        "owner_name": "John Doe",
        "creator_name": "John Doe"
    },
    "message": "Project retrieved successfully"
}
```

### 4.4 Update Project

**PUT** `/projects/COMP001-PROJ-0001`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
    "projectName": "Website Redesign v2",
    "priority": "URGENT",
    "status": "ON_HOLD"
}
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "id": "COMP001-PROJ-0001",
        "project_name": "Website Redesign v2",
        "description": "Complete redesign of company website",
        "project_owner": "COMP001-0001",
        "created_by": "COMP001-0001",
        "company_id": "COMP001",
        "status": "ON_HOLD",
        "priority": "URGENT",
        "start_date": "2024-01-15",
        "end_date": "2024-03-15"
    },
    "message": "Project updated successfully"
}
```

### 4.5 Delete Project

**DELETE** `/projects/COMP001-PROJ-0001`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Expected Response:**
```json
{
    "success": true,
    "data": {
        "deletedProjectId": "COMP001-PROJ-0001"
    },
    "message": "Project deleted successfully"
}
```

## 5. Permission Tests

### 5.1 Test Update Without Permission (Non-owner, Non-SUPER-ADMIN)

**PUT** `/projects/COMP001-PROJ-0001`

**Headers:**
```
Authorization: Bearer USER_TOKEN_WITHOUT_PERMISSION
Content-Type: application/json
```

**Expected Response:**
```json
{
    "success": false,
    "message": "Insufficient permissions to update this project"
}
```

### 5.2 Test Delete Without SUPER-ADMIN Role

**DELETE** `/projects/COMP001-PROJ-0001`

**Headers:**
```
Authorization: Bearer USER_TOKEN_WITHOUT_SUPER_ADMIN
```

**Expected Response:**
```json
{
    "success": false,
    "message": "Only SUPER-ADMIN can delete projects"
}
```

## 6. Test Protected Route (Users List)

**GET** `/users`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

## 7. Test Without Token (Should Fail)

**GET** `/users`

**Headers:**
```
Content-Type: application/json
```

**Expected Response:**
```json
{
    "success": false,
    "message": "Access token required"
}
```

## Environment Variables Setup

Add these to your `.env` file:
```
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=5m
APP_PORT=4003
```

## Testing Steps

1. **Start the server:**
   ```bash
   npm start
   ```

2. **Register a new user** using the register endpoint

3. **Login with the registered user** to get a token

4. **Copy the token** from the login response

5. **Test project creation** with the token

6. **Test project retrieval** (list and by ID)

7. **Test project update** (should work for SUPER-ADMIN)

8. **Test project deletion** (should work for SUPER-ADMIN only)

9. **Test protected routes** by adding the token to the Authorization header

10. **Test without token** to verify authentication is working

## Error Scenarios to Test

1. **Register with existing company ID** - should fail
2. **Register with existing email** - should fail
3. **Login with wrong password** - should fail
4. **Login with non-existent email** - should fail
5. **Access protected route without token** - should fail
6. **Access protected route with invalid token** - should fail
7. **Update project without permission** - should fail
8. **Delete project without SUPER-ADMIN role** - should fail
9. **Create project without project name** - should fail
10. **Update project with empty project name** - should fail

## Cookie Testing (Optional)

If you want to test cookie-based authentication:

1. **Set cookies in Postman:**
   - Go to Cookies tab in your request
   - Add cookie: `auth_token` with your JWT token value

2. **Test cookie authentication:**
   - Remove Authorization header
   - Send request with cookie
   - Should work the same as header-based auth 