import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerBox}>
          <Text> Notifictaions screens..</Text>
        </View>
      </View>
    );
  }
}
