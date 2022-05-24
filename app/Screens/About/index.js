import React, {Component} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';

export default class About extends Component {
  constructor() {
    super();
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

  logout = () => {
    if (this.state.type === 'fb') {
      this.logoutFromFacebook();
    } else {
      this.logoutFromGoogle();
    }
  };

  logoutFromFacebook = () => {
    LoginManager.logOut();
    AsyncStorage.clear();
    this.props.navigation.reset({
      index: 0,
      routeNames: ['Login'],
      routes: [{name: 'Login'}],
    });
  };

  logoutFromGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      AsyncStorage.clear();
      this.props.navigation.reset({
        index: 0,
        routeNames: ['Login'],
        routes: [{name: 'Login'}],
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <View style={styles.outterView}>
        <ScrollView contentContainerStyle={styles.innerBox}>
          <Image
            source={{
              uri: `${this.state.imageUrl}`,
            }}
            style={styles.imageBox}
          />
          <Text style={styles.textStyle}>{this.state.name}</Text>
          <Text style={styles.emailStyle}>{this.state.type}</Text>

          <TouchableOpacity
            style={styles.logout}
            onPress={() => {
              this.logout();
            }}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
