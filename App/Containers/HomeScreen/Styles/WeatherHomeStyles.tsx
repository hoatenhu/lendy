import {StyleSheet, PixelRatio} from 'react-native';
import {Colors} from '../../../Themes';

const fontScaleSize = (sp: number) => sp * PixelRatio.getFontScale();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  fetchingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
  },
  loadingIcon: {
    height: 96,
    aspectRatio: 1,
  },
  todayWrapper: {
    paddingTop: 56,
    paddingBottom: 62,
    alignItems: 'center',
  },
  temperature: {
    fontSize: fontScaleSize(96),
    fontFamily: 'Roboto-Black',
    color: Colors.mainText,
    marginLeft: 26,
  },
  location: {
    fontSize: fontScaleSize(36),
    fontFamily: 'Roboto-Thin',
    color: Colors.blueText,
  },
  next4DaysWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  weatherItem: {
    flexDirection: 'row',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    color: Colors.mainText,
    fontSize: fontScaleSize(16),
  },

  errorContent: {
    alignItems: 'center',
    width: 324,
  },
  errorText: {
    fontSize: fontScaleSize(54),
    color: Colors.white,
    fontFamily: 'Roboto-Thin',
    textAlign: 'center',
  },
  errorButton: {
    marginTop: 46,
    width: 90,
    borderRadius: 2,
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: Colors.fadeBlack,
  },
  errorButtonText: {
    textTransform: 'uppercase',
    fontSize: fontScaleSize(16),
    color: Colors.white,
    fontFamily: 'Roboto-Regular',
  },
});
