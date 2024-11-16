const mongoose = require('mongoose');

const TiendaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  propietario: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
});

module.exports = mongoose.model('Tienda', TiendaSchema);
