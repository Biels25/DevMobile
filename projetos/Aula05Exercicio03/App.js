import React, { useState } from 'react';
import {
  View, // Contêiner genérico para agrupar elementos
  Text, // Componente para exibição de texto
  Image, // Componente para exibição de imagens
  TextInput, // Campo de entrada de texto
  Button, // Botão básico
  TouchableOpacity, // Botão customizável
  ScrollView, // Contêiner que permite rolagem
  FlatList, // Lista otimizada para grandes conjuntos de dados
  SectionList, // Lista que agrupa dados em seções
  StyleSheet, // API para criação de estilos
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

  // Dados das seções para a SectionList
  const sections = [
    {
      title: 'Seção 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    {
      title: 'Seção 2',
      data: [
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
  ];

  // Função chamada ao pressionar o botão padrão
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
      <View style={styles.view}>
        <Image source={logoX} style={styles.image} />
        <Text style={styles.text}>Exemplo de App React Native</Text>
      </View>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.TextInput}
        placeholder="Digite algo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Clique Aqui" onPress={handlePress} />

      {/* Lista de itens adicionados */}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.TouchableOpacity}>
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Botão de ação com TouchableOpacity */}
      <TouchableOpacity style={styles.TouchableOpacity} onPress={addItem}>
        <Text style={styles.TouchableOpacityText}>Toque aqui</Text>
      </TouchableOpacity>

      {/* Lista seccionada de itens */}
      <SectionList
        sections={sections}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  view: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  TouchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  TouchableOpacityText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default App;
