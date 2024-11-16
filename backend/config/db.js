const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error conectándose a MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;