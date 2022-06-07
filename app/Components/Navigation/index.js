import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../Screens/Login';
import BottomTab from '../BottomTab';
import Congrats from '../../Screens/Congrats';
import linking from './linking';

const RootStack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
    //linking={linking}
    >
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Congrats"
          component={Congrats}
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
