import React from 'react';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';

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

const VolleyballContainer = () => {
  return (
    <ViewMain>
      <ViewMainHeader>
        <TextStyle>Volleyball</TextStyle>
      </ViewMainHeader>
      <ViewMainInfo>
        <ScrollView
          style={{
            height: 'auto',
            backgroundColor: '#292c30',
            borderRadius: 10,
          }}>
          <TextStyle>Volleyball Container</TextStyle>
        </ScrollView>
      </ViewMainInfo>
    </ViewMain>
  );
};

export default VolleyballContainer;
