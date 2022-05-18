import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  LoginButton,
  AccessToken,
  Profile,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      console.log(' usr name ,,, ' + userName);
      console.log('  ..... ' + profilePic);
      AsyncStorage.setItem('name', result?.name);
      AsyncStorage.setItem('@image', result.picture.data?.url);
      AsyncStorage.setItem('@email', '');
      AsyncStorage.setItem('type', 'fb');
      props.success();
    }
  };

  return (
    <LoginButton
      onLoginFinished={(error, result) => {
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
            // console.log('######');
            // console.log('\n');
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
