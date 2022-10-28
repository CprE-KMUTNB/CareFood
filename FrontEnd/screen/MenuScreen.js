import React, { useEffect, useState, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from "react-native";

import Octicons from 'react-native-vector-icons/Octicons';
import { AuthContext } from "../context/AuthContext";

const MenuScreen = ({navigation}) => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const {select} = useContext(AuthContext);
    const {menu} = useContext(AuthContext);


    useEffect(() => {
        fetchData('https://randomuser.me/api/?results=2')
    }, []);

    const fetchData = async (url) => {
        try{
            const response = await fetch(url);
            const json = await response.json()
            setData(menu);
            setFilterData(menu);
            console.log(menu);
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
                <TextInput placeholder='ค้นหาเมนู' placeholderTextColor='#FFFFFF' style={styles.textSearch}
                onChangeText={event=>searchFilterFunction(event)}
                ></TextInput>
                <Octicons name='search' size={19} color={'#FFFFFF'} style={{left: 210, position:'absolute'}}/>
            </View>
            <View style={styles.scroll}>
            <ScrollView>
            {
                filterData.map((item, index) => {
                    return(
                        <View key={index}>
                            <TouchableOpacity onPress={() => {select(item);navigation.navigate('Menu_1')}}>
                                <View style={{flexDirection:'row', marginHorizontal:10}}>
                                    <Text style={styles.textScroll} >
                                        {item.name}
                                    </Text>
                                    <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>{item.kcal}</Text>
                                    <Text style={[styles.textScroll,{marginLeft: 10, textAlign:'right'}]}>kcal</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{flex: 1, height: 2, backgroundColor: '#D9D9D9', marginVertical:10}} />
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
      },
})

export default MenuScreen ;