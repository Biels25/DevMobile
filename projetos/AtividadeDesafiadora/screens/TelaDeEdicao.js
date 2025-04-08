import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles'; // Importando os estilos

const EditPieceScreen = ({ navigation, route }) => {
  const { code } = route.params;
  const [quantity, setQuantity] = useState('');
  const [stock, setStock] = useState([
    { id: '1', name: 'Peça A', quantity: 10, code: 'A001' },
    { id: '2', name: 'Peça B', quantity: 15, code: 'B002' },
  ]);

  useEffect(() => {
    const piece = stock.find(piece => piece.code === code);
    if (piece) {
      setQuantity(piece.quantity.toString());
    }
  }, [code, stock]);

  const handleSave = () => {
    const updatedStock = stock.map(piece => 
      piece.code === code ? { ...piece, quantity: parseInt(quantity) } : piece
    );
    setStock(updatedStock);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Quantidade" 
        keyboardType="numeric" 
        value={quantity} 
        onChangeText={setQuantity} 
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
};

export default EditPieceScreen;
