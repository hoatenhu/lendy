import React from 'react';
import {HomeScreen} from './HomeScreen';
import {ConfirmScreen} from './ConfirmScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

// Redux
import store from '../Redux';

import RootContainer from './RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
