import React, {useContext} from "react";
import { View,Text, ImageBackground,Image, TouchableOpacity} from "react-native";
import { 
    DrawerContentScrollView, 
    DrawerItemList 
} from "@react-navigation/drawer";

import { AuthContext } from "../context/AuthContext";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {
    const {userInfo} = useContext(AuthContext);
    const {logout} = useContext(AuthContext);

    return(
        <View style={{flex:1, backgroundColor: '#CBA2A2'}}>
            <DrawerContentScrollView {...props}>
                <ImageBackground style={{padding: 20, marginTop: 60, marginLeft: 30, marginBottom: 20, marginRight: 50, alignItems:'center',}}>
                    <Profile/>
                    <Text style={{fontSize: 16, fontFamily: 'NotoSansThai', alignItems: 'center', top: 10, color:'black'}}>{userInfo.realname}</Text>
                </ImageBackground>
                <View style={{flex:1, paddingHorizontal: 40}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{paddingLeft: 60, marginBottom:40}}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => {logout()}}>
                        <Octicons name='sign-out' size={22} color='black'/>
                        <Text style={{marginLeft:15, fontFamily:'NotoSansThai', fontSize:16, color:'black'}}>
                            ออกจากระบบ
                        </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


const Profile = (props) => {
    return(
        <View>
                <Image source={require('../img/profile.png')} style={{height:60, width:60}}/>
        </View>
    )
}

export default CustomDrawer;