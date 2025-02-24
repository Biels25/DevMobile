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
  SectionList,
  ActivityIndicator,
  //Slider,
  Switch,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Estados para armazenar valores interativos
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);

  // Lista de dados simples para FlatList
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  // Estrutura de dados para SectionList com seções e itens
  const sections = [
    {
      title: 'Section 1',
      data: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ],
    },
    { title: 'Section 2', data: [{ id: 3, name: 'Item 3' }] },
  ];

  // Função de clique do botão, simulando carregamento por 2 segundos
  const handleButtonPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Button Pressed!');
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view}>
        {/* Texto simples */}
        <Text style={styles.text}>Hello React Native!</Text>

        {/* Exibição de imagem via URL */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />

        {/* Campo de entrada de texto */}
        <TextInput
          style={styles.textInput}
          placeholder="Enter text"
          value={text}
          onChangeText={setText}
        />

        {/* Botão com ação de clique */}
        <Button title="Press Me" onPress={handleButtonPress} />

        {/* Botão customizado com TouchableOpacity */}
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text style={styles.touchableOpacityText}>Touch Me</Text>
        </TouchableOpacity>

        {/* Indicador de carregamento */}
        <ActivityIndicator animating={isLoading} />

        {/* Componente de switch (liga/desliga) */}
        <Switch value={switchValue} onValueChange={setSwitchValue} />
        <Text>Switch Value: {switchValue ? 'On' : 'Off'}</Text>
      </View>

      {/* Lista simples utilizando FlatList */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

      {/* Lista estruturada com seções utilizando SectionList */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ScrollView>
  );
};

// Estilos para os componentes
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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  touchableOpacity: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  touchableOpacityText: {
    color: 'white',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

// Exportando o componente principal
export default App;
