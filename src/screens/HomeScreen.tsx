import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import BasketballContainer from '../components/template/BasketballContainer';
import FootballContainer from '../components/template/FootballContainer';
import HandballContainer from '../components/template/HandballContainer';
import SideContainer from '../components/organisms/SideContainer';
import TennisContainer from '../components/template/TennisContainer';
import VolleyballContainer from '../components/template/VolleyballContainer';
import {useLazyGetLiveEventsQuery} from '../Redux/endpoints/endpoint';

const ViewContainer = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: black;
`;

const HomeScreen = () => {
  const [menuState, setMenuState] = useState('football');
  const [getLiveEvents, eventResult] = useLazyGetLiveEventsQuery();

  useEffect(() => {
    getLiveEvents(undefined);
  }, []);

  const events = eventResult?.data?.data;

  return (
    <ViewContainer>
      <SideContainer setMenuState={setMenuState} />
      {menuState === 'football' && <FootballContainer menuState={menuState} />}
      {menuState === 'basketball' && (
        <BasketballContainer menuState={menuState} events={events} />
      )}
      {menuState === 'tennis' && (
        <TennisContainer menuState={menuState} events={events} />
      )}
      {menuState === 'handball' && (
        <HandballContainer menuState={menuState} events={events} />
      )}
      {menuState === 'volleyball' && (
        <VolleyballContainer menuState={menuState} events={events} />
      )}
    </ViewContainer>
  );
};

export default HomeScreen;
