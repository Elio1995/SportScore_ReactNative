import React, {useState} from 'react';
import styled from 'styled-components/native';
import BasketballContainer from './Container/BasketballContainer';
import FootballContainer from './Container/FootballContainer';
import HandballContainer from './Container/HandballContainer';
import SideContainer from './Container/SideContainer';
import TennisContainer from './Container/TennisContainer';
import VolleyballContainer from './Container/VolleyballContainer';

const ViewContainer = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: black;
`;

const Container = () => {
  const [menuState, setMenuState] = useState('football');
  return (
    <ViewContainer>
      <SideContainer setMenuState={setMenuState} />
      {menuState === 'football' && <FootballContainer menuState={menuState} />}
      {menuState === 'basketball' && (
        <BasketballContainer menuState={menuState} />
      )}
      {menuState === 'tennis' && <TennisContainer menuState={menuState} />}
      {menuState === 'handball' && <HandballContainer menuState={menuState} />}
      {menuState === 'volleyball' && (
        <VolleyballContainer menuState={menuState} />
      )}
    </ViewContainer>
  );
};

export default Container;
