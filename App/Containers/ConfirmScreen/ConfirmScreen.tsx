import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Pressable,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './Styles/ConfirmScreenStyles';

const fakeData = [
  1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 4, 5,
  6, 7, 8, 9,
];

const ConfirmScreen = () => {
  const [name, setName] = useState<string>('Te');
  const [phone, setPhone] = useState<string>('');
  const [nationId, setNationId] = useState<string>('');
  const [province, setProvince] = useState<string>('');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChangeName = (value: string) => {
    setName(value);
  };
  const handleChangePhone = (value: string) => {
    setPhone(value);
  };
  const handleChangeNationId = (value: string) => {
    setNationId(value);
  };
  const handleChangeProvince = (value: string) => {
    setProvince(value);
  };
  const handleChangeMonthlyIncome = (value: string) => {
    setMonthlyIncome(value);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Xác nhận thông tin</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputWrapper}>
          <Text>Họ và tên</Text>
          <Text>:</Text>
          <TextInput
            value={name}
            onChangeText={handleChangeName}
            style={styles.nameInput}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Số điện thoại</Text>
          <Text>:</Text>
          <TextInput
            value={phone}
            onChangeText={handleChangePhone}
            style={styles.nameInput}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text>Số CMND/CCCD</Text>
          <Text>:</Text>
          <TextInput
            value={nationId}
            onChangeText={handleChangeNationId}
            style={styles.nameInput}
          />
        </View>
        <TouchableOpacity
          delayPressIn={0}
          style={styles.selectProvinceWrapper}
          onPress={toggleModal}>
          <Text>Chọn Tỉnh/thành phố</Text>
          <View style={styles.selectProvinceTouch}>
            <Text>Thanh Hoá</Text>
            <Image
              style={styles.arrowRight}
              source={require('../../Assets/Icons/right-arrow.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.incomeWrapper}>
          <Text>Thu nhập hàng tháng</Text>
          <TextInput
            value={monthlyIncome}
            onChangeText={handleChangeMonthlyIncome}
            style={styles.incomeInput}
          />
        </View>
      </View>
      <TouchableOpacity
        delayPressIn={0}
        style={styles.buttonWrapper}
        onPress={() => {}}>
        <Text style={styles.buttonText}>Đăng ký vay</Text>
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

export default ConfirmScreen;
