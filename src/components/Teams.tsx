import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

import {FootballTeam} from '../types';

const Teams = ({route}: any) => {
  const {teams, isLoading} = route.params;

  return (
    <ScrollView>
      {isLoading ? (
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
      ) : (
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
      )}
    </ScrollView>
  );
};

export default Teams;
