const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Get active trailer (public)
router.get('/', async (req, res) => {
    try {
        const trailer = await prisma.trailer.findFirst({
            where: { active: true },
            orderBy: { createdAt: 'desc' },
        });

        if (!trailer) {
            return res.status(404).json({ error: 'No active trailer found' });
        }

        res.json(trailer);
    } catch (error) {
        console.error('Get trailer error:', error);
        res.status(500).json({ error: 'Failed to fetch trailer' });
    }
});

// Create or update trailer (Admin only)
router.post('/', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, videoUrl } = req.body;

        // Deactivate all existing trailers
        await prisma.trailer.updateMany({
            data: { active: false },
        });

        // Create new active trailer
        const trailer = await prisma.trailer.create({
            data: {
                title,
                videoUrl,
                active: true,
            },
        });

        res.status(201).json(trailer);
    } catch (error) {
        console.error('Create trailer error:', error);
        res.status(500).json({ error: 'Failed to create trailer' });
    }
});

// Update trailer (Admin only)
router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, videoUrl, active } = req.body;

        // If setting this trailer as active, deactivate others
        if (active) {
            await prisma.trailer.updateMany({
                where: { id: { not: req.params.id } },
                data: { active: false },
            });
        }

        const trailer = await prisma.trailer.update({
            where: { id: req.params.id },
            data: { title, videoUrl, active },
        });

        res.json(trailer);
    } catch (error) {
        console.error('Update trailer error:', error);
        res.status(500).json({ error: 'Failed to update trailer' });
    }
});

module.exports = router;
