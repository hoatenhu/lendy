import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  PixelRatio,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Animated,
  Easing,
  Button,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Styles/WeatherHomeStyles';
import icons from '../../Themes/Image';

import AmountActions from '../../Redux/AmountRedux';

import {getCurrentLocation} from '../../Functions/LocationFunction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RootState} from '../../Types/RootState';
import {usePrevious} from '../../Hooks';

const spinValue = new Animated.Value(0);
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

  // handle data
  const temp = Math.round(weatherData?.list[0].main.temp - 273);
  const location = weatherData?.city.name;

  const tempDays = weatherData?.list.map((item: any) => ({
    day: new Date(item.dt * 1e3).toLocaleString('en-us', {weekday: 'long'}),
    temp: Math.round(item.main.temp - 273),
  }));
  let pre = {} as any;
  tempDays?.forEach(function (ob: any) {
    pre[ob.day] =
      pre[ob.day] === undefined
        ? ob
        : Array.isArray(pre[ob.day])
        ? pre[ob.day].concat([ob])
        : [pre[ob.day]].concat([ob]);
  });
  const avgPre = Object.values(pre);
  const avgTempDays = avgPre.map((item: any) => {
    const initialValue = 0;
    const sumWithInitial = Array.isArray(item)
      ? item.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue.temp,
          initialValue,
        )
      : item.temp;
    return {
      day: item.day ?? item[0].day,
      temp: Math.round(sumWithInitial / item.length),
    };
  });
  const now = new Date().toLocaleString('en-us', {
    weekday: 'long',
  });
  const data =
    now === avgTempDays?.[0]?.day
      ? avgTempDays.slice(1, 5)
      : avgTempDays.slice(0, 4);
  const getLocation = () => {
    getCurrentLocation((position: {lat: number; lng: number}) => {
      setCurrentPosition(position);
      dispatch(AmountActions.getWeatherRequest(position ?? currentPosition));
    });
  };

  const handleRetry = () => {
    getLocation();
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

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

  const spin = spinValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: ['0deg', '360deg'],
  });

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
            <Animated.View elevation={15} style={styles.next4DaysWrapper}>
              <FlatList
                style={styles.content}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item, index}) => (
                  <View style={styles.weatherItem}>
                    <Text style={styles.itemText}>{item.day}</Text>
                    <Text style={styles.itemText}>{`${item.temp} C`}</Text>
                  </View>
                )}
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
