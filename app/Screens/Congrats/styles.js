import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../Components/Responsive';

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    fontSize: responsiveFontSize(3),
    // marginTop: responsiveHeight(20),
  },
  button: {
    width: responsiveHeight(30),
    borderRadius: responsiveHeight(10),
    paddingVertical: responsiveHeight(2),
    backgroundColor: '#7D96B0',
    alignItems: 'center',
    marginTop: responsiveHeight(15),
  },
});

export default styles;
