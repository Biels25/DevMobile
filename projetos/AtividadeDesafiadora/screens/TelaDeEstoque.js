import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const StockScreen = ({ navigation }) => {
  const [stock, setStock] = useState([]);

  // Função para adicionar um novo item ao estoque
  const handleAddPiece = (newPiece) => {
    setStock(prevStock => [...prevStock, newPiece]);
  };

  // Navega para a tela de adição com callback
  const navigateToAddPiece = () => {
    navigation.navigate('AddPiece', { onAddPiece: handleAddPiece });
  };

  // Renderiza cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Nome: {item.name}</Text>
      <Text>Quantidade: {item.quantity}</Text>
      <Text>Código: {item.code}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Adicionar Peça" onPress={navigateToAddPiece} />
      <FlatList
        data={stock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default StockScreen;