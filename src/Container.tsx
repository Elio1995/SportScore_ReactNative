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

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '82f3075388mshc3f883323500a8ep12ffd3jsn69497014d19e',
    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
  },
};

fetch('https://sportscore1.p.rapidapi.com/sports/1/teams?page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

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
