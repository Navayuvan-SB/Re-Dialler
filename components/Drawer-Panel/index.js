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
          <DrawerItem
            style={styles.navigationItem}
            title={tProps => (
              <Text {...tProps} style={styles.navigationTitle}>
                Home
              </Text>
            )}
            accessoryLeft={home => (
              <Icon {...home} name="home" style={styles.navigationIcon} />
            )}
            onPress={() => props.navigation.navigate('Home')}
          />

          <DrawerItem
            style={styles.navigationItem}
            title={tProps => (
              <Text {...tProps} style={styles.navigationTitle}>
                History
              </Text>
            )}
            accessoryLeft={history => (
              <Icon {...history} style={styles.navigationIcon} name="history" />
            )}
            onPress={() => props.navigation.navigate('History')}
          />
        </Layout>
      </DrawerContentScrollView>

      <Layout style={styles.footer}>
        <Text style={styles.caption}>Powered by</Text>
        <Text style={styles.credits}>Cypher Source</Text>
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
    marginBottom: 40,
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
  navigationItem: {
    marginTop: 10,
    justifyContent: 'flex-start',
    marginLeft: 30,
  },
  navigationIcon: {
    fontSize: 35,
    color: theme['color-primary-600'],
  },
  navigationTitle: {
    marginLeft: 30,
    fontSize: 20,
    color: theme['input-text-color'],
    fontFamily: 'Raleway-SemiBold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  caption: {
    color: 'rgba(247, 240, 245, 0.8)',
    marginBottom: 7,
  },
  credits: {
    letterSpacing: 1,
    fontFamily: 'Raleway-SemiBold',
  },
});
