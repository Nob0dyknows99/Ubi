const express = require('express'); // Importa Express
const router = express.Router(); // Crea una instancia de Router
const Usuario = require('../models/Usuario'); // Importa el modelo de Usuario

// Ruta para registrar un usuario
router.post('/', async (req, res) => {
  try {
    console.log('Datos recibidos en la solicitud:', req.body); // Depuración de datos recibidos

    // Validar que los campos obligatorios existan antes de intentar guardar
    const { nombre_usuario, email, clave, rol_id } = req.body;

    if (!nombre_usuario || !email || !clave || !rol_id) {
      console.error('Faltan campos obligatorios:', { nombre_usuario, email, clave, rol_id });
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    // Crear y guardar el usuario
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();

    console.log('Usuario creado exitosamente:', nuevoUsuario); // Depuración del usuario creado
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al registrar usuario:', error); // Depuración completa del error
    res.status(500).json({
      error: 'Error al registrar usuario',
      detalles: error.message,
    });
  }
});

// Ruta para listar todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find(); // Obtiene todos los usuarios
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({
      error: 'Error al obtener usuarios',
      detalles: error.message,
    });
  }
});

// Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la URL

    // Validar que el ID exista
    if (!id) {
      return res.status(400).json({ error: 'ID de usuario es requerido' });
    }

    // Actualizar el usuario con los datos recibidos en el body
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });

    // Validar que el usuario exista
    if (!usuarioActualizado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(usuarioActualizado); // Enviar el usuario actualizado como respuesta
  } catch (error) {
    console.error('Error al actualizar usuario:', error); // Depuración
    res.status(500).json({
      error: 'Error al actualizar usuario',
      detalles: error.message,
    });
  }
});

module.exports = router; // Exporta el router
