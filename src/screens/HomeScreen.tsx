import React, {useState} from 'react';
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

const HomeScreen = () => {
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

export default HomeScreen;
