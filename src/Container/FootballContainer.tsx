import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import LeagueMainInfos from '../components/LeagueMainInfos';
import HeaderMainContainer from './HeaderMainContainer';

const ViewMain = styled.View`
  width: 85%;
  height: 100%;
`;

const ViewMainInfo = styled.View`
  height: 90%;
  margin: 10px;
  border-radius: 10px;
`;

const FootballContainer = (props: any) => {
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
          <LeagueMainInfos />
        </ScrollView>
      </ViewMainInfo>
    </ViewMain>
  );
};

export default FootballContainer;
