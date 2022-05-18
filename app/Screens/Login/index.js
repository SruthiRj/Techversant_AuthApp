import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles';
import GoogleSignIn from '../../Components/GoogleSignIn';
import FbSignIn from '../../Components/FbSignIn';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.signin}>Sign In</Text>
        <GoogleSignIn
          success={() => {
            this.props.navigation.reset({
              index: 0,
              routeNames: ['Home'],
              routes: [{name: 'Home'}],
            });
          }}
        />
        <View style={{marginTop: 20}} />
        <FbSignIn
          success={() => {
            //why not make this a common function call
            this.props.navigation.reset({
              index: 0,
              routeNames: ['Home'],
              routes: [{name: 'Home'}],
            });
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginTop: 20,
            padding: 15,
            width: '45%',
          }}>
          <Text
            style={{
              color: 'white',
              alignSelf: 'center',
            }}>
            Login via Apple
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
