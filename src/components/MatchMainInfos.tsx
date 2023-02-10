import {View, Text} from 'react-native';
import React from 'react';

const MatchMainInfos = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
      }}>
      <View style={{width: 40}}>
        <Text style={{color: 'white'}}>Star</Text>
      </View>
      <View style={{width: 120}}>
        <Text style={{color: 'white'}}>Portugal</Text>
        <Text style={{color: 'white'}}>England</Text>
      </View>
      <View style={{width: 50}}>
        <Text style={{color: 'white'}}>TV</Text>
      </View>
      <View style={{width: 80}}>
        <Text style={{color: 'white'}}>1:0</Text>
        <Text style={{color: 'white'}}>1st half 26`</Text>
      </View>
    </View>
  );
};

export default MatchMainInfos;
