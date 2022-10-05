import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Nav = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={ProfileScreen} name='Profile'/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav;