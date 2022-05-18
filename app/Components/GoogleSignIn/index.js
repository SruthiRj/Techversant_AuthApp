import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GoogleSignIn = props => {
  const [isSigninInProgress, setSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    //mandatory to call configure before signin
    googleConfigure();
  });

  const googleConfigure = () => {
    console.log(' configure...');
    GoogleSignin.configure({
      webClientId:
        '490250010639-6lp8m4utg79u0tbgvfoplk04qhd7ga2c.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  };

  const storeData = async (name, email, image) => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('@email', email);
      await AsyncStorage.setItem('@image', image);
      await AsyncStorage.setItem('type', 'google');

      props.success();
    } catch (e) {
      // saving error
    }
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userinfo = await GoogleSignin.signIn();
      console.log(' ');
      console.log(userInfo);
      setUserInfo(userinfo);
      //if (userInfo == null) _signIn();
      if (userInfo) {
        console.log('navigate to home with userinfo');
        console.log(userInfo.user?.name, userInfo.user?.photo);
        storeData(
          userInfo.user?.name,
          userInfo.user?.email,
          userInfo.user?.photo,
        );
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available or Outdated');
      } else {
        Alert.alert(error.message);
      }
    }
  };
  return (
    <GoogleSigninButton
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={_signIn}
      disabled={isSigninInProgress}
    />
  );
};

export default GoogleSignIn;
