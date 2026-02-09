import express from 'express';
import prisma from '../prisma/client.js';

const router = express.Router();

// Get server status
router.get('/', async (req, res) => {
    try {
        let status = await prisma.serverStatus.findFirst({
            orderBy: { lastUpdated: 'desc' },
        });

        // If no status exists, create a default one
        if (!status) {
            status = await prisma.serverStatus.create({
                data: {
                    online: true,
                    playerCount: 0,
                    maxPlayers: 128,
                },
            });
        }

        res.json(status);
    } catch (error) {
        console.error('Get server status error:', error);
        res.status(500).json({ error: 'Failed to fetch server status' });
    }
});

// Update server status (for server integration)
router.post('/update', async (req, res) => {
    try {
        const { online, playerCount, maxPlayers } = req.body;

        const status = await prisma.serverStatus.upsert({
            where: { id: 'default' },
            update: {
                online,
                playerCount,
                maxPlayers,
                lastUpdated: new Date(),
            },
            create: {
                id: 'default',
                online,
                playerCount,
                maxPlayers,
            },
        });

        res.json(status);
    } catch (error) {
        console.error('Update server status error:', error);
        res.status(500).json({ error: 'Failed to update server status' });
    }
});

export default router;
