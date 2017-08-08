'use strict';
import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Styles from './Styles.js';
import Card from './Card.js';

export default class CardStack extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  render() {
    return (
      <FlatList/>
    );
  }
}
