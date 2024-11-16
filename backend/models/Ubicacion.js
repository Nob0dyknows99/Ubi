const mongoose = require('mongoose');

const UbicacionSchema = new mongoose.Schema({
  tienda_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda', required: true },
  latitud: { type: Number, required: true },
  longitud: { type: Number, required: true },
  direccion: { type: String, required: true },
});

module.exports = mongoose.model('Ubicacion', UbicacionSchema);
