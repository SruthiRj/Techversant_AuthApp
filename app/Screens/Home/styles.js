import React from 'react';
import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../Components/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    padding: 25,
  },
  innerBox: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: responsiveHeight(15),
  },
  homeText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: 'black',
    // marginTop: responsiveHeight(2),
  },
  welcome: {
    marginTop: responsiveHeight(1),
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  imageBox: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: responsiveHeight(10),
  },
  boxConatiner: {
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    flex: 0.3,
  },
  secondBox: {
    flex: 0.3,
    backgroundColor: '#86B6C9',
    marginTop: responsiveHeight(2),
    borderRadius: responsiveHeight(1.5),
  },
  box1: {
    flex: 1,
    backgroundColor: '#ECBDC4',
    borderRadius: responsiveHeight(1.5),
  },
  box2: {
    flex: 2,
    backgroundColor: '#E18AAA',
    marginLeft: responsiveHeight(2),
    borderRadius: responsiveHeight(1.5),
  },
});

export default styles;
