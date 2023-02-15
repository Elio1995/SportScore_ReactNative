import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Home';
import BottomTabsNav from './src/BottomTabs/BottomTabsNav';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import Teams from './src/components/Teams';
import VideoPlayer from './src/screens/VideoPlayer';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          component={BottomTabsNav}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen
          name="VideoPlayer"
          options={{presentation: 'modal', headerShown: false}}
          component={VideoPlayer}
        />
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
