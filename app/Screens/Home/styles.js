import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../Components/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'white',
  },
  innerBox: {
    alignItems: 'center',
    flex: 1,
    paddingTop: responsiveHeight(15),
  },
  homeText: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '600',
    color: 'black',
  },
  welcome: {
    marginTop: responsiveHeight(1),
  },
  row: {
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
    marginTop: responsiveHeight(3),
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
  column: {
    flexDirection: 'column',
  },
});

export default styles;
