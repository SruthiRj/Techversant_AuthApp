import React, {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  LoginButton,
  AccessToken,
  Profile,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {responsiveHeight} from '../Responsive';
import styles from './styles';

const FbSignIn = props => {
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const getProfile = () => {
    console.log(' inside get profile details ...');
    const currentProfile = Profile.getCurrentProfile().then(function (
      currentProfile,
    ) {
      console.log('\n');
      console.log('     ******');
      console.log(currentProfile);
      if (currentProfile) {
        console.log(JSON.stringify(currentProfile));
        console.log('\n');
        console.log('\n');
        console.log('\n');
        console.log('\n');

        console.log(
          'The current logged user is: ' +
            currentProfile.name +
            '. His profile id is: ' +
            currentProfile.userID,
        );
        //navigate from here..
        // AsyncStorage.setItem('name', currentProfile?.name);
        // AsyncStorage.setItem('@image', currentProfile?.imageURL);
        // props.success();
      } else {
        console.log(' not consoleong');
      }
    });
    return currentProfile;
  };

  const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log(JSON.stringify(result));
      console.log(result.name);
      console.log(result.picture.data.url);
      //   setUserName('Welcome ' + result.name);
      //   setToken('User Token: ' + result.id);
      //   setProfilePic(result.picture.data.url);

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
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          console.log(JSON.stringify(result));
          const processRequest = new GraphRequest(
            '/me?fields=name,picture.type(large)',
            null,
            getResponseInfo,
          );

          // Start the graph request.
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
      {/* <Image
        source={require('../../assets/fb.png')}
        style={{
          height: 20,
          width: 10,
          marginRight: 5,
        }}
      /> */}
      <Text style={{color: 'white'}}>Login with Facebook</Text>
    </TouchableOpacity>
  );

  return (
    <LoginButton
      style={{
        height: responsiveHeight(5),
        width: responsiveHeight(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
      onLoginFinished={(error, result) => {
        console.log(error);
        console.log(result);
        if (error) {
          console.log('login has error: ' + result.error);
        } else if (result.isCancelled) {
          console.log('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            console.log('get profile details...');
            // console.log(' then navigate');
            //this only gets the access token now fetch profile details..
            // var profileDetails = getProfile();
            //   console.log( JSON.stringify( profileDetails ) );

            const processRequest = new GraphRequest(
              '/me?fields=name,picture.type(large)',
              null,
              getResponseInfo,
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(processRequest).start();
          });
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />
  );
};

export default FbSignIn;
