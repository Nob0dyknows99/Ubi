const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre_producto: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true }, // Asegúrate de que 'Categoria' coincide con el nombre registrado en el modelo
  tienda_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tienda', required: true }, // Similar para 'Tienda'
  estado: { type: String, default: 'activo' },
});

module.exports = mongoose.model('Producto', productoSchema);
