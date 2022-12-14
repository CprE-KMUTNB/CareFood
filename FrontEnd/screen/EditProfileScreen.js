import React,{useContext,useState, useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RadioForm, { RadioButtonLabel } from 'react-native-simple-radio-button';

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
    const {isLoggedIn} = useContext(AuthContext);

    const options = [
        { label: 'ผู้ชาย', value: 'male' },
        { label: 'ผู้หญิง', value: 'female' },
      ]; 
      
    

    return(
        <KeyboardAwareScrollView style={{flex:1, marginTop:50}}>
            <Text style={styles.textHeader}>แก้ไขโปรไฟล์</Text>
            <View style={[styles.box,{marginTop:70}]}>
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
                        <RadioForm
                            radio_props={options}
                            formHorizontal={true}
                            initial={0} 
                            buttonColor={'#D9D9D9'}
                            selectedButtonColor={'#D9D9D9'}
                            labelStyle={{fontFamily:'NotoSansThai', paddingHorizontal:15}}
                            buttonWrapStyle={{marginLeft: 50}}
                            buttonSize={18}
                            onPress={(value) => {
                            setGenDer(value);
                            }} 
                        />
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
                <TouchableOpacity onPress={() => {edit(realname,surname,age,height,weight,gender);navigation.navigate('โปรไฟล์');edit(realname,surname,age,height,weight,gender)}} style={styles.button}>
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
        backgroundColor:'#22E070',
        width:120,
        height:35,
        justifyContent: 'center',
        borderRadius:30
    }
})



