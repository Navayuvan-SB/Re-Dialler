import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Layout, Text, DrawerItem, Avatar} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {default as theme} from '../../custom-theme.json';

export function CustomDrawer(props) {
  return (
    <Layout style={styles.container}>
      <DrawerContentScrollView>
        <Layout style={styles.header}>
          <Layout style={styles.iconContainer}>
            <Icon name="call" size={50} style={styles.icon} />
          </Layout>

          <Text style={styles.appName}>Re-dialler</Text>
        </Layout>

        <Layout style={styles.navigations}>
          <Text>Navigations</Text>
        </Layout>
      </DrawerContentScrollView>

      <Layout>
        <Text>This is a text</Text>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    alignItems: 'center',
  },
  navigations: {
    flex: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    color: '#fff',
  },
  iconContainer: {
    width: '25%',
    marginTop: 50,
  },
  icon: {
    padding: 10,
    backgroundColor: theme['color-primary-600'],
    borderRadius: 50,
    color: theme['color-basic-600'],
  },
  appName: {
    fontSize: 30,
    marginTop: 40,
    letterSpacing: 3,
    fontFamily: 'Raleway-Bold',
  },
});
