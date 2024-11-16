const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.json({ message: '¡Bienvenido a la API de Tiendas!' });
});

module.exports = router;
