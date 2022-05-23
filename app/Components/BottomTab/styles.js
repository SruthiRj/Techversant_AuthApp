import {StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight} from '../Responsive';

const styles = StyleSheet.create({
  customButton: {
    // position: 'absolute',
    top: -responsiveHeight(3),
    width: responsiveHeight(7),
    height: responsiveHeight(7),
    borderRadius: responsiveHeight(10),
    backgroundColor: '#CFDFEF',
    shadowColor: '#7F5DF0',
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTab: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'red',
    shadowColor: '#7F5DF0',
    shadowRadius: 3.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 5,
  },
  top: {
    paddingTop: responsiveHeight(1),
    fontSize: responsiveFontSize(1.5),
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#CFDFEF',
  },
  navigatorStyle: {
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
    height: 90,
  },
});

export default styles;
