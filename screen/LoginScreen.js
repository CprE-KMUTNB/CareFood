import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import google from '../svg/google.svg';
import facebook from '../svg/facebook.svg';

const LoginScreen =() =>{
    return(
        <View style={styles.container}>
            <View style={[styles.container,{backgroundColor:'red'}]}>
                <View style={styles.header}>
                    <Text style={[styles.textHeader,{marginBottom:30}]}>ล็อกอิน</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="อีเมล์" 
                        style={{fontFamily:'NotoSansThai', padding:10}}/>
                    </View>
                    <View style={styles.input}>
                        <TextInput placeholder="รหัสผ่าน" 
                        style={{fontFamily:'NotoSansThai', padding:10}}
                        secureTextEntry={true}/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={[styles.text, {textAlign:'right', marginRight:80}]}>ลืมรหัสผ่าน</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={[styles.text, {textAlign:'center'}]}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8}}>
                <TouchableOpacity onPress={() => {}}>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        alignItems:'center',
        marginTop:80,
    },
    input:{
        backgroundColor:'#F0E4E4',
        width:247,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        margin:15
    },
    textHeader:{
        fontFamily:'NotoSansThai',
        fontSize:18,
        color:'black'
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        color:'black',
    },
    button:{
        alignContent:"center", 
        marginTop:20, 
        backgroundColor:'#CBA2A2',
        width:120,
        height:40,
        justifyContent: 'center',
        borderRadius:30
    }
})