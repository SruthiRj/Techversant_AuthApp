import React, {Component} from 'react';
import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    console.log(' hiiii');
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();

    // setTimeout(() => {
    //   this.setState({
    //     progress: new Animated.Value(0),
    //   });
    // }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.innerBox}>
          <Text> Notifictaions screens..</Text>
        </View> */}
        <LottieView
          source={require('../../assets/bell.json')}
          // progress={this.state.progress}
          // colorFilters={[
          //   {
          //     keypath: 'button',
          //     color: '#F00000',
          //   },
          //   {
          //     keypath: 'Sending Loader',
          //     color: '#F00000',
          //   },
          // ]}
          loop
          autoPlay
        />
      </View>
    );
  }
}
