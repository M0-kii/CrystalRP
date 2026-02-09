const express = require('express');
const router = express.Router();
const prisma = require('../prisma/client');
const { authenticateToken, isAdmin } = require('../middleware/auth');

// Get all news (public)
router.get('/', async (req, res) => {
    try {
        const news = await prisma.news.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json(news);
    } catch (error) {
        console.error('Get news error:', error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

// Get single news item
router.get('/:id', async (req, res) => {
    try {
        const news = await prisma.news.findUnique({
            where: { id: req.params.id },
        });

        if (!news) {
            return res.status(404).json({ error: 'News not found' });
        }

        res.json(news);
    } catch (error) {
        console.error('Get news item error:', error);
        res.status(500).json({ error: 'Failed to fetch news item' });
    }
});

// Create news (Admin only)
router.post('/', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, content, excerpt, tag, image, published } = req.body;

        const news = await prisma.news.create({
            data: {
                title,
                content,
                excerpt,
                tag: tag || 'اطلاعیه',
                image,
                published: published !== undefined ? published : true,
            },
        });

        res.status(201).json(news);
    } catch (error) {
        console.error('Create news error:', error);
        res.status(500).json({ error: 'Failed to create news' });
    }
});

// Update news (Admin only)
router.put('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        const { title, content, excerpt, tag, image, published } = req.body;

        const news = await prisma.news.update({
            where: { id: req.params.id },
            data: {
                title,
                content,
                excerpt,
                tag,
                image,
                published,
            },
        });

        res.json(news);
    } catch (error) {
        console.error('Update news error:', error);
        res.status(500).json({ error: 'Failed to update news' });
    }
});

// Delete news (Admin only)
router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
    try {
        await prisma.news.delete({
            where: { id: req.params.id },
        });

        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        console.error('Delete news error:', error);
        res.status(500).json({ error: 'Failed to delete news' });
    }
});

module.exports = router;
