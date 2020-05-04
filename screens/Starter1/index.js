import React from 'react';
import {StyleSheet} from 'react-native';
import ReButton from '../../components/Button/index';
import {Layout, Text} from '@ui-kitten/components';

export default class Starter1 extends React.Component {
  // Nav to Starter2
  navToStarter2 = () => {
    this.props.navigation.navigate('Starter2');
  };
  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.textLayout}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.normalText}>Re-dialler</Text>
        </Layout>

        <Layout style={styles.buttonLayout}>
          <ReButton onClick={this.navToStarter2}>Get Started ></ReButton>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textLayout: {
    marginTop: 40,
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
    fontSize: 40,
    fontWeight: '400',
    fontFamily: 'Raleway-Regular',
  },
  normalText: {
    fontSize: 40,
    fontFamily: 'Raleway-Bold',
  },
});
