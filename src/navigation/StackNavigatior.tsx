import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsNav from './BottomTabsNav';
import VideoPlayer from '../screens/VideoPlayer';
import Teams from '../screens/Teams';

const Stack = createStackNavigator();

const StackNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={BottomTabsNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen
          name="VideoPlayer"
          options={{presentation: 'modal', headerShown: false}}
          component={VideoPlayer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatior;
