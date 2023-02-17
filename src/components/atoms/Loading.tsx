import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator
        style={{
          width: 70,
          height: 70,
        }}
        size="large"
        color="#ffffff"
      />
    </View>
  );
};

export default Loading;
