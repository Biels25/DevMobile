// Importação das bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Componente principal do aplicativo
const App = () => {
  // Estados para armazenar o nome digitado e a mensagem
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Função chamada ao pressionar o botão "Enviar"
  const lidarComClique = () => {
    if (nome) {
      setMensagem(`Olá, ${nome}!`); // Define a mensagem personalizada com o nome digitado
    }
  };

  return (
    // ScrollView permite rolar a tela caso o conteúdo seja maior que a tela do dispositivo
    <ScrollView style={styles.container}>
      {/* View para agrupar a imagem e o texto */}
      <View style={styles.view}>
        {/* Componente de imagem carregando uma logo do React Native */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
          style={styles.image}
        />

        {/* Componente de texto para exibir uma descrição */}
        <Text style={styles.text}>
          Exemplo de elementos gráficos interativos em React Native
        </Text>
      </View>

      {/* View que contém o campo de entrada de texto e o botão */}
      <View style={styles.inputContainer}>
        {/* Campo de entrada de texto para digitar o nome */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome" // Texto que aparece antes do usuário digitar
          onChangeText={setNome} // Atualiza o estado "nome" ao digitar
        />

        {/* Botão que aciona a função lidarComClique ao ser pressionado */}
        <Button title="Enviar" onPress={lidarComClique} />
      </View>

      {/* Verifica se há uma mensagem para exibição */}
      {mensagem ? (
        // View para agrupar e exibir a mensagem na tela
        <View style={styles.messageContainer}>
          {/* Exibe a mensagem personalizada */}
          <Text style={styles.message}>{mensagem}</Text>
        </View>
      ) : null}

      {/* Botão customizado usando TouchableOpacity */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        {/* Texto dentro do botão customizado */}
        <Text style={styles.buttonText}>Botão customizado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Objeto de estilos para personalizar os componentes
const styles = StyleSheet.create({
  // Estilização do container principal
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20, // Espaçamento interno
  },

  // Estilização da View que contém a imagem e o texto inicial
  view: {
    alignItems: 'center', // Centraliza os itens horizontalmente
    marginBottom: 20, // Espaçamento na parte inferior
  },

  // Estilização da imagem
  image: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10, // Espaçamento abaixo da imagem
  },

  // Estilização do texto descritivo
  text: {
    fontSize: 20, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },

  // Estilização do container do input
  inputContainer: {
    marginBottom: 20, // Espaçamento abaixo do input
  },

  // Estilização do campo de entrada de texto
  input: {
    height: 40, // Altura do campo
    borderColor: 'gray', // Cor da borda
    borderWidth: 1, // Espessura da borda
    marginBottom: 10, // Espaçamento abaixo do campo
    paddingHorizontal: 10, // Espaçamento interno horizontal
  },

  // Estilização do container da mensagem exibida
  messageContainer: {
    marginBottom: 20, // Espaçamento inferior
  },

  // Estilização do texto da mensagem
  message: {
    fontSize: 16, // Tamanho da fonte
  },

  // Estilização do botão customizado
  button: {
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Espaçamento interno
    borderRadius: 5, // Cantos arredondados
    alignItems: 'center', // Centraliza o texto dentro do botão
  },

  // Estilização do texto dentro do botão customizado
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

// Exportação do componente App para ser utilizado no projeto
export default App;
