/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Home from './screens/Home/index';
import Starter1 from './screens/Starter1/index';
import Starter2 from './screens/Starter1/index';
import History from './screens/Starter1/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Starter1" component={Starter1} />
        <Stack.Screen name="Starter2" component={Starter2} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
