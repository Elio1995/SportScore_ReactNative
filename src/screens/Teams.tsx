import React from 'react';
import {ScrollView} from 'react-native';
import {FootballTeam} from '../types';
import Loading from '../components/atoms/Loading';
import TeamItem from '../components/molecules/TeamItem';

const Teams = ({route}: any) => {
  const {teams, isLoading} = route.params;

  return (
    <ScrollView>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {teams?.map((team: FootballTeam, index: any) => {
            return <TeamItem key={index} team={team} />;
          })}
        </>
      )}
    </ScrollView>
  );
};

export default Teams;
