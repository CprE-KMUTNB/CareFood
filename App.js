import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStack from './navbar/AppStack';
import AuthStack from './navbar/AuthStack';


function App()  {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default App;
