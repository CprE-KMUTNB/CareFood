import React,{useContext, useState}  from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,} from "react-native";
import RadioButton  from "../component/RadioButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({navigation}) => {
    const [username,setUserName] = useState('');
    const [password,setPassWord] = useState('');
    const [realname,setRealName] = useState('');
    const [surname,setSurName] = useState('');
    const [age,setAge] = useState('');
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const {register} = useContext(AuthContext);

    const checkTextInput = () => {
        if (!username.trim()) {
          alert('กรุณากรอกชื่อผู้ใช้');
          return;
        }
        if (!password.trim()) {
          alert('กรุณากรอกรหัสผ่าน');
          return;
        }
        alert('สมัครบัญชีสำเร็จ');
      }

    return(
        <KeyboardAwareScrollView style={{flex:1}}>
            <View style={styles.container}>
                <Image source={require('../img/profile.png')} style={{width:70, height:70, marginTop:45}}/>
                <TouchableOpacity>
                    <Image source={require('../img/edit.png')} style={{width:14, height:14, left:30, marginBottom:35}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ชื่อผู้ใช้</Text>
                    <View style={[styles.textInput,{left:25}]}>
                        <TextInput value={username} onChangeText={text=>setUserName(text)} 
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>รหัสผ่าน</Text>
                    <View style={[styles.textInput,{left:14}]}>
                        <TextInput value={password} onChangeText={text=>setPassWord(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ชื่อจริง</Text>
                    <View style={[styles.textInput,{left:25}]}>
                        <TextInput value={realname} onChangeText={text=>setRealName(text)} 
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>นามสกุล</Text>
                    <View style={[styles.textInput,{left:15}]}>
                        <TextInput value={surname} onChangeText={text=>setSurName(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>เพศ</Text>
                    <View style={{marginLeft:45,  marginVertical: 5}}>
                        <RadioButton/>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>อายุ</Text>
                    <View style={[styles.textInput,{marginLeft:45, width: 50}]}>
                        <TextInput value={age} onChangeText={text=>setAge(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ปี</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ส่วนสูง</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput value={height} onChangeText={text=>setHeight(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ซ.ม.</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>น้ำหนัก</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput value={weight} onChangeText={text=>setWeight(text)}
                        style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ก.ก.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => {checkTextInput();register(username, password,realname,surname, age, height, weight); navigation.goBack()}} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>ยืนยัน</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default RegisterScreen ;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    box:{
        flexDirection:'row',
        marginLeft :60,
        alignItems:'center'
    },
    textHeader:{
        fontFamily: 'NotoSansThai',
        color:'black',
        fontSize:18,
        paddingTop:45
    },
    text:{
        fontFamily: 'NotoSansThai',
        color:'black',
        fontSize:16
    },
    textInput:{
        backgroundColor:'#F0E4E4',
        width:220,
        height:42,
        borderRadius:10,
        marginBottom: 8
    },
    button:{
        alignContent:"center", 
        marginTop:20, 
        backgroundColor:'#CBA2A2',
        width:120,
        height:35,
        justifyContent: 'center',
        borderRadius:30
    }
})


