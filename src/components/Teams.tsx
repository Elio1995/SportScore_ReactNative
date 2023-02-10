import React, {useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {useLazyGetFootballTeamsQuery} from '../Redux/endpoints/endpoint';
import {FootballTeam} from '../types';

const Teams = ({route}: any) => {
  const {teams} = route.params;

  console.log('teamssss', {teams});
  return (
    <>
      {teams?.map((team: FootballTeam, index: any) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 12,
              borderBottomWidth: 2,
              borderBottomColor: 'black',
            }}>
            <Text>{team.name}</Text>
          </View>
        );
      })}
    </>
  );
};

export default Teams;
