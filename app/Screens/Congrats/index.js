import React, {Component} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';

export default class Congrats extends Component {
  constructor() {
    super();
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {}

  continueClicked = () => {
    this.props.navigation.reset({
      index: 0,
      routeNames: ['BottomTab'],
      routes: [{name: 'BottomTab'}],
    });
  };

  render() {
    return (
      <View style={styles.continer}>
        <LottieView
          source={require('../../assets/success.json')}
          loop
          autoPlay
        />

        <Text style={styles.successText}>Login Successfull !!!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.continueClicked()}>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
