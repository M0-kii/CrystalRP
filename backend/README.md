# CrystalRP Backend API

A secure REST API backend for the CrystalRP FiveM server website, built with Express.js, Prisma, and PostgreSQL.

## Features

- ✅ **Authentication**: JWT-based auth with bcrypt password hashing
- ✅ **User Management**: CRUD operations with role-based access control
- ✅ **Subscriptions**: Manage user subscriptions (Silver, Gold, Diamond)
- ✅ **Server Status**: Live server status and player count API
- ✅ **Security**: Helmet, CORS, Rate Limiting
- ✅ **Database**: Prisma ORM with PostgreSQL

## Prerequisites

- Node.js 18+ installed
- PostgreSQL installed and running
- Database created (default: `crystalrp`)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/crystalrp?schema=public"
PORT=5000
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
NODE_ENV="development"
FRONTEND_URL="http://localhost:3000"
```

3. Generate Prisma Client:
```bash
npm run prisma:generate
```

4. Push database schema:
```bash
npm run prisma:push
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/discord` - Discord OAuth (placeholder)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)

### Subscriptions
- `GET /api/subscriptions` - Get user subscriptions
- `POST /api/subscriptions` - Create subscription
- `DELETE /api/subscriptions/:id` - Cancel subscription

### Server Status
- `GET /api/server-status` - Get server status
- `POST /api/server-status/update` - Update server status

### Health Check
- `GET /health` - Server health check

## Database Schema

- **User**: User accounts with roles (USER, ADMIN, MODERATOR)
- **Subscription**: User subscriptions with expiration
- **Rule**: Server rules
- **News**: Server news/announcements
- **ServerStatus**: Live server status

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **JWT**: Secure token-based authentication
- **bcrypt**: Password hashing with salt rounds

## Project Structure

```
backend/
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── prisma/
│   ├── client.js        # Prisma client instance
│   └── schema.prisma    # Database schema
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── users.js         # User management routes
│   ├── subscriptions.js # Subscription routes
│   └── serverStatus.js  # Server status routes
├── .env                 # Environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies
└── server.js           # Main server file
```

## Development

### Prisma Studio
View and edit database data:
```bash
npm run prisma:studio
```

### Database Migrations
If you modify the schema:
```bash
npm run prisma:push
```

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use a strong `JWT_SECRET`
3. Update `DATABASE_URL` with production database
4. Update `FRONTEND_URL` with production domain
5. Use a process manager like PM2:
```bash
pm2 start server.js --name crystalrp-backend
```

## License

MIT
