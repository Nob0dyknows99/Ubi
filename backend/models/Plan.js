const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  periodo: { type: String, required: true },
  costo: { type: Number, required: true },
});

module.exports = mongoose.model('Plan', PlanSchema);
