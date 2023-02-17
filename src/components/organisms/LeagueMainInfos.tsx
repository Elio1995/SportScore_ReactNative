import React, {useEffect} from 'react';
import Loading from '../atoms/Loading';
import LeagueItem from '../molecules/LeagueItem';
import {useLazyGetLeaguesQuery} from '../../Redux/endpoints/endpoint';
import {League} from '../../types';

const LeagueMainInfos = () => {
  const [getLeagues, leagueResult] = useLazyGetLeaguesQuery();

  useEffect(() => {
    getLeagues(undefined);
  }, []);

  const leagues = leagueResult?.data?.data;

  return (
    <>
      {leagueResult.isLoading ? (
        <Loading />
      ) : (
        <>
          {leagues?.map((league: League, index: any) => {
            return <LeagueItem league={league} key={index} />;
          })}
        </>
      )}
    </>
  );
};

export default LeagueMainInfos;
