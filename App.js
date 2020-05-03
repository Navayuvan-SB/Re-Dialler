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
import Splash from './screens/Splash/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {default as theme} from './custom-theme.json';
import AsyncStorage from '@react-native-community/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'loading',
    };

    AsyncStorage.getItem('@isSession')
      .then(response => {
        this.setState({isLoggedIn: response});
      })
      .catch(error => {
        this.setState({isLoggedIn: 'false'});
      });
  }

  // getSession = async () => {
  //   return () || 'false';
  // };

  render() {
    return (
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <NavigationContainer>
          {this.state.isLoggedIn === 'true' ? (
            <Drawer.Navigator initialRouteName="Home" drawerType="slide">
              <Drawer.Screen name="Home" component={Home} />
              <Drawer.Screen name="History" component={History} />
            </Drawer.Navigator>
          ) : this.state.isLoggedIn === 'loading' ? (
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="Splash"
                component={Splash}
              />
            </Stack.Navigator>
          ) : (
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
          )}
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}
