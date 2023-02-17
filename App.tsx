import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';
import {StatusBar} from 'react-native';
import StackNavigatior from './src/navigation/StackNavigatior';

function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" />
      <StackNavigatior />
    </Provider>
  );
}

export default App;
