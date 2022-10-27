import React, {useContext, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Modal, Alert} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

import { AuthContext } from "../context/AuthContext";

const Menu_1 = () => {
    const {userInfo} = useContext(AuthContext);
    const {data} = useContext(AuthContext);
    const {cal} = useContext(AuthContext);
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const {kcal} = useContext(AuthContext);
    const {savecal} = useContext(AuthContext);

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'height' : 'position'} 
        style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={{uri : data.image}}/>
            </View> 
            <Text style={[styles.text,{textAlign:'left'}]}>ตัวเลือก</Text>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>{data.ingredient.one}</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} value={first} onChangeText={text=>setFirst(text)} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>{data.ingredient.two}</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} value={second} onChangeText={text=>setSecond(text)} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>{data.ingredient.three}</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} value={third} onChangeText={text=>setThird(text)} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => [setModalVisible(true), cal([data.ingredient.one,data.ingredient.two,data.ingredient.three],[first,second,third])]} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>ตกลง</Text>
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
                            <Text style={styles.text}>บันทึกแคลอรีหรือไม่</Text>
                            <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                                <Text style={[styles.text,{marginLeft:20}]}>{kcal}</Text>
                            </View>
                            <View style={{alignItems:'center', flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => savecal(userInfo.name, data.name, kcal)} style={styles.buttonpress}>
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
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  
      marginTop:50,
      marginHorizontal:80
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        textAlign:'center',
        color: 'black'
    },
    box:{
        flexDirection:'row',
        marginBottom:60,
        marginHorizontal:100,
    },
    textSearch:{
        fontFamily:'NotoSansThai',
        color:'black',
        paddingHorizontal: 10,
        paddingBottom:5
    },
    image:{
        height:165,
        width:245,
        borderRadius:5,
        marginVertical: 30,
    },
    input:{
        flexDirection:'row',
        marginTop:30,
    },
    textInput:{
        backgroundColor:'#F0E4E4',
        width:80,
        height:30,
        borderRadius:10,
        marginLeft:25,
        paddingHorizontal:5
    },
    button:{
        alignContent:"center", 
        marginTop:70, 
        backgroundColor:'#CBA2A2',
        width:120,
        height:35,
        justifyContent: 'center',
        borderRadius:30
    },
    modalView: {
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        paddingVertical: 35,
        alignItems: "center",
        height:200,
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

export default Menu_1 ;