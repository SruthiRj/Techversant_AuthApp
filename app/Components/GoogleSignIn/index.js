import React, {useContext} from 'react';
import {Alert} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Context from '../Context/context';

const GoogleSignIn = props => {
  // const contextType = Context;
  //const [, setVal] = useContext(Context);

  const storeData = async (name, email, image) => {
    console.log(' storing data');
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('@email', email);
      await AsyncStorage.setItem('@image', image);
      await AsyncStorage.setItem('type', 'google');
      // context.addData(name, 'google');
      //  setVal(name);

      props.success(name, 'google');
    } catch (e) {}
  };

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userinfo = await GoogleSignin.signIn();

      if (userinfo) {
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
      style={styles.google}
      size={GoogleSigninButton.Size.Standard}
      color={GoogleSigninButton.Color.Light}
      onPress={_signIn}
      disabled={false}
    />
  );
};

export default GoogleSignIn;
