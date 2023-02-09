import React from 'react';
import styled from 'styled-components/native';
import SideContainer from './Container/SideContainer';

const ViewContainer = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: black;
`;

const ViewMain = styled.View`
  width: 85%;
`;

const ViewMainHeader = styled.View`
  flex-direction: row;
  height: 60px;
  background-color: #16181d;
`;

const ViewMainInfo = styled.View`
  height: 100%;
  background-color: #292c30;
  margin: 10px;
  border-radius: 10px;
`;
const ViewMainInfoHeader = styled.View`
  height: 50px;
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
          <ViewMainInfoHeader>
            <TextStyle>World Cup</TextStyle>
          </ViewMainInfoHeader>
          <TextStyle>23</TextStyle>
          <TextStyle>12</TextStyle>
        </ViewMainInfo>
      </ViewMain>
    </ViewContainer>
  );
};

export default Container;
