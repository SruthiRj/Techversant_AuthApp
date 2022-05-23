import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../Components/Responsive';

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 20},
  heading: {
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
    fontSize: responsiveFontSize(1.6),
    fontWeight: '700',
  },
  textField: {
    height: responsiveHeight(7),
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderColor: '#F5F5F5',
  },
  top: {
    marginTop: responsiveHeight(2),
  },
  button: {
    backgroundColor: '#E8E3CC',
    marginTop: responsiveHeight(5),
    alignItems: 'center',
    padding: responsiveHeight(2),
    borderRadius: 10,
  },
});

export default styles;
