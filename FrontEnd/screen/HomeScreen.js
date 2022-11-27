import React, {useState, useContext, useEffect} from 'react'
import {View, Text,Image, StyleSheet,ScrollView ,TouchableOpacity, Modal, Alert} from 'react-native'
import { AuthContext } from "../context/AuthContext";


const App = () => {
  const {userInfo} = useContext(AuthContext);
  const {foodInfo} = useContext(AuthContext);
  const {delfood} = useContext(AuthContext);
  const {showcal} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [food, setFood] = useState(AuthContext);
  const [date, setDate] = useState(AuthContext);
  const [time, setTime] = useState(AuthContext);
  const {total} = useContext(AuthContext);
  const {showtotal} = useContext(AuthContext);
  const {showStat} = useContext(AuthContext);

  useEffect(() => {
    console.log(foodInfo.length)
    showcal(userInfo.name);
    showStat(userInfo.name);
    showtotal(userInfo.name);
  } , [total])

  return(
    <View style={[styles.container,{flexDirection: 'column'}]}>
      <View style={[styles.box,{flexDirection: 'column'}]}>
        <Image source={require('../img/logo.png')}
          style={styles.image}/>
        <Text style={styles.textStatus}>สวัสดี! คุณ{userInfo.realname}</Text>
        <Text style={styles.text}>วันนี้ได้รับ</Text>
        <Text style={styles.textKcal}>{total} kcal</Text>
        {/* <TouchableOpacity onPress={() => {showtotal(userInfo.name)}}>
          <Text>d</Text>
        </TouchableOpacity> */}
      </View>
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
                <Text style={styles.text}>ลบข้อมูลอาหารหรือไม่</Text>
                  <View style={{flexDirection:'row', marginVertical: 20, justifyContent:'center'}}>
                    <Text style={[styles.text]}>{food}</Text>
                  </View>
                  <View style={{alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => {delfood(userInfo.name, date, time);setModalVisible(!modalVisible)}} style={styles.buttonpress}>
                      <Text style={[styles.text, {textAlign:'center', marginBottom:0}]}>ตกลง</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={[styles.buttonpress,{marginLeft:30, backgroundColor:'#E01F54'}]}>
                      <Text style={[styles.text, {textAlign:'center'}]}>ยกเลิก</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
        </Modal>
      </View>
      <View style={styles.scroll}>
      <ScrollView>
      {
        foodInfo.map((item, index) => {
          return(
            <View key={index}>
              <TouchableOpacity style={{flexDirection:'row', marginHorizontal:10}} onPress={() => {setModalVisible(true);setFood(item.foodname);setDate(item.date);setTime(item.time)}}>
                <Text style={styles.textScroll} >
                  {item.foodname}
                </Text>
                <Text style={[styles.textScroll,{flex:1, textAlign:'right'}]}>{item.cal}</Text>
                <Text style={[styles.textScroll,{marginLeft: 10, textAlign:'right'}]}>kcal</Text>
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

  },
  textKcal :{
    fontFamily: 'NotoSansThai',
    color: '#000000',
    fontSize: 20,
    paddingTop: 20
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
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    paddingVertical: 35,
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
  buttonpress:{
    alignContent:"center", 
    backgroundColor:'#22E070',
    width:80,
    height:35,
    justifyContent: 'center',
    borderRadius:30,
    marginTop:20
  },
 }) 

 export default App;
