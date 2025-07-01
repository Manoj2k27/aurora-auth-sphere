
# Authentication Backend

A robust Node.js and Express backend for user authentication with MongoDB and JWT.

## Features

- **User Registration & Login**
- **JWT Authentication**
- **Password Hashing with bcrypt**
- **Input Validation**
- **Rate Limiting**
- **Security Headers with Helmet**
- **CORS Configuration**
- **MongoDB Integration with Mongoose**
- **Environment Variables Support**

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Update the `.env` file with your values:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/auth-app?retryWrites=true&w=majority

# JWT Secret Key (use a strong, random string)
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:8080
```

### 3. MongoDB Setup

1. Create a MongoDB Atlas account at https://cloud.mongodb.com
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string and update `MONGODB_URI` in `.env`

### 4. Start the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile (protected)
- `POST /api/auth/logout` - Logout user (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Health Check

- `GET /api/health` - Server health check

## API Usage Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get User Profile
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## Security Features

- **Password Hashing**: Uses bcrypt with salt rounds of 12
- **JWT Tokens**: Expire after 7 days
- **Rate Limiting**: 10 auth requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation using express-validator
- **CORS**: Configured for frontend origin
- **Helmet**: Security headers middleware
- **Environment Variables**: Sensitive data stored in .env

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email address"
    }
  ]
}
```

## Database Schema

### User Model
```javascript
{
  name: String (required, 2-50 chars),
  email: String (required, unique, valid email),
  password: String (required, min 6 chars, hashed),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Production Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a production MongoDB database
3. Set a strong JWT secret
4. Configure your domain in FRONTEND_URL
5. Consider using a reverse proxy (nginx)
6. Set up SSL/TLS certificates
7. Configure proper logging
8. Set up monitoring and alerts

## Development Notes

- The server includes comprehensive logging
- Validation errors are returned with field-specific messages
- JWT tokens include user ID for authorization
- Passwords are automatically hashed before saving
- The User model excludes password from JSON responses
- Rate limiting prevents brute force attacks
- CORS is configured for the frontend URL

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your connection string
   - Ensure IP address is whitelisted in MongoDB Atlas
   - Verify username/password

2. **JWT Token Issues**
   - Ensure JWT_SECRET is set in .env
   - Check token expiration
   - Verify Authorization header format: "Bearer <token>"

3. **CORS Errors**
   - Update FRONTEND_URL in .env
   - Ensure frontend is running on the correct port

4. **Validation Errors**
   - Check required fields in request body
   - Ensure email format is valid
   - Password must be at least 6 characters
