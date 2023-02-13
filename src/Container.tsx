import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import LeagueMainInfos from './components/LeagueMainInfos';
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
          <ScrollView
            style={{
              height: 'auto',
              backgroundColor: '#292c30',
              borderRadius: 10,
            }}>
            <LeagueMainInfos />
          </ScrollView>
        </ViewMainInfo>
      </ViewMain>
    </ViewContainer>
  );
};

export default Container;
