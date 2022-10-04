import React from "react";
import { View,Text, ImageBackground,Image } from "react-native";
import { 
    DrawerContentScrollView, 
    DrawerItemList 
} from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1, backgroundColor: '#CBA2A2'}}>
        <DrawerContentScrollView {...props}>
            <ImageBackground style={{padding: 20, marginTop: 60, marginLeft: 30, marginBottom: 20, marginRight: 50, alignItems:'center',}}>
                <Image source={require('../img/profile.png')} style={{height:60, width:60}}/>
                <Text style={{fontSize: 16, fontFamily: 'NotoSansThai', alignItems: 'center', top: 10}}>ชื่อ นามสกุล</Text>
            </ImageBackground>
            <View style={{flex:1, paddingHorizontal: 40}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer;