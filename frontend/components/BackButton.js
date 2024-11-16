import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress || (() => navigation.goBack())} style={styles.container}>
      <Ionicons name="arrow-back" size={20} color="#007BFF" />
      <Text style={styles.text}>Regresar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#007BFF',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default BackButton;
