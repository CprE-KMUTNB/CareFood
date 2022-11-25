import React, {useContext, useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, Alert} from "react-native";
import RadioButton from "../component/RadioButton";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import { AuthContext } from "../context/AuthContext";

const ProfileScreen = ({navigation}) => {
    const {userInfo} = useContext(AuthContext);
    const {deletes} = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={{flex:1, marginTop:50}}>
            <Text style={styles.textHeader}>โปรไฟล์</Text>
            <View style={[styles.box,{marginTop:70}]}>
                    <Text style={styles.text}>ชื่อจริง</Text>
                    <View style={[styles.textInput,{left:25}]}>
                        <TextInput value={userInfo.realname} editable={false} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16, color:'black'}}></TextInput>
                    </View>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>นามสกุล</Text>
                    <View style={[styles.textInput,{left:15}]}>
                        <TextInput value={userInfo.surname}editable={false} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16, color:'black'}}></TextInput>
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
                        <TextInput value={userInfo.age} editable={false} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16, color:'black'}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ปี</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>ส่วนสูง</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput value={userInfo.height} editable={false} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16, color:'black'}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ซ.ม.</Text>
            </View>
            <View style={styles.box}>
                    <Text style={styles.text}>น้ำหนัก</Text>
                    <View style={[styles.textInput,{marginLeft:25, width: 50}]}>
                        <TextInput value={userInfo.weight} editable={false} style={{fontFamily:'NotoSansThai', padding:10, fontSize:16, color:'black'}}></TextInput>
                    </View>
                    <Text style={[styles.text, {marginLeft: 20}]}>ก.ก.</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>แก้ไข</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.icon}>
                <Ionicons name='trash' size={26} color='red'/>
            </TouchableOpacity>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Octicons name='alert' size={26} color='red' style={{marginBottom:10}}/>
                        <Text style={styles.textAlert}>ลบบัญชีหรือไม่</Text>
                        <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                            <Text style={[styles.textAlert,{marginLeft:20}]}>หากลบแล้วจะไม่สามารถล็อคอินได้อีก</Text>
                        </View>
                        <View style={{alignItems:'center', flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => deletes()} style={styles.buttonpress}>
                                        <Text style={[styles.text, {textAlign:'center'}]}>ตกลง</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.buttonpress,{marginLeft:30, backgroundColor:'#E01F54'}]}>
                                        <Text style={[styles.text, {textAlign:'center'}]}>ยกเลิก</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ProfileScreen ;

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
    textAlert:{
        fontFamily: 'NotoSansThai_Bold',
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
        marginTop:40, 
        backgroundColor:'#CBA2A2',
        width:120,
        height:35,
        justifyContent: 'center',
        borderRadius:30
    },
    icon:{
        alignSelf:'flex-end',
        marginRight:30,
        marginTop:30
    },
    modalView: {
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        paddingVertical: 35,
        alignItems: "center",
        height:240,
        width:300,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      buttonpress:{
        alignContent:"center", 
        backgroundColor:'#22E070',
        width:80,
        height:35,
        justifyContent: 'center',
        borderRadius:30,
        marginTop:20
    },
})



