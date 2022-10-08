import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

<<<<<<< Updated upstream
import AppStack from './navbar/AppStack';
=======

import { AuthProvider } from './context/AuthContext';
import AppNav from './navbar/AppNav';
>>>>>>> Stashed changes


function App()  {
  return (
<<<<<<< Updated upstream
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
=======
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
>>>>>>> Stashed changes
  );
}

export default App;
