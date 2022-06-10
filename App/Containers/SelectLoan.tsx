import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => (
  <View>
    <Text>Chọn số tiền và kỳ hạn</Text>
    <View style={{ backgroundColor: 'red', height: 30 }}></View>
    <Text>Số vay: </Text>
    <View style={{ backgroundColor: 'green', height: 30 }}></View>
    <Text>Kỳ hạn: </Text>
    <Text>Lãi suất: </Text>
    <View style={{ flexDirection: 'row' }}>
      <Text>name </Text>
      <View style={{ backgroundColor: 'gray', height: 50, width: 50 }} />
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
      onPress={() => { }}>
      <Text>Đăng ký vay</Text>
    </TouchableOpacity>
  </View>
);

export default App;
