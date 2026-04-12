const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET ALL RECIPES (optionally filter by country)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.country) filter.country = req.query.country;
    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET ONE RECIPE
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST NEW RECIPE (must be logged in)
router.post('/', async (req, res) => {
  if (!req.session.userId) return res.status(401).json({ message: 'Login required' });
  try {
    const { name, country, type, time, img, ingredients, steps } = req.body;
    const recipe = await Recipe.create({
      name,
      country,
      type,
      time,
      img: img || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      ingredients,
      steps,
      submittedBy: req.session.userId
    });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;