import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,TextInput} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ติดต่อ</Text>
            <View style={[styles.box,{marginTop:60,}]}>
                <Text style={styles.text}>ถึง : support@mail.com</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <View style={styles.boxInput}>
                <TextInput placeholder='ป้อนข้อความของคุณตรงนี้' multiline={true}  style={styles.textInput}>

                </TextInput>
            </View>
            </View>
            <View style={{flexDirection:'column', alignItems:'flex-end', marginRight:80, marginTop:40}}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons name='send' size={35} />
                    </TouchableOpacity>
                    <Text style={styles.text}>ส่งข้อความ</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
      flex : 1,  
      marginTop:50
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        textAlign:'center',
        color: 'black'
    },
    box:{
        flexDirection:'row',
        marginBottom:40,
        marginHorizontal:100,
    },
    button:{
        backgroundColor:'#F0E4E4',
        width:120,
        height:25,
        justifyContent: 'center',
        borderRadius:10
    },
    boxInput:{
        backgroundColor:'#F0E4E4',
        width:270, 
        height:300,
        borderRadius:20,
    },
    textInput:{
        fontFamily:'NotoSansThai',
        fontSize:16,
        padding:20
    }
})

export default ContactScreen ;