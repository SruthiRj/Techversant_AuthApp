import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AntIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Notifications from '../../Screens/Notifications';
import Share from '../../Screens/Share';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Add from '../../Screens/Add';
import styles from './styles';
import {responsiveHeight} from '../Responsive';

const BottomStack = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
};

const BottomTab = () => {
  return (
    <BottomStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#cd077d',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          // elevation: 0,
          backgroundColor: '#ffffff',
          shadowColor: '#7F5DF0',
          shadowRadius: 3.5,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          elevation: 5,
          shadowOpacity: 0.25,
          borderRadius: responsiveHeight(0.5),
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: responsiveHeight(9),
        },
      }}>
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          //pas sthe color prop to get the active or inactive color to icons/text.
          tabBarIcon: ({focused, color}) => {
            return (
              <View style={styles.iconBox}>
                <AntIcon name="home" size={responsiveHeight(3)} color={color} />
                <Text
                  style={[
                    styles.top,
                    {
                      color: color,
                    },
                  ]}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <BottomStack.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                <AntIcon name="user" size={responsiveHeight(3)} color={color} />
                <Text style={[styles.top, {color: color}]}>About</Text>
              </>
            );
          },
        }}
      />
      <BottomStack.Screen
        name="Add"
        component={Add}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <AntIcon name="plus" size={responsiveHeight(3)} color={color} />
            );
          },
          tabBarButton: props => {
            return <CustomTabButton {...props} />;
          },
        }}
      />
      <BottomStack.Screen
        name="Share"
        component={Share}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                <Icon name="share" size={responsiveHeight(3)} color={color} />
                <Text style={[styles.top, {color: color}]}>Share</Text>
              </>
            );
          },
        }}
      />
      <BottomStack.Screen
        name={'Notifications'}
        component={Notifications}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                <BellIcon
                  name="bell"
                  size={responsiveHeight(3)}
                  color={color}
                />
                <Text
                  numberOfLines={1}
                  style={[styles.top, {width: '60%', color: color}]}>
                  Notifications
                </Text>
              </>
            );
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTab;
