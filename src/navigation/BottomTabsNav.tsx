/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FavouriteScreen from '../screens/FavouriteScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LiveScreen from '../screens/LiveScreen';
import {useLazyGetLiveEventsQuery} from '../Redux/endpoints/endpoint';
import {useEffect, useState} from 'react';
import {EventsLive} from '../types';

const Tab = createBottomTabNavigator();

function BottomTabsNav() {
  const opacityFocusedStyle = (focused: boolean) => {
    return {opacity: focused ? 1 : 0};
  };

  const [favourites, setFavourites] = useState<EventsLive[]>([]);
  const [getLiveEvents, eventResult] = useLazyGetLiveEventsQuery();

  useEffect(() => {
    getLiveEvents(undefined);
  }, []);

  const events = eventResult?.data?.data;

  const addToFavorite = (id: number) => {
    const data = events.find((event: EventsLive) => event.id === id);
    setFavourites([...favourites, data]);
  };

  const deleteToFavorite = (id: number) => {
    const deletedFavourite = favourites?.filter(
      (event: EventsLive) => event.id !== id,
    );
    setFavourites({favourites: deletedFavourite});
  };

  console.log('favourites', favourites);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#16181D',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Soccer"
        children={props => (
          <HomeScreen
            addToFavorite={addToFavorite}
            events={events}
            {...props}
          />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon name="football" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon name="tv-outline" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        children={props => (
          <FavouriteScreen
            favourites={favourites}
            deleteToFavorite={deleteToFavorite}
            {...props}
          />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon name="star-outline" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]} />
                  <Icon
                    name="person-circle-outline"
                    size={size}
                    color={color}
                  />
                </View>
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNav;
