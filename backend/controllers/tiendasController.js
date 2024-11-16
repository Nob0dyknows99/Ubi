const Tienda = require('../models/Tienda');

// Obtener todas las tiendas
exports.getTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.find();
    res.status(200).json(tiendas);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo tiendas', error });
  }
};

// Crear una tienda
exports.createTienda = async (req, res) => {
  try {
    const nuevaTienda = new Tienda(req.body);
    await nuevaTienda.save();
    res.status(201).json(nuevaTienda);
  } catch (error) {
    res.status(400).json({ message: 'Error creando la tienda', error });
  }
};
