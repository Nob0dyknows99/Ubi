const mongoose = require('mongoose');

const RolSchema = new mongoose.Schema({
  nombre_rol: { type: String, required: true },
  descripcion: { type: String },
});

module.exports = mongoose.model('Rol', RolSchema);
