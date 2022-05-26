import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Test from '../../Components/Test';

export default class Share extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View>
        <View>
          <Text>Share screen</Text>
          <Test />
        </View>
      </View>
    );
  }
}
