import React, {useState, useContext, useEffect} from 'react'
import {View, Text,Image, StyleSheet,ScrollView} from 'react-native'
import { AuthContext } from "../context/AuthContext";

const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const {userInfo} = useContext(AuthContext);
  const {menu} = useContext(AuthContext);
  const {listmenu} = useContext(AuthContext);
  const {foodInfo} = useContext(AuthContext);
  const {showcal} = useContext(AuthContext);

  useEffect(() => {
    fetchData()
}, []);

  const fetchData = async (url) => {
      try{
          setData(foodInfo);
          console.log(foodInfo);
      }
      catch (error) {
          console.error(error);
      }
  }

  useEffect(() => {
    listmenu();
  } , [])

  useEffect(() => {
    showcal(userInfo.name);
  } , [])

  return(
    <View style={[styles.container,{flexDirection: 'column'}]}>
      <View style={[styles.box,{flexDirection: 'column'}]}>
        <Image source={require('../img/logo.png')}
          style={styles.image}/>
        <Text style={styles.textStatus}>คุณได้รับประทานมื้อเช้าแล้ว</Text>
        <Text style={styles.text}>วันนี้ได้รับ</Text>
        <Text style={styles.textKcal}>{foodInfo.cal} kcal</Text>
      </View>
      <View style={styles.scroll}>
      <ScrollView>
      {
        data.map((item, index) => {
          return(
            <View key={index}>
              <View style={{flexDirection:'row', marginHorizontal:10}}>
                <Text style={styles.textScroll} >
                  {item.foodname}
                </Text>
                <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>{item.cal}</Text>
                <Text style={[styles.textScroll,{marginLeft: 10, textAlign:'right'}]}>kcal</Text>
              </View>
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
    alignItems: 'center',
  },
  box:{
    flex : 1.5,  
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 50
  },
  scroll:{
    flex : 1,  
    backgroundColor:'#F0E4E4',
    marginTop: 5,
    marginBottom: 40,
    marginHorizontal: 80,
    padding:20,
    borderRadius : 5,
    width: 260
  },
  textStatus :{
    fontFamily: 'NotoSansThai_Bold',
    fontSize: 20,
    color: '#000000',
    padding: 20
  },
  text :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 16,
    padding: 10
  },
  textKcal :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 20,
  },
  textScroll:{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 16
  },
  image :{
    width: 79,
    height: 82,
    marginTop: 30,
    marginBottom: 20
  }
 }) 

 export default App;
