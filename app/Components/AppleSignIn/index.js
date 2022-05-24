import React from 'react';

import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import styles from './styles';

const AppleSignin = props => {
  async function onAppleButtonPress() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    // use credentialState response to ensure the user is authenticated
    if (credentialState === appleAuth.State.AUTHORIZED) {
      // user is authenticated
    }
  }

  return (
    <AppleButton
      buttonStyle={AppleButton.Style.WHITE}
      buttonType={AppleButton.Type.SIGN_IN}
      style={styles.button}
      onPress={() => onAppleButtonPress()}
    />
  );
};

export default AppleSignin;
