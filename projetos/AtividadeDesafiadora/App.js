import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/TelaDeLogin';
import RecoveryScreen from './screens/TelaDeRecuperacao';
import StockScreen from './screens/TelaDeEstoque';
import AddPieceScreen from './screens/TelaDeAdicao';
import EditPieceScreen from './screens/TelaDeEdicao';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recovery" component={RecoveryScreen} />
        <Stack.Screen name="Stock" component={StockScreen} />
        <Stack.Screen name="AddPiece" component={AddPieceScreen} />
        <Stack.Screen name="EditPiece" component={EditPieceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
