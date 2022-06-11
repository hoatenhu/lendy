import React from 'react';
import {HomeScreen} from './HomeScreen';
import {ConfirmScreen} from './ConfirmScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
