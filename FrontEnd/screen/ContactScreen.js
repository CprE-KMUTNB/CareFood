import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity,TextInput, KeyboardAvoidingView} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AuthContext } from "../context/AuthContext";
import Octicons from 'react-native-vector-icons/Octicons';

const ContactScreen = () => {
    const {listmenu} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>ติดต่อ</Text>
            <View style={{marginTop:50}}>
                <View style={styles.boxInput}>
                    <View style={{flexDirection:'row',marginTop:35}}>
                        <Octicons name='note' size={22}></Octicons>
                        <Text style={[styles.text,{marginLeft:10}]}>ธนชาติ โพธิหลักทรัพย์</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Octicons name='mention' size={22}></Octicons>
                        <Text style={[styles.text,{marginLeft:10}]}>s6401012630051@email.kmutnb.ac.th</Text>
                    </View>
                </View>
                <View style={styles.boxInput}>
                    <View style={{flexDirection:'row',marginTop:35}}>
                        <Octicons name='note' size={22}></Octicons>
                        <Text style={[styles.text,{marginLeft:10}]}>ปัญจพล ปิ่นภู</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <Octicons name='mention' size={22}></Octicons>
                        <Text style={[styles.text,{marginLeft:10}]}>s6401012630094@email.kmutnb.ac.th</Text>
                    </View>
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
    textHeader:{
        fontFamily: 'NotoSansThai',
        color:'black',
        fontSize:18,
        textAlign:'center',
    },
    text:{
        fontFamily:'NotoSansThai',
        fontSize:14,
        color: 'black'
    },
    box:{
        flexDirection:'row',
        marginBottom:40,
        marginHorizontal:100,
    },
    boxInput:{
        backgroundColor:'#F0E4E4',
        width:320, 
        height:120,
        borderRadius:20,
        alignSelf:'center',
        marginTop:40,
        paddingLeft:20
    },
})

export default ContactScreen ;