import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useLazyGetLeaguesQuery} from '../Redux/endpoints/endpoint';
import {League} from '../types';

const LeagueMainInfos = () => {
  const [getLeagues, result] = useLazyGetLeaguesQuery();

  useEffect(() => {
    getLeagues(undefined);
  }, []);

  const leagues = result?.data?.data;

  console.log('leagues', leagues);
  return (
    <>
      {leagues?.map((league: League, index: any) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 12,
              borderBottomWidth: 2,
              borderBottomColor: 'black',
            }}>
            <View
              style={{
                width: 40,
              }}>
              <Image
                source={{uri: league.logo}}
                style={{
                  height: 25,
                  width: 25,
                }}
              />
            </View>
            <View style={{width: 200}}>
              <Text style={{color: 'white'}}>
                {league.name_translations.en}
              </Text>
            </View>
            <View style={{width: 80, flexDirection: 'row', gap: 20}}>
              <Text style={{color: 'white', width: 20}}>
                {league.most_count === null ? 0 : league.most_count}
              </Text>
              <Text style={{color: 'white', width: 15}}>1</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default LeagueMainInfos;
