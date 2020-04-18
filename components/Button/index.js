import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

export default class ReButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
        <Text style={styles.buttonText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
