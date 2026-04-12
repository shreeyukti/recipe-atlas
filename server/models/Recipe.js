const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  type: { type: String, required: true },
  time: { type: Number, required: true },
  img: { type: String },
  ingredients: [String],
  steps: [String],
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);