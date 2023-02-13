import React, {useEffect} from 'react';
import {useLazyGetTeamsQuery} from '../Redux/endpoints/endpoint';
import {Sport} from '../types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewSide = styled.View`
  width: 15%;
  background-color: #16181d;
`;

const TextStyle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const SideContainer = () => {
  const [getSports, result] = useLazyGetTeamsQuery();

  useEffect(() => {
    getSports(undefined);
  }, []);

  const sports = result?.data?.data;

  return (
    <ViewSide>
      <Icon name="football" size={25} color="red" />
      {sports?.map((sport: Sport, index: any) => {
        return (
          <TextStyle key={index} style={{color: 'white'}}>
            {sport.name}
          </TextStyle>
        );
      })}
    </ViewSide>
  );
};

export default SideContainer;
