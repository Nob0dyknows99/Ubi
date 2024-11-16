const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Modelo de Usuario

// Ruta para inicio de sesión
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario con email y contraseña
    const usuario = await Usuario.findOne({ email, password });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    // Enviar respuesta exitosa con los datos del usuario
    res.json({
      mensaje: 'Inicio de sesión exitoso.',
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre_usuario,
        email: usuario.email,
      },
    });
  } catch (error) {
    console.error('Error en la ruta de login:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

module.exports = router;
