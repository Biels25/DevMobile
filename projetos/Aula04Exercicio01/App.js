// Importação dos componentes necessários do React e React Native
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

// Função principal do componente App
const App = () => {
  // Declaração de dois estados: 'nome' e 'mensagem'
  const [nome, setNome] = useState(''); // Estado para armazenar o nome inserido pelo usuário
  const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem a ser exibida

  // Função chamada quando o botão "Enviar" é pressionado
  const lidarComClique = () => {
    if (nome) {
      // Se o nome for inserido, exibe a mensagem personalizada
      setMensagem(`Olá, ${nome} !`);
    } else {
      // Caso o nome não seja inserido, solicita que o usuário insira o nome
      setMensagem('Por favor, digite seu nome. ');
    }
  };

  // JSX que descreve a estrutura da tela do aplicativo
  return (
    <View style={styles.container}>
      {/* Logo do React Native */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/react_native_logo.png' }}
        style={styles.logo}
      />

      {/* Título do aplicativo */}
      <Text style={styles.titulo}>Exemplo Interativo</Text>

      {/* Campo de entrada de texto onde o usuário digita seu nome */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome" // Texto exibido antes do usuário começar a digitar
        onChangeText={setNome} // Atualiza o estado 'nome' quando o usuário digita algo
        value={nome} // O valor atual do nome é vinculado ao estado 'nome'
      />

      {/* Botão "Enviar" que chama a função lidarComClique ao ser pressionado */}
      <Button title="Enviar" onPress={lidarComClique} />

      {/* Exibe a mensagem dependendo do estado 'mensagem' */}
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
};

// Estilos para os componentes da interface do usuário
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    justifyContent: 'center', // Alinha os elementos ao centro na vertical
    alignItems: 'center', // Alinha os elementos ao centro na horizontal
    padding: 20, // Adiciona um espaçamento nas bordas
  },
  logo: {
    width: 150, // Largura da imagem
    height: 150, // Altura da imagem
    marginBottom: 20, // Espaçamento abaixo da imagem
  },
  titulo: {
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Torna o texto em negrito
    marginBottom: 20, // Espaçamento abaixo do título
  },
  input: {
    width: '100%', // O campo de texto ocupa toda a largura disponível
    height: 40, // Altura do campo de texto
    borderColor: 'gray', // Cor da borda do campo
    borderWidth: 1, // Largura da borda do campo
    marginBottom: 20, // Espaçamento abaixo do campo de texto
    paddingHorizontal: 10, // Espaçamento dentro do campo de texto (nos lados)
  },
  mensagem: {
    marginTop: 20, // Espaçamento acima da mensagem
    fontSize: 16, // Tamanho da fonte da mensagem
  },
});

// Exporta o componente App para ser usado em outro lugar
export default App;


