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
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.spring(this.state.pan, {
          toValue: 0,
        }).start()
      }
    });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  getMainCardStyle() {
    let {pan} = this.state;
    return [
      Styles.mainCard,
      {transform: [{translateX: pan.x}, {translateY: pan.y},
      {rotate: pan.x.interpolate({inputRange: [-150, 0, 150], outputRange: ["-20deg", "0deg", "20deg"]})}]},
      {opacity: pan.x.interpolate({inputRange: [-150, 0, 150], outputRange: [0.5, 1, 0.5]})}
    ];
  }

  render() {
    return (
      <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
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
