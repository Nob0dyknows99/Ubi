import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton'; // Asegúrate de ajustar la ruta según tu estructura de carpetas
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation(); // Instancia de navegación

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.button, styles.clientButton]}
          onPress={() => navigation.navigate('SignupPersonaScreen')} // Navega a la pantalla de registro de persona
        >
          <Text style={styles.buttonText}>Registrarse como cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.storeButton]}
          onPress={() => navigation.navigate('SignupTiendaScreen')} // Navega a la pantalla de registro de tienda
        >
          <Text style={styles.buttonText}>Registrarse como tienda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
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
  clientButton: { backgroundColor: '#4CAF50' },
  storeButton: { backgroundColor: '#1E88E5' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SignupScreen;
