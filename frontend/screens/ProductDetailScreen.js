import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton'; // Ajusta la ruta según tu estructura de carpetas

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
      </View>
      <View style={styles.productCard}>
        <Text style={styles.storeName}>Líder</Text>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
      <View style={styles.reviewsSection}>
        <Text style={styles.reviewsTitle}>Reseñas</Text>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewerName}>Vicente:</Text>
          <Text style={styles.reviewText}>Producto a buen precio y muy buena atención.</Text>
          <Text style={styles.reviewRating}>★★★★★</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: '#f8f8f8',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  storeName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  reviewsSection: {
    padding: 20,
    alignItems: 'center',
  },
  reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  reviewerName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    marginBottom: 10,
  },
  reviewRating: {
    fontSize: 16,
    color: '#FFD700', // Color dorado para las estrellas
  },
});

export default ProductDetailScreen;
