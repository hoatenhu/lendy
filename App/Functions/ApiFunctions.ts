import {StatusBar, Platform} from 'react-native';

export function getErrorAPI(response: any) {
  return {
    message: response?.data?.message ?? 'Lost connection',
    statusCode: response?.data?.statusCode,
  };
}

export function setNetworkActivityStatusBar(isVisible = false) {
  if (Platform.OS === 'ios') {
    StatusBar.setNetworkActivityIndicatorVisible(isVisible);
  }
}
