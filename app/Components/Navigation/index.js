import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../Screens/Login';
import BottomTab from '../BottomTab';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
