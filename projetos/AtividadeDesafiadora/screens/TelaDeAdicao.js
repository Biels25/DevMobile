import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from './styles';

const AddPieceScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [code, setCode] = useState('');

  const handleAddPiece = () => {
    // Validações
    if (!name.trim()) {
      Alert.alert('Erro', 'O nome da peça é obrigatório.');
      return;
    }

    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Erro', 'A quantidade deve ser um número válido e maior que zero.');
      return;
    }

    if (!code.trim()) {
      Alert.alert('Erro', 'O código da peça é obrigatório.');
      return;
    }

    // Cria o novo item
    const newPiece = {
      id: Date.now().toString(), // ID único baseado no timestamp
      name: name.trim(),
      quantity: parsedQuantity,
      code: code.trim(),
    };

    // Atualiza a lista de estoque via callback ou estado global
    if (route.params?.onAddPiece) {
      route.params.onAddPiece(newPiece); // Passa o novo item para a tela de estoque
      Alert.alert('Sucesso', 'Peça adicionada ao estoque!');
      navigation.goBack(); // Volta para a tela anterior
    } else {
      Alert.alert('Aviso', 'Não foi possível salvar a peça.');
    }

    // Limpa os campos
    setName('');
    setQuantity('');
    setCode('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Peça"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Código da Peça"
        value={code}
        onChangeText={setCode}
      />
      <Button title="Salvar" onPress={handleAddPiece} />
    </View>
  );
};

export default AddPieceScreen;