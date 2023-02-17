import {View, Text} from 'react-native';
import React from 'react';
import {FootballTeam} from '../../types';

type TeamItemProps = {
  team: FootballTeam;
};

const TeamItem = ({team}: TeamItemProps) => {
  return (
    <View
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
};

export default TeamItem;
