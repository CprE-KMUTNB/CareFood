import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,} from "react-native";
import RadioButton from "../component/RadioButton";

const EditProfileScreen = ({navigation}) => {
    return(
        <View style={{flex:1, marginTop:50}}>
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
                        <TextInput style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>นามสกุล</Text>
                    <View style={[styles.textInput,{left:15}]}>
                        <TextInput style={{fontFamily:'NotoSansThai', padding:10, fontSize:16}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>เพศ</Text>
                    <View style={[styles.textInput,{marginLeft:45, width: 50}]}>

                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ปี</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>อายุ</Text>
                    <View style={[styles.textInput,{marginLeft:45, width: 50}]}>
                        <TextInput style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ปี</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ส่วนสูง</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ซ.ม.</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>น้ำหนัก</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput style={{fontFamily:'NotoSansThai', padding:10, fontSize:16,}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ก.ก.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>บันทึก</Text>
                </TouchableOpacity>
            </View>
        </View>
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


