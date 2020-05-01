/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Home from './screens/Home/index';
import Starter1 from './screens/Starter1/index';
import Starter2 from './screens/Starter2/index';
import History from './screens/History/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: AsyncStorage.getItem('@isSession'),
    };
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <NavigationContainer>
          {this.state.isLoggedIn === 'true' ? (
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="Starter1"
                component={Starter1}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Starter2"
                component={Starter2}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="History" component={History} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}
