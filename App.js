/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './screens/Home/index';
import Starter1 from './screens/Starter1/index';
import Starter2 from './screens/Starter1/index';
import History from './screens/Starter1/index';

const App: () => React$Node = () => {
  return (
    <>
      <Home />
      <Starter1 />
      <Starter2 />
      <History />
    </>
  );
};

export default App;
