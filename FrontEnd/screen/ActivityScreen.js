import React, {useEffect, useState, useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Modal, Alert} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Octicons from 'react-native-vector-icons/Octicons';
import { AuthContext } from "../context/AuthContext";

const ActivityScreen = ({navigation}) => {
    const {userInfo} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const {activity} = useContext(AuthContext);
    const [mets, setMets] = useState();
    const [nameact,setNameact] = useState('')
    const {calpow} = useContext(AuthContext);
    const [minute,setMinute] = useState('')
    const {power} = useContext(AuthContext);
    const {savepow} = useContext(AuthContext);

    useEffect(() => {
        fetchData('https://randomuser.me/api/?results=20')
    }, []);

    const fetchData = async (url) => {
        try{
            const response = await fetch(url);
            const json = await response.json()
            setData(activity);
            setFilterData(activity);
            console.log(activity);
        }
        catch (error) {
            console.error(error);
        }
    }

    const searchFilterFunction = (text) => {
        if (text){
            const newData = data.filter(item => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
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
                        <RNPickerSelect
                            placeholder={{
                                label: 'เลือกระดับความเข้มข้น',
                                value: null,
                            }}
                            onValueChange={(value) => setMets(value)}
                            items={[
                                { label: 'น้อยกว่า 5', value: 'lower than 5' },
                                { label: '5', value: '5' },
                                { label: '6', value: '6' },
                            ]}
                        />
                        <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                            <TextInput style={styles.textInput} keyboardType='numeric' value={minute} onChangeText={text=>setMinute(text)}></TextInput>
                            <Text style={[styles.text,{marginLeft:20}]}>นาที</Text>
                        </View>
                        <View style={{alignItems:'center', flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible);calpow(nameact, mets, minute, userInfo.weight);setAlertVisible(true)}} style={styles.buttonpress}>
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
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={alertVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setAlertVisible(!alertVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={[styles.modalView,{height:220}]}>
                        <Text style={styles.text}>บันทึกข้อมูลหรือไม่</Text>
                        <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                            <Text style={[styles.text,{marginLeft:20}]}>{power}</Text>
                            <Text style={[styles.text,{marginLeft:20}]}>kcal</Text>
                        </View>
                        <View style={{alignItems:'center', flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => {setAlertVisible(!alertVisible);savepow(userInfo.name, nameact, power)}} style={styles.buttonpress}>
                                <Text style={[styles.text, {textAlign:'center'}]}>ตกลง</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setAlertVisible(!alertVisible)} style={[styles.buttonpress,{marginLeft:30, backgroundColor:'#E01F54'}]}>
                                <Text style={[styles.text, {textAlign:'center'}]}>ยกเลิก</Text>
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
                            <TouchableOpacity style={styles.actBox} onPress={() => {setModalVisible(true);setNameact(item.name)}}>
                                <View style={styles.activity}>
                                    <Image source={{uri : item.image}} style={styles.img}/>
                                    <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]} >
                                        {item.name}
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
        height:280,
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
    textInput:{
        backgroundColor:'#F0E4E4',
        width:50,
        height:35,
        borderRadius:10,
        
    },
        
})

export default ActivityScreen ;