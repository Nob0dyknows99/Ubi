const express = require('express');
const router = express.Router();
const Tienda = require('../models/Tienda');

// Obtener todas las tiendas
router.get('/', async (req, res) => {
  try {
    const tiendas = await Tienda.find().populate('user_id');
    res.json(tiendas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tiendas' });
  }
});

// Crear una tienda
router.post('/', async (req, res) => {
  try {
    const nuevaTienda = new Tienda(req.body);
    await nuevaTienda.save();
    res.status(201).json(nuevaTienda);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear tienda' });
  }
});

module.exports = router;
