import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OlaPerfilClasse from './componentes/OlaPerfilClasse';
import OlaPerfilFuncao from './componentes/OlaPerfilFuncao';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <OlaPerfilClasse
        nome="Gabriel Classe"
        endereco="São Carlos - SP"
        telefone="+55 (16)98865-5270"
      />
      <br />
      <OlaPerfilFuncao
        nome="Gabriel Função"
        endereco="São Carlos - SP"
        telefone="+55 (16)98865-5270"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
