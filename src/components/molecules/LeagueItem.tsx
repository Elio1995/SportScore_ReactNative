import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FootballTeam, League} from '../../types';
import {useLazyGetFootballTeamsQuery} from '../../Redux/endpoints/endpoint';

type LeagueItemProps = {
  league: League;
};

const LeagueItem = ({league}: LeagueItemProps) => {
  const navigation = useNavigation();

  const [getFootballTeams, teamResult] = useLazyGetFootballTeamsQuery();

  useEffect(() => {
    getFootballTeams(undefined);
  }, []);

  const footballTeams = teamResult?.data?.data;

  const selectedTeams = (leagueFlag: String) =>
    footballTeams?.filter((team: FootballTeam) => {
      const teamsByLeague = team.flag === leagueFlag;
      return teamsByLeague;
    });

  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 12,
          borderBottomWidth: 2,
          borderBottomColor: 'black',
        }}
        onPress={() => {
          selectedTeams(league?.host?.flag),
            navigation.navigate('Teams', {
              teams: selectedTeams(league?.host?.flag),
              isLoading: teamResult.isLoading,
            });
        }}>
        <View
          style={{
            width: 40,
          }}>
          <Image
            source={{uri: league?.logo}}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </View>
        <View style={{width: 200}}>
          <Text style={{color: 'white'}}>{league?.name_translations?.en}</Text>
        </View>
        <View style={{width: 80, flexDirection: 'row', gap: 20}}>
          <Text style={{color: 'white', width: 20}}>
            {selectedTeams(league?.host?.flag)?.length}
          </Text>
          <Text style={{color: 'white', width: 15}}>1</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LeagueItem;
