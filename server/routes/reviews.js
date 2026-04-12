const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET ALL REVIEWS FOR A RECIPE
router.get('/:recipeId', async (req, res) => {
  try {
    const reviews = await Review.find({ recipeId: req.params.recipeId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST A REVIEW (must be logged in)
router.post('/:recipeId', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: 'Login required' });
  try {
    const { stars, comment } = req.body;
    const review = await Review.create({
      recipeId: req.params.recipeId,
      userId: req.session.userId,
      username: req.session.username,
      stars,
      comment
    });
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;