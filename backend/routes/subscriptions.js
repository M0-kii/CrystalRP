import express from 'express';
import prisma from '../prisma/client.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get user subscriptions
router.get('/', authenticateToken, async (req, res) => {
    try {
        const subscriptions = await prisma.subscription.findMany({
            where: { userId: req.user.userId },
            orderBy: { createdAt: 'desc' },
        });
        res.json(subscriptions);
    } catch (error) {
        console.error('Get subscriptions error:', error);
        res.status(500).json({ error: 'Failed to fetch subscriptions' });
    }
});

// Create subscription
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { type, duration } = req.body; // duration in days

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + (duration || 30));

        const subscription = await prisma.subscription.create({
            data: {
                userId: req.user.userId,
                type,
                expiresAt,
            },
        });

        res.status(201).json(subscription);
    } catch (error) {
        console.error('Create subscription error:', error);
        res.status(500).json({ error: 'Failed to create subscription' });
    }
});

// Cancel subscription
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;

        const subscription = await prisma.subscription.findUnique({
            where: { id },
        });

        if (!subscription) {
            return res.status(404).json({ error: 'Subscription not found' });
        }

        if (subscription.userId !== req.user.userId && req.user.role !== 'ADMIN') {
            return res.status(403).json({ error: 'Forbidden' });
        }

        await prisma.subscription.update({
            where: { id },
            data: { active: false },
        });

        res.json({ message: 'Subscription cancelled successfully' });
    } catch (error) {
        console.error('Cancel subscription error:', error);
        res.status(500).json({ error: 'Failed to cancel subscription' });
    }
});

export default router;
