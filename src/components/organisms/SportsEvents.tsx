import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SportsEvents = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: '#16181d',
      }}>
      <TouchableOpacity style={{width: 40, justifyContent: 'center'}}>
        <Icon name="star-outline" size={20} color="white" />
      </TouchableOpacity>

      <View style={{width: 120}}>
        <Text style={{color: 'white'}}>{props.event?.home_team?.name}</Text>
        <Text style={{color: 'white'}}>{props.event?.away_team?.name}</Text>
      </View>
      <View style={{width: 50, justifyContent: 'center'}}>
        <Text style={{color: 'white', alignSelf: 'center'}}>TV</Text>
      </View>
      <View style={{width: 60}}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'flex-end',
          }}>
          {props.event?.home_score?.current}:{props.event?.away_score?.current}
        </Text>
        <Text style={{color: 'white', alignSelf: 'flex-end'}}>
          {props.event.status_more}
        </Text>
      </View>
    </View>
  );
};

export default SportsEvents;
