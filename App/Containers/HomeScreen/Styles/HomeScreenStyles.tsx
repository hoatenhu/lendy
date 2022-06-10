import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, TypographyStyles} from '../../../Themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.content,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  headerTitle: {
    ...TypographyStyles.titleExtraLarge,
    textTransform: 'uppercase',
    color: Colors.orginal,
  },
  content: {},
  tenorTitle: {
    fontSize: 12,
    color: Colors.gray2,
  },
  tenor: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3,
  },
  selectMonthButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 30,
    width: '100%',
    flexDirection: 'row',
  },
  month: {
    fontSize: 15,
    color: Colors.black,
  },

  arrowRight: {
    tintColor: Colors.gray1,
    width: 12,
    height: 12,
  },
  interestRateWrapper: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  interestRateTextTittle: {
    color: Colors.black,
  },
  interestRateTextDetail: {
    color: Colors.lightBlue,
  },
  interestRateView: {
    height: 36,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.lightBlue,
  },
  bankLogo: {
    // width: 120,
    height: 80,
  },
});
