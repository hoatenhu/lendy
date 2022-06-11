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
    marginBottom: 36,
  },
  headerTitle: {
    ...TypographyStyles.titleLarge,
    textTransform: 'uppercase',
    color: Colors.blue,
  },
  content: {},
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  selectProvinceWrapper: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3,
  },
  selectProvinceTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowRight: {
    tintColor: Colors.gray1,
    width: 12,
    height: 12,
  },
  backButton: {
    position: 'absolute',
    top: -7,
    left: -4,
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  arrowLeft: {
    transform: [{rotate: '180deg'}],
    tintColor: Colors.blue,
    width: 20,
    height: 20,
  },
  nameInput: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 10,
    textAlignVertical: 'bottom',
    textAlign: 'right',
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.gray3,
  },
  incomeWrapper: {
    marginTop: 24,
  },
  incomeInput: {
    fontWeight: '600',
    fontSize: 19,
    marginTop: -4,
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.gray3,
  },

  buttonWrapper: {
    marginTop: 252,
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
