import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {StackActions} from '@react-navigation/native';
import {LoginManager} from 'react-native-fbsdk-next';
import {responsiveHeight} from '../../Components/Responsive';

const popAction = StackActions.pop(0);

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
      // const email = await AsyncStorage.getItem('@email');
      const image = await AsyncStorage.getItem('@image');
      const type = await AsyncStorage.getItem('type');
      if (value !== null) {
        // value previously stored
        this.setState({
          name: value,
          // email: email,
          imageUrl: image,
          type: type,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{flexDirection: 'column'}}>
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
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
        </View>
      </View>
    );
  }
}
