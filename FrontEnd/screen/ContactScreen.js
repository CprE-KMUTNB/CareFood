import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,TextInput, KeyboardAvoidingView} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../context/AuthContext";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactScreen = () => {
    const {listmenu} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>ติดต่อ</Text>
            <View style={{marginTop:50}}>
                <View style={styles.boxInput}>
                    <Text style={[styles.text,{marginTop:40}]}>ธนชาติ โพธิหลักทรัพย์</Text>
                </View>
                <View style={styles.boxInput}>
                <Text style={[styles.text,{marginTop:40}]}>ปัญจพล ปิ่นภู่</Text>
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
    boxInput:{
        backgroundColor:'#F0E4E4',
        width:270, 
        height:150,
        borderRadius:20,
        alignSelf:'center',
        marginTop:50
    },
})

export default ContactScreen ;