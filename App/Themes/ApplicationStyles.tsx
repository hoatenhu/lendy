import {StyleSheet} from 'react-native';

import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = {
  backgroundColor: Colors.white,
  safeArea: {
    flex: 1,
    width: '100%',
  },
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    content: {
      flex: 1,
      padding: Metrics.doubleBaseMargin,
    },
    space: {
      flex: 1,
    },
    shadow: {
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    shadow1: {
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3,

      elevation: 3,
    },
  },
};

const TypographyStyles = StyleSheet.create({
  titleModal: {
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 36,
    lineHeight: 40,
    fontFamily: 'san',
  },
  titleExtraLarge: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  titleLarge: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
  },
});

export {TypographyStyles};
export default ApplicationStyles;
