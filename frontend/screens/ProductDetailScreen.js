import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchProductoById } from '../api';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const { data } = await fetchProductoById(productId);
        setProduct(data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    loadProductDetails();
  }, [productId]);

  if (!product) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.nombre_producto}</Text>
      <Text style={styles.info}>{product.descripcion}</Text>
      <Text style={styles.price}>Precio: ${product.precio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#4caf50',
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
