import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import { StackNavigator } from 'react-navigation';


import LoginScreen from './src/containers/login';
import HomeScreen from './src/containers/home';
import MoviesScreen from './src/containers/movies';
import LocationScreen from './src/containers/location';

var routes = {
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Movies: {
    screen: MoviesScreen
  },
  Location: {
    screen: LocationScreen
  }
}

var routerOptions = {
  initialRouteName: 'Login'
}

const Navigations = StackNavigator(routes, routerOptions);

export default class App extends React.Component {
  render() {
    return (
      <Navigations />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
