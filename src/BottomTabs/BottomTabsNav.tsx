import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FavouriteScreen from './FavouriteScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LiveScreen from './LiveScreen';

const Tab = createBottomTabNavigator();

function BottomTabsNav() {
  const opacityFocusedStyle = (focused: boolean) => {
    return {opacity: focused ? 1 : 0};
  };

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
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]}></View>
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
                  <View style={[opacityFocusedStyle(focused)]}></View>
                  <Icon name="tv-outline" size={size} color={color} />
                </View>
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View style={[opacityFocusedStyle(focused)]}></View>
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
                  <View style={[opacityFocusedStyle(focused)]}></View>
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
