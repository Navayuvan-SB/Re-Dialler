import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Input, Button} from '@ui-kitten/components';
import {default as theme} from '../../custom-theme.json';
import {checkAndLogin} from '../../APIs/auth';

export default class Starter2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonOfUse: 'unknown',
    };
  }
  // Login the user
  login = () => {
    // Login function
    checkAndLogin(this.state.reasonOfUse);
  };

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.textLayout}>
          <Text style={styles.qstnText} category="h1">
            Why are you using
          </Text>
          <Text style={styles.qstnText}>this App?</Text>
        </Layout>

        <Layout style={styles.inputLayout}>
          <Input
            textStyle={styles.input}
            style={styles.inputBox}
            placeholder="For Prank"
            placeholderTextColor="#E8E8E877"
            onChangeText={text => this.setState({reasonOfUse: text})}
          />
        </Layout>

        <Layout style={styles.buttonLayout}>
          <Button style={styles.button} onPress={this.login}>
            {evaProps => (
              <Text {...evaProps} style={styles.buttonText}>
                Continue
              </Text>
            )}
          </Button>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  textLayout: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginLeft: 60,
  },
  inputLayout: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 60,
  },
  buttonLayout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  qstnText: {
    fontSize: 38,
    marginBottom: 20,
    fontFamily: 'Raleway-Regular',
    fontWeight: '700',
  },
  input: {
    minHeight: 53,
    color: theme['input-text-color'],
    fontSize: 20,
    fontFamily: 'Raleway-Regular',
  },
  inputBox: {
    paddingRight: 70,
    borderRadius: 12,
    backgroundColor: theme['input-background-color'],
  },
  button: {
    width: 200,
    height: 60,
    borderRadius: 12,
    fontSize: 20,
  },
  buttonText: {
    color: theme['color-basic-600'],
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Raleway-Regular',
  },
});
