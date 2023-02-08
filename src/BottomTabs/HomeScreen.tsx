import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>Open drawer</Text>
      </TouchableOpacity>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
