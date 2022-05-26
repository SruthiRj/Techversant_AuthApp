import {StyleSheet} from 'react-native';
import {responsiveHeight} from '../../Components/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  innerBox: {
    alignItems: 'center',
    // flex: 1,
    paddingTop: responsiveHeight(6),
    flexGrow: 1,
  },
  homeText: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },
  imageBox: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    borderRadius: responsiveHeight(10),
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
    backgroundColor: '#E8E3CC',
    borderRadius: 5,
    marginTop: responsiveHeight(10),
    // position: 'absolute',
    // bottom: responsiveHeight(20),
    // top: 0,
  },
  logoutText: {},
  outterView: {
    flex: 1,
    marginBottom: responsiveHeight(12),
  },
});

export default styles;
