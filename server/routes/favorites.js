const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Recipe = require('../models/Recipe');

// GET USER'S FAVORITES
router.get('/', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: 'Login required' });
  try {
    const user = await User.findById(req.session.userId).populate('favorites');
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ADD TO FAVORITES
router.post('/:recipeId', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: 'Login required' });
  try {
    const user = await User.findById(req.session.userId);
    if (!user.favorites.includes(req.params.recipeId)) {
      user.favorites.push(req.params.recipeId);
      await user.save();
    }
    res.json({ message: 'Added to favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// REMOVE FROM FAVORITES
router.delete('/:recipeId', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: 'Login required' });
  try {
    const user = await User.findById(req.session.userId);
    user.favorites = user.favorites.filter(
      id => id.toString() !== req.params.recipeId
    );
    await user.save();
    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;