const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  nombre_usuario: { type: String, required: true },
  apellido_usuario: { type: String },
  telefono: { type: String },
  ciudad: { type: String },
  direccion: { type: String },
  email: { type: String },
});

module.exports = mongoose.model('Perfil', PerfilSchema);
