import {StyleSheet} from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Metrics,
  TypographyStyles,
} from '../../../Themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.content,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 36,
  },
  headerTitle: {
    ...TypographyStyles.titleLarge,
    textTransform: 'uppercase',
    color: Colors.blue,
  },
  content: {
    // marginTop: 10,
  },
  tenorTitle: {
    fontSize: 12,
    color: Colors.gray1,
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -12,
  },
  amountValueText: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: 'bold',
  },
  minMaxAmountText: {
    color: Colors.gray1,
  },
  sliderThumb: {
    backgroundColor: Colors.blue,
    height: 24,
    width: 24,
    borderRadius: 20,
  },
  sliderTrack: {
    height: 8,
    borderRadius: 5,
  },
  tenor: {
    marginTop: 22,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray4,
  },
  selectMonthButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  interestRateTextTittle: {
    color: Colors.gray1,
  },
  interestRateTextDetail: {
    color: Colors.blue,
    fontStyle: 'italic',
    // fontWeight: 'bold',
  },
  interestRateView: {
    height: 30,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.black,
  },
  bankWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankView: {
    marginTop: 16,
    alignItems: 'center',
  },
  bankInfo: {
    color: Colors.gray1,
  },
  bankNameText: {
    color: Colors.blue,
    fontWeight: 'bold',
  },
  bankLogo: {
    width: '100%',
    height: 80,
    marginTop: 50,
  },
  buttonWrapper: {
    marginTop: 80,
    backgroundColor: Colors.blue,
    width: 120,
    height: 50,
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
