// screens/StoreScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreScreen = ({ route }) => {
  const { storeName } = route.params; // Recibir el nombre de la tienda como parámetro

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{storeName}</Text>
      <Text>Información de la tienda...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default StoreScreen;
