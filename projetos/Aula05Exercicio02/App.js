import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import logoX from './assets/NativeLogo.png'; // Importa a imagem do logo

const App = () => {
  // Estado para armazenar o texto digitado no input
  const [text, setText] = useState('');
  
  // Estado para armazenar a lista de itens
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);

  // Função chamada ao pressionar o botão TouchableOpacity
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  // Função para adicionar um novo item à lista
  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, { id: Date.now().toString(), name: text }]);
      setText(''); // Limpa o input após adicionar
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho do app */}
      <View style={styles.header}>
        <Image source={logoX} style={styles.image} />
        <Text style={styles.title}>Exemplo de App React Native</Text>
      </View>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Adicionar Item" onPress={addItem} />

      {/* Lista de itens adicionados */}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Botão de ação com TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
