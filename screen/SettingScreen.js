import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

import { AuthContext } from '../context/AuthContext';

const SettingScreen = () => {
    const {logout} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>ตั้งค่า</Text>
            <View style={[styles.box,{marginTop:60,}]}>
                <Text style={styles.text}>ภาษา</Text>
                <TouchableOpacity onPress={() => {}} style={[styles.button,{marginLeft:75}]}>
                    <Text style={styles.text}>ไทย</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>แจ้งเตือน</Text>
                <TouchableOpacity onPress={() => {}} style={[styles.button,{marginLeft:50}]}>
                    <Text style={styles.text}>เปิด</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>ออกจากระบบ</Text>
                <TouchableOpacity onPress={() => {logout()}} style={[styles.button,{marginLeft:25}]}>
                    <Text style={styles.text}>ตกลง</Text>
                </TouchableOpacity>
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
        marginBottom:60,
        marginHorizontal:100,
    },
    button:{
        backgroundColor:'#F0E4E4',
        width:120,
        height:25,
        justifyContent: 'center',
        borderRadius:10
    }
})

export default SettingScreen ;