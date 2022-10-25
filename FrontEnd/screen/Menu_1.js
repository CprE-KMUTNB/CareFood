import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

import { AuthContext } from "../context/AuthContext";

const Menu_1 = () => {
    const {data} = useContext(AuthContext);

    return(
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? 'height' : 'position'} 
        style={styles.container}>
            <Text style={styles.text}>{data.name}</Text>
            {/* <View style={{alignItems:'center'}}>
                <Image style={styles.image} source={{uri : data.picture.large}}/>
            </View> */}
            <Text style={[styles.text,{textAlign:'left'}]}>ตัวเลือก</Text>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>ข้าว</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>หมู</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={styles.input}>
                <Text style={[styles.text,{textAlign:'left'}]}>น้ำตาล</Text>
                <View style={styles.textInput}>
                    <TextInput style={{fontFamily:'NotoSansThai', padding:2, fontSize:16,}} keyboardType='numeric'></TextInput>
                </View>
                <Text style={[styles.text,{marginLeft:20}]}>g</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>ตกลง</Text>
                </TouchableOpacity>
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
    }
})

export default Menu_1 ;