// routes/items.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// POST route to add a new item
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET route to get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE route to delete an item
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
