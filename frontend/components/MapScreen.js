import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, Dimensions, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location'; // Importar módulo de ubicación de Expo
import MapView, { Marker } from 'react-native-maps'; // Importar componentes de mapa
import { Ionicons } from '@expo/vector-icons'; // Importar íconos de Expo

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null); // Referencia del mapa
  const locationSubscription = useRef(null); // Suscripción para la ubicación en tiempo real

  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: 'Lugar A',
      description: 'Descripción del Lugar A',
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      id: 2,
      title: 'Lugar B',
      description: 'Descripción del Lugar B',
      latitude: 37.78925,
      longitude: -122.4334,
    },
    {
      id: 3,
      title: 'Lugar C',
      description: 'Descripción del Lugar C',
      latitude: 37.79025,
      longitude: -122.4344,
    },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'No se puede acceder a la ubicación');
        setLoading(false);
        return;
      }

      // Suscribirse a cambios de ubicación en tiempo real
      locationSubscription.current = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 },
        (newLocation) => {
          setLocation(newLocation); // Actualizar la ubicación en tiempo real
          mapRef.current?.animateToRegion({
            latitude: newLocation.coords.latitude,
            longitude: newLocation.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
      );

      setLoading(false);
    })();

    return () => {
      // Limpiar la suscripción al desmontar el componente
      if (locationSubscription.current) {
        locationSubscription.current.remove();
      }
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!location || !location.coords) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Ubicación no disponible</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Asignar la referencia del mapa
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true} // Mostrar la ubicación del usuario en tiempo real
        followsUserLocation={true} // Seguir automáticamente la ubicación del usuario
      >
        {/* Marcadores adicionales */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width * 0.9, // El mapa ocupa el 90% del ancho de la pantalla
    height: Dimensions.get('window').height * 0.4, // El mapa ocupa el 40% de la altura de la pantalla
    borderRadius: 20, // Bordes redondeados
    marginTop: 20, // Separación desde la parte superior
    marginBottom: 20, // Separación desde la parte inferior
    overflow: 'hidden', // Garantiza que los bordes redondeados funcionen
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  myLocationButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'green',
    borderRadius: 30,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});

export default MapScreen;