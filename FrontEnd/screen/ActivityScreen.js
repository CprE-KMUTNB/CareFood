import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Modal, Alert, Pressable} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';

const ActivityScreen = ({navigation}) => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        fetchData('https://randomuser.me/api/?results=20')
    }, []);

    const fetchData = async (url) => {
        try{
            const response = await fetch(url);
            const json = await response.json()
            setData(json.results);
            setFilterData(json.results);
            console.log(json.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    const searchFilterFunction = (text) => {
        if (text){
            const newData = data.filter(item => {
                const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilterData(newData);
        }else{
            setFilterData(data);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>เมนูอาหาร</Text>
            <View style={styles.search}>
                <TextInput placeholder='ค้นหากิจกรรม' placeholderTextColor='#FFFFFF' style={styles.textSearch}
                onChangeText={event=>searchFilterFunction(event)}></TextInput>
                <Octicons name='search' size={19} color={'#FFFFFF'} style={{left: 210, position:'absolute'}}/>
            </View>
            <View style={styles.scroll}>
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
                    <Text style={styles.text}>ป้อนระยะเวลาที่ทำกิจกรรม</Text>
                    <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                        <TextInput style={styles.textInput} keyboardType='numeric'></TextInput>
                        <Text style={[styles.text,{marginLeft:20}]}>นาที</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.button}>
                            <Text style={[styles.text, {textAlign:'center'}]}>ตกลง</Text>
                </TouchableOpacity>
            </View>
                </View>
                </View>
            </Modal>
            </View>
            <ScrollView>
            {
                filterData.map((item, index) => {
                    return(
                        <View key={index}>
                            <TouchableOpacity style={styles.actBox} onPress={() => setModalVisible(true)}>
                                <View style={styles.activity}>
                                    <Image source={{uri : item.picture.large}} style={styles.img}/>
                                    <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]} >
                                        {item.name.first}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
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
    },
    modalView: {
        margin: 20,
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        padding: 35,
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
      button:{
        alignContent:"center", 
        backgroundColor:'#22E070',
        width:120,
        height:35,
        justifyContent: 'center',
        borderRadius:30
    },
    textInput:{
        backgroundColor:'#F0E4E4',
        width:50,
        height:35,
        borderRadius:10,
        
    },
        
})

export default ActivityScreen ;