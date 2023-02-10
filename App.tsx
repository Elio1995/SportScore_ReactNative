import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import BottomTabsNav from './src/BottomTabs/BottomTabsNav';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const Stack = createStackNavigator();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '979a36c7camsh7f2351cd4644296p1a673bjsn0af29bb0089f',
    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
  },
};

fetch('https://sportscore1.p.rapidapi.com/sports/1/leagues', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTabsNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
export default MainApp;
