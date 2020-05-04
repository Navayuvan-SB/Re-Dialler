import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Text,
  TopNavigation,
  Layout,
  TopNavigationAction,
} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const BackIcon = props => <Icon {...props} name="arrow-back" />;

export default class Home extends React.Component {
  render() {
    return (
      <>
        <TopNavigation title="Home" />
        <Layout style={styles.container}>
          <Text>Empty Code..!</Text>
        </Layout>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
