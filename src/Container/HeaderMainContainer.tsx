import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
`;

const HeaderMainContainer = (props: any) => {
  return (
    <ViewMainHeader>
      <View style={{width: '70%', justifyContent: 'center'}}>
        {props.menuState === 'football' && <TextStyle>Football</TextStyle>}
        {props.menuState === 'basketball' && <TextStyle>Basketball</TextStyle>}
        {props.menuState === 'tennis' && <TextStyle>Tennis</TextStyle>}
        {props.menuState === 'handball' && <TextStyle>Handball</TextStyle>}
        {props.menuState === 'volleyball' && <TextStyle>Volleyball</TextStyle>}
      </View>
      <View
        style={{
          flex: 1,
          gap: 20,
          width: '30%',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.setMenuState('football');
          }}>
          <Icon name="calendar-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setMenuState('football');
          }}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </ViewMainHeader>
  );
};

export default HeaderMainContainer;
