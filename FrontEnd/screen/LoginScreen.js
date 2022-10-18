import React,{useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";

import { AuthContext } from "../context/AuthContext";
import Octicons from 'react-native-vector-icons/Octicons';

const LoginScreen = ({navigation}) => {
    const [username,setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const {login} = useContext(AuthContext);
    return(
        <KeyboardAvoidingView style={styles.container}
         behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.textHeader,{marginBottom:30}]}>ล็อกอิน</Text>
                    <View style={styles.input}>
                        <TextInput placeholder="ชื่อผู้ใช้" value={username} onChangeText={text=>setUserName(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}/>
                    </View>
                    <View style={[styles.input,{flexDirection:'row'}]}>
                        <TextInput placeholder="รหัสผ่าน" value={password} onChangeText={text=>setPassword(text)} 
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}
                        secureTextEntry={true}/>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {}}>
                        <Text style={[styles.text, {fontSize: 14, textAlign:'right', marginRight:80}]}>ลืมรหัสผ่าน</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {login(username,password)}} style={styles.button}>
                        <Text style={[styles.text, {textAlign:'center'}]}>เข้าสู่ระบบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.8,alignItems:'center', paddingTop: 50,}}>
                {/* <TouchableOpacity onPress={() => {}} style={[styles.applogin, {borderWidth:2}]}>
                    <Image source={require('../img/google.png')} style={{width:35, height:35}}/>
                    <Text style={[styles.text, {fontFamily:'NotoSansThai_Bold', paddingLeft:10}]}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={[styles.applogin, {backgroundColor:'#1877F2'}]}>
                    <Image source={require('../img/facebook.png')} style={{width:35, height:35}}/>
                    <Text style={[styles.text, {color:'white', fontFamily:'NotoSansThai_Bold', paddingLeft:10}]}>Facebook</Text>
                </TouchableOpacity> */}
                <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 50}}>
                    <View style={{flex:1, height: 1, backgroundColor: 'black'}} />
                        <View >
                            <Text style={[styles.text, {margin:15}]}>หรือ</Text>
                        </View>
                    <View style={{flex:1, height: 1, backgroundColor: 'black'}} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={[styles.textHeader, {marginTop:50}]}>สมัครบัญชี</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        height:45,
        borderRadius:10,
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
        height:35,
        justifyContent: 'center',
        borderRadius:30
    },
    applogin:{
        borderRadius:30, 
        width:250, 
        height:50, 
        marginTop: 20,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft: 10
    }
})