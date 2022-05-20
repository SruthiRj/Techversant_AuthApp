/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Navigation from './app/Components/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
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
    <View
      style={{
        flex: 1,
      }}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
