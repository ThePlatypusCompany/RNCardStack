'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Styles from './Styles.js';
import Card from './Card.js';

export default class RNCardStack extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Card/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNCardStack', () => RNCardStack);
