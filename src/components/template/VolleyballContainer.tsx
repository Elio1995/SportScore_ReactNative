import React from 'react';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import {EventsLive} from '../../types';
import HeaderMainContainer from '../molecules/HeaderMainContainer';
import SportsEvents from '../organisms/SportsEvents';

const ViewMain = styled.View`
  width: 85%;
  height: 100%;
`;

const ViewMainInfo = styled.View`
  height: 90%;
  margin: 10px;
  border-radius: 10px;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
  align-self: center;
`;

const VolleyballContainer = (props: any) => {
  const voleyballLiveGames = props.events?.filter((event: EventsLive) => {
    return event.sport.name === 'Voleyball';
  });

  return (
    <ViewMain>
      <HeaderMainContainer menuState={props.menuState} />
      <ViewMainInfo>
        <ScrollView
          style={{
            height: 'auto',
            backgroundColor: '#292c30',
            borderRadius: 10,
          }}>
          {voleyballLiveGames.length === 0 ? (
            <Text style={{color: 'white'}}>
              There is no voleyball match on live.
            </Text>
          ) : (
            voleyballLiveGames.map((event: any, index: any) => {
              return <SportsEvents key={index} event={event} />;
            })
          )}
        </ScrollView>
      </ViewMainInfo>
    </ViewMain>
  );
};

export default VolleyballContainer;
