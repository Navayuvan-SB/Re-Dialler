import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export default class CustomDrawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Empty Code..!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
