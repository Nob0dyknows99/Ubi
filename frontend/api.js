import axios from 'axios';

// Configuración de Axios con la URL base
const API = axios.create({
  baseURL: 'http://192.168.0.1065001/api', // Cambiar "localhost" a la IP local si se prueba en un dispositivo físico
});

// Funciones relacionadas con productos
export const fetchProductos = () => API.get('/productos');
export const fetchProductoById = (id) => API.get(`/productos/${id}`);

// Funciones relacionadas con tiendas
export const fetchTiendas = () => API.get('/tiendas');
export const fetchTiendaById = (id) => API.get(`/tiendas/${id}`);
export const createTienda = (tienda) => API.post('/tiendas', tienda);

// Funciones relacionadas con usuarios
export const createUsuario = (usuario) => API.post('/usuarios', usuario);
export const loginUsuario = (usuario) => API.post('/login', usuario);

// Funciones relacionadas con reseñas (si las implementas en el futuro)
export const fetchReseñasByProductoId = (productoId) =>
  API.get(`/reseñas?productoId=${productoId}`);
export const createReseña = (reseña) => API.post('/reseñas', reseña);

// Funciones relacionadas con perfiles (si las implementas en el futuro)
export const fetchPerfilByUsuarioId = (userId) => API.get(`/perfil/${userId}`);
export const updatePerfil = (userId, perfil) => API.put(`/perfil/${userId}`, perfil);
