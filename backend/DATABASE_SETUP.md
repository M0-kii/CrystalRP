# PostgreSQL Database Setup Guide

## Quick Setup Steps

### 1. Create Database
Open PostgreSQL command line (psql) or pgAdmin and run:

```sql
CREATE DATABASE crystalrp;
```

### 2. Update Backend .env
Make sure your `backend/.env` has the correct credentials:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/crystalrp?schema=public"
```

Replace `YOUR_PASSWORD` with your actual PostgreSQL password.

### 3. Push Schema to Database
```bash
cd backend
npx prisma db push
```

### 4. (Optional) View Database
```bash
npx prisma studio
```

## Common Issues

### "Database does not exist"
- Create the database first using the SQL command above
- Or use pgAdmin to create a database named `crystalrp`

### "Authentication failed"
- Check your PostgreSQL password
- Update the `DATABASE_URL` in `backend/.env`
- Default PostgreSQL user is usually `postgres`

### "Connection refused"
- Make sure PostgreSQL service is running
- Check if PostgreSQL is listening on port 5432
- Windows: Check Services app for PostgreSQL service

## Testing the Connection

After setup, test the backend:

```bash
cd backend
npm run dev
```

You should see:
```
✅ Database connected successfully
🚀 CrystalRP Backend running on port 5000
```

## Next Steps

Once the database is set up:
1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `npm run dev` (in root directory)
3. Test the API at `http://localhost:5000/health`
