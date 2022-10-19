import React,{useContext,useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";
import RadioButton from "../component/RadioButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../context/AuthContext";

const EditProfileScreen = ({navigation}) => {
    const {userInfo} = useContext(AuthContext);
    const [realname,setRealName] = useState('');
    const [surname,setSurName] = useState('');
    const [gender,setGenDer] = useState('');
    const [age,setAge] = useState('');
    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const {edit} = useContext(AuthContext);
    return(
        <KeyboardAwareScrollView style={{flex:1, marginTop:50}}>
            <Text style={styles.textHeader}>แก้ไขโปรไฟล์</Text>
            <View style={styles.container}>
                <Image source={require('../img/profile.png')} style={{width:70, height:70, marginTop:20}}/>
                <TouchableOpacity>
                    <Image source={require('../img/edit.png')} style={{width:14, height:14, left:30, marginBottom:35}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ชื่อจริง</Text>
                    <View style={[styles.textInput,{left:25}]}>
                        <TextInput placeholder={userInfo.realname} value = {realname} onChangeText={text=>setRealName(text)} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>นามสกุล</Text>
                    <View style={[styles.textInput,{left:15}]}>
                        <TextInput placeholder={userInfo.surname} value = {surname} onChangeText={text=>setSurName(text)} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
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
                        <TextInput placeholder={userInfo.age} value={age} onChangeText={text=>setAge(text)} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}} keyboardType='numeric'></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ปี</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ส่วนสูง</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput placeholder={userInfo.height} value={height} onChangeText={text=>setHeight(text)} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}} keyboardType='numeric'></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ซ.ม.</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>น้ำหนัก</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput placeholder={userInfo.weight} value={weight} onChangeText={text=>setWeight(text)} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}} keyboardType='numeric'></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ก.ก.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => {navigation.navigate('Profile');edit(realname,surname,age,height,weight)}} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>บันทึก</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default EditProfileScreen ;

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
        textAlign:'center',
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



