import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, screenTracking} from './NavigationAction';

// Screen
import {MainNavigator} from './AppNavigationStack';

// Type
import {AppStackType} from './Type/AppNavigationType';

const AppStack = createStackNavigator<AppStackType>();

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AppStack.Screen name="Main" component={MainNavigator} />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
