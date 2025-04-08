import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles'; // Importando os estilos

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigation.navigate('Stock');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Usuário" 
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate('Recovery')}>
        Esqueci minha senha
      </Text>
    </View>
  );
};

export default LoginScreen;
