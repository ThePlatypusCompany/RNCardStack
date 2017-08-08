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

  componentWillMount() {
    this.handleAdd();
  }

  async handleAdd() {
    try {
      let response = await fetch('https://randomuser.me/api');
      let result = await response.json();
      this.setState({
        users: [result.results[0], ...this.state.users],
      });
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  render() {
    return (
      <FlatList
        style={Styles.cardContainer}
        contentContainerStyle={Styles.cardStack}
        data={this.state.users}
        renderItem={({item, index}) => (
          <Card
            {...item}
            index={index}
          />
        )}
        keyExtractor={(item) => item.login.username}
        scrollEnabled={false}
      />
    );
  }
}
