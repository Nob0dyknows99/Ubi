import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import BackButton from '../components/BackButton'; // Asegúrate de ajustar la ruta correctamente
import { createTienda } from '../api'; // Asegúrate de que esta función esté implementada correctamente

const SignupTiendaScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    propietario: '',
    direccion: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = async () => {
    const { nombre, propietario, direccion, email, password, confirmPassword } = formData;

    if (!nombre || !propietario || !direccion || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      await createTienda({ nombre, propietario, direccion, email, password });
      Alert.alert('Registro', 'Tienda registrada exitosamente.');
    } catch (error) {
      Alert.alert('Error', 'Error al registrar la tienda.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Registro de Tienda</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre de la tienda"
            value={formData.nombre}
            onChangeText={(text) => setFormData({ ...formData, nombre: text })}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Propietario"
            value={formData.propietario}
            onChangeText={(text) => setFormData({ ...formData, propietario: text })}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Dirección"
            value={formData.direccion}
            onChangeText={(text) => setFormData({ ...formData, direccion: text })}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Repita contraseña"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrar Tienda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 10, flexDirection: 'row', alignItems: 'center' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '90%',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  registerButton: {
    backgroundColor: '#4686F1',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupTiendaScreen;
