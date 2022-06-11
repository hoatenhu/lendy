import React, {useEffect, useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';

// Navigation
import ReduxNavigation from '../Navigation';

// Redux
import {useDispatch} from 'react-redux';
import AppActions from '../Redux/AppRedux';

const RootContainer = () => {
  const dispatch = useDispatch();

  const appState = useRef<string>('');

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    dispatch(AppActions.setAppState(nextAppState));
    appState.current = nextAppState;
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return <ReduxNavigation />;
};

export default RootContainer;
