import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MapScreen from '../components/MapScreen';
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons para el ícono

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la barra de búsqueda

  const handleSearch = (text) => {
    setSearchQuery(text); // Actualizar el estado de la búsqueda
    // Aquí podrías manejar la lógica de búsqueda
    console.log('Buscando:', text);
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de la barra de búsqueda con el ícono */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="¿Qué necesitas?"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="gray" // Color del placeholder
        />
      </View>
      
      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapScreen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10, // Añadimos un pequeño relleno superior para separar del borde superior
  },
  searchBarContainer: {
    flexDirection: 'row', // Colocar el ícono y el TextInput en una fila
    alignItems: 'center', // Alinear los elementos verticalmente
    width: '90%', // Ancho del contenedor de la barra de búsqueda
    height: 40, // Altura de la barra de búsqueda
    borderColor: 'gray', // Color del borde
    borderWidth: 1, // Grosor del borde
    borderRadius: 20, // Bordes redondeados
    backgroundColor: '#fff', // Fondo blanco
    paddingHorizontal: 10, // Espacio dentro del contenedor
    marginBottom: 10, // Separación entre la barra de búsqueda y el mapa
  },
  searchIcon: {
    marginRight: 10, // Espacio entre el ícono y el campo de texto
  },
  searchBar: {
    flex: 1, // El TextInput ocupa el espacio restante
    height: '100%',
    textAlign: 'center', // Alinear el texto al centro
    right: 15,
    color: 'black',
  },
  mapContainer: {
    flex: 0.65, // El mapa ocupa el espacio restante
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
