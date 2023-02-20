import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import LeagueMainInfos from '../organisms/LeagueMainInfos';
import HeaderMainContainer from '../molecules/HeaderMainContainer';
import SportsEvents from '../organisms/SportsEvents';
import {EventsLive} from '../../types';

const ViewMain = styled.View`
  width: 85%;
  height: 100%;
`;

const ViewMainHeader = styled.View`
  flex-direction: row;
  height: 10%
  background-color: #16181d;
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

const BasketballContainer = (props: any) => {
  const basketballLiveGames = props.events?.filter((event: EventsLive) => {
    return event.sport.name === 'Basketball';
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
          {basketballLiveGames?.length === 0 ? (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                alignSelf: 'center',
                marginTop: 20,
              }}>
              There is no basketball match on live.
            </Text>
          ) : (
            basketballLiveGames?.map((event: any, index: any) => {
              return <SportsEvents key={index} event={event} />;
            })
          )}
        </ScrollView>
      </ViewMainInfo>
    </ViewMain>
  );
};

export default BasketballContainer;
