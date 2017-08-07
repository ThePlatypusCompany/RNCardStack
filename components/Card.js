'use strict';
import React, { Component } from 'react';
import {
  PanResponder,
  Animated,
  View,
  Image,
  Text
} from 'react-native';
import Styles from './Styles.js';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {},
      onPanResponderMove: Animated.event([]),
      onPanResponderRelease: (e, {vx, vy}) => {}
    })
  }

  render() {
    return (
      <Animated.View {...this.panResponder.panHandlers}>
        <View style={Styles.card}>
          <Image style={Styles.cardImage}/>
          <View style={Styles.cardText}>
            <Text style={Styles.cardTextMain}>Name, Age</Text>
            <Text style={Styles.cardTextSecondary}>Job Title and Employer</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}
