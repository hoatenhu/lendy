import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import {HomeScreen} from '../Containers/HomeScreen';
import {ConfirmScreen} from '../Containers/ConfirmScreen';

// Type
import {MainStackType} from './Type/AppNavigationType';

// ----------------------- MAIN -----------------------

const MainStack = createStackNavigator<MainStackType>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <MainStack.Screen name={'ConfirmScreen'} component={ConfirmScreen} />
    </MainStack.Navigator>
  );
};

export {MainNavigator};
