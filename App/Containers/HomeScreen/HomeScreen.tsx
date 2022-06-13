import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Styles/WeatherHomeStyles';
import icons from '../../Themes/Image';

import AmountActions from '../../Redux/AmountRedux';

import {getCurrentLocation} from '../../Functions/LocationFunction';
import {getWeatherData} from '../../Functions/WeatherFunctions';
import {RootState} from '../../Types/RootState';
import {usePrevious} from '../../Hooks';

const spinValue = new Animated.Value(0);
const spin = spinValue.interpolate({
  inputRange: [0, 0.5],
  outputRange: ['0deg', '360deg'],
});
const animated = new Animated.Value(320);

const defaultPosition = {
  lat: -20.98848161007417,
  lng: 55.29550896863393,
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState<any>(defaultPosition);

  const {weatherData, fetchingGetWeather, errorGetWeather} = useSelector(
    (state: RootState) => state.amount,
  );
  const preFetchingGetWeather = usePrevious(fetchingGetWeather);
  const fetchingDone = preFetchingGetWeather && !fetchingGetWeather;

  const temp = Math.round(weatherData?.list[0].main.temp - 273);
  const location = weatherData?.city.name;

  const curledUpAnimation = () =>
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

  const slideUpAnimation = () =>
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();

  const getLocation = () => {
    getCurrentLocation((position: {lat: number; lng: number}) => {
      setCurrentPosition(position);
      dispatch(AmountActions.getWeatherRequest(position ?? currentPosition));
    });
  };

  const handleRetry = () => {
    getLocation();
    curledUpAnimation();
  };

  const renderTempDays = ({item, index}: any) => (
    <View key={`temp_day_key_${index}`} style={styles.weatherItem}>
      <Text style={styles.itemText}>{item.day}</Text>
      <Text style={styles.itemText}>{`${item.temp} C`}</Text>
    </View>
  );

  useEffect(() => {
    getLocation();
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    slideUpAnimation();
  }, []);

  return (
    <View
      style={[
        styles.container,
        !fetchingDone && styles.fetchingContainer,
        errorGetWeather && styles.errorContainer,
      ]}>
      {fetchingDone ? (
        errorGetWeather ? (
          <View style={styles.errorContent}>
            <Text style={styles.errorText}>
              Something went wrong at our end
            </Text>
            <TouchableOpacity
              delayPressIn={0}
              style={styles.errorButton}
              onPress={handleRetry}>
              <Text style={styles.errorButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.todayWrapper}>
              <Text style={styles.temperature}>{`${temp}°`}</Text>
              <Text style={styles.location}>{location}</Text>
            </View>
            <Animated.View
              elevation={15}
              style={[
                {transform: [{translateY: animated}]},
                styles.next4DaysWrapper,
              ]}>
              <FlatList
                style={styles.content}
                showsVerticalScrollIndicator={false}
                data={getWeatherData(weatherData)}
                renderItem={renderTempDays}
              />
            </Animated.View>
          </>
        )
      ) : (
        <Animated.Image
          style={[styles.loadingIcon, {transform: [{rotate: spin}]}]}
          source={icons.icon}
        />
      )}
    </View>
  );
};

export default HomeScreen;
