/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import UsersComponent from './components/UsersComponent'
import ParentComponent from './components/ParentComponent'
export default class App extends Component {
  render() {
    return (
      <RoutesComponent />
    );
  }
}

const styles = StyleSheet.create({
  moniemStyle: { fontSize: 20, fontWeight: "bold", color: "green" },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RoutesComponent = StackNavigator({
parentComponent : {path:"/parent",screen:ParentComponent},
UsersComponent : {path:"/users",screen:UsersComponent}
})