import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  useLazyGetFootballTeamsQuery,
  useLazyGetLeaguesQuery,
} from '../Redux/endpoints/endpoint';
import {FootballTeam, League} from '../types';

const LeagueMainInfos = () => {
  const navigation = useNavigation();
  const [getFootballTeams, teamResult] = useLazyGetFootballTeamsQuery();
  const [getLeagues, leagueResult] = useLazyGetLeaguesQuery();

  useEffect(() => {
    getLeagues(undefined);
    getFootballTeams(undefined);
  }, []);

  const footballTeams = teamResult?.data?.data;
  const leagues = leagueResult?.data?.data;

  console.log('teams', footballTeams);
  console.log('leagues', leagues);

  const selectedTeams = (leagueFlag: String) =>
    footballTeams?.filter((team: FootballTeam) => {
      const teamsByLeague = team.flag === leagueFlag;
      return teamsByLeague;
    });

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
            }}
            onPress={() => {
              selectedTeams(league?.host?.flag),
                navigation.navigate('Teams', {
                  teams: selectedTeams(league?.host?.flag),
                });
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
                {selectedTeams(league?.host?.flag)?.length}
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
