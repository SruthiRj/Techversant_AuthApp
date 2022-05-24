import {StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from '../Responsive';

const styles = StyleSheet.create({
  customButton: {
    top: -responsiveHeight(3),
    width: responsiveHeight(8),
    height: responsiveHeight(8),
    borderRadius: responsiveHeight(10),
    backgroundColor: '#CFDFEF',
    shadowColor: 'black',
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  top: {
    paddingTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.5),
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigatorStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
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
    height: 90,
  },
  top1: {
    paddingTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.5),
    width: '60%',
  },
  header: {
    backgroundColor: 'green',
  },
});

export default styles;
