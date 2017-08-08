'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import Styles from './Styles.js';
import CardStack from './CardStack.js';

export default class RNCardStack extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <CardStack/>
      </View>
    );
  }
}

AppRegistry.registerComponent('RNCardStack', () => RNCardStack);
