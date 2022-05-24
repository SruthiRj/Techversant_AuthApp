import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const FbSignIn = props => {
  const getResponseInfo = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      AsyncStorage.setItem('name', result?.name);
      AsyncStorage.setItem('@image', result.picture.data?.url);
      AsyncStorage.setItem('@email', '');
      AsyncStorage.setItem('type', 'fb');
      props.success();
    }
  };

  const login = () => {
    LoginManager.logInWithPermissions([
      'email',
      'public_profile',
      'user_friends',
    ]).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          const processRequest = new GraphRequest(
            '/me?fields=name,picture.type(large)',
            null,
            getResponseInfo,
          );
          new GraphRequestManager().addRequest(processRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <TouchableOpacity onPress={() => login()} style={styles.button}>
      <Text style={styles.text}>Login with Facebook</Text>
    </TouchableOpacity>
  );
};
export default FbSignIn;
