'use strict';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';
import Styles from './Styles.js';

export default class Card extends Component {
  render() {
    return (
      <View style={Styles.card}>
        <Image style={Styles.cardImage}/>
        <View style={Styles.cardText}>
          <Text style={Styles.cardTextMain}>Name, Age</Text>
          <Text style={Styles.cardTextSecondary}>Job Title and Employer</Text>
        </View>
      </View>
    );
  }
}
