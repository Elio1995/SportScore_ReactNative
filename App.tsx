/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import Notifications from './src/Notifications';
// import DrawerNav from './src/Drawer/DrawerNav';
import BottomTabsNav from './src/BottomTabs/BottomTabsNav';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTabsNav}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Drawer"
          component={DrawerNav}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainApp() {
  return <App />;
}
export default MainApp;
