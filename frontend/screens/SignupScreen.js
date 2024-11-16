import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton'; // Asegúrate de ajustar la ruta si es necesario
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation(); // Para manejar la navegación entre pantallas

  return (
    <View style={styles.container}>
      {/* Header con botón de retroceso */}
      <View style={styles.header}>
        <BackButton />
      </View>

      {/* Contenido principal */}
      <View style={styles.content}>
        {/* Botón para registrarse como cliente */}
        <TouchableOpacity
          style={[styles.button, styles.clientButton]}
          onPress={() => navigation.navigate('SignupPersonaScreen')} // Navega al registro de persona
        >
          <Text style={styles.buttonText}>Registrarse como cliente</Text>
        </TouchableOpacity>

        {/* Botón para registrarse como tienda */}
        <TouchableOpacity
          style={[styles.button, styles.storeButton]}
          onPress={() => navigation.navigate('SignupTiendaScreen')} // Navega al registro de tienda
        >
          <Text style={styles.buttonText}>Registrarse como tienda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  clientButton: { 
    backgroundColor: '#4CAF50' // Color para cliente
  },
  storeButton: { 
    backgroundColor: '#1E88E5' // Color para tienda
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});

export default SignupScreen;
