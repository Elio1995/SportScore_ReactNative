import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import {FootballTeam} from '../types';

const Teams = ({route}: any) => {
  const {teams} = route.params;

  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default Teams;
