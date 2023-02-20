import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import BasketballContainer from '../components/template/BasketballContainer';
import FootballContainer from '../components/template/FootballContainer';
import HandballContainer from '../components/template/HandballContainer';
import SideContainer from '../components/organisms/SideContainer';
import TennisContainer from '../components/template/TennisContainer';
import VolleyballContainer from '../components/template/VolleyballContainer';

const ViewContainer = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: black;
`;

const HomeScreen = (props: any) => {
  const [menuState, setMenuState] = useState('football');

  return (
    <ViewContainer>
      <SideContainer setMenuState={setMenuState} />
      {menuState === 'football' && <FootballContainer menuState={menuState} />}
      {menuState === 'basketball' && (
        <BasketballContainer menuState={menuState} events={props.events} />
      )}
      {menuState === 'tennis' && (
        <TennisContainer
          menuState={menuState}
          events={props.events}
          addToFavorite={props.addToFavorite}
        />
      )}
      {menuState === 'handball' && (
        <HandballContainer menuState={menuState} events={props.events} />
      )}
      {menuState === 'volleyball' && (
        <VolleyballContainer menuState={menuState} events={props.events} />
      )}
    </ViewContainer>
  );
};

export default HomeScreen;
