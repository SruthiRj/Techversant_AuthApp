import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveHeight} from '../Responsive';

const GoogleSignIn = props => {
  const [isSigninInProgress, setSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    //mandatory to call configure before signin
    // googleConfigure();
  }, []);

  // const googleConfigure = () => {
  //   console.log(' configure...');
  //   GoogleSignin.configure({
  //     webClientId:
  //       '490250010639-6lp8m4utg79u0tbgvfoplk04qhd7ga2c.apps.googleusercontent.com',
  //     offlineAccess: true,
  //     hostedDomain: '',
  //     forceConsentPrompt: true,
  //   });
  // };

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
    // googleConfigure();
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userinfo = await GoogleSignin.signIn();
      //const isSignedIn = await GoogleSignin.isSignedIn();

      setUserInfo(userinfo);
      if (userinfo) {
        // console.log('navigate to home with userinfo');
        // console.log(userinfo.user?.name, userinfo.user?.photo);
        storeData(
          userinfo.user?.name,
          userinfo.user?.email,
          userinfo.user?.photo,
        );
      }
    } catch (error) {
      console.log(error);

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
      style={{width: responsiveHeight(25), height: responsiveHeight(5)}}
      size={GoogleSigninButton.Size.Standard}
      color={GoogleSigninButton.Color.Light}
      onPress={_signIn}
      disabled={isSigninInProgress}
    />
  );
};

export default GoogleSignIn;
