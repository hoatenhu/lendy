import {PixelRatio} from 'react-native';

const type = PixelRatio.get();
const images = {
  mdpiLoading: require('../Assets/Icons/drawable-mdpi/ic_loading.png'),
  hdpiLoading: require('../Assets/Icons/drawable-ldpi/ic_loadingl.png'),
  xhdpiLoading: require('../Assets/Icons/drawable-xhdpi/ic_loading.png'),
  xxhdpiLoading: require('../Assets/Icons/drawable-xxhdpi/ic_loading.png'),
  xxxhpiLoading: require('../Assets/Icons/drawable-xxxhdpi/ic_loading.png'),
};

const getRequire = (type: number) => {
  if (type <= 1.5) {
    return images.mdpiLoading;
  }
  if (type <= 2) {
    return images.hdpiLoading;
  }
  if (type <= 3) {
    return images.xhdpiLoading;
  }
  if (type <= 3.5) {
    return images.xxhdpiLoading;
  }
  return images.xxxhpiLoading;
};

const icons = {
  icon: getRequire(type),
};

export default icons;
