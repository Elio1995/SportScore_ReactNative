import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ViewSide = styled.View`
  width: 15%;
  background-color: #16181d;
  gap: 40px;
  align-items: center;
  padding-top: 15px;
`;

const SideContainer = (props: any) => {
  return (
    <ViewSide>
      <TouchableOpacity
        onPress={() => {
          props.setMenuState('football');
        }}>
        <Icon name="football" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setMenuState('basketball');
        }}>
        <Icon name="basketball" size={40} color="#F88158" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setMenuState('tennis');
        }}>
        <Icon name="tennisball" size={40} color="#ccff00" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setMenuState('handball');
        }}>
        <MaterialIcons name="sports-handball" size={40} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.setMenuState('volleyball');
        }}>
        <MaterialIcons name="sports-volleyball" size={40} color="white" />
      </TouchableOpacity>
    </ViewSide>
  );
};

export default SideContainer;
