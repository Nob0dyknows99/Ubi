const mongoose = require('mongoose');

const PlanTiendaSchema = new mongoose.Schema({
  tienda_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda', required: true },
  plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan', required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_final: { type: Date, required: true },
});

module.exports = mongoose.model('PlanTienda', PlanTiendaSchema);
