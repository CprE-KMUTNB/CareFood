import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomDrawer';
import Octicons from 'react-native-vector-icons/Octicons';


import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MenuScreen from '../screen/MenuScreen';
import StatisticScreen from '../screen/StatisticScreen';
import ContactScreen from '../screen/ContactScreen';
import SettingScreen from '../screen/SettingScreen';
import EditProfileScreen from '../screen/EditProfileScreen';
import Menu_1 from '../screen/Menu_1';
import ActivityScreen from '../screen/ActivityScreen';
import Activity_1 from '../screen/Activity_1';
import LoginScreen from '../screen/LoginScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
        initialRouteName="Home"
        screenOptions={{headerShown: true,
            headerTitle: '',
            headerTransparent:true,
            
            drawerActiveBackgroundColor: '#CBA2A2',
            drawerActiveTintColor: 'white',
            drawerInactiveTintColor: 'black',
            drawerLabelStyle: {
                marginLeft:-15, 
                fontFamily:'NotoSansThai', 
                fontSize:16}
            }}>
            <Drawer.Screen name='หน้าแรก' component={HomeScreen} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='home' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='โปรไฟล์' component={ProfileScreen} style={{margin:20}} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='person' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='เมนูอาหาร' component={MenuScreen} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='heart' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='กิจกรรม' component={ActivityScreen} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='flame' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='สถิติ' component={StatisticScreen} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='graph' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name='ติดต่อ' component={ContactScreen}options={{
                drawerIcon: ({color}) => (
                    <Octicons name='mail' size={22} color={color}/>
                )
            }}/>
            {/* <Drawer.Screen style={{top:50}}  name='Setting' component={SettingScreen} options={{
                drawerIcon: ({color}) => (
                    <Octicons name='gear' size={22} color={color}/>
                )
            }} /> */}
            <Drawer.Screen name='EditProfile' component={EditProfileScreen} options={{
                drawerItemStyle: { display: 'none' }
            }}/>
            <Drawer.Screen name='Menu_1' component={Menu_1} options={{
                drawerItemStyle: { display: 'none' }
            }}/>
            <Drawer.Screen name='Activity_1' component={Activity_1} options={{
                drawerItemStyle: { display: 'none' }
            }}/>
            
        </Drawer.Navigator>
    )
}




export default AppStack;