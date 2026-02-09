const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Get all gallery items (public)
router.get('/', async (req, res) => {
    try {
        const gallery = await prisma.gallery.findMany({
            where: { published: true },
            orderBy: { order: 'asc' },
        });
        res.json(gallery);
    } catch (error) {
        console.error('Get gallery error:', error);
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
});

// Create gallery item (Admin only)
router.post('/', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, image, order, published } = req.body;

        const gallery = await prisma.gallery.create({
            data: {
                title,
                image,
                order: order || 0,
                published: published !== undefined ? published : true,
            },
        });

        res.status(201).json(gallery);
    } catch (error) {
        console.error('Create gallery error:', error);
        res.status(500).json({ error: 'Failed to create gallery item' });
    }
});

// Update gallery item (Admin only)
router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, image, order, published } = req.body;

        const gallery = await prisma.gallery.update({
            where: { id: req.params.id },
            data: { title, image, order, published },
        });

        res.json(gallery);
    } catch (error) {
        console.error('Update gallery error:', error);
        res.status(500).json({ error: 'Failed to update gallery item' });
    }
});

// Delete gallery item (Admin only)
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        await prisma.gallery.delete({
            where: { id: req.params.id },
        });

        res.json({ message: 'Gallery item deleted successfully' });
    } catch (error) {
        console.error('Delete gallery error:', error);
        res.status(500).json({ error: 'Failed to delete gallery item' });
    }
});

module.exports = router;
