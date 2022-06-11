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

const fakeData = [
  1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 4, 5,
  6, 7, 8, 9,
];

const HomeScreen = () => {
  const [amount, setAmount] = useState<number>(3);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handePull = (value: any) => {
    setAmount(value);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
          minimumValue={3}
          maximumValue={20}
          step={1}
          thumbStyle={styles.sliderThumb}
          trackStyle={styles.sliderTrack}
          minimumTrackTintColor={Colors.blue}
          maximumTrackTintColor={Colors.fadeBlue}
          value={amount}
          onValueChange={handePull}
        />
        <View style={styles.amountWrapper}>
          <Text style={styles.minMaxAmountText}>3tr</Text>
          <Text style={styles.minMaxAmountText}>20tr</Text>
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
          <Text style={styles.interestRateTextDetail}>19,9 %</Text>
        </View>
        <View style={styles.bankWrapper}>
          <Text style={styles.bankInfo}>Ngân hàng</Text>
          <Text style={{position: 'absolute', left: 98}}>:</Text>
          <Text style={styles.bankNameText}>Vietcombank</Text>
        </View>
        <Image
          style={styles.bankLogo}
          source={{
            uri: 'https://www.vietcombank.com.vn/images/logo30.png',
          }}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity
        delayPressIn={0}
        style={styles.buttonWrapper}
        onPress={() => {}}>
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
            data={fakeData}
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
