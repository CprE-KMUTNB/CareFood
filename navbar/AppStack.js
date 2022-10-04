import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MenuScreen from '../screen/MenuScreen';
import StatisticScreen from '../screen/StatisticScreen';
import ContactScreen from '../screen/ContactScreen';
import SettingScreen from '../screen/SettingScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false}}>
            <Drawer.Screen name='Home' component={HomeScreen} options={{
                drawerIcon: ({color}) => (
                    <Ionicons name='home-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
            <Drawer.Screen name='Menu' component={MenuScreen}/>
            <Drawer.Screen name='Statistic' component={StatisticScreen}/>
            <Drawer.Screen name='Contact' component={ContactScreen}/>
            <Drawer.Screen name='Setting' component={SettingScreen}/>
        </Drawer.Navigator>
    )
}

export default AppStack;