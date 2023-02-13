import React from 'react';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import LeagueMainInfos from '../components/LeagueMainInfos';
import HeaderMainContainer from './HeaderMainContainer';

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
          <TextStyle>Basketball Container</TextStyle>
        </ScrollView>
      </ViewMainInfo>
    </ViewMain>
  );
};

export default BasketballContainer;
