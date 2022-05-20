import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles';
import GoogleSignIn from '../../Components/GoogleSignIn';
import FbSignIn from '../../Components/FbSignIn';
import AppleSignin from '../../Components/AppleSignIn';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  navigateToHome = () => {
    this.props.navigation.reset({
      index: 0,
      routeNames: ['Home'],
      routes: [{name: 'Home'}],
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.signin}>Sign In</Text>
        <GoogleSignIn
          success={() => {
            this.navigateToHome();
          }}
        />
        <View style={styles.line} />
        <FbSignIn
          success={() => {
            //why not make this a common function call
            this.navigateToHome();
          }}
        />

        <View style={styles.line} />

        <AppleSignin />
      </SafeAreaView>
    );
  }
}
