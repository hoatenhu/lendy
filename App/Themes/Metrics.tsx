import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');

// Used via Metrics.baseMargin
const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  halfTripleBaseMargin: 15,
  doubleBaseMargin: 20,
  halfQuintupleBaseMargin: 25,
  tripleBaseMargin: 30,
  quadrupleBaseMargin: 40,
  quintupleBaseMargin: 50,
  screenWidth: width,
  screenHeight: height,

  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
};

export default metrics;
