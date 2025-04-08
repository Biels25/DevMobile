import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from './styles'; // Importando os estilos

const RecoveryScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRecovery = () => {
    setNewPassword('nova_senha_1234');
  };

  return (
    <View style={styles.container}>
      <Text>Recuperação de Senha</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Usuário" 
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Recuperar Senha" onPress={handleRecovery} />
      {newPassword ? <Text>Senha temporária: {newPassword}</Text> : null}
      <Text 
        style={styles.link} 
        onPress={() => navigation.navigate('Login')}>
        Voltar ao login
      </Text>
    </View>
  );
};

export default RecoveryScreen;
