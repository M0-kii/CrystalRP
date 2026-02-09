import jwt from 'jsonwebtoken';

// Verify JWT token
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

// Check if user is admin
export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
};

// Check if user is moderator or admin
export const isModerator = (req, res, next) => {
    if (req.user.role !== 'ADMIN' && req.user.role !== 'MODERATOR') {
        return res.status(403).json({ error: 'Moderator access required' });
    }
    next();
};
