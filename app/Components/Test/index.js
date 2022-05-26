import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Context from '../Context/context';

// import {
//   AppleButton,
//   appleAuth,
// } from '@invertase/react-native-apple-authentication';
// import styles from './styles';

const Test = () => {
  const value = useContext(Context);
  console.log(' social... ' + value.social_name);

  return (
    <View>
      <Text>this is to test use context ....</Text>
      <Text>{value.social_name}</Text>
      <Text>{value.type}</Text>
    </View>
  );
};

export default Test;
