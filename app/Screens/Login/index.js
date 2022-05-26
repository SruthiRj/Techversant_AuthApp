import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './styles';
import GoogleSignIn from '../../Components/GoogleSignIn';
import FbSignIn from '../../Components/FbSignIn';
import Context from '../../Components/Context/context';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  static contextType = Context;

  navigateToHome = (name, type) => {
    console.log(' name is .... ' + name);
    this.context.addData(name, type);
    this.props.navigation.reset({
      index: 0,
      routeNames: ['Congrats'],
      routes: [{name: 'Congrats'}],
    });
    // this.props.navigation.reset({
    //   index: 0,
    //   routeNames: ['BottomTab'],
    //   routes: [{name: 'BottomTab'}],
    // });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.signin}>Sign In</Text>
        <GoogleSignIn
          success={(name, type) => {
            this.navigateToHome(name, type);
          }}
        />
        <View style={styles.line} />
        <FbSignIn
          success={(name, type) => {
            this.navigateToHome(name, type);
          }}
        />

        <View style={styles.line} />

        {/* <AppleSignin /> */}
      </SafeAreaView>
    );
  }
}
