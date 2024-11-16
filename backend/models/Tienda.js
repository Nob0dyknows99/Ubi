const mongoose = require('mongoose');

const TiendaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  propietario: { type: String, required: true },
  ubicacion: {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
    direccion: { type: String, required: true },
  },
  plan: {
    plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
    fecha_inicio: { type: Date },
    fecha_final: { type: Date },
  },
});

module.exports = mongoose.model('Tienda', TiendaSchema);
