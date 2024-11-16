import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import MapScreen from '../components/MapScreen'; // Asegúrate de que MapScreen está configurado correctamente
import { Ionicons } from '@expo/vector-icons'; // Para los íconos
import { fetchProductos } from '../api'; // Asegúrate de que fetchProductos está correctamente definido

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la barra de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para los resultados de búsqueda

  const handleSearch = async (text) => {
    setSearchQuery(text); // Actualizar el estado de la búsqueda
    try {
      const { data } = await fetchProductos();
      const filteredResults = data.filter((product) =>
        product.nombre_producto.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de la barra de búsqueda */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="¿Qué necesitas?"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="gray"
        />
      </View>

      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapScreen />
      </View>

      {/* Resultados de búsqueda */}
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item.nombre_producto}</Text>
          </View>
        )}
        style={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    color: 'black',
  },
  mapContainer: {
    flex: 0.65,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultsList: {
    flex: 0.35,
    width: '100%',
  },
  resultItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 18,
  },
});

export default HomeScreen;
