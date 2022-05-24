/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Navigation from './app/Components/Navigation';
import styles from './app/Components/Helpers/styles';

const App = () => {
  useEffect(() => {
    googleConfigure();
  }, []);

  const googleConfigure = () => {
    console.log(' configure... from app');
    GoogleSignin.configure({
      webClientId:
        '490250010639-6lp8m4utg79u0tbgvfoplk04qhd7ga2c.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
