import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackType = {
  HomeScreen: {type: string} | undefined;
  ConfirmScreen: {type: string} | undefined;
};

export type AppStackType = {
  Main: NavigatorScreenParams<MainStackType>;
};
