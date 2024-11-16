require('dotenv').config();
const mongoose = require('mongoose');
const Categoria = require('./models/Categoria');
const Tienda = require('./models/Tienda');
const Producto = require('./models/Producto');
const Usuario = require('./models/Usuario');
const Rol = require('./models/Rol'); // Modelo para roles

const seedDatabase = async () => {
    try {
        // Conexión a la base de datos
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado a MongoDB');

        // Limpiar datos existentes
        await Categoria.deleteMany({});
        await Tienda.deleteMany({});
        await Producto.deleteMany({});
        await Usuario.deleteMany({});
        await Rol.deleteMany({});

        // Crear un rol de prueba
        const rol = await Rol.create({
            nombre_rol: 'Administrador',
            descripcion: 'Rol con todos los permisos',
        });
        console.log('Rol creado:', rol);

        // Crear un usuario de prueba
        const usuario = await Usuario.create({
            nombre_usuario: 'usuario_prueba',
            email: 'usuario@example.com',
            clave: 'password123',
            rol_id: rol._id, // Asignar el ID del rol recién creado
        });
        console.log('Usuario creado:', usuario);

        // Crear categorías
        const categorias = await Categoria.insertMany([
            { nombre_categoria: 'Electrónica' },
            { nombre_categoria: 'Ropa' },
            { nombre_categoria: 'Hogar' },
        ]);
        console.log('Categorías creadas:', categorias);

        // Crear tiendas
        const tiendas = await Tienda.insertMany([
            { nombre: 'Tienda A', ubicacion: 'Santiago', user_id: usuario._id, propietario: 'Juan Pérez' },
            { nombre: 'Tienda B', ubicacion: 'Valparaíso', user_id: usuario._id, propietario: 'María López' },
        ]);
        console.log('Tiendas creadas:', tiendas);

        // Crear productos
        const productos = await Producto.insertMany([
            {
                tienda_id: tiendas[0]._id,
                nombre_producto: 'Televisor 4K',
                descripcion: 'Televisor UHD de 55 pulgadas',
                precio: 499.99,
                categoria_id: categorias[0]._id,
                estado: 'activo',
            },
            {
                tienda_id: tiendas[1]._id,
                nombre_producto: 'Polera Deportiva',
                descripcion: 'Polera de alta calidad para deportes',
                precio: 19.99,
                categoria_id: categorias[1]._id,
                estado: 'activo',
            },
        ]);
        console.log('Productos creados:', productos);

        console.log('Base de datos inicializada correctamente');
        process.exit();
    } catch (err) {
        console.error('Error inicializando la base de datos:', err);
        process.exit(1);
    }
};

seedDatabase();
