import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import styles from './Styles/HomeScreenStyles';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Chọn khoản vay</Text>
    </View>
    <View style={styles.content}>
      <Text>Hạn mức</Text>
      <View
        style={{
          backgroundColor: 'red',
          height: 30,
        }}></View>
      <View style={styles.tenor}>
        <Text style={styles.tenorTitle}>Thời hạn</Text>
        <TouchableOpacity delayPressIn={0} style={styles.selectMonthButton}>
          <Text style={styles.month}>9 tháng</Text>
          <Image
            style={styles.arrowRight}
            source={require('../../Assets/Icons/right-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.interestRateWrapper}>
        <Text style={styles.interestRateTextTittle}>Lãi suất / năm</Text>
        <View style={styles.interestRateView}>
          <Text style={styles.interestRateTextDetail}>19,9 %</Text>
        </View>
      </View>
      <View style={styles.bankWrapper}>
        <Text style={styles.bankTextTittle}>Ngân hàng</Text>
        <View style={styles.bankView}>
          <Text style={styles.bankTextDetail}>Vietcombank</Text>
          <Image
            style={styles.bankLogo}
            source={{
              uri: 'https://www.vietcombank.com.vn/images/logo30.png',
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
    <TouchableOpacity
      delayPressIn={0}
      style={{
        backgroundColor: 'orange',
        width: 120,
        height: 50,
        marginTop: 300,
        alignSelf: 'center',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {}}>
      <Text>Đăng ký vay</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
