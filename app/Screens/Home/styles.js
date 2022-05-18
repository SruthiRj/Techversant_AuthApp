import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25,
  },
  innerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  homeText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },
  imageBox: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  textStyle: {
    marginTop: 15,
    color: 'black',
    fontWeight: '500',
    fontSize: 22,
  },
  emailStyle: {
    marginTop: 5,
    color: 'black',
  },
  logout: {
    padding: 10,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'grey',
    //  marginTop: 30,
    borderRadius: 5,
    position: 'absolute',
    bottom: 50,
  },
  logoutText: {
    color: 'white',
  },
});

export default styles;
