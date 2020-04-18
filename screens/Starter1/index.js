import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textLayout}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.normalText}>Re-dialler</Text>
        </View>

        <View style={styles.buttonLayout}>
          <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Get Started ></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(33,33,33)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLayout: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'rgb(20, 255, 236)',
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'Raleway-Regular',
  },
  normalText: {
    color: 'rgb(20, 255, 236)',
    fontSize: 38,
    fontWeight: '600',
    fontFamily: 'Raleway-Regular',
  },
  buttonContainer: {
    backgroundColor: 'rgb(20, 255, 236)',
    borderRadius: 12,
  },
  buttonText: {
    padding: 15,
    paddingHorizontal: 40,
    color: 'rgb(33, 33, 33)',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
});
