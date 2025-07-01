
# Aurora Auth Sphere - Full Stack Authentication System

A beautiful, modern authentication system with a futuristic glassmorphism design. Built with React frontend and Node.js backend, featuring JWT authentication, MongoDB integration, and stunning visual effects.

## ✨ Features

### Frontend
- 🎨 **Glassmorphism Design** - Beautiful frosted glass effects
- 🌙 **Dark/Light Mode Toggle** - Seamless theme switching
- 🎭 **Smooth Animations** - Floating elements and fade transitions
- 📱 **Fully Responsive** - Works on all device sizes
- ✅ **Form Validation** - Real-time validation with error messages
- 👁️ **Password Toggle** - Show/hide password functionality
- 🔔 **Toast Notifications** - Success/error feedback
- ⚡ **Loading States** - Spinners during form submission
- 🎯 **Modern UI Components** - Built with shadcn/ui

### Backend
- 🔐 **JWT Authentication** - Secure token-based auth
- 🛡️ **Password Hashing** - bcrypt with salt rounds
- 🗄️ **MongoDB Integration** - Mongoose ODM
- ⚡ **Rate Limiting** - Prevent brute force attacks
- 🛡️ **Security Headers** - Helmet.js protection
- ✅ **Input Validation** - Comprehensive validation
- 🌐 **CORS Configuration** - Cross-origin support
- 📊 **Error Handling** - Consistent error responses

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- npm or yarn

### Frontend Setup

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

The frontend will be available at `http://localhost:8080`

### Backend Setup

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**
```bash
cp .env.example .env
```

4. **Update .env file**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/auth-app
JWT_SECRET=your-super-secret-jwt-key-here
PORT=5000
FRONTEND_URL=http://localhost:8080
```

5. **Start the server**
```bash
npm run dev
```

The backend will be available at `http://localhost:5000`

## 🎨 Design Features

### Glassmorphism UI
- Frosted glass cards with backdrop blur
- Semi-transparent backgrounds
- Subtle borders and shadows
- Gradient overlays

### Animations
- Floating background elements
- Smooth fade-in transitions
- Hover effects and transforms
- Animated gradients

### Theme System
- Light and dark mode support
- Smooth theme transitions
- Consistent color palette
- Adaptive glassmorphism

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get user profile
- `POST /api/auth/logout` - User logout
- `PUT /api/auth/profile` - Update profile

### Health Check
- `GET /api/health` - Server status

## 🛡️ Security Features

- **Password Requirements**: Minimum 6 characters with letters and numbers
- **Rate Limiting**: 10 requests per 15 minutes for auth endpoints
- **JWT Expiration**: 7-day token lifetime
- **Password Hashing**: bcrypt with 12 salt rounds
- **Input Sanitization**: Comprehensive validation
- **CORS Protection**: Configured origins
- **Security Headers**: Helmet.js middleware

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1400px+)

## 🎯 User Experience

### Login Flow
1. User enters credentials
2. Real-time validation feedback
3. Loading spinner during submission
4. Success toast and redirect to dashboard
5. Error handling with clear messages

### Registration Flow
1. User fills registration form
2. Password confirmation validation
3. Email format validation
4. Account creation with automatic login
5. Welcome message and dashboard access

### Dashboard
1. Personalized welcome message
2. User profile information
3. Theme toggle functionality
4. Secure logout option
5. Feature cards for future functionality

## 🔮 Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality components
- **React Router** - Client-side routing
- **React Query** - Server state management
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT tokens
- **express-validator** - Input validation
- **helmet** - Security headers
- **cors** - Cross-origin requests
- **express-rate-limit** - Rate limiting

## 🌟 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Social authentication (Google, GitHub)
- [ ] User profile management
- [ ] Admin dashboard
- [ ] Role-based access control
- [ ] Two-factor authentication
- [ ] Activity logging
- [ ] Password strength meter
- [ ] Remember me functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the clean, modern icons
- **MongoDB** for the robust database solution

---

Built with ❤️ using modern web technologies. Ready for production deployment!
