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
    marginVertical: responsiveHeight(2),
  },
  imageBox: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: responsiveHeight(10),
  },
  boxConatiner: {
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    flex: 1,
    //0.3,
  },
  secondBox: {
    flex: 1,
    //0.3,
    // width: '100%',
    // height: '40%',
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
  portraitStyle: {
    flexDirection: 'column',
    backgroundColor: 'red',
    flex: 1,
  },
  landscapeStyle: {
    flexDirection: 'row',
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'space-between',
  },
  row1: {
    flexDirection: 'row',
  },
  column1: {
    flexDirection: 'column',
  },
  newBox1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  newBox2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section1: {
    //flex: 1,

    backgroundColor: '#ECBDC4',
    borderRadius: responsiveHeight(1.5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    height: responsiveHeight(29),
  },
  section2: {
    // flex: 1,
    backgroundColor: '#E18AAA',
    borderRadius: responsiveHeight(1.5),
    height: responsiveHeight(29),
    paddingLeft: responsiveHeight(2),
  },
  addTop: {
    //marginTop: responsiveHeight(2),
  },
  addLeft: {
    marginLeft: responsiveHeight(2),
  },
  cubes: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    backgroundColor: '#E2F0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cube2: {
    backgroundColor: '#B5EAD7',
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box4: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  box5: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    backgroundColor: '#C7CEEA',
    marginLeft: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box6: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    borderRadius: responsiveHeight(5),
    alignItems: 'center',
    backgroundColor: '#898FAD',
    justifyContent: 'center',
  },
  circle2: {
    height: responsiveHeight(8),
    width: responsiveHeight(8),
    borderRadius: responsiveHeight(5),
    alignItems: 'center',
    backgroundColor: '#CDAED4',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  top: {
    marginVertical: responsiveHeight(2),
  },
});

export default styles;
