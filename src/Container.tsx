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
      {menuState === 'football' && <FootballContainer />}
      {menuState === 'basketball' && <BasketballContainer />}
      {menuState === 'tennis' && <TennisContainer />}
      {menuState === 'handball' && <HandballContainer />}
      {menuState === 'volleyball' && <VolleyballContainer />}
    </ViewContainer>
  );
};

export default Container;
