const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Get all features (public)
router.get('/', async (req, res) => {
    try {
        const features = await prisma.feature.findMany({
            where: { published: true },
            orderBy: { order: 'asc' },
        });
        res.json(features);
    } catch (error) {
        console.error('Get features error:', error);
        res.status(500).json({ error: 'Failed to fetch features' });
    }
});

// Create feature (Admin only)
router.post('/', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, description, icon, order, published } = req.body;

        const feature = await prisma.feature.create({
            data: {
                title,
                description,
                icon: icon || 'Star',
                order: order || 0,
                published: published !== undefined ? published : true,
            },
        });

        res.status(201).json(feature);
    } catch (error) {
        console.error('Create feature error:', error);
        res.status(500).json({ error: 'Failed to create feature' });
    }
});

// Update feature (Admin only)
router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, description, icon, order, published } = req.body;

        const feature = await prisma.feature.update({
            where: { id: req.params.id },
            data: { title, description, icon, order, published },
        });

        res.json(feature);
    } catch (error) {
        console.error('Update feature error:', error);
        res.status(500).json({ error: 'Failed to update feature' });
    }
});

// Delete feature (Admin only)
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        await prisma.feature.delete({
            where: { id: req.params.id },
        });

        res.json({ message: 'Feature deleted successfully' });
    } catch (error) {
        console.error('Delete feature error:', error);
        res.status(500).json({ error: 'Failed to delete feature' });
    }
});

module.exports = router;
