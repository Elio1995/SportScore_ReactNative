import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import MatchMainInfos from './components/MatchMainInfos';
import SideContainer from './Container/SideContainer';

const ViewContainer = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: black;
`;

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
const ViewMainInfoHeader = styled.View`
height:50px
  background-color: #16181d;
  padding: 10px;
  border-radius: 10px;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const Container = () => {
  //Create a state where you can change ViewMain, when soccer, put the soccer page with events. when tennis put tennis etc.
  return (
    <ViewContainer>
      <SideContainer />

      <ViewMain>
        <ViewMainHeader>
          <TextStyle>Soccer</TextStyle>
          <TextStyle>23</TextStyle>
          <TextStyle>12</TextStyle>
        </ViewMainHeader>
        <ViewMainInfo>
          <View
            style={{
              height: 'auto',
              marginBottom: 10,
              backgroundColor: '#292c30',
              borderRadius: 10,
            }}>
            <ViewMainInfoHeader>
              <TextStyle>World Cup</TextStyle>
            </ViewMainInfoHeader>
            <MatchMainInfos />
            <MatchMainInfos />
            <MatchMainInfos />
            <MatchMainInfos />
            <MatchMainInfos />
          </View>
          <View
            style={{
              height: '100%',
              backgroundColor: '#292c30',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white'}}>Leagueeeee</Text>
          </View>
        </ViewMainInfo>
      </ViewMain>
    </ViewContainer>
  );
};

export default Container;
