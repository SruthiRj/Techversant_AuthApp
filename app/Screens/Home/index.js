import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {StackActions} from '@react-navigation/native';
import {LoginManager} from 'react-native-fbsdk-next';

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
      console.log(' getting values from async');
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

  logout = () => {
    //do switch maybe according to loginType
    //rigt now do google logout.
    if (this.state.type == 'fb') {
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
      // Removing user Info
      // setUserInfo( null );
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
      <SafeAreaView style={styles.container}>
        <Text style={styles.homeText}>Home screen</Text>
        <View style={styles.innerBox}>
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
        </View>
      </SafeAreaView>
    );
  }
}
