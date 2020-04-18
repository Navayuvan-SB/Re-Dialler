import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import ReButton from '../../components/Button/index';

export default class Starter1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textLayout}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.normalText}>Re-dialler</Text>
        </View>

        <View style={styles.buttonLayout}>
          <ReButton
            onClick={() => {
              this.props.navigation.navigate('Starter2');
            }}>
            Get Started >
          </ReButton>
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
    justifyContent: 'space-around',
  },
  textLayout: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonLayout: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'rgb(20, 255, 236)',
    fontSize: 40,
    fontWeight: '400',
    fontFamily: 'Raleway-Regular',
  },
  normalText: {
    color: 'rgb(20, 255, 236)',
    fontSize: 40,
    fontFamily: 'Raleway-Bold',
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
