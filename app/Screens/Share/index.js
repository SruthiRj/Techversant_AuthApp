import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Share extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        {/* header component */}
        <View>
          <Text>Share screen</Text>
        </View>
      </View>
    );
  }
}
