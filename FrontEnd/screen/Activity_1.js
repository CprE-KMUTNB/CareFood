import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';


const Activity_1 = () => {
    return(
        <View style={styles.container}>
            <Text style={[styles.text,{fontSize:25}]}>วิ่ง</Text>
            <Text style={[styles.text,{marginTop:20, fontSize:40}]}>จับเวลา</Text>
            <Text style={[styles.text,{marginTop:20, fontSize:40}]}>00.00 ชม.</Text>
            
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => {}} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center', fontSize:20}]}>เริ่ม</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  
      marginTop:50,
      marginHorizontal:80,
      justifyContent:'center'
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
        width:100,
        height:100,
        justifyContent: 'center',
        borderRadius:100
    }
})

export default Activity_1 ;