import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchTiendaById } from '../api';

const StoreScreen = ({ route }) => {
  const { storeId } = route.params;
  const [store, setStore] = useState(null);

  useEffect(() => {
    const loadStoreDetails = async () => {
      try {
        const { data } = await fetchTiendaById(storeId);
        setStore(data);
      } catch (error) {
        console.error('Error al obtener detalles de la tienda:', error);
      }
    };

    loadStoreDetails();
  }, [storeId]);

  if (!store) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{store.nombre}</Text>
      <Text style={styles.info}>Propietario: {store.propietario}</Text>
      <Text style={styles.info}>Dirección: {store.direccion}</Text>
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
});

export default StoreScreen;
