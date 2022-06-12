import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import Modal from 'react-native-modal';
import styles from './Styles/HomeScreenStyles';
import {Colors} from '../../Themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {range} from 'ramda';

const fakeData = {
  min_amount: 30000000,
  max_amount: 100000000,
  min_tenor: 6,
  max_tenor: 18,
  interest_rate: 19.99,
  bank: {
    name: 'Vietcombank',
    logo: 'https://www.vietcombank.com.vn/images/logo30.png',
  },
};

const HomeScreen = () => {
  const {min_amount, max_amount, min_tenor, max_tenor, interest_rate, bank} =
    fakeData;
  const {name, logo} = bank;
  const minAmount = Math.floor(min_amount / 1e6);
  const maxAmount = Math.floor(max_amount / 1e6);
  const a = range(min_tenor, max_tenor);

  const [amount, setAmount] = useState<number>(
    Math.floor((minAmount + maxAmount) / 2),
  );
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const navigation = useNavigation<any>();

  const handePull = (value: any) => {
    setAmount(value);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePressContinue = () => {
    navigation.navigate('ConfirmScreen');
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chọn khoản vay</Text>
      </View>
      <View style={styles.content}>
        <Text>Số tiền vay</Text>
        <View>
          <Text style={styles.amountValueText}>{`${amount}.000.000`}</Text>
        </View>
        <Slider
          animateTransitions
          minimumValue={minAmount}
          maximumValue={maxAmount}
          step={1}
          thumbStyle={styles.sliderThumb}
          trackStyle={styles.sliderTrack}
          minimumTrackTintColor={Colors.blue}
          maximumTrackTintColor={Colors.fadeBlue}
          value={amount}
          onValueChange={handePull}
        />
        <View style={styles.amountWrapper}>
          <Text style={styles.minMaxAmountText}>{`${minAmount}tr`}</Text>
          <Text style={styles.minMaxAmountText}>{`${maxAmount}tr`}</Text>
        </View>
        <View style={styles.tenor}>
          <Text style={styles.tenorTitle}>Thời hạn</Text>
          <TouchableOpacity
            delayPressIn={0}
            style={styles.selectMonthButton}
            onPress={toggleModal}>
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
          <Text style={{position: 'absolute', left: 98}}>:</Text>
          <Text
            style={styles.interestRateTextDetail}>{`${interest_rate}%`}</Text>
        </View>
        <View style={styles.bankWrapper}>
          <Text style={styles.bankInfo}>Ngân hàng</Text>
          <Text style={{position: 'absolute', left: 98}}>:</Text>
          <Text style={styles.bankNameText}>{name}</Text>
        </View>
        <Image
          style={styles.bankLogo}
          source={{
            uri: logo,
          }}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        delayPressIn={0}
        style={styles.buttonWrapper}
        onPress={handlePressContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        useNativeDriver
        hideModalContentWhileAnimating
        animationOutTiming={10}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'red',
          }}
          onPress={toggleModal}
        />
        <View style={{height: 360, backgroundColor: 'green'}}>
          <FlatList
            data={a}
            renderItem={({item, index}) => (
              <Text key={`month_key${index}`}>{item}</Text>
            )}
          />
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default HomeScreen;
