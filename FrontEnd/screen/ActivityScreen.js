import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

const ActivityScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>เมนูอาหาร</Text>
            <View style={styles.search}>
                <TextInput placeholder='ค้นหากิจกรรม' placeholderTextColor='#FFFFFF' style={styles.textSearch}></TextInput>
                <Octicons name='search' size={19} color={'#FFFFFF'} style={{left: 210, position:'absolute'}}/>
            </View>
            <View style={styles.scroll}>
            <ScrollView>
                <TouchableOpacity style={styles.actBox} onPress={() => navigation.navigate('Activity_1')}>
                    <View style={styles.activity}>
                        <Image source={require('../img/activity/run.png')} style={styles.img}/>
                        <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>วิ่ง</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actBox} onPress={() => {}}>
                    <View style={styles.activity}>
                        <Image source={require('../img/activity/swim.png')} style={styles.img}/>
                        <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>ว่ายน้ำ</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actBox} onPress={() => {}}>
                    <View style={styles.activity}>
                        <Image source={require('../img/activity/bicycle.png')} style={styles.img}/>
                        <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>ปั่นจักรยาน</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actBox} onPress={() => {}}>
                    <View style={styles.activity}>
                        <Image source={require('../img/activity/walk.png')} style={styles.img}/>
                        <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>เดิน</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
      flex : 1,  
      marginTop:50,
      alignItems:'center'
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
    search:{
        backgroundColor:'#CBBFBF',
        marginTop:40,
        flexDirection:'row',
        alignItems:'center',
        width:240,
        borderRadius:5,
        height:40,
        marginBottom:20,
        
    },
    textSearch:{
        fontFamily:'NotoSansThai',
        color:'black',
        paddingHorizontal: 10,
        paddingBottom:5
    },
    scroll:{
        flex : 1,  
        backgroundColor:'#F0E4E4',
        marginTop: 5,
        marginBottom: 40,
        marginHorizontal: 80,
        paddingVertical:20,
        borderRadius : 5,
        width: 275,
        paddingHorizontal: 25
    },
    textScroll:{
        fontFamily: 'NotoSansThai',
        color: '#000000',
        fontSize: 16,
        marginTop:50
      },
    actBox:{
        backgroundColor:'#D9D9D9',
        width:225,
        height:100,
        borderRadius:10,
        marginBottom: 20
    },
    activity:{
        flexDirection:'row', 
        marginHorizontal:20, 
        marginTop:10,
    },
    img:{
        width: 75,
        height: 75,
    }
})

export default ActivityScreen ;