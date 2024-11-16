const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');
const Categoria = require('../models/Categoria'); // Importa Categoria
const Tienda = require('../models/Tienda'); // Importa Tienda

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find().populate('categoria_id').populate('tienda_id'); // Si usas referencias
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error); // Detalle completo del error
    res.status(500).json({ error: 'Error al obtener productos', detalles: error.message });
  }
});

// Crear un producto
router.post('/', async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error); // Detalle completo del error
    res.status(500).json({ error: 'Error al crear producto', detalles: error.message });
  }
});

module.exports = router;
