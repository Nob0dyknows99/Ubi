const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre_usuario: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  clave: { type: String, required: true },
  rol_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true }, // Asegúrate de que ref sea 'Rol'
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
