import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  UIManager,
  Platform,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';
import BellIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableRipple, Text as RNText} from 'react-native-paper';

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
const RippleButton = ({children, onPress}) => {
  return (
    <TouchableRipple
      onPress={() => {
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress();
      }}
      style={{width: Dimensions.get('window').width / 5}}
      underlayColor="rgba(0, 0, 0, .32)"
      rippleColor="rgba(0, 0, 0, .32)">
      <>{children}</>
    </TouchableRipple>
  );
};

const BottomTab = () => {
  return (
    <BottomStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarActiveTintColor: '#cd077d',
        headerPressOpacity: 0.7,
        tabBarShowLabel: false,
        headerStyle: {
          shadowRadius: 1,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          elevation: 10,
          shadowOpacity: 0.1,
          shadowColor: 'black',
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#ffffff',
          shadowColor: 'black',
          shadowRadius: 3.5,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          elevation: 5,
          shadowOpacity: 0.25,
          borderRadius: responsiveHeight(0.5),
          alignItems: 'center',
          justifyContent: 'space-between',
          height: responsiveHeight(9),
          width: '100%',
          //Dimensions.get( 'window' ).width,
        },
      }}>
      <BottomStack.Screen
        name="Home"
        component={Home}
        shadowColor={'black'}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <>
                <AntIcon name="home" size={responsiveHeight(3)} color={color} />
                <RNText
                  style={[
                    styles.top,
                    {
                      color: color,
                    },
                  ]}>
                  Home
                </RNText>
              </>
            );
          },
          tabBarButton: props => {
            return <RippleButton {...props} />;
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
          tabBarButton: props => {
            return <RippleButton {...props} />;
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
          tabBarButton: props => {
            return <RippleButton {...props} />;
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
                <Text numberOfLines={1} style={[styles.top, {color: color}]}>
                  Notifications
                </Text>
              </>
            );
          },
          tabBarButton: props => {
            return <RippleButton {...props} />;
          },
        }}
      />
    </BottomStack.Navigator>
  );
};

export default BottomTab;
