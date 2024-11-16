const mongoose = require('mongoose');

const ReseñaSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  calificacion: { type: String, required: true },
  comentario: { type: String },
  fecha_opinion: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reseña', ReseñaSchema);
