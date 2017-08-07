'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Styles from './Styles.js';

export default class RNCardStack extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNCardStack', () => RNCardStack);
