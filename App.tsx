import 'react-native-gesture-handler';
import React from 'react';
import store from './scr/redux/app_store/store';
import { Provider } from 'react-redux';
import { AppStack } from './scr/stacks';
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
