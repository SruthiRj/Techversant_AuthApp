import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      imageUrl: null,
      type: null,
    };
  }
  componentDidMount() {
    this.getValues();
  }

  getValues = async () => {
    try {
      const value = await AsyncStorage.getItem('name');
      const image = await AsyncStorage.getItem('@image');
      const type = await AsyncStorage.getItem('type');
      if (value !== null) {
        this.setState({
          name: value,
          imageUrl: image,
          type: type,
        });
      }
    } catch (e) {}
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.homeText}>Hello {this.state.name}</Text>
            <Text style={styles.welcome}>Welcome Back!</Text>
          </View>
          <Image
            source={{
              uri: `${this.state.imageUrl}`,
            }}
            style={styles.imageBox}
          />
        </View>
        <View style={styles.secondBox}>
          <Text></Text>
        </View>
        <View style={styles.boxConatiner}>
          <View style={styles.box1} />
          <View style={styles.box2} />
        </View>
      </View>
    );
  }
}
