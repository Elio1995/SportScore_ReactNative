import React from 'react';
import styled from 'styled-components/native';

const ViewMainHeader = styled.View`
  flex-direction: row;
  height: 10%
  background-color: #16181d;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
  align-self: center;
`;

const HeaderMainContainer = (props: any) => {
  return (
    <ViewMainHeader>
      {props.menuState === 'football' && <TextStyle>Football</TextStyle>}
      {props.menuState === 'basketball' && <TextStyle>Basketball</TextStyle>}
      {props.menuState === 'tennis' && <TextStyle>Tennis</TextStyle>}
      {props.menuState === 'handball' && <TextStyle>Handball</TextStyle>}
      {props.menuState === 'volleyball' && <TextStyle>Volleyball</TextStyle>}
    </ViewMainHeader>
  );
};

export default HeaderMainContainer;
