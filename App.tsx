import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNav from './src/navigation/BottomTabsNav';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import Teams from './src/screens/Teams';
import VideoPlayer from './src/screens/VideoPlayer';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
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
    </>
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
