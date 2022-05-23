import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class Notifications extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        {/* do a customer header for each screen
consider the status bar scenario in ios */}
        <View style={styles.innerBox}>
          <Text> Notifictaions screens..</Text>
          {/* may be dumny content */}
        </View>
      </View>
    );
  }
}
